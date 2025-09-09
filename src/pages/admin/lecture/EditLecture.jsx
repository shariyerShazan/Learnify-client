import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useGetSingleLecture } from '@/hooks/useGetSingleLecture';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ArrowBigLeftIcon, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LECTURE_API_END_POINT } from '@/utils/apiEndPoint';
import EditLectureSkeleton from '@/components/skeletons/EditLectureSkeleton';

const EditLecture = () => {
  const { courseId, lectureId } = useParams();
  const navigate = useNavigate();
  const { refetchSingleLecture } = useGetSingleLecture(lectureId);

  useEffect(()=>{
    refetchSingleLecture()
  },[])

  const { singleLecture } = useSelector(state => state.course);

  const [lectureData, setLectureData] = useState({
    lectureTitle: "",
    video: "",
    freeVideo: false
  });

  const [btnLoading, setBtnLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // lecture data fill
  useEffect(() => {
    if(singleLecture){
      setLectureData({
        lectureTitle: singleLecture.lectureTitle || "",
        video: singleLecture.videoUrl || "",
        freeVideo: singleLecture.freeVideo || false
      });
    }
  }, [singleLecture]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLectureData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked) => {
    setLectureData(prev => ({ ...prev, freeVideo: checked === true }));
  };  

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if(file){
      setLectureData(prev => ({ ...prev, video: file }));
    }
  };

  const handleUpdateLecture = async () => {
    if(!lectureData.lectureTitle.trim()) return;
    setBtnLoading(true);

    try {
      const formData = new FormData();
      formData.append("lectureTitle", lectureData.lectureTitle);
      formData.append("freeVideo", lectureData.freeVideo);
      if(lectureData.video) formData.append("video", lectureData.video);

      const res = await axios.patch(`${LECTURE_API_END_POINT}/edit-lecture/${lectureId}`, formData, {
        withCredentials: true,
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        }
      });

      if(res.data.success){
        toast.success(res.data.message);
        setUploadProgress(0);
        refetchSingleLecture();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div>
      <div className='flex gap-4 mb-4'>
        <Button onClick={()=>navigate(`/dashboard/courses/${courseId}/lectures`)} variant={"secondary"}>
          <ArrowBigLeftIcon />
        </Button>
        <p className='font-bold text-xl'>Update Your Lecture</p>
      </div>

      {loading ? (
        <EditLectureSkeleton />
      ) : (
        <Card>
          <CardHeader className="flex justify-between items-center">
            <div>
              <h3 className='text-lg font-bold'>Edit Lecture</h3>
              <p>Make changes and click save when done.</p>
            </div>
            <Button variant="destructive">
              Remove lecture
            </Button>
          </CardHeader>

          <CardContent>
            {/* Nested Card */}
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <Label className="m-1">Lecture Title:</Label>
                  <Input 
                    type="text"
                    name="lectureTitle"
                    value={lectureData.lectureTitle}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label className="m-1">Lecture Video:</Label>
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoChange}
                  />
                  {uploadProgress > 0 && (
                    <p className="text-sm text-blue-500 mt-1">Uploading: {uploadProgress}%</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={lectureData.freeVideo}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <p>Is this video free?</p>
                </div>
              </CardContent>

              <CardFooter>
                {btnLoading ? (
                  <Button variant="secondary">
                    <Loader2 className="animate-spin mr-2" /> Please wait...
                  </Button>
                ) : (
                  <Button onClick={handleUpdateLecture}>
                    Update lecture
                  </Button>
                )}
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EditLecture;
