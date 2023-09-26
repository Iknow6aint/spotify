import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
interface SidebarProps {
    children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            href: '/search',
            active: pathname === '/search'
        },
    ], [pathname]);
    return (

        <div className="flex h-full">
            <div
                className="
                hidden 
                md:flex 
                flex-col 
                gap-y-2 
                bg-black 
                h-full 
                w-[300px] 
                p-2
            "
            >
                <Box>
                    side bsr navigation
                </Box>
            </div>
        </div>
    )
}

export default Sidebar