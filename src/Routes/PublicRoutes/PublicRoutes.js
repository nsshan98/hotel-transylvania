import { createBrowserRouter } from "react-router-dom";
import Main from './../../layout/Main';
import Home from './../../components/Home/Home';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
        ]
    }
])

export default router