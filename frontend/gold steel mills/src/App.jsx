import { useState } from 'react'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {RootLayout} from "./pages/RootLayout.jsx";
import {Suppliers} from "./pages/supplier/Suppliers.jsx";
import {Purchases} from "./pages/purchase/Purchases.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/suppliers',
                element:<Suppliers/>
            },{
                path:'/purchases',
                element:<Purchases/>
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
