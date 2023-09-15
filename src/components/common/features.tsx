import react from "react"
import styled from "styled-components"
import img from "../../asset/about-2.png"
import {TfiPencilAlt, TfiFlagAlt, TfiBolt, TfiPalette, TfiWorld, TfiMicrophone} from "react-icons/tfi"


const Features = () =>{
    return (
        <div>
            <Container>
                <Wrapper>
                    <Top>
                        <h2>AWESOME <span>FEATURES</span></h2>
                        <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Top>
                    <Buttom>
                        <Left>
                            <First>
                                <Icon cl= "#ff0101"><TfiPencilAlt/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </First>
                            <Second>
                                <Icon cl= "#1d79fb"><TfiFlagAlt/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </Second>
                            <Third>
                                <Icon cl= "#ff7511"><TfiBolt/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </Third>
                        </Left>
                        <Center>
                            <Img src = {img}/>
                        </Center>
                        <Right>
                            <First>
                                <Icon cl= "#e692ff"><TfiPalette/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </First>
                            <Second>
                                <Icon cl= "#58d7e5"><TfiWorld/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </Second>
                            <Third>
                                <Icon cl= "#ff906a"><TfiMicrophone/></Icon>
                                <Text>
                                    <h1>Creative Design</h1>
                                    <p>Lorem ipsum dolor sit amet elit.</p>
                                </Text>
                            </Third>
                        </Right>
                    </Buttom>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Features;
const Text = styled.div`

h1{
    color: black;
    font-size: 25px;
    font-weight: 500;
};
p{
    color: #a2a2a2;
    font-size: 20px;
}
`

const Icon = styled.div<{cl: string}>`
color: ${({cl}) => cl};
/* color: #ff0101; */
font-size: 60px;
margin-right: 30px;
`

const Third = styled.div`
    width: 85%;
    color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);
    padding: 15px 15px;
    border-radius: 10px;
    margin-bottom: 60px;
    margin-left: 90px;
`
const Second = styled.div`
    width: 85%;
    color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);
    padding: 15px 15px;
    border-radius: 10px;
    margin-bottom: 60px;
`
const First = styled.div`
    width: 85%;
    color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.176);
    padding: 15px 15px;
    border-radius: 10px;
    margin-bottom: 60px;
    margin-left: 90px;
`

const Right = styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
`

const Center = styled.div`
width: 30%;
display: flex;
justify-content: center;
`

const Img = styled.img`
width: 80%;
object-fit: cover;`

const Left = styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;

`

const Buttom = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

const Top = styled.div`
margin-top: 70px;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 20px;
    span{
        font-weight: 700;
        font-size: 40px;
        color:#e74c3c;
    }
};

p{
    color: #a2a2a2;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
}

`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 100%;
background-color: #f6f4ff;
display: flex;
align-items: center;
justify-content: center;
`