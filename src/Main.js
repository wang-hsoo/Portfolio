import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation, useScroll, useSpring  } from "framer-motion";
import Stact from "./Stact";
import Myinfo from "./Myinfo";
import Project from "./Project";
import NavBar from "./NavBar";

const Wrapper = styled.div`
    width: 100vw;
    height: 400vh;
`



const Loading = styled(motion.div)`
    width: 100%;
    height: 100vh;
    background-color: #333333;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & >div{
        width: 100%;
    }
`

const A = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 150px;
    background-color: #333333;
`

const Hello = styled(motion.div)`
    color: #ffffff;
    font-size: 40px;
    display: inline-block;
`

const ProgressBar = styled(motion.div)`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: #ffffff;
    transform-origin: 0%;
`

const boxVariants = {
    initial: {
      opacity: 1,
      scale: 1,
      y: -200
      
    },
    visible: {
      opacity: 1,
      scale:1,
      y: 300,
      transition:{
        duration: 0.7,
        delay: 1
      }
      
    },
    leaving: {
      opacity: 0,
      scale: 0,
    }
  }

  const helloVariants = {
    initial:{
        scale: 1,
        y: -100,
    },
    animate:{
        scale: 1,
        y: 0,
        transition:{
            delay: 1,
            duration: 0.7,
        }
    }
  }

  const HelloVariants = {
    initial:{
        scale: 1,
        x : -120,
    },
    animate:{
        scale: 1,
        x: 0,
        transition:{
            delay: 1.5,
            duration: 1,
        }
    },
    leaving:{
        scale: 0,
        x: -100,
        duration: 2,

    }
  }

function Main(){
    const [showing , setShowing] = useState(true); 
    const [out, setOut] = useState(true); 
    const { scrollYProgress } = useScroll()
    setTimeout(()=>{setShowing(false)},2500)
    setTimeout(()=>{setOut(false)},6500)


    


    

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

  
    return (
        <Wrapper>
            <NavBar />
            <ProgressBar className="progress-bar" style={{ scaleX }} />
    
            
            
                {showing ?  <A  variants={boxVariants}  initial="initial" animate="visible" exit="leaving" layoutId="a" /> : null }
                {!showing ? 
                    <>
                        
                        <ProgressBar className="progress-bar" style={{ scaleX }} />
                        
                        <Loading layoutId="a">
                            <Hello variants={helloVariants}  initial="initial" animate="animate" >안녕하십니까</Hello>
                            <div>
                                <AnimatePresence>{out ? 
                                <Hello 
                                    layoutId="b"
                                    variants={HelloVariants}  
                                    initial="initial" 
                                    animate="animate"
                                    exit="leaving"
                                >
                                    신입
                                </Hello> : null}
                                </AnimatePresence>

                                <AnimatePresence>{!out ? 
                                <Hello 
                                    layout
                                    initial={{
                                        scale: 0,
                                        x: -800,
                                    }}
                                    animate={{
                                        scale: 1,
                                        x: 0,
                                        transition:{
                                            duration: 1,
                                        }
                                    }}>
                                    소통과 협업을 중요시 생각하고 성장을 즐기는
                                </Hello>: null}
                                </AnimatePresence>
                                
                                
                                <Hello
                                    layout
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        x: 10,
                                        transition:{
                                            delay: 1.7,
                                            duration: 1,
                                        }
                                    }}>
                                    프론트엔드 개발자
                                </Hello>
                            </div>
                            <Hello
                                initial={{
                                    scale: 1,
                                    x : -250,
                                }}
                                animate={{
                                    scale: 1,
                                    x: 0,
                                    transition:{
                                        delay: 2.5,
                                        duration: 1,
                                    }
                                }}>
                                왕현수입니다
                            </Hello>
                        </Loading>
                        <Myinfo />
                        <Stact />
                        <Project />
                    </>  
                     : null}
          
            
        </Wrapper>
    )
}

export default Main;