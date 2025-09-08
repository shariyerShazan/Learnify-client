import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { COURSE_API_END_POINT } from "@/utils/apiEndPoint";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const DaAddCourse = ({ open, setOpen  , refetchCourses}) => {
    const [btnLoading , setBtnLoading] = useState(false)
  const [formData, setFormData] = useState({
    courseTitle: "",
    category: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (value) => {
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = async (e) => {
    setBtnLoading(true)
    e.preventDefault();
    console.log(formData)
    try {
      const res = await axios.post(
        `${COURSE_API_END_POINT}/create-course`,
        formData,
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setOpen(false);
        setBtnLoading(false)
        refetchCourses()
      }
    } catch (error) {
      console.log(error);
      setBtnLoading(false)
      toast.error(error.response?.data?.message);
    }finally{
        setBtnLoading(false)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="courseTitle">Course Title</Label>
            <Input
              id="courseTitle"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label>Category</Label>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger className="cursor-pointer">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                        <SelectItem value="Data Science & AI/ML">Data Science & AI/ML</SelectItem>
                        <SelectItem value="Cloud & DevOps">Cloud & DevOps</SelectItem>
                        <SelectItem value="Cybersecurity & Networking">Cybersecurity & Networking</SelectItem>
                        <SelectItem value="Game Development & AR/VR">Game Development & AR/VR</SelectItem>
                        <SelectItem value="Software Engineering & Programming">Software Engineering & Programming</SelectItem>
                        <SelectItem value="Digital Marketing & SEO">Digital Marketing & SEO</SelectItem>
                        <SelectItem value="UI/UX & Design">UI/UX & Design</SelectItem>
                        <SelectItem value="Business & Entrepreneurship">Business & Entrepreneurship</SelectItem>
                        <SelectItem value="Finance & Accounting">Finance & Accounting</SelectItem>
                        <SelectItem value="Health & Fitness">Health & Fitness</SelectItem>
                        <SelectItem value="Photography & Videography">Photography & Videography</SelectItem>
                        <SelectItem value="Languages & Communication">Languages & Communication</SelectItem>
                        <SelectItem value="Personal Development">Personal Development</SelectItem>
                    </SelectContent>
    
            </Select>
          </div>

          <DialogFooter>
            {
                btnLoading ?   <Button disabled={true}><Loader2 className=" animate-spin"/>Please wait...</Button> :
                <Button type="submit" className="cursor-pointer">Add Course</Button>
            }
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DaAddCourse;
