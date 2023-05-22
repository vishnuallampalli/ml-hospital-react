import React from "react";
import DefaultLayout from "../layouts/default_layout";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import {Routes} from "./Index";
function Router() {

    const Routepaths = ()=>{
            if (Routes){
                return Routes.map((rootElement , rootIndex) =>{
                    console.log(rootElement)
                    return(
                        <Route key ={rootIndex} element={rootElement.element}>
                            {rootElement.children && rootElement.children.map((child , childIndex)=>{
                                return(
                                    <Route 
                                    key={childIndex} 
                                    index={child.index? true: false} 
                                    element={child.element}></Route>
                                )
                            })}
                        </Route>
                    )
                })
            }
    }
    return (
        <ReactRoutes>
                {Routepaths()}
        </ReactRoutes>

    )
}
export default Router