import React from 'react'
import styled from "styled-components"
import { AiOutlineMail } from "react-icons/ai"
import { BiMenu, BiSearch } from "react-icons/bi"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Menu><BiMenu /></Menu>
        <Logo src='https://zozothemes.com/html/layer/demo/images/logo-color.png' />
        <Logo1 src ="https://zozothemes.com/html/layer/demo/images/logo-dark.png" />
        
        <Navhold>
          <Navs>Home</Navs>
          <Navs>Features</Navs>
          <Navs>How it works</Navs>
          <Navs>Screenshots</Navs>
          <Navs>Team</Navs>
          <Navs>News</Navs>
          <Navs>Extras+</Navs>
          <Icon><AiOutlineMail /></Icon>
        </Navhold>
        <Search><BiSearch /></Search>
      </Wrapper>
    </Container>
  )
}

export default Header
const Search = styled.div`
  font-size: 30px;
  color: gray;
  display: none;

  @media screen and (max-width:1024px){
    display: flex;
  }

  @media screen and (max-width:768px){
    font-size: 25px;
  }
`
const Menu = styled.div`
  font-size: 35px;
  color: black;
  cursor: pointer;
  display: none;

  @media screen and (max-width:1024px){
    display: flex;
  }
  @media screen and (max-width:768px){
    font-size: 25px;
  }
`
const Icon = styled.div`
  color: red;
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`
const Navs = styled.h4`
  text-transform: uppercase;
  color: #fff;
  margin-left: 30px;
`
const Navhold = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
const Logo = styled.img`
  height: 35px;

   @media screen and (max-width:1024px){
    display: none;
  }
`
const Logo1 = styled.img`
  height: 35px;
  display: none;

   @media screen and (max-width:1024px){
    display: flex;
  }
`
const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  /* z-index: -50; */
  
@media screen and (max-width: 1024px){
  width: 98%;
}
@media screen and (max-width: 500px){
  width: 95%;
}

`
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: center;
  position: fixed;

  @media screen and (max-width: 1024px){
  height: 60px;
  background-color: #fff;
}
`