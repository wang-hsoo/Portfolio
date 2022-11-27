import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import momento from "./img/momento.png"

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

const SelectPro = styled.div`
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
`
const ProjectList = styled.div`
    width: 50vw;
    height: 100%;
    padding: 50px;
`

function Project(){

    return(
        <Wrapper>
            <ProjectInfo>
                <SelectPro style={{"backgroundImage" : `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${momento})`}}>
                    
                </SelectPro>
            </ProjectInfo>

            <ProjectList>
                <h1>Project</h1>
                <div>
                    <div>ApplyMomentum</div>
                    <div>Film</div>
                    <div>FifaSearch</div>
                    <div>Portfolio</div>
                </div>

            </ProjectList>

        </Wrapper>
    )
}

export default Project;