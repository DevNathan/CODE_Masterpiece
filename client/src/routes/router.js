import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import PageNotFound from "../pages/error/PageNotFound";
import MainContainer from "../pages/main/MainContainer";
import ListContainer from "../pages/list/ListContainer";
import ViewContainer from "../pages/view/ViewContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <MainContainer/>
            },
            {
                path: "/tech/:category",
                element: <ListContainer/>
            },
            {
                path: "/view/:name",
                element: <ViewContainer/>
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound/>
    }
]);

export default router;