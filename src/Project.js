import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import momento from "./img/momento.png"
import fifa from "./img/fifa.png"
import film from "./img/film.png"
import portfolio from "./img/portfolio.png"
import shingu from "./img/shingu.png"
import notion from "./img/notion.png"
import github from "./img/github.png"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #222222;
    display: flex;
`

const ProjectInfo = styled.div`
    width: 50vw;
    height: 100vh;
`

const SelectPro = styled(motion.div)`
    width: 50vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 0 50px 30px;
    position: absolute;
    
    
    div{
        margin: 0;
    }
`
const ProjectList = styled.div`
    width: 50vw;
    height: 100%;
    padding: 50px;
    background-color: #222222;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-bottom: 30px;

    & >div{
        width: 30px;
        border-bottom: 4px solid #ffffff;
        margin: 0;
        margin-bottom: 10px;
    }
    & > h1{
        font-size: 50px;
        margin: 0;
    }
`

const ProjectLi = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0;
    position: relative;
    z-index: 5;
    margin: 0;
    width: 100%;
    align-items: flex-start;
`

const Li = styled.div`
    font-size: 24px;
    width: 75%;
    padding: 20px 10px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    cursor: pointer;
    margin: 0;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div{
        margin-left: 0;
    }
`

const SelectTitle = styled.div`
    font-size: 50px;
`
const SelectCon = styled.div`
    width: 70%;
    margin-top: 20px !important;
    display: flex;
    justify-content: flex-start;
    & > div{
        font-size: 30px;
        margin-right: 50px;
    }
`

const LogoBox = styled.div`
    display: flex;
    margin: 0;
    & > a{
        width: 36px;
        height: 36px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    & > a:hover{
        scale: 1.2;
        transition: scale .3s;
        background-color: #ffffff;
    }

    & > a > img{
            height: 30px;
        }
`

const SelectStact = styled.div`
    display: flex;
    margin-top: 20px !important;
    & > div{
        font-size: 18px;
        margin-right: 20px;
    }
`

const projectVariants = {
    entry:{
        x: 500,
        opacity: 0,
        scale: 1,
        transition: { duration: 3, },
      },
      center: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      exit:{
        x: -1000,
        opacity: 0,
        scale: 1,

      }
  }

function Project(){
    const [project, setProject] = useState("a");

    return(
        <Wrapper>
            <ProjectInfo>
                <AnimatePresence>
                    {project === 'a' ? <SelectPro 
                        layout
                        variants={projectVariants}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key="momento"
                        style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${momento})`}}>
                            <SelectTitle>Momento</SelectTitle>
                            <SelectCon>
                                <div>나만의 메모장</div>
                            </SelectCon>
                            <SelectStact>
                                <div>팀구성 : 1인</div>
                                <div>역할 : 프론트엔드 개발자</div>
                                <div>사용 언어 : Html, Css, JavaScript</div>
                            </SelectStact>
                    </SelectPro> : null}
                </AnimatePresence>

                <AnimatePresence>
                    {project === 'b' ? <SelectPro 
                        layout
                        variants={projectVariants}
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key="filme"
                        style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${film})`}}>
                            <SelectTitle>Film</SelectTitle>
                            <SelectCon>
                                <div>현재 상영중인 영화 추천 사이트</div>
                            </SelectCon>
                            <SelectStact>
                                <div>팀구성 : 3인</div>
                                <div>역할 : PM, 프론트엔드 개발자</div>
                                <div>사용 언어 : Html, Css, JavaScript, React</div>
                            </SelectStact>
                    </SelectPro> : null}
                </AnimatePresence>
                
                <AnimatePresence>
                {project === "c" &&
                    <SelectPro 
                        layoutId="project"
                        variants={projectVariants}  
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key="fifa"
                        style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${fifa})`}}>
                        <SelectTitle>Fifa Search</SelectTitle>
                        <SelectCon>
                            <div>넥슨 피파 유저 검색 사이트</div>
                        </SelectCon>
                        <SelectStact>
                            <div>팀구성 : 1인</div>
                            <div>역할 : 프론트엔드 개발자</div>
                            <div>사용 언어 : Html, Css, JavaScript, React, TypeScript</div>
                        </SelectStact>
                    </SelectPro>}
                </AnimatePresence>

                <AnimatePresence>
                {project === "d" &&
                    <SelectPro 
                        layoutId="project"
                        variants={projectVariants}  
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key="fifa"
                        style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${shingu})`}}>
                        <SelectTitle>Shingu QnA</SelectTitle>
                        <SelectCon>
                            <div>신구대학교 문의 및 민원 사이트</div>
                        </SelectCon>
                        <SelectStact>
                            <div>팀구성 : 3인</div>
                            <div>역할 : PM, 프론트엔드 개발자</div>
                            <div>사용 언어 : Html, Css, JavaScript, React, TypeScript</div>
                        </SelectStact>
                    </SelectPro>}
                </AnimatePresence>

                <AnimatePresence>
                {project === "e" &&
                    <SelectPro 
                        layoutId="project"
                        variants={projectVariants}  
                        initial="entry"
                        animate="center"
                        exit="exit"
                        key="fifa"
                        style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${portfolio})`}}>
                        <SelectTitle>Portfolio</SelectTitle>
                        <SelectCon>
                            <div>왕현수 포트폴리오 사이트</div>
                        </SelectCon>
                        <SelectStact>
                            <div>팀구성 : 1인</div>
                            <div>역할 : 프론트엔드 개발자</div>
                            <div>사용 언어 : Html, Css, JavaScript, React</div>
                        </SelectStact>
                    </SelectPro>}
                </AnimatePresence>
            </ProjectInfo>

            <ProjectList>
                <Title>
                    <h1>Project</h1>
                    <div />
                </Title>
                <ProjectLi>
                    <Li onClick={() => setProject('a')}>
                        <div>ApplyMomentum</div>
                        <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/Momentum-edd8f99c83db4b3fa4fa67b1634b6d7d" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/applyMomemto" target="_blank"><img src={github} /></a>
                        </LogoBox>
                    </Li>
                    <Li onClick={() => setProject('b')}>
                        <div>Film</div>
                        <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/Film-14ccdab023664e3b9d5be81b612da3fa" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/film" target="_blank"><img src={github} /></a>
                        </LogoBox>
                    </Li>
                    <Li onClick={() => setProject('c')}>
                        <div> FifaSearch</div>
                        <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/FIFASearch-ce11003a2ec74e1692528288dab05db5" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/fifaInfo" target="_blank"><img src={github} /></a>
                        </LogoBox>
                    </Li>
                    <Li onClick={() => setProject('d')}>
                        <div>Shingu QnA</div>
                        <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/ShinguQnA-c0fd0f184b9844bc828ff1ae61d16a9c" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/shingu" target="_blank"><img src={github} /></a>
                        </LogoBox>
                    </Li>
                    <Li onClick={() => setProject('e')}>
                        <div>Portfolio</div>
                        <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/Portfolio-7dac9a6e3203404785b4d1a6475c2f3d" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/Portfolio" target="_blank"><img src={github} /></a>
                        </LogoBox></Li>
                </ProjectLi>

            </ProjectList>

        </Wrapper>
    )
}

export default Project;