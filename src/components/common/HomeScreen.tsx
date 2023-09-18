import react from "react"
import styled from "styled-components"
import Hero from "./Hero";
import Wel from "./welcome";
import Features from "./features";
import Work from "./Works";
import Slide from "./sliding";
import Add from "./Addition";
import Likes from "./likes"
import Touch from "./touch"
import News from "./news"
import SliderP from "./slide"
import Sub from "./Sub"
import Team from "./team"

const HomeScreen = () =>{
    return(
        <div>
            <Hero/>
            <Wel/>
            <Features/>
            <Work/>
            <Add/>
            <Slide/>
            <Likes/>
            <SliderP/>
            <Team/>
            <News/>
            <Sub/>
            <Touch/>
        </div>
    )
}

export default HomeScreen;