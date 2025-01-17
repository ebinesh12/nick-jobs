

import React from 'react';
import { Button } from "@/components/ui/button"; // Adjust path based on your project
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '@/lib/api';
import { validateForm } from '@/lib/validators';

const Register = () => {

  const nav = useNavigate();

  const [formInput, setFormInput] = useState({ name:"", email:"", pass1:"", pass2:"" });

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormInput( (prev) => { return { ...prev, [name]: value } })

  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const validation = validateForm('register', formInput);
    if(!validation.valid){
      console.log(validation.message);
      return;
    }try {
      await register(formInput);
      setFormInput({ name:"", email:"", pass1:"", pass2:"" });
      nav("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600"> Register </h2>
        <form className="mt-6 space-y-4">
          <div>
            <Label className="font-semibold" htmlFor="name">Username</Label>
            <Input onChange={handleChange} name='name' value={formInput.name} type="text" id="name" placeholder="Enter your username" className="mt-1" />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="email">Email Address</Label>
            <Input onChange={handleChange} name='email' value={formInput.email} type="email" id="email" placeholder="Enter your email" className="mt-1" />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="pass1">Password</Label>
            <Input onChange={handleChange} name='pass1' value={formInput.pass1} type="password" id="pass1" placeholder="Enter your password" className="mt-1" />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="pass2">Confirm Password</Label>
            <Input onChange={handleChange} name='pass2' value={formInput.pass2} type="password" id="pass2" placeholder="Repeat password" className="mt-1" />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full bg-blue-600 hover:bg-blue-700"> Register </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '} <Link to="/login" className="text-blue-600 hover:underline"> Login </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
