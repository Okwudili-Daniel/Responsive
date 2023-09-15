import react from "react"
import styled from "styled-components"
import Hero from "./Hero";
import Wel from "./welcome";
import Features from "./features";
import Work from "./Works";

const HomeScreen = () =>{
    return(
        <div>
            <Hero/>
            <Wel/>
            <Features/>
            <Work/>
        </div>
    )
}

export default HomeScreen;