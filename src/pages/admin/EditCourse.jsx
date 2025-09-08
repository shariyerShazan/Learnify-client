import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

const EditCourse = () => {
    const isPublished = true
  return (
    <div>
          <div className='flex justify-between my-4'>
               <h4 className='text-2xl font-bold'>Add details information regarding course</h4>
               <Button className={""} >
                  Go to  Lectures page
               </Button>
          </div>
        <Card >
             <CardHeader className={"flex justify-between"} >
                <div>
                    <h3 className='text-xl font-bold'>Basic course information</h3>
                    <p className='text-sm font-semibold'>Make changes to your course here and click save when you are done.</p>
                </div>
                <div className='flex gap-3'>
                    <Button className={"hover:scale-101 cursor-pointer"} variant={"secondary"}>
                         {isPublished ? "UnPublished" : "Published"}
                    </Button>
                    <Button className={"hover:scale-101 cursor-pointer"}>
                        Remove Course
                    </Button>
                </div>
             </CardHeader>
        </Card>
    </div>
  )
}

export default EditCourse
