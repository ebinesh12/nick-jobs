
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";
import { validateForm } from "@/lib/validators";
import { addJobs } from "@/lib/api";

const Add = () => {

  const nav = useNavigate();

  const [formInput, setFormInput] = useState({ type:"", position:"", descript:"", salary:"", location:"", cname:"", cdescript:"", email:"", mobile:""});

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormInput( (prev) => { return { ...prev, [name]: value } })

  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const validation = validateForm('addJobs', formInput);
    if(!validation.valid){
      console.log(validation.message);
      return;
    }try {
      await addJobs(formInput);
      setFormInput({ type:"", position:"", descript:"", salary:"", location:"", cname:"", cdescript:"", email:"", mobile:"" });
      nav("/jobs")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='py-4 mt-24 w-full flex justify-center items-start'>
        <Card className='w-96 px-8 py-4'>
          <h1 className="py-4 text-2xl font-bold text-center text-blue-600">Add Jobs</h1>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="type">Job Type</Label>
                <Input name="type" onChange={handleChange} value={formInput.type} id="type" placeholder="Type" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="name">Position</Label>
                <Input name="position" onChange={handleChange} value={formInput.position} id="name" placeholder="Position" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="message">Description</Label>
                <Textarea name="descript" onChange={handleChange} value={formInput.descript} placeholder="Type your Descript" id="message" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="name">Salary</Label>
                <Input name="salary" onChange={handleChange} value={formInput.salary} type="number" id="salary" placeholder="10000" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="name">Location</Label>
                <Input name="location" onChange={handleChange} value={formInput.location} id="location" placeholder="Chennai" />
              </div>
            <h3 className="py-2 text-xl font-bold text-left text-blue-600"> Company Details </h3>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="cname">Company Name</Label>
                <Input name="cname" onChange={handleChange} value={formInput.cname} id="cname" placeholder="Name of Company" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="desc"> Company Description</Label>
                <Textarea name="cdescript" onChange={handleChange} value={formInput.cdescript} placeholder="Type your descript" id="desc" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="email">Company Email</Label>
                <Input name="email" onChange={handleChange} value={formInput.email} id="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-semibold' htmlFor="phone">Contact Number</Label>
                <Input name="mobile" onChange={handleChange} value={formInput.mobile} type="number" id="phone" placeholder="Mobile Number" />
              </div>
              <Button onClick={handleSubmit} className='rounded-md w-full mt-4 px-4 py-4 bg-blue-600 hover:bg-blue-700'>Add Job</Button>
              </div>
          </form>
                  
        </Card>
    </div>
  )
}

export default Add;