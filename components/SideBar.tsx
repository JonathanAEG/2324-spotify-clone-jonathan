"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Box from "./Box";


interface SideBarProps{
    children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({children})=>{

    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href:'/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ], [pathname]); 


    return(
        <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">

                    </div>
                </Box>
                <Box className="overflow-w-auto h-full">
                    Song Library
                </Box>
            </div>
        </div>
    )
}

export default SideBar;