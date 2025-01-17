
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import Hero from '@/components/Hero';



const Home = () => {

const nav = useNavigate();

  return (
    < > 
        <div className='mt-10'>
            <Hero />
            <section className='bg-gray-200 flex items-center justify-center columns-3'>
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
                                <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=>nav("/details")} >Read more</Button>
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
                                <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=>nav("/details")} >Read more</Button>
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
                                <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=>nav("/details")} >Read more</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <section className='py-10 bg-blue-600 flex justify-center items-center'>
                <Button onClick={()=>nav("/jobs")} >View All</Button>
            </section>
        </div>
    </> 
  )
}

export default Home;