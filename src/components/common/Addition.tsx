import react from "react"
import styled from "styled-components"

const Add = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <h2>ADDITIONAL <span>FEATURES</span></h2>
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Top>
                    <Center>
                        <Boots>
                            
                        </Boots>
                    </Center>
                    <Bottom>
                        <Img src = "https://zozothemes.com/html/layer/demo/images/about-us/about-3.png"/>
                    </Bottom>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Add;
const Boots = styled.div``

const Img = styled.img`
width: 60%;
`

const Center = styled.div``

const Bottom = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Top = styled.div`
/* margin-top: 70px; */
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* @media screen and (max-width:500px){
    width: 100%;
} */

h2{
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
  
    /* @media screen and (max-width: 500px){
        font-size: 500px;
        text-align: center;
    }
    @media screen and (max-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width:768px){
        font-size: 40px;
        margin-bottom: 10px;
    } */
    span{
        font-weight: 700;
        font-size: 40px;
        color:#e74c3c;

        /* @media screen and (max-width: 500px){
        font-size: 500px;
    }

        @media screen and (max-width: 1024px){
        font-size: 40px;
    }
    @media screen and (max-width:768px){
        font-size: 30px;
    } */
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

const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* @media screen and (max-width: 1024px){
  width: 98%;
} */
/* @media screen and (max-width: 500px){
  width: 95%;
} */
`

const Container = styled.div`
width: 100%;
height: 100%;
padding-top: 100px;
background-image: url(https://zozothemes.com/html/layer/demo/images/bg/bg-2.jpg);
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;
`