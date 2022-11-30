import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, useScroll, useSpring  } from "framer-motion";
import Stact from "./Stact";
import Myinfo from "./Myinfo";
import Project from "./Project";
import HomeStart from "./HomeStart";
import home from "./img/home.png";
import user from "./img/user.png";
import skill from "./img/skill.png";
import project from "./img/project.png";

const Wrapper = styled.div`
    width: 100vw;
    height: 400vh;
`





const A = styled(motion.div)`
    width: 200px;
    height: 200px;
    border-radius: 150px;
    background-color: #333333;
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

const NavBox = styled.div`
    width: 50px;
    height: 200px;
    background-color: #b5b5b5;
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 25px;
    border-radius: 10px 0 0 10px;

    & > div:nth-child(1){
        border-radius: 10px 0 0 0;
    }
    & > div:nth-child(4){
        border-radius: 0 0 0 10px;
    }
    
`
const Btn = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > img{
        width: 35px;
        height: 35px;
    }
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



function Main(){
    const [showing , setShowing] = useState(true); 
    const { scrollYProgress } = useScroll();
    setTimeout(()=>{setShowing(false)},2500);

    const navigation = [
        useMoveScroll(home),
        useMoveScroll(user),
        useMoveScroll(skill),
        useMoveScroll(project),

    ];


    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
      
  
      return (
        <Wrapper>
            
            
            {/* {showing ?  
            <A  variants={boxVariants}  initial="initial" animate="visible" exit="leaving" layoutId="a" /> 
            :  */}
                <>
                    <ProgressBar className="progress-bar" style={{ scaleX }} />
                    <NavBox>
                        {navigation.map((tab, index)=>(
                            <Btn onClick={tab.onMoveTOElement}><img src={tab.img} /></Btn>
                        ))}      
                    </NavBox>
                    <div ref={navigation[0].element}>
                        <HomeStart />
                    </div>
                    <div ref={navigation[1].element}>
                        <Myinfo />
                    </div>
                    <div ref={navigation[2].element}>
                        <Stact />
                    </div>
                    <div ref={navigation[3].element}>
                        <Project />
                    </div>
                </>  
            
        
          
            
        </Wrapper>
    )           
}

export default Main;


function useMoveScroll(img){
    const element = useRef(null);
    const onMoveTOElement = () => {
        element.current?.scrollIntoView({behavior: "smooth", block: 'start'});
    };

    return {element, onMoveTOElement,img};
}