import React from 'react';
import {ArrowButton, BigTitle, FlexColumn, Wrapper} from "./shared-components";
import arrow from "../images/icons/Arrow_green_animated2.gif"
import { Link } from "react-router-dom";

function Start() {
    return (
        <FlexColumn className="intro">
            <Wrapper>
                <BigTitle>
                    Starting with...
                </BigTitle>
            </Wrapper>
            <Link to={"/movies/1984"}>
                <ArrowButton src={arrow} />
            </Link>
        </FlexColumn>
    )
}

export default Start;