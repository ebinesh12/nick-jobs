
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Add = () => {

  const nav = useNavigate();

  return (
    <div className='py-4 mt-24 w-full flex justify-center items-start'>
        <Card className='w-96 px-8 py-4'>
          <h1 className="py-4 text-2xl font-bold text-center">Add Jobs</h1>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="type">Job Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="full"> Full Time</SelectItem>
                    <SelectItem value="part"> Part Time </SelectItem>
                    <SelectItem value="contract"> Contract </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="name">Job Listing Name</Label>
                <Input id="name" placeholder="Name of Role" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="message">Description</Label>
                <Textarea placeholder="Type your message" id="message" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="name">Salary</Label>
                <Input id="name" placeholder="10000" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="name">Location</Label>
                <Input id="name" placeholder="Chennai" />
              </div>
            <h3 className="py-2 text-xl font-bold text-left"> Company Details </h3>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="cname">Company Name</Label>
                <Input id="cname" placeholder="Name of Company" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="desc"> Company Description</Label>
                <Textarea placeholder="Type your descript" id="desc" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="email">Company Email</Label>
                <Input id="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className='font-bold' htmlFor="phone">Contact Number</Label>
                <Input id="phone" placeholder="Mobile Number" />
              </div>
              <Button className='rounded-md w-full mt-4 px-4 py-4'>Add Job</Button>
              </div>
          </form>
                  
        </Card>
    </div>
  )
}

export default Add;