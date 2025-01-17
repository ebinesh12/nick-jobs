
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
        <form className="mt-6 space-y-4">
          <div>
            <Label className="font-semibold" htmlFor="email">Email Address</Label>
            <Input type="email" id="email" placeholder="Enter your email" className="mt-1" />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700"> Login </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{' '} <Link to="/register" className="text-blue-600 hover:underline"> Register </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
