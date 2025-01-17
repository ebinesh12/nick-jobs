
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Jobs = () => {
    
    const nav = useNavigate();
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/jobs');
          // console.log(response)
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
    
  return (
    <div className='min-h-screen mt-14'>
        <h1 className="mt-4 text-2xl font-bold text-center">Browse Jobs</h1>
        <section className=' grid grid-cols-3 items-center justify-center'>
            <div className='pl-4 px-3 py-4 w-full'>
                <Card>
                    <CardHeader>
                        <h2>Full Time</h2>
                        <CardTitle>Senior React Developer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>We are seeing a talented Front End Developer to join our team in boston, MA.  </CardDescription>
                        <h2 className='my-2'>10k-15k/year </h2>
                        <hr/>
                    </CardContent>
                    <CardFooter>
                        <div className='w-full flex justify-between'>
                        
                            <p className='flex items-center'><MapPinned color="black" size={32} />Boston</p>
                            <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=>nav("/jobs/1")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            {data?.map(( d, i)=>
            <div key={i} className='pl-4 px-3 py-4 w-full'>
                <Card>
                    <CardHeader>
                        <h2>{d.type}</h2>
                        <CardTitle>{d.position}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{d.descript}</CardDescription>
                        <h2 className='my-2'>10k-15k/year </h2>
                        <hr/>
                    </CardContent>
                    <CardFooter>
                        <div className='w-full flex justify-between'>
                        
                            <p className='flex items-center'><MapPinned color="black" size={32} />{d.location}</p>
                            <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=>nav(`/jobs/${i+1}`)} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>)}
        </section>
    </div>
  )
}

export default Jobs;