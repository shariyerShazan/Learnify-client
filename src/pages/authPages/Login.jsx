import React, {  useState } from 'react'
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
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/apiEndPoint'
import { toast } from 'react-toastify'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router'
import { setUser } from '@/reduxStore/userSlice'
import { useDispatch } from 'react-redux'


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [defaltLogin , setDefaultLogin] = useState("Login")
    const [btnLoading , setBtnLoading] = useState(false)
    const [loginInput , setLoginInput] = useState({email: "" , password: ""})
    const [registerInput , setRegisterInput] = useState({fullName :"", email: "" , password: ""})


    const changeInputHandler = (e , type)=>{
        const {name , value} = e.target 
        if(type === "Login"){
            setLoginInput({...loginInput , [name]: value})
        }
        if(type === "Register"){
            setRegisterInput({...registerInput , [name]: value})
        }
    }
    const handleAction = async  (type)=>{
      setBtnLoading(true)
       if(type === "Login"){
          try {
            const res = await axios.post(`${USER_API_END_POINT}/login` , loginInput , {withCredentials: true})
            if(res.data.success){
              toast.success(res.data.message)
              setBtnLoading(false)
              navigate("/") 
              dispatch(setUser(res.data.user))
            }
          } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
            setBtnLoading(false)
          }
       }
       if(type === "Register"){
        try {
          const res = await axios.post(`${USER_API_END_POINT}/register` , registerInput , {withCredentials: true})
          if(res.data.success){
            toast.success(res.data.message)
            setDefaultLogin("Login") 
            setBtnLoading(false)
          }
        } catch (error) {
          console.log(error)
          toast.error(error.response.data.message)
          setBtnLoading(false)
        }
       }
    }
    const fillInstructorCredential = () => {
      setLoginInput({
        email: "shazan@gmail.com",
        password: "shazan1"
      });
    };
    
  return (
    <div className='flex justify-center items-center mt-22'>
            <Tabs value={defaltLogin}  onValueChange={(val) => setDefaultLogin(val)}  className={"w-[400px]"}>

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
                                  <Button className={"cursor-pointer"} onClick={fillInstructorCredential}>
                                    instructor Login
                                  </Button>
                                </CardAction>
                        </CardHeader>
                        <CardContent className={"flex flex-col gap-3"}>
                                   <div className='flex flex-col gap-2'>
                                        <Label >Email: </Label>
                                        <Input type={"email"} name={"email"} value={loginInput.email} onChange={(e)=>changeInputHandler(e , "Login")} placeholder={"E,g shariyer@gmail.com"} />
                                      </div>
                                      <div className='flex flex-col gap-2'>
                                        <Label >Password: </Label>
                                        <Input type={"password"} name={"password"} value={loginInput.password} onChange={(e)=>changeInputHandler(e , "Login")} placeholder={"E,g  abc123"} />
                                      </div>
                        </CardContent>
                        <CardFooter>
                                    {
                                      btnLoading? <Button disabled={btnLoading}>
                                          <Loader2 className=' animate-spin' />Please wait...
                                      </Button>: 
                                       <Button className={"cursor-pointer"}  onClick={()=>handleAction("Login")}>
                                       Login
                                      </Button>
                                    }
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
                                        <Button className={"cursor-pointer"} onClick={()=> navigate('/')}>
                                              Home
                                        </Button>
                                    </CardAction>
                                </CardHeader>
                                <CardContent className={"flex flex-col gap-3"}>
                                    <div className='flex flex-col gap-2'>
                                        <Label >Full Name: </Label>
                                        <Input type={"text"} name={"fullName"} value={registerInput.fullName} onChange={(e)=>changeInputHandler(e , "Register")} placeholder={"E,g  Shariyer Shazan"} />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Label >Email: </Label>
                                        <Input type={"email"} name={"email"} value={registerInput.email} onChange={(e)=>changeInputHandler(e , "Register")} placeholder={"E,g shariyer@gmail.com"} />
                                      </div>
                                      <div  className='flex flex-col gap-2'>
                                        <Label >Password: </Label>
                                        <Input type={"password"} name={"password"} value={registerInput.password} onChange={(e)=>changeInputHandler(e , "Register")} placeholder={"E,g  abc123"} />
                                      </div>
                                </CardContent>
                                <CardFooter>
                               {
                                       btnLoading? <Button disabled={btnLoading}>
                                          <Loader2 className=' animate-spin' />Please wait...
                                      </Button>: 
                                        <Button className={"cursor-pointer"} onClick={()=>handleAction("Register")}>
                                         Register
                                        </Button>
                                }
                                </CardFooter>
                                </Card>
            </TabsContent>
            </Tabs>
    </div>
  )
}

export default Login
