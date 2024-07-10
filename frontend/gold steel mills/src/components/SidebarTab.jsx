export const SidebarTab=({title,children,active,setActive})=>{

    return(

            <div onClick={()=>setActive(title)}  className={`flex items-center ${active.toLowerCase()===title.toLowerCase()?'bg-gray-100':'bg-white'}  cursor-pointer rounded hover:bg-gray-100 p-2 w-full  space-x-4 justify-start`}>
                    {children}
                     <h1 className={'text-gray-600 hover:text-gray-700 text-md  font-semibold '}>{title}</h1>
            </div>

        )
}