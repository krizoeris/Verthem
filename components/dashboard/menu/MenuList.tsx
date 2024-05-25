import { FC } from "react";
import Link from "next/link";
import { MenuItem } from "@/app/types/definitions";

type MenuListProps = {
    menuList: MenuItem[];
    iconMapping: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
    pathName: string;
};

const MenuList: FC<MenuListProps> = ({ menuList, iconMapping, pathName }) => {
    return (
        <ul className="flex flex-col gap-4">
            {menuList.map((menu, index) => {
                const Icon = iconMapping[menu.icon];
                return (
                <li key={index} className={`${pathName === `${menu.link}` ? 'w-[64px] group pt-1 pb-1 bg-slate-100 rounded-md' : 'w-[64px] group pt-1 pb-1 hover:bg-slate-100 hover:transition-all hover:ease-in rounded-md'}`}>
                    <Link href={menu.link}>
                    <div className={`${pathName === `${menu.link}` ? 'flex flex-col items-center justify-center gap-2 text-slate-900' : 'flex flex-col items-center justify-center gap-2 group-hover:text-slate-900 group-hover:transition-all group-hover:ease-in'}`}>
                        <Icon className="w-6 h-6"/>
                        <p className="text-sm">{menu.title}</p>
                    </div>
                    </Link>
                </li>
                )
            })}
        </ul>
    );
};

export default MenuList;