import { styled } from "styled-components";
import react from "react"
import {LiaDownloadSolid} from 'react-icons/lia';
import {SlLike} from 'react-icons/sl'
import {GoTrophy} from 'react-icons/go'
import {CgProfile} from'react-icons/cg'

const Likes = () =>{
    return(
        <Container>
            <Wrapper>
                <Box>
                    <Circle><LiaDownloadSolid/></Circle>
                        <Tect>Downloads</Tect>
                        <Numb>1505+</Numb>
                </Box>
                <Box>
                    <Circle1><SlLike/></Circle1>
                        <Tect>Likes</Tect>
                        <Numb>5200+</Numb>
                </Box>
                <Box>
                    <Circle2><GoTrophy/></Circle2>
                        <Tect>Awards Won</Tect>
                        <Numb>400+</Numb>
                </Box>
                <Box>
                    <Circle3><CgProfile/></Circle3>
                        <Tect>Author Working</Tect>
                        <Numb>34+</Numb>
                </Box>
            </Wrapper>
        </Container>
    )
}

export default Likes;

const Numb = styled.div`
font-size: 45px;
font-weight: 500;
color: #E74C3C;
`
const Tect = styled.div`
font-size: 20px;
font-weight: 500;
color: gray;
`

const Circle2 = styled.div`
width: 80px;
height: 80px;
border-radius: 100px;
background: rgb(221,43,112);
background: linear-gradient(25deg, rgba(221,43,112,1) 34%, rgba(183,17,184,1) 76%);
font-size: 35px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
color: white;`

const Circle1 = styled.div`
width: 80px;
height: 80px;
border-radius: 100px;
background: rgb(221,43,112);
background: linear-gradient(25deg, rgba(221,43,112,1) 34%, rgba(183,17,184,1) 76%);
font-size: 35px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
color: white;`
const Circle3 = styled.div`
width: 80px;
height: 80px;
border-radius: 100px;
background: rgb(221,43,112);
background: linear-gradient(25deg, rgba(221,43,112,1) 34%, rgba(183,17,184,1) 76%);
font-size: 35px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
color: white;`

const Circle = styled.div`
width: 80px;
height: 80px;
border-radius: 100px;
background: rgb(221,43,112);
background: linear-gradient(25deg, rgba(221,43,112,1) 34%, rgba(183,17,184,1) 76%);
font-size: 35px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
color: white;
`
const Box = styled.div`
height: 85%;
width: 25%;
/* background-color: navy; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
@media screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
`
const Wrapper = styled.div`
width: 90%;
padding: 30px 0px;
/* background-color: lavender; */
height: 100%;
display: flex;
justify-content: center;
align-items: center;
row-gap: 10px;
flex-wrap: wrap;
@media screen and (max-width: 500px){
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
`
const Container = styled.div`
width: 100%;
/* background-color: red; */
margin-top: 150px;
display: flex;
justify-content: center;
align-items: center;
`