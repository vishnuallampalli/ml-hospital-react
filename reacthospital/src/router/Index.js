import HomePage from "../components/Home/Index";
import DefaultLayout from "../layouts/default_layout";

const Routes = [
    {
        element:<DefaultLayout/>,
        children :[
            {
             index: true,
             element:<HomePage/>
            },
            {
                path:"doctor"
            }
        ]
    }
]

export {Routes}