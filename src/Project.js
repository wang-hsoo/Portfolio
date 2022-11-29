import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import momento from "./img/momento.png"
import fifa from "./img/fifa.png"
import film from "./img/film.png"
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
    display: grid;
    width: 70%;
    margin: 0;
    grid-template-columns: repeat( 2, 1fr);
    gap: 30px;
    position: relative;
    z-index: 5;

`

const Li = styled.div`
    font-size: 24px;
    width: 300px;
    padding: 20px 10px;
    border: 1px solid #ffffff;
    border-radius: 15px;
    cursor: pointer;
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
        scale: 1.5;
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
                                <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/Momentum-edd8f99c83db4b3fa4fa67b1634b6d7d" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/applyMomemto" target="_blank"><img src={github} /></a>
                                </LogoBox>
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
                                <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/Film-14ccdab023664e3b9d5be81b612da3fa" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/film" target="_blank"><img src={github} /></a>
                                </LogoBox>
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
                            <LogoBox>
                                    <a href="https://veil-form-0b0.notion.site/FIFASearch-ce11003a2ec74e1692528288dab05db5" target="_blank"><img src={notion} /></a>
                                    <a href="https://github.com/wang-hsoo/fifaInfo" target="_blank"><img src={github} /></a>
                            </LogoBox>
                        </SelectCon>
                        <SelectStact>
                            <div>팀구성 : 1인</div>
                            <div>역할 : 프론트엔드 개발자</div>
                            <div>사용 언어 : Html, Css, JavaScript, React, TypeScript</div>
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
                    <Li onClick={() => setProject('a')}>ApplyMomentum</Li>
                    <Li onClick={() => setProject('b')}>Film</Li>
                    <Li onClick={() => setProject('c')}>FifaSearch</Li>
                    <Li>Portfolio</Li>
                </ProjectLi>

            </ProjectList>

        </Wrapper>
    )
}

export default Project;