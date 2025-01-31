import Link from "next/link";
import { IoIosAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <nav className="bg-indigo-500 text-white px-2 py-4 flex items-center justify-between">
            <h1><Link href="/">Programming.com Test</Link></h1>
            
            <ul className="flex gap-3">
              <li><Link href="/posts" className="flex items-center p-2 border-2 border-white rounded-md cursor-pointer">Posts</Link></li>
              <li><Link href="/create-post" className="flex items-center p-2 border-2 border-white rounded-md cursor-pointer"><IoIosAdd /> Create Post </Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar