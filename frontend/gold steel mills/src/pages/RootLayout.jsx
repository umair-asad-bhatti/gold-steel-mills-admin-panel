import {Outlet} from 'react-router-dom'
import {Sidebar} from "../components/Sidebar.jsx";
export const RootLayout=()=>{
    return <div>
        <div className={'flex h-screen'}>
            <aside className={'bg-white border p-4 flex-grow-0 flex-shrink-0 w-[20%] '}>
                    <Sidebar/>
            </aside>
            <section className={'bg-gray-100 w-[80%] p-4 flex-grow-0 flex-shrink-0'}>
                    <Outlet/>
            </section>
    </div>
    </div>
}