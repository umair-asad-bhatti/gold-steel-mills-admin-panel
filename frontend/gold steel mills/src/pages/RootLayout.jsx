import {Outlet} from 'react-router-dom'
import {Sidebar} from "../components/Sidebar.jsx";
export const RootLayout=()=>{
    return <div className={'h-[100%]'}>
        <div className={'flex h-[100%]'}>
            <aside className={'bg-white border p-4 flex-grow-0 flex-shrink-0 w-[20%] '}>
                    <Sidebar/>
            </aside>
            <section className={'overflow-scroll bg-gray-100 w-[80%] h-screen p-4 flex-grow-0 flex-shrink-0'}>
                    <Outlet/>
            </section>
    </div>
    </div>
}