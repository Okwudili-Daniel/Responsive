import { styled } from "styled-components";
import react from "react"
import {LiaCommentSolid} from 'react-icons/lia'

const News = ()=>{
    return (
        <Container>
            <Wrapper>
            <Top>
                    <h2>APP'S <span>NEWS</span></h2>
                    <Shape>
                        <Circle/>
                        <Line/>
                        <Line1/>
                    </Shape>
                    <p style={{textAlign: 'center'}}>We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Top>
                    <Middle>
                        <Card>
                            <Icon></Icon>
                            <Holder>
                                    <Head>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p > 6447 Comments</p>
                                        </Hold>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p>Comments</p>
                                        </Hold>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p>Comments</p>
                                        </Hold>
                                    </Head>
                                    <h2 style={{margin: '5px'}}>A Sample Image Blog Goes Here</h2>
                                    <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is. Lorem ipsum dolor sit amet, consectetur adipiscing elit est i</p>
                                    <u>Read More</u>
                            </Holder>
                        </Card>
                        <Card>
                            <Icon></Icon>
                            <Holder>
                                    <Head>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p > 6447 Comments</p>
                                        </Hold>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p>Comments</p>
                                        </Hold>
                                        <Hold>
                                            <Icons><LiaCommentSolid style={{color: '#ED7569', fontSize: '20px'}}/></Icons>
                                            <p>Comments</p>
                                        </Hold>
                                    </Head>
                                    <h2 style={{margin: '5px'}}>A Sample Image Blog Goes Here</h2>
                                    <p style={{margin: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit est is. Lorem ipsum dolor sit amet, consectetur adipiscing elit est i</p>
                                    <u>Read More</u>
                            </Holder>
                        </Card>
                       
                    </Middle>
                    <Button>Load More Post</Button>

            </Wrapper>
        </Container>
      
    )
}

export default News;

const Button = styled.button`
padding: 20px 30px;
background-color:  #ED7569;
border-radius: 50px;
border: none;
color: white;
&:hover{
    background-color: black;
    transform: scale(1.05);
    cursor: pointer;
}`

const Icons = styled.div``
const Hold = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const Head = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-right: 0px;
width: 100%;
`
const Icon = styled.div`
width: 100px;
height: 50px;
border-radius: 100px;
box-shadow: 4px 4px 4px  #aaaaaa;
background-color: purple;
`
const Holder = styled.div`
display: flex;
justify-content: center;
align-items: left 0;
flex-direction : column;
margin-left: 20px;
`
const Card = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 30px;
/* background-color: red; */
gap: 10px;
/* width: 50%; */
flex-wrap: wrap;


`
const Middle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`