import { MainContext } from '@/context/MainContext'
import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function MenuItem({ items }) {
    const { isSidebarOpen } = useContext(MainContext)
    const location = useLocation()

    return (
        <>
            {items.map((item, index) => {
                const isActive = location.pathname === item.url

                return (
                    <Link
                        to={item.url}
                        key={index}
                        className={`
                            m-2 flex cursor-pointer items-center space-x-4 rounded-md px-3 py-3 duration-500 
                            ${isActive ? 'bg-teal-700 text-[var(--vertPistache)]' : 'hover:bg-teal-700 hover:text-[var(--vertPistache)]'}
                            ${item.isLogout ? 'mx-auto hidden' : ''}
                        `}
                    >
                        <item.icon className="text-xl" />
                        {isSidebarOpen && <span className="text-[14px] overflow-hidden font-normal">{item.title}</span>}
                    </Link>
                )
            })}
        </>
    )
}
