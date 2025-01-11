
import { NavLink, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  // console.log(location.pathname)
  return (
    <div className='fixed top-0  fluid z-30 bg-gray-500 text-white w-full h-14 dark:bg-black flex flex-row justify-around' >
        <div className='flex m-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className='mx-4 text-xl font-bold'><NavLink to={'/'}>Nick Jobs</NavLink></h3>
        </div>
        <ul className=' flex justify-center mt-2 mx-4'> 
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md ${path === '/' ? 'bg-gray-800' : ''}`} to={'/'}>Home</NavLink> </li>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md ${path === '/jobs' ? 'bg-gray-800' : ''}`}to={'/jobs'}>Jobs</NavLink> </li>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md ${path === '/add' ? 'bg-gray-800' : ''}`} to={'/add'}>Add Jobs</NavLink> </li>
        </ul>
    </div>
  )
}

export default Header;