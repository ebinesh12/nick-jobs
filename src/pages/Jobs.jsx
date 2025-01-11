
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { MapPinned } from 'lucide-react';

const Jobs = () => {
    
    const nav = useNavigate();
    
  return (
    <div className='mt-14'>
        <h1 className="mt-4 text-2xl font-bold text-center">Browse Jobs</h1>
        <section className='grid grid-cols-3 items-center justify-center'>
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>            
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
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
                            <Button className='bg-cyan-700' onClick={()=>nav("/details")} >Read more</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </section>
    </div>
  )
}

export default Jobs;