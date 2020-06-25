import React from 'react';
import { ArrowButton, BigTitle, FlexColumn, Wrapper } from "./shared-components";
import arrow from "../images/icons/Arrow_green_animated2.gif"
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <FlexColumn className="welcome">
            <Wrapper>
                <BigTitle>
                    CONGRATULATIONS ON ANOTHER SUCCESSFUL ORBIT AROUND THE SUN!
                </BigTitle>
            </Wrapper>
            <Link to={"/intro"}>
                <ArrowButton src={arrow} />
            </Link>
        </FlexColumn>
    )
}

export default Welcome;