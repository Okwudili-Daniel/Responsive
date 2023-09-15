import React from "react";
import styled from "styled-components";
import Header from "../static/Header";
import Footer from "../static/Footer";
import { Outlet } from "react-router-dom";

const Layout = () =>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;