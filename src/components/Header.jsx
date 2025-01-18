
import { NavLink, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { LogIn, LucideClipboardPlus, Mail, LogOut, User} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '@/slices/userSlice';

const Header = () => {
  const user=useSelector((state)=>state.userInfo.user);
//   console.log(user);
  
  const dispatch=useDispatch();
  const location = useLocation();
  const path = location.pathname;
  // console.log(location.pathname)

  const logout=()=>{
    dispatch(removeUser())
  }
  return (
    <div className='fixed top-0  fluid z-30 bg-gray-500 text-white w-full h-14 dark:bg-black flex flex-row justify-around border-b-2' >
        <div className='flex m-2'>
            <Avatar className='w-8 h-8'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className='mx-4 text-xl font-bold'><NavLink to={'/'}>Nick Jobs</NavLink></h3>
        </div>
        <ul className=' flex justify-center mt-2 mx-4'> 
            { user ? <>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md hover:bg-gray-700 ${path === '/' ? 'bg-gray-800' : ''}`} to={'/'}>Home</NavLink> </li>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md hover:bg-gray-700 ${path === '/jobs' ? 'bg-gray-800' : ''}`}to={'/jobs'}>Jobs</NavLink> </li>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md hover:bg-gray-700 ${path === '/add' ? 'bg-gray-800' : ''}`} to={'/add'}>Add Jobs</NavLink> </li>
            </>:<>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md hover:bg-gray-700 ${path === '/login' ? 'bg-gray-800' : ''}`} to={'/login'}>Login</NavLink> </li>
            <li className='ml-4 m-1'><NavLink className={`p-3 rounded text-md hover:bg-gray-700 ${path === '/register' ? 'bg-gray-800' : ''}`} to={'/register'}>Register</NavLink> </li>
            </>}
        </ul>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='my-2 w-9 h-9'>
                    <AvatarImage src="https://picsum.photos/200/300?random=1" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {user?<>
                    <DropdownMenuItem>
                        <User /> <h3>{user.data[0].name}</h3>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Mail /> <p>{user.data[0].email}</p>
                    </DropdownMenuItem>
                    </>:
                    <DropdownMenuItem>
                        <User /> <h3>guest</h3>
                    </DropdownMenuItem>}
                    <DropdownMenuSeparator />
                    {user?<>
                    <DropdownMenuItem onClick={logout}>
                        <LogOut /> <span>Log out</span>
                    </DropdownMenuItem>
                    </>:<>
                    <DropdownMenuItem>
                        <LogIn /> <span>Log In</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LucideClipboardPlus /> <span>Register</span>
                    </DropdownMenuItem>
                    </>}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Header;