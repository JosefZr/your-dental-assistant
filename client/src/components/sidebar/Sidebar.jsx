import React, { useContext } from 'react'
import { ImEnter } from "react-icons/im";
import { GrOverview } from "react-icons/gr";
import { VscOrganization } from "react-icons/vsc";
import { FaFileArchive, FaSignOutAlt } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { TbNumbers } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


import MenuItem from './menuItem';
import { MainContext } from '@/context/MainContext';

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    title:{
        title: "Your Dental Assistant",
        icon: ImEnter
    },
    navMain: [
        {
            title: "Overview",
            url: "/",
            icon: GrOverview,
        },
        {
            title: "Staff-List",
            url: "/staff-list",
            icon: VscOrganization,
        },
        {
            title: "Patients",
            url: "/patients",
            icon: FaFileArchive,
        },
        {
            title: "Appointments",
            url: "/appointments",
            icon: AiFillSchedule,
        },
    ],
    teams: [
        {
            title: "Patients-depts",
            url: "#",
            icon: GiReceiveMoney,
        },
        {
            title: "My Depts",
            url: "#",
            icon: GiPayMoney,
        },
    ],
    game: [
        {
            title: "Numbers Game",
            url: "#",
            icon: TbNumbers,
        },
        {
            title:"Logout",
            icon:FaSignOutAlt,
            isLogout:true
        }
    ],
};
export default function Sidebar() {
    const {isSidebarOpen , setIsSidebarOpen} = useContext(MainContext)

    const toggleSidebar = ()=>{
        console.log(isSidebarOpen)
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div className={`fixed flex flex-col duration-300 left-0 top-0 h-full bg-[var(--vert)]  text-white transition-all z-50 
        ${isSidebarOpen ? "w-44": "w-16 items-center"}
    `}
    >
        {/* sidebar logo */}
        <div className='flex items-center justify-center py-4'>
            <LuLayoutDashboard className={`text-2xl transition-all w-12 text-[var(--vertPistache)] ${isSidebarOpen ? "w-12 ":"w-8"}`}/>
        </div>

        {/* menu List */}
        <div className='mt-6 flex-1'>
            <MenuItem items={data.navMain}/>
        </div>
        <div className='mt-6 flex-1'>
            <MenuItem items={data.teams}/>
        </div>
        <div className='mt-6 flex-1'>
            <MenuItem items={data.game}/>
        </div>

        {/* toggle button */}
        <button onClick={()=>{
            toggleSidebar()
        }}
        className='m-2 flex items-center justify-center rounded-md bg-gray-700 p-3 text-2xl font-bold hover:bg-teal-500 cursor-pointer duration-300'
        >
            {
                isSidebarOpen ? <RiArrowLeftSLine  className='w-6 h-6'/> : <RiArrowRightSLine className='w-6 h-6'/>
            }
        </button>
    </div>
  )
}
