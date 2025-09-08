import React, { useState, useRef } from "react";
import TextEditor from '@/components/shared/admin/TextEditor'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Loader2, Plus } from "lucide-react"
import { useNavigate } from "react-router";

const EditCourse = () => {
    const navigate = useNavigate()
    const [btnLoading , setBtnLoading] = useState(false)
  const [input, setInput] = useState({
    courseTitle: "",
    subtitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: ""
  });

  const [previewThm , setPreviewThm] = useState(input.courseThumbnail)
  const avatarInputRef = useRef(null);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSelectChange = (name) => (value) => {
    setInput({ ...input, [name]: value });
  };

  const handleAvatarClick = () => {
    avatarInputRef.current.click();
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewThm( reader.result );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setBtnLoading(true)
    console.log("Save course data: ", input);
// 
  };

  const isPublished = true;

  return (
    <div className="space-y-6">
      <div className='flex justify-between my-4'>
        <h4 className='text-2xl font-bold'>Add details information regarding course</h4>
        <Button className={"cursor-pointer"}>
          Go to Lectures page
        </Button>
      </div>

      <Card>
        <CardHeader className="flex justify-between items-start">
          <div>
            <h3 className='text-xl font-bold'>Basic course information</h3>
            <p className='text-sm font-semibold'>Make changes to your course here and click save when you are done.</p>
          </div>
          <div className='flex gap-3'>
            <Button className={"cursor-pointer hover:scale-101"} variant="secondary">
              {isPublished ? "UnPublished" : "Published"}
            </Button>
            <Button className={"cursor-pointer hover:scale-101"}>
              Remove Course
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <div>
            <Label>Course Title:</Label>
            <Input
              type="text"
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
              placeholder="E.g Full stack developer"
            />
          </div>

          <div>
            <Label>Subtitle:</Label>
            <Input
              type="text"
              name="subtitle"
              value={input.subtitle}
              onChange={changeEventHandler}
              placeholder="E.g Become Fullstack in 6 months"
            />
          </div>

          <div>
            <Label>Description:</Label>
            <TextEditor input={input} setInput={setInput} />
          </div>

          <div className="flex gap-6">
            <div>
              <Label>Category:</Label>
              <Select value={input.category} onValueChange={handleSelectChange("category")}>
                <SelectTrigger className="cursor-pointer w-60">
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

            <div>
              <Label>Course Level:</Label>
              <Select value={input.courseLevel} onValueChange={handleSelectChange("courseLevel")}>
                <SelectTrigger className="cursor-pointer w-60">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Advance">Advance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Price (USD):</Label>
              <Input
                type="number"
                name="coursePrice"
                value={input.coursePrice}
                onChange={changeEventHandler}
                placeholder="E.g 200$"
                className="w-36"
                min={0}
              />
            </div>
          </div>

          <div>
            <Label>Course Thumbnail:</Label>
            <div
              onClick={handleAvatarClick}
              className="relative w-96 h-42 mt-1 rounded-md cursor-pointer border flex items-center justify-center overflow-hidden bg-gray-100 group"
            >
              <Avatar className="w-full h-full rounded-md group-hover:opacity-50">
                  <AvatarImage src={  previewThm || input.courseThumbnail } alt="Thumbnail" className="object-cover w-full h-full" />
                  <AvatarFallback className="text-gray-500"></AvatarFallback>
              </Avatar>
              <Plus size={24} className="absolute text-gray-600 hidden group-hover:block " />
            </div>
            <Input
              type="file"
              ref={avatarInputRef}
              onChange={handleThumbnailChange}
              className="hidden"
            />
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Button variant={"secondary"} className={"hover:scale-101 cursor-pointer"} onClick={()=>navigate("/dashboard/courses")} >
                Cancel
            </Button>
            {btnLoading ?  
            <Button disabled={true}><Loader2 className="animate-spin cursor-pointer"/>Please wait...</Button> :
             <Button className={"cursor-pointer hover:scale-101"} onClick={handleSave}>Save</Button>
              }
           
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditCourse;
