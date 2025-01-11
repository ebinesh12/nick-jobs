
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const nav = useNavigate();
  
  return (
    <div>
        <section className='flex flex-col py-10 items-center justify-center bg-cyan-500 '>
            <h1 className='text-3xl pt-8 text-white text-center'>Become a React Dev</h1>
            <p className='text-md mt-4 pb-8  text-white text-center'> Finds the React Job that fits your skils </p>
        </section>
        <section className='bg-gray-200 flex items-center justify-center columns-2'>
            <div className='pl-4 px-3 py-4 w-full'>
              <Card>
                <CardHeader>
                    <CardTitle>For Developers</CardTitle>
                    <CardDescription>Browse our react jobs and start carrer today</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button onClick={()=>nav("/jobs")}> Browse Jobs </Button>
                </CardContent>
              </Card>
            </div>
            <div className='pr-4 px-3 py-4 w-full'>
              <Card className="bg-cyan-100">
                <CardHeader>
                    <CardTitle>For Employers</CardTitle>
                    <CardDescription>List your jobs to find perfect devlopers for the role </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className='bg-cyan-600'onClick={()=>nav("/add")}> Add Job </Button>
                </CardContent>
              </Card>
            </div>
        </section>
    </div>
  )
}

export default Hero;