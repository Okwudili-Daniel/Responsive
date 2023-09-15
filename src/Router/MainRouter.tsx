import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../components/common/HomeScreen"
import Layout from "../components/layouts/Layout"



export const MainRouter = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>,
            }
        ]
    }

])