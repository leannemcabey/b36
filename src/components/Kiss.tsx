import React from 'react';
import {ArrowButton, FlexColumn, Icon, Wrapper} from "./shared-components";
import kiss from "../images/icons/kiss-emoji.gif"
import arrow from "../images/icons/Arrow_green_animated2.gif";
import { Link } from "react-router-dom";

function Kiss() {
    return (
        <FlexColumn>
            <Wrapper>
                <Icon src={kiss} size={300}/>
            </Wrapper>
            <Link to={"/movies/1984"}>
                <ArrowButton src={arrow} />
            </Link>
        </FlexColumn>
    )
}

export default Kiss;