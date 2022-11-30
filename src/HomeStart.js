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
const SvgBox = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 90%;
`
const SVG = styled.svg`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 69%;
    transform: scaleX(-1);
    path{
      stroke:white;
      stroke-width:2;
    }
`
const svg = {
    start: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)"
    },
    end: {
      fill: "rgba(0,0,0,1)",
      pathLength: 1,
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
        scale: 1,
        transition:{
            delay: 8.5,
            duration: 2,
        },
        textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #000, 0 0 42px #000, 0 0 82px #000, 0 0 92px #000, 0 0 102px #000, 0 0 151px #000",
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
                        
                            {circleOut ?
                            back.map((value,idx) => (
                                <AnimatePresence>
                                    <Circle 
                                        
                                        variants={CircleVariants}  
                                        initial="initial" 
                                        animate="animate"
                                        key={idx} style={{"left" :`${value.x}px`,"top" :`${value.y}px`,"width" :`${value.size}px`,"height" :`${value.size}px`}} />
                                </AnimatePresence>
                            )): <SvgBox>
                            <SVG version="1.0" 
                                viewBox="0 0 1920.000000 1080.000000"
                                >
                                <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <motion.path
                                    variants={svg}
                                    initial="start"
                                    animate="end"
                                    transition={{
                                        default: {duration: 5},
                                        fill: {duration:3, delay: 2},
            
                                    }}
            
                                    d="M10547 8561 c-26 -3 -48 -10 -49 -16 -1 -5 -19 -16 -39 -23 -20 -6
                                -57 -23 -81 -37 -23 -14 -57 -25 -75 -25 -53 0 -62 -7 -53 -42 8 -25 5 -33
                                -16 -53 -29 -27 -64 -91 -64 -116 0 -9 15 -26 34 -37 33 -20 34 -21 39 -104 2
                                -45 8 -93 12 -105 5 -16 3 -23 -6 -23 -14 -1 -89 -107 -89 -127 0 -5 18 -17
                                40 -26 32 -12 40 -21 40 -40 0 -13 6 -30 14 -36 35 -29 55 -88 49 -143 -4 -45
                                -2 -56 16 -75 19 -20 32 -23 91 -23 45 0 70 -4 70 -11 0 -6 14 -29 32 -51 30
                                -39 31 -41 13 -54 -10 -8 -29 -14 -40 -14 -39 0 -75 -66 -75 -137 0 -25 -13
                                -50 -49 -97 -63 -83 -75 -142 -60 -293 6 -58 7 -117 4 -131 -4 -15 -8 -38 -10
                                -52 -16 -189 -37 -389 -42 -405 -3 -11 -10 -92 -14 -180 -4 -88 -12 -209 -17
                                -270 -11 -119 -9 -130 39 -331 31 -130 35 -164 19 -180 -24 -24 -81 -194 -90
                                -269 -10 -78 -11 -81 -58 -125 -48 -45 -104 -129 -137 -205 -9 -22 -21 -47
                                -26 -55 -5 -8 -13 -25 -18 -37 -6 -11 -22 -35 -38 -52 -15 -16 -45 -52 -66
                                -78 -20 -26 -67 -87 -105 -134 -37 -47 -102 -126 -146 -175 -120 -135 -157
                                -191 -188 -279 -31 -88 -36 -167 -15 -218 15 -35 163 -230 180 -236 6 -2 22
                                -15 36 -30 14 -14 64 -59 111 -100 118 -105 125 -112 240 -241 128 -144 168
                                -188 252 -277 53 -58 69 -83 83 -130 27 -94 72 -160 122 -179 23 -9 48 -24 56
                                -33 22 -25 30 -163 12 -198 -8 -15 -15 -36 -15 -46 0 -21 -25 -71 -51 -106
                                -23 -28 -24 -51 -4 -51 8 0 19 -9 25 -21 10 -17 7 -27 -14 -58 -14 -20 -26
                                -42 -26 -49 0 -20 -90 -70 -168 -94 -80 -24 -95 -40 -90 -91 3 -29 7 -32 38
                                -35 66 -7 294 38 400 79 120 46 137 55 205 104 134 99 147 100 174 8 11 -38
                                36 -106 55 -152 l35 -83 -24 -49 c-30 -58 -32 -102 -6 -128 15 -15 18 -32 17
                                -85 -1 -60 -3 -66 -22 -66 -24 0 -34 -17 -34 -57 0 -14 -17 -47 -40 -75 -22
                                -28 -40 -59 -40 -68 0 -10 -16 -37 -35 -61 -20 -23 -40 -50 -46 -60 -5 -11
                                -20 -19 -33 -19 -13 0 -40 -7 -59 -15 -22 -9 -68 -15 -117 -15 -76 0 -81 -1
                                -92 -25 l-11 -25 -306 2 -306 3 -3 385 c-1 211 -6 388 -11 393 -5 5 -272 12
                                -593 16 l-583 6 0 420 0 420 -587 3 -588 2 0 419 c0 384 -1 419 -17 425 -9 4
                                -292 6 -627 6 l-611 -2 -5 394 c-3 216 -7 394 -8 395 -1 2 -271 4 -599 5
                                l-598 3 -3 385 c-2 212 -7 389 -12 394 -4 4 -270 11 -589 14 -410 3 -581 8
                                -583 16 -1 6 -2 196 -2 421 l-1 410 -585 5 -585 5 -3 414 c-2 317 -5 417 -15
                                423 -6 5 -289 8 -627 7 l-615 -1 -5 394 c-3 216 -7 394 -8 396 -1 1 -270 2
                                -597 2 -327 0 -596 1 -597 3 -1 1 -4 178 -7 392 l-6 390 -112 3 -113 3 0 -784
                                0 -784 460 -314 c253 -173 515 -352 582 -398 68 -46 206 -139 308 -208 311
                                -208 863 -583 1490 -1011 173 -119 356 -243 405 -277 50 -34 290 -198 535
                                -365 245 -167 508 -347 585 -399 171 -117 707 -483 888 -606 72 -50 296 -203
                                497 -339 201 -137 412 -282 470 -321 58 -40 110 -74 116 -76 11 -4 355 -237
                                589 -399 33 -23 310 -212 615 -420 730 -498 1020 -695 1442 -984 81 -56 197
                                -135 258 -176 295 -201 586 -400 597 -410 8 -7 408 -10 1268 -10 l1255 0 0 55
                                0 55 -627 2 -628 3 0 369 0 369 91 37 c50 20 105 37 123 38 36 1 267 75 324
                                103 40 21 46 41 23 74 -30 44 -117 227 -113 239 3 6 -4 30 -15 51 -11 22 -24
                                56 -28 75 -5 19 -15 60 -23 90 -8 30 -18 121 -22 201 -6 140 -19 221 -65 409
                                -12 47 -25 105 -31 130 -5 25 -18 77 -30 115 -11 39 -27 95 -36 125 -57 207
                                -95 320 -116 350 -9 13 -17 36 -17 51 0 14 -8 37 -18 50 -10 13 -23 36 -30 52
                                -6 15 -19 27 -27 27 -11 0 -14 6 -9 24 3 13 1 27 -5 31 -8 4 -8 12 -1 26 14
                                25 -4 125 -26 150 -11 12 -15 29 -11 51 9 58 28 171 39 233 5 33 16 96 23 140
                                8 44 21 116 29 160 20 102 35 214 45 340 12 142 29 205 63 238 15 15 28 33 28
                                39 0 7 9 21 20 33 11 12 34 48 51 81 18 32 40 75 50 94 11 19 19 47 19 62 0
                                25 3 27 28 22 l29 -6 2 149 c1 81 -5 195 -12 253 -10 79 -13 205 -10 500 3
                                409 -3 554 -37 790 -11 74 -25 205 -30 290 -15 217 -57 413 -112 523 -10 21
                                -58 77 -106 125 -103 103 -121 128 -146 205 -11 32 -28 65 -39 72 -15 10 -17
                                17 -8 27 49 59 63 84 86 144 85 225 95 300 56 404 -34 88 -134 210 -173 210
                                -8 0 -23 9 -33 20 -9 10 -34 25 -54 31 -20 7 -45 18 -56 25 -20 15 -151 17
                                -248 5z m-173 -4560 c15 -23 45 -250 50 -378 4 -78 13 -186 21 -239 24 -157
                                21 -162 -41 -66 -20 31 -45 69 -55 84 -11 15 -19 30 -19 34 0 13 -113 148
                                -198 237 -21 21 -53 46 -72 55 -19 10 -35 24 -35 32 0 8 22 25 49 38 26 12 86
                                55 133 95 132 113 155 128 167 108z"/>
                                <path d="M10360 2019 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0
                                -10 -5 -10 -11z"/>
                                </g>
                                </SVG>
                            </SvgBox>}
                        
                    </Intro>
               

        </Loading>
    )
}

export default HomeStart;