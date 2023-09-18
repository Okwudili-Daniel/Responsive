import react from "react"
import styled from "styled-components"
import img1 from "../../asset/1.jpg"
import img2 from "../../asset/2.jpg"
import img3 from "../../asset/3.jpg"
// import  Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Slide = () =>{
    return(
        <div>
            {/* const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    } */}
        <Container>
           <Wrapper>
                <Top>
                    <h2>APP SCREENSHOT</h2>
                    <p>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Top>
                <SlideHold>
                <Box>
                        <Img src = {img1}/>
                    </Box>
                    <Box>
                        <Img src = {img2}/>
                    </Box>
                    <Box>
                        <Img src = {img3}/>
                    </Box>
                    <Box>
                        <Img src = {img3}/>
                    </Box>
                </SlideHold>
           </Wrapper>
        </Container>
        </div>
    )
}

export default Slide;

const  Img = styled.img`
width: 95%;
height: 95%;
object-fit: cover;

`
const  Box = styled.div`
width:  300px;
height: 400px;
position: relative;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
margin-right: 15px;
`
const  SlideHold = styled.div`
display: flex;
width: 100%;
margin-top: 30px;
justify-content: space-between;
@media screen and (max-width: 500px){
width: 100%;
}
`
const Top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
flex-wrap: wrap;
@media screen and (max-width: 500px){

    width: 100%;
    p{
        width: 100%;
        text-align: center;
    }
}
h2{

}p{
    width: 40%;
    text-align: center;
}
`
const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
padding-top: 30px;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 100px;
`

{/* const Img = styled.img`
width: 92%;
height: 92%;
object-fit: cover; `

const Box = styled.div`
width: 300px;
border-radius: 5px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
margin-right: 15px;
`

const Slidehold = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    justify-content: space-between;
`

const Top = styled.div`
display: flex;
flex-direction: column;
width: 100%;
display: flex;
align-items: center;
h2{
    margin: 0px;
}
p{
    width: 40%;
    text-align: center;
}
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;

` */}