
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/api";
import { validateForm } from "@/lib/validators";
import { setUser } from "@/slices/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const nav = useNavigate();
  const dispatch=useDispatch();
  const [formInput, setFormInput] = useState({ email:"", pass:"" });

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setFormInput( (prev) => { return { ...prev, [name]: value } })

  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const validation = validateForm('login', formInput);
    if(!validation.valid){
      console.log(validation.message);
      return;
    }try {
     const res= await login(formInput);
    //  console.log(res)
      if (res.data.length > 0) {
        dispatch(setUser(res))
        console.log('Login successful:', res.data[0]);
        nav("/")
        return res.data[0]; // User object
      } else {
        console.log('Invalid email or password');
        return null;
      }
      setFormInput({email:"", pass:""});
    } catch (error) {
      console.log(error);
    }
  };
console.log(formInput);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
        <form className="mt-6 space-y-4">
          <div>
            <Label className="font-semibold" htmlFor="email">Email Address</Label>
            <Input onChange={handleChange} name='email' value={formInput.email} type="email" id="email" placeholder="Enter your email" className="mt-1" />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="password">Password</Label>
            <Input onChange={handleChange} name='pass' value={formInput.pass} type="password" id="password" placeholder="Enter your password" className="mt-1" />
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full bg-blue-600 hover:bg-blue-700"> Login </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '} <Link to="/register" className="text-blue-600 hover:underline"> Register </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
