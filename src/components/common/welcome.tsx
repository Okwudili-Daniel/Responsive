import React from "react";
import styled from "styled-components";
import img from "../../asset/about-4.png"
import {TfiDesktop} from "react-icons/tfi"
import {TfiAnnouncement} from "react-icons/tfi"
import {FiSettings} from "react-icons/fi"

const Wel = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <h2>WELCOME TO <span>LAYER</span></h2>
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Top>
                    <Buttom>
                        <Left>
                            <First>
                                <Leftalign>
                                    <h1>BOOTSTRAP 3.2</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                                </Leftalign>
                                <Icon><TfiDesktop/></Icon>
                            </First>
                            <Second>
                                <Leftalign>
                                    <h1>BOOTSTRAP 3.2</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                                </Leftalign>
                                <Icon2><FiSettings/></Icon2>
                            </Second>
                            <Third>
                                <Leftalign>
                                    <h1>BOOTSTRAP 3.2</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                                </Leftalign>
                                <Icon3><TfiAnnouncement/></Icon3>
                            </Third>
                        </Left>
                        <Right>
                            <Img src = {img}/>
                        </Right>
                    </Buttom>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Wel;
const Third = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 100%;
margin-bottom: 20px;
`

const Second = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 100%;
margin-bottom: 20px;
`

const First = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
width: 100%;
margin-bottom: 20px;

`

const Leftalign = styled.div`
width: 80%;
text-align: right;

@media screen and (max-width:1024px){
    width: 80%;
}
@media screen and (max-width:768px){
    width: 85%;
}

@media screen and (max-width: 500px){
    width: 70%;
}
@media screen and (max-width: 350px){
    width: 65%;
}

h1{
    font-size: 30px;
    font-weight: 400;

    @media screen and (max-width: 1024px){
        font-size: 18px;
        font-weight: 600;
    }
    @media screen and (max-width: 768px){
        font-size: 20px;
        font-weight: 600;
    }
};

p{
    font-size: 16px;
    color: #a2a2a2;
    line-height: 30px;
    font-weight: 900;

    @media screen and (max-width: 1024px){
        font-size: 16px;
        font-weight: 400;
    }
    @media screen and (max-width: 768px){
        font-size: 15px;
        font-weight: 600;
    }
    
}
`

const Icon3 = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient( #f0356c, #fc6750);
font-size: 50px;
color: #fff;
transition: all 350ms;

@media screen and (max-width: 1024px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 35px;
    margin-top: 15px;
    
}
@media screen and (max-width: 768px){
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 35px;
}
@media screen and (max-width: 500px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 30px;
}


&:hover{
        transform: scale(1.1);
        cursor: pointer;
}
`
const Icon2 = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient( #ff5f3c, #ff9c33);
font-size: 50px;
color: #fff;
transition: all  350ms;

@media screen and (max-width: 1024px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 35px;
    margin-top: 15px;
    
}

@media screen and (max-width: 768px){
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 35px;
}

@media screen and (max-width: 500px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 30px;
}

&:hover{
        transform: scale(1.1);
        cursor: pointer;
}
`
const Icon = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient( #9829e9, #ca11d9);
font-size: 50px;
color: #fff;
transition: all 350ms;

@media screen and (max-width: 1024px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 35px;
    margin-top: 15px;
    
}

@media screen and (max-width: 768px){
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 35px;
}

@media screen and (max-width: 500px){
    width: 80px;
    height: 80px;
    border-radius: 50%;
    font-size: 30px;
}

&:hover{
        transform: scale(1.1);
        cursor: pointer;
}
`

const Img = styled.img`
object-fit: cover;
width: 85%;
font-size: 50px;
color: #fff;
@media screen and (max-width: 1024px){
    width: 100%;
}
`

const Right = styled.div`
width: 50%;
display: flex;
justify-content: center;

@media screen and (max-width: 1024px){
    width: 49%;
}
@media screen and (max-width: 768px){
    width: 100%;
}

`

const Left = styled.div`
    width: 50%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 100%
    }
    
    `

const Top = styled.div`
margin-top: 70px;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width:500px){
    width: 100%;
}

h2{
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 20px;
  
    @media screen and (max-width: 500px){
        font-size: 500px;
        text-align: center;
    }
    @media screen and (max-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width:768px){
        font-size: 40px;
        margin-bottom: 10px;
    }
    span{
        font-weight: 700;
        font-size: 40px;
        color:#e74c3c;

        @media screen and (max-width: 500px){
        font-size: 500px;
    }

        @media screen and (max-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width:768px){
        font-size: 30px;
    }
    }
};

p{
    color: #a2a2a2;
    font-size: 20px;
    text-align: center;
    font-weight: 600;

    @media screen and (max-width: 1024px){
        font-size: 15px;
        line-height: 30px;
    }
}

`
const Buttom = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px){
  width: 98%;
}
@media screen and (max-width: 500px){
  width: 95%;
}
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    /* padding: 100px 0px; */
`