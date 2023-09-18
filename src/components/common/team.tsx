import { styled } from "styled-components";
import pic from '../Assets/features-bg3.jpg'
import pix from '../Assets/1.jpg'
import pix1 from '../Assets/2.jpg'
import pix2 from '../Assets/3.jpg'
import react from "react"

const Team  = () =>{
    return(
        <Container>
                <Wrapper>
                <Top>
                    <h2>TEAM <span>LAYER</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'center'}}>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Top>
                <ImgHolder>
                <Box>
                <Img src= {pix}/>
                <h3 style={{margin: '7px'}}>Nasir Ovodro</h3>
                <p style={{margin: '5px'}}>PHP Developer</p>
                </Box>
                <Box>
                <Img src= {pix1}/>
                <h3 style={{margin: '7px'}}>Nasir Ovodro</h3>
                <p style={{margin: '5px'}}>PHP Developer</p>
                </Box>
                <Box>
                <Img src= {pix2}/>
                <h3 style={{margin: '7px'}}>Nasir Ovodro</h3>
                <p style={{margin: '5px'}}>PHP Developer</p>
                </Box>
                <Box>
                <Img src= {pix}/>
                <h3 style={{margin: '7px'}}>Nasir Ovodro</h3>
                <p style={{margin: '5px'}}>PHP Developer</p>
                </Box>
               
                </ImgHolder>
                </Wrapper>
        </Container>
    )
}

export default Team;

const Box = styled.div`
    width: 20%;
height: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0px;
@media screen and (max-width: 500px){
    width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`

const Img = styled.img`
width: 100%;
height: 80%;
object-fit: cover;
border-radius: 20px;

`
const ImgHolder = styled.div`
    width: 100%;
    gap: 40px;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 500px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`

const Line1 = styled.div`
width: 30px;
height: 2px;
background-color: grey;
`
const Line = styled.div`
width: 30px;
height: 2px;
background-color: #ED7569;
`
const Circle = styled.div`
width: 10px;
height: 10px;
background-color: #ED7569;
border-radius: 100px;
`
const Shape = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Bottom = styled.div`
width: 85%;
height: 25%;
/* background-color: yellowgreen; */
display: flex;
gap: 50px;
margin-top: 0px;
`

const Top = styled.div`
width: 100%;
/* height: 25%; */
/* background-color: yellowgreen; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h2{
    font-size: 37px;
    font-weight: 600;
}
span{
    color: #ED7569;
}p{
    font-size: 13px;
    font-weight: 300px;
    color: grey;
}`

const Wrapper = styled.div`
width: 90%;
/* background-color: gold; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 30px 30px;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${pic});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-top: 50px;
`