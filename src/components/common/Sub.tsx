import { styled } from "styled-components";
import react from "react"
import pic from '../Assets/features-bg.jpg'

const Sub = () =>{
    return(
    <Container>
        <Wrapper>
        <Top>
                    <h2>SUBSCRIBE TO OUR <span>UPDATES</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'left'}}>We ensure quality & support. People love us & we love them Lorem ipsum </p>
                </Top>
                <Bottom>
                    
                    <InputHolder>
                    <input type="text" placeholder="Enter your email address" />
                    </InputHolder>
                        <Button>
                            Subsribe
                        </Button>
                </Bottom>
        </Wrapper>
    </Container>
        
    )
}

export default Sub;

const Button = styled.button`
padding: 10px 10px;
color:white;
background-color: #ED7569;
border: none;
border-radius: 5px;
`

const InputHolder = styled.div`

`
const Bottom = styled.div`
width: 45%;
display: flex;
input{
    width: 300px;
    height: 40px;
    outline-color:#ED7569;
    border: none;
}::placeholder{
    margin-right: 20px;
}
@media screen and (max-width: 500px){
    width: 100%;
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
const Top = styled.div`
width: 45%;
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

const Wrapper = styled.div`
width: 90%;
padding: 20px 20px;
display: flex;
justify-content: center;
align-items: center;
gap: 150px;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${pic});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`