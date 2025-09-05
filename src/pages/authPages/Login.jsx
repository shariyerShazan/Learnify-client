import React, { useState } from 'react'
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
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Login = () => {
    const [defaltLogin , setDefaultLogin] = useState("Login")
    const [loginInput , setLoginInput] = useState({email: "" , password: ""})
    const [registerInput , setRegisterInput] = useState({fullName :"", email: "" , password: ""})

  return (
    <div className='flex justify-center items-center mt-22'>
            <Tabs defaultValue={`${defaltLogin}`} className="w-[400px]">

                {/* tabs trigger here */}
            <TabsList className={"w-full"}>
                <TabsTrigger className={"cursor-pointer"} value="Login">Login</TabsTrigger>
                <TabsTrigger className={"cursor-pointer"} value="Register">Register</TabsTrigger>
            </TabsList>

            {/* login card here */}
            <TabsContent value="Login">
                       <Card>
                        <CardHeader>
                            <CardTitle>Login to Learnify</CardTitle>
                            <CardDescription>Login you password here...</CardDescription>
                            <CardAction>
                                       <Button >
                                         Home
                                        </Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent className={"flex flex-col gap-3"}>
                                   <div className='flex flex-col gap-2'>
                                        <Label >Email: </Label>
                                        <Input  />
                                      </div>
                                      <div className='flex flex-col gap-2'>
                                        <Label >Password: </Label>
                                        <Input  />
                                      </div>
                        </CardContent>
                        <CardFooter>
                                     <Button >
                                         Login
                                        </Button>
                        </CardFooter>
                        </Card>
            </TabsContent>

            {/* register card here */}
            <TabsContent value="Register">
                                            <Card>
                                <CardHeader>
                                    <CardTitle>Register in Learnify</CardTitle>
                                    <CardDescription>Create a new account here...</CardDescription>
                                    <CardAction>
                                        <Button >
                                              Home
                                        </Button>
                                    </CardAction>
                                </CardHeader>
                                <CardContent className={"flex flex-col gap-3"}>
                                    <div className='flex flex-col gap-2'>
                                        <Label >Full Name: </Label>
                                        <Input  />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Label >Email: </Label>
                                        <Input  />
                                      </div>
                                      <div  className='flex flex-col gap-2'>
                                        <Label >Password: </Label>
                                        <Input  />
                                      </div>
                                </CardContent>
                                <CardFooter>
                                        <Button >
                                         Register
                                        </Button>
                                </CardFooter>
                                </Card>
            </TabsContent>
            </Tabs>
    </div>
  )
}

export default Login
