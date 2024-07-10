import {SidebarTab} from "./SidebarTab.jsx";

import {Link} from 'react-router-dom'
import {useState} from "react";
import {routes} from "../routes.js";

export const Sidebar=()=>{
    const [active,setActive]=useState('dashboard');
    return <>
        <div className={'w-full flex flex-col gap-4'}>

                {routes.map((route, index) => {
                        const IconComponent = route.icon;
                        return (
                            <Link to={route.routeURL} >
                                <SidebarTab title={route.name} active={active} setActive={setActive}>
                                    <IconComponent style={{ fontSize: '18px' }} className={'text-slate-700'} />
                                </SidebarTab>
                            </Link>
                        );
                    })}
        </div>
    </>
}