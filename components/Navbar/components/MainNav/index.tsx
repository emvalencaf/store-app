'use client';

// hooks
import { usePathname } from 'next/navigation';

// next components
import Link from 'next/link';

// utils
import { cn } from '@/libs/utils';

// interfaces
import { Category } from '@/types';

export interface IMainNavProps {
    data: Category[];
};

const MainNav: React.FC<IMainNavProps> = ({ data }) => {

    const pathname = usePathname();

    const routes = data.map((route: { id: any; name: any; }) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }))

    return (
        <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
            {
                routes.map((route) => (
                    <Link key={route.href} href={route.href} className={cn("text-sm font-medium transtion-colors hover:Text-black", route.active ? "text-black" : "text-neutral-500")}>
                        {route.label}
                    </Link>
                ))
            }
        </nav>
    );
};

export default MainNav;
