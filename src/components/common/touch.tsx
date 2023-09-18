import { styled } from "styled-components";
import react from "react"
import pic from '../Assets/contact-bg.jpg'

const Touch = () =>{
    return(
        <Container>
            <Wrapper>
                <Card1>
                    <h2>Get In Touch</h2>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Your Message"/>
                    <Button>Send Now</Button>
                </Card1>
                <Card2>
                <Top>
                    <h2>GET BEST OUR <span>FEATURES EVER</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'left'}}>We ensure quality & support. People love us & we love them Lorem ipsum 
                    Lorem ipsum dolor sit amet, 
                    </p>
                </Top>
                <Button>Contact Us</Button>
                </Card2>
            </Wrapper>
        </Container>
    )
}

export default Touch;

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
const Top = styled.div`
width: 65%;
height: 25%;
// background-color: yellowgreen;
display: flex;
@media screen and (max-width: 768px) {
    width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
}

flex-direction: column;
margin-right: 0px;
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
    line-height: 2;

}
`

const Button = styled.button`
padding: 15px 30px;
background-color:  #ED7569;
border-radius: 50px;
border: none;
color: white;
&:hover{
    background-color: black;
    transform: scale(1.05);
    cursor: pointer;
}`

const Card2 = styled.div`

`
const Card1 = styled.div`
width: 200px;
height: 85%;
background-color: white                        ;
padding: 30px 70px;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 15px;
/* justify-content: center; */
/* align-items: center; */
h2{
    text-align: left;
}
input{
    height: 40px;
    width: 300px;
    outline-color: gray;
    border: 1px solid grey;
    border-radius: 10px;
}
@media screen and (max-width: 500px){
        /* display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px; */
        width: 80%;
    }
`
const Wrapper = styled.div`
width: 90%;
padding: 20px 20px;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
gap: 100px;
@media screen and (max-width: 500px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }
`
const Container = styled.div`
width: 100%;
height: 100;
display: flex;
justify-content: center;
align-items: center;
background-attachment: fixed;
background-image: url(${pic});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`