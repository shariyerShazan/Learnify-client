import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { PlayCircle, Lock, ChevronRight } from "lucide-react";
import useGetSinglePurchesd from "@/hooks/useGetSinglePurchesd";
import CourseProgressSkeleton from "@/components/skeletons/CourseProgressSkeleton";


const CourseProgress = () => {
  const { courseId } = useParams();
  const { refetchSinglePurchased, loading, error } = useGetSinglePurchesd(courseId);
  const { singlePurchased } = useSelector((state) => state.course);

  const [currentLecture, setCurrentLecture] = useState(null);
  const [unlockedLectures, setUnlockedLectures] = useState([]);

  useEffect(() => {
    refetchSinglePurchased();
  }, [refetchSinglePurchased]);

  useEffect(() => {
    if (singlePurchased?.lectures?.length > 0) {
      setCurrentLecture(singlePurchased.lectures[0]);
      setUnlockedLectures([singlePurchased.lectures[0]._id]);
    }
  }, [singlePurchased]);

  const handleLectureClick = (lecture) => {
    if (!unlockedLectures.includes(lecture._id)) return;
    setCurrentLecture(lecture);
  };

  const handleVideoEnded = () => {
    const currentIndex = singlePurchased.lectures.findIndex(
      (lec) => lec._id === currentLecture._id
    );
    const nextLecture = singlePurchased.lectures[currentIndex + 1];
    if (nextLecture) {
      setUnlockedLectures((prev) => [...prev, nextLecture._id]);
    }
  };

  const handleNextLecture = () => {
    const currentIndex = singlePurchased.lectures.findIndex(
      (lec) => lec._id === currentLecture._id
    );
    const nextLecture = singlePurchased.lectures[currentIndex + 1];
    if (nextLecture && unlockedLectures.includes(nextLecture._id)) {
      setCurrentLecture(nextLecture);
    }
  };

  if (loading) return <CourseProgressSkeleton />;
  if (error) return (
    <div className="text-center mt-10 text-red-500 font-medium">
      {error}
    </div>
  );
  if (!singlePurchased) return (
    <p className="text-center mt-10">
      No course found
    </p>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left - Video Player */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {currentLecture?.lectureTitle || "Select a Lecture"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentLecture ? (
            <div>
              <video
                src={currentLecture.videoUrl}
                controls
                autoPlay
                muted
                className="w-full h-[450px] rounded-lg border"
                onEnded={handleVideoEnded}
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleNextLecture}
                  disabled={
                    singlePurchased.lectures.findIndex(
                      (lec) => lec._id === currentLecture._id
                    ) === singlePurchased.lectures.length - 1 ||
                    !unlockedLectures.includes(
                      singlePurchased.lectures[
                        singlePurchased.lectures.findIndex(
                          (lec) => lec._id === currentLecture._id
                        ) + 1
                      ]?._id
                    )
                  }
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
                    singlePurchased.lectures.findIndex(
                      (lec) => lec._id === currentLecture._id
                    ) === singlePurchased.lectures.length - 1 ||
                    !unlockedLectures.includes(
                      singlePurchased.lectures[
                        singlePurchased.lectures.findIndex(
                          (lec) => lec._id === currentLecture._id
                        ) + 1
                      ]?._id
                    )
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Next Lecture <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[450px] border rounded-lg text-gray-500">
              Select a lecture to start
            </div>
          )}
        </CardContent>
      </Card>

      {/* Right - Lecture List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Lectures ({singlePurchased.lectures.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[450px] pr-2">
            {singlePurchased.lectures.map((lecture, index) => {
              const isUnlocked = unlockedLectures.includes(lecture._id);
              return (
                <div key={lecture._id}>
                  <div
                    onClick={() => handleLectureClick(lecture)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                      currentLecture?._id === lecture._id
                        ? "bg-gray-200"
                        : isUnlocked
                        ? "hover:bg-gray-100"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                  >
                    {isUnlocked ? (
                      <PlayCircle className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-400" />
                    )}
                    <span
                      className={`font-medium ${
                        isUnlocked ? "text-gray-800" : "text-gray-400"
                      }`}
                    >
                      {index + 1}. {lecture.lectureTitle}
                    </span>
                  </div>
                  <Separator className="my-2" />
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseProgress;
