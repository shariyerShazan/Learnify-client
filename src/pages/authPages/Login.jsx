import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[70vh]'>
          <div >
            <Tabs defaultValue="Login" className="w-[400px]">

                {/* tabs trigger here */}
            <TabsList className={"w-full"}>
                <TabsTrigger className={"cursor-pointer"} value="Login">Login</TabsTrigger>
                <TabsTrigger className={"cursor-pointer"} value="Register">Register</TabsTrigger>
            </TabsList>

            {/* login card here */}
            <TabsContent value="Login">
                       <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                            <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                        </Card>
            </TabsContent>

            {/* register card here */}
            <TabsContent value="Register">
                                            <Card>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                    <CardAction>Card Action</CardAction>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                                </Card>
            </TabsContent>
            </Tabs>
       </div>
    </div>
  )
}

export default Login
