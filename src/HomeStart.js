import { animate, AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Loading = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    & > div{
        width: 100%;
    }
`
const Hello = styled(motion.div)`
    color: #ffffff;
    font-size: 40px;
    display: inline-block;
`

const Intro = styled(motion.div)`
    width: 100%;
    height: 80%;
    position: absolute;
    bottom: 0;
   
`

                
const Circle = styled(motion.div)`
        position: absolute;
        border-radius: 50%;
        background: #330c0c;
        animation: animate 2s linear infinite;
        margin: 0;
        
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to top, transparent, rgba(232, 38, 31, 0.4));
        background-size: 100px 180px;
        background-repeat: no-repeat;
        border-top-left-radius: 100px;
        border-bottom-left-radius: 100px;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 10px #ffffff,
                    0 0 20px #ffffff,
                    0 0 30px #ffffff,
                    0 0 40px #ffffff,
                    0 0 50px #ffffff,
                    0 0 60px #ffffff,
                    0 0 70px #ffffff,
                    0 0 80px #ffffff,
                    0 0 90px #ffffff,
                    0 0 100px #ffffff;
    }       
`

const Name = styled(motion.div)`
    margin: 0;
    display: inline-block;
`


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

  const CircleVariants = {
    initial:{
        scale: 1,
        opacity: 1
    },

    animate:{
        scale: 1,
        opacity: 1,
        transition:{
            delay: 4.5,
            duration: 4
        },
        top: 0,
        left: 0
    }
  }

  const NameVariants = {
    initial:{
        scale: 1,
        opacity: 1
    },
    animate: {
        scale: 2,
        transition:{
            delay: 8.5,
            duration: 2,
        },
        textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #000, 0 0 42px #000, 0 0 82px #000, 0 0 92px #000, 0 0 102px #000, 0 0 151px #000",
        x: 60,
        y: 40,
        marginRight: "120px"
    }

  }

  
function HomeStart(){
    const [out, setOut] = useState(true); 
    const [circleOut, setCircleOut] = useState(true);
    const [back, setBack] = useState([]);
    setTimeout(()=>{setOut(false)},3500)
    setTimeout(()=>{setCircleOut(false)},9300)


    
    useEffect(()=>{
        const backArray = [];

        

        for(let i = 0; i < 30; i++){
            const getRandomX = () => Math.random() * 1500;
            const getRandomY = () => Math.random() * 700;
            const randomRadius = () =>  Math.random() * 45;

            backArray.push({
                x: getRandomX(),
                y: getRandomY(),
                size: randomRadius()
            })
        }
        setBack(backArray);
    },[])
    

      

    return(
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
                    x : -300,
                }}
                animate={{
                    scale: 1,
                    x: 0,
                    transition:{
                        delay: 2.5,
                        duration: 1,
                    }
                }}>
                <Name 
                    layout="circle"
                    variants={NameVariants}  
                    initial="initial" 
                    animate="animate">왕현수 </Name>입니다
            </Hello>
                
                    <Intro className="back">
                        
                            {circleOut && 
                            back.map((value,idx) => (
                                <AnimatePresence>
                                    <Circle 
                                        
                                        variants={CircleVariants}  
                                        initial="initial" 
                                        animate="animate"
                                        key={idx} style={{"left" :`${value.x}px`,"top" :`${value.y}px`,"width" :`${value.size}px`,"height" :`${value.size}px`}} />
                                </AnimatePresence>
                            ))}
                        
                    </Intro>
               

        </Loading>
    )
}

export default HomeStart;