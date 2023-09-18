import { styled } from "styled-components";
import react from "react"
import pix from '../Assets/3.png'
import pic from '../Assets/quote-cl.png';
import {RiStarSFill} from 'react-icons/ri'

const SliderP = () =>{
    return(
    <Container>
       <Wrapper>
            <Side>
                <Img2 src= {pic}/>
                <h3 style={{margin: '0px' , fontSize: '27px', fontWeight: '600'}}>The Best Template You Got it!</h3>
                <Icons>
                    <RiStarSFill style={{color: 'yellow' , fontSize: '25px'}}/>
                    <RiStarSFill style={{color: 'yellow' , fontSize: '25px'}}/>
                    <RiStarSFill style={{color: 'yellow' , fontSize: '25px'}}/>
                    <RiStarSFill style={{color: 'yellow' , fontSize: '25px'}}/>
                    <RiStarSFill style={{color: 'yellow' , fontSize: '25px'}}/>
                    </Icons>
                <p style={{margin: '0px' , fontSize: '18px', fontWeight: '600', color: 'grey'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure porro, sapiente rem laborum, molestiae aliquid excepturi soluta beatae laboriosam delectus veritatis ab reiciendis mollitia! Quae soluta doloribus beatae dolores natus!</p>
                <i style = {{color:" #ED7569"}}>-Mariam Rana of BiriOala</i>
            </Side>
            <Holder>
                <Img src = {pix}/>
            </Holder>
       </Wrapper>
    </Container>
    )
}

export default SliderP;

const Icons = styled.div``
const Side = styled.div`
    width: 60%;
    display: flex;
    text-align: left;
    gap: 15px ;
    flex-direction: column;
`
const Img2 = styled.img`
height: 50px;
width: 70px;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Holder = styled.div`
width: 30%;
`
const Wrapper = styled.div`
    width: 90%;
    /* background-color: grey; */
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`