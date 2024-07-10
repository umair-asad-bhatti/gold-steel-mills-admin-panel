import { useState } from 'react'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout.jsx";
import {Suppliers} from "./pages/supplier/Suppliers.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                path:'/',
                element:<div >hello component</div>
            },
            {
                path:'/suppliers',
                element:<Suppliers/>
            }

        ]

    },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className={'flex justify-center'}>
            <div className={'max-w-[1400px] w-[1400px]  '}>
                <RouterProvider router={router} />
            </div>
      </div>
  )
}

export default App
