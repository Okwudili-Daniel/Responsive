import react from "react"
import styled from "styled-components"
import img from "../../asset/small-screen.png"
import img2 from "../../asset/big-screen.png"
import {TfiBell, TfiStar, TfiCommentAlt} from "react-icons/tfi"
import {FaRegHeart} from "react-icons/fa"

const Work = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <ImgWrapper>
                        <Img ps="absolute" top="30px" wd="50%" left="90px" Right="" hi="90%" src ={img}/>
                        <Img ps="absolute" top="0px" wd="60%" left="" Right="5px" hi ="100%" src ={img2}/>
                        </ImgWrapper>
                    </Left>
                    <Right>
                        <Top>
                            <h2>HOW IT <span>WORKS</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Top>
                        <Center>
                            <h1>Benefits Of App</h1>
                            <Row1>
                                <Note>
                                    <Icon bg="linear-gradient(#f156ba, #d858ca, #b45de3)"><TfiBell/></Icon>
                                    <Text>
                                        <h3>Notifications</h3>
                                        <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                    </Text>
                                </Note>
                                <Note>
                                    <Icon bg="linear-gradient(#5ec7e5, #779be7, #8a7ee9)"><TfiStar/></Icon>
                                    <Text>
                                        <h3>Favourites</h3>
                                        <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                    </Text>
                                </Note>
                            </Row1>
                            <Row2>
                                <Note>
                                    <Icon bg="linear-gradient(#fc6551, #f54a61, #f0346d)"><TfiCommentAlt/></Icon>
                                    <Text>
                                        <h3>24/7 Support</h3>
                                        <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                    </Text>
                                </Note>
                                <Note>
                                    <Icon bg="linear-gradient(#f255b8, #cc59d2, #b45de3)"><FaRegHeart/></Icon>
                                    <Text>
                                        <h3>Wishlist</h3>
                                        <p>Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit.</p>
                                    </Text>
                                </Note>
                            </Row2>
                        </Center>
                        <Buttom>
                            <Button>
                            Learn More
                            </Button>
                        </Buttom>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Work;
const ImgWrapper =styled.div`
    width: 100%;
    height: 750px;
    position: relative;
    z-index: -2;

    @media screen and (max-width: 1024px){
        height: 600px;
    }
    /* @media screen and (max-width: 500px){
        height: 600px;
    } */

`

const Button = styled.button`
color: #fff;
background-color: #e74c3c;
padding: 20px 40px;
border-radius: 40px;
border: 0;
font-size: 20px;
font-weight: 400;

@media screen and (max-width:768px){
    padding: 15px 35px;
    font-size: 15px;
}
`

const Buttom = styled.div`
width: 100%;
margin-top: 30px;
`

const Text = styled.div`
h3{
    font-size: 25px;
    font-weight: 600;

    @media screen and (max-width: 1024px){
        font-size: 20px;
    }
}

p{
    line-height: 30px;

    @media screen and (max-width: 1024px){
        font-size: 14px;
    }
}
`

const Icon = styled.div <{bg: string}>`
width: 120px;
height: 70px;
background: ${({bg}) =>bg};
border-top-right-radius: 50px;
border-top-left-radius: 50px;
border-bottom-left-radius: 45px;
margin-right: 30px;
margin-bottom: 30px;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 35px;

@media screen and (max-width: 1024px){
    margin-top: -20px;
    width: 120px;
    height: 55px;
    margin-right: 25px;
    font-size: 30px;
}
@media screen and (max-width: 768px){
   width: 70px;
   height: 55px;
   font-size: 25px
}
`

const Note = styled.div`
width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px){
        width: 100%;
    }

`

const Row2 = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Row1 = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
`

const Center = styled.div`
width: 100%;

`

const Top = styled.div`
margin-top: 70px;
width: 100%;
display: flex;
flex-direction: column;
h2{
    font-size: 40px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px){
        font-size: 35px;
        font-weight: 700;
    }

    span{
        font-weight: 700;
        font-size: 40px;
        color:#e74c3c;

        @media screen and (max-width: 1024px){
        font-size: 35px;
        font-weight: 700;
    }
    }
};

p{
    color: #a2a2a2;
    font-size: 18px;
    font-weight: 400;

    @media screen and (max-width: 1024px){
        font-size: 15px;
        line-height: 30px;
    }
}

`

const Img = styled.img<{ps: string, top:string, wd: string, left: string, Right: string, hi: string}>`
position: ${({ps}) => ps};
top: ${({top}) => top};
left: ${({left}) => left};;
Right: ${({Right}) => Right};;
width: ${({wd}) => wd};
height: ${({hi}) => hi};
object-fit: cover;
`

const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
width: 40%;
height: 100%;
margin-top: 120px;

@media screen and (max-width:768px){
        width: 50%;
    }
@media screen and (max-width:500px){
        width: 100%;
    }
`

const Right = styled.div`
width: 55%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width: 768px){
    width: 100%;
}
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
/* align-items: center; */
justify-content: space-between;
flex-wrap: wrap;

@media screen and (max-width: 1024px){
  width: 98%;
}
@media screen and (max-width: 500px){
  width: 95%;
}
`

const Container = styled.div`
padding: 100px 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 1024px){
    padding: 40px 0;
}
`