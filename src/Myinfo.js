import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import my from "./img/my.jpg"

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #222222; 
    display: flex;
    align-items: center;
`

const Container = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Info = styled.div`
    width: 40%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px solid #ffffff;
`

const Img = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 150px;
    background-color: #ffffff;
    background-position: center;
    background-size: cover;
    margin-bottom: 30px;
`

const Name= styled.div`
    font-size: 35px;
    margin-bottom: 30px;

    & > div:nth-child(2){
        width: 50px;
        border-bottom: 2px solid #ffffff;
        margin-top: 10px;
    }
`

const Etc = styled.div`
    font-size: 20px;
    margin-bottom: 30px;
`

const Answer = styled.div`
    width: 60%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const List = styled(motion.div)`
    width: 80%;
    border-radius: 15px;
    background-color: #6C6C6C;
    font-size: 23px;
    padding: 40px 20px;
    cursor: pointer;
`

const Qna = styled(motion.div)`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ListQna= styled(motion.div)`
    width: 800px;
    height: 400px;
    background-color: #333333;
    border-radius: 15px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;

    & > div:nth-child(1){
        width: 100%;
        font-size: 35px;
        margin-bottom: 15px;
    }

    & > div{
        width: 80%;
        font-size: 20px;
        margin: 0;
        margin-bottom: 10px;
    }
`

function Myinfo(){
    const [selectId, setSelectId] = useState(null);

    return(
        <Wrapper>
            <Container>

            
                <Info>
                    <Img style={{"backgroundImage" : `url(${my})`}} />
                    <Name>
                        <div>왕현수</div>
                        <div />
                    </Name>
                    <Etc>1999. 11. 03</Etc>
                    <Etc>010 - 9357 - 4873</Etc>
                    <Etc>신구대학교 IT소프트웨어과</Etc>
                </Info>
                <Answer>
                        <List layoutId="A" onClick={()=>setSelectId("A")}># 축구선수부터 개발자까지</List>
                        <List layoutId="B" onClick={()=>setSelectId("B")}># 프론트엔드 개발을 선택한 이유</List>
                        <List layoutId="C" onClick={()=>setSelectId("C")}># 개발자로서 향후 목표</List>
                </Answer>
                <AnimatePresence>
                    

                    {selectId && 
                    <Qna>
                        {selectId === 'A' && <ListQna layoutId="A" onClick={()=>setSelectId(null)} >
                            <div># 축구선수부터 개발자까지</div>
                            <div>저는 중학교부터 고 1때까지 축구부 활동을 했었습니다.</div>
                            <div>남들보다 늦게시작한 만큼 실력을 키우는데 어려움이 있었고 그저 즐겁기만 하던 축구를 순수하게 즐길 수 없었습니다.</div>
                            <div>결국 축구를 그만두었고 대학교에 진학했습니다. 대학교에 와서 배운 공부들은 너무 재밌었으며 더 잘하고 싶었습니다</div>
                            <div>코딩을 잘하고 싶었기에 꾸준히 공부를 해나갔고 개발 공부는 축구와는 다르게 공부를 할수록 더 즐길 수 있었습니다.</div>   
                        </ListQna>}
                        {selectId === 'B' && <ListQna layoutId="B" onClick={()=>setSelectId(null)} >
                            <div># 프론트엔드 개발을 선택한 이유</div>  
                            <div>대학교에 와서 처음 공부를 했을 때 모든게 신기했고 재밌었습니다.</div>  
                            <div>하지만 그 중에서 HTML/CSS는 내가 만든것을 화면으로 직접적으로 볼 수 있는게 좋았습니다.</div>
                            <div>그렇게 프론트를 좀 더 집중적으로 공부 하게 되었고 실력이 늘고 할 수 있는게 많아질수록 프론트에 더 빠져들게 되었습니다.</div>
                        </ListQna>}
                        {selectId === 'C' && <ListQna layoutId="C" onClick={()=>setSelectId(null)} >
                            <div># 개발자로서 향후 목표</div>
                            <div>저는 현재 개발이 재밌고 잘하고 싶어 개발자를 희망하고 있습니다</div>
                            <div>하지만 기획도 관심있으며 한 프로젝트에 전체적인 부분에 관여할 수 있는 PM에 매력을 느끼고 있습니다</div>
                            <div>그렇기 때문에 프론트, 백엔드, 모바일 등 여러 분야를 차근차근 공부하며 성장해 최종적으로 PM이 되는것이 목표입니다.</div>
                        </ListQna>}

                    </Qna>}
                </AnimatePresence>
            
            </Container>
        </Wrapper>
    )
}

export default Myinfo;