import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    padding: 50px;
`
const Container = styled(motion.div)`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled(motion.div)`
    width: 100%;
    font-size: 50px;
`
const GraphBox = styled(motion.div)`
    width: 100%;
    height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`

const Graph = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
`

const Name = styled.div`
    margin-left: 0;
    width: 200px;
    font-size: 20px;
`

const GraphList = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    width: 80%;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
   

    &>div{
       
        height: 20px;
        border-radius: 20px;
        background-color: #6da1f5;
        margin: 0;
    }
`

const GraphBar = styled(motion.div)`

`
const HelloVariants = {
    initial:{
        x: 500,
        opacity: 0,
        scale: 0,
        
    },
    animate:{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1},
    },
  }

  const barVariatns={
    initial:{
        x: -1000,
        opacity: 1,
        scale: 1,
    },
    animate:{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 2, delay:0.5},
    },
    exit:{
        x: -1000,
        opacity: 0,
        scale: 1,

      }
  }

function Stact(){
    
    const { ref, inView, entry } = useInView();
    const helloAnimate = useAnimation();
    const varAnimate = useAnimation();


      useEffect(()=>{
        if(inView){
            helloAnimate.start("animate");
            varAnimate.start("animate");
        }
      },[inView])
      
  

    return(
        <Wrapper  >
            <Container ref={ref}>
                <AnimatePresence>
                {inView && <>
                    <Title 
                        variants={HelloVariants}
                        initial="initial"
                        animate={helloAnimate}
                        >Stact</Title>
                    <GraphBox>
                        <Graph>
                            <Name>Html / Css</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate} style={{"width":"60%"}} />
                            </GraphList>
                        </Graph>
                        <Graph>
                            <Name>JavaScript</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate} style={{"width":"40%"}} />
                            </GraphList>
                        </Graph>
                        <Graph>
                            <Name>React</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate} style={{"width":"40%"}} />
                            </GraphList>
                        </Graph>
                        <Graph>
                            <Name>TypeScript</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate} style={{"width":"35%"}} />
                            </GraphList>
                        </Graph>
                        <Graph>
                            <Name>Redux</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate}  style={{"width":"15%"}} />
                            </GraphList>
                        </Graph>
                        <Graph>
                            <Name>Figma</Name>
                            <GraphList>
                                <GraphBar 
                                    variants={barVariatns}
                                    initial="initial"
                                    animate={helloAnimate}  style={{"width":"20%"}} />
                            </GraphList>
                        </Graph>

                    </GraphBox>
                </>}
                </AnimatePresence>
            </Container>

        </Wrapper>
    )
}

export default Stact;