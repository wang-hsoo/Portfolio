import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    padding: 50px;
`
const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled.div`
    width: 100%;
    font-size: 50px;
`
const GraphBox = styled.div`
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
   

    &>div{
       
        height: 20px;
        border-radius: 20px;
        background-color: #6da1f5;
        margin: 0;
    }

`

function Stact(){

    return(
        <Wrapper>
            <Container>
                <Title>Stact</Title>
                <GraphBox>
                    <Graph>
                        <Name>Html / Css</Name>
                        <GraphList>
                            <div style={{"width":"70%"}} />
                        </GraphList>
                    </Graph>
                    <Graph>
                        <Name>JavaScript</Name>
                        <GraphList>
                            <div style={{"width":"40%"}} />
                        </GraphList>
                    </Graph>
                    <Graph>
                        <Name>React</Name>
                        <GraphList>
                            <div style={{"width":"40%"}} />
                        </GraphList>
                    </Graph>
                    <Graph>
                        <Name>TypeScript</Name>
                        <GraphList>
                            <div style={{"width":"35%"}} />
                        </GraphList>
                    </Graph>
                    <Graph>
                        <Name>Redux</Name>
                        <GraphList>
                            <div style={{"width":"15%"}} />
                        </GraphList>
                    </Graph>
                    <Graph>
                        <Name>Figma</Name>
                        <GraphList>
                            <div style={{"width":"20%"}} />
                        </GraphList>
                    </Graph>

                </GraphBox>
                
            </Container>

        </Wrapper>
    )
}

export default Stact;