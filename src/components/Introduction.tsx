import React from 'react';
import { ArrowButton, FlexColumn, MediumTitle, Wrapper } from "./shared-components";
import arrow from "../images/icons/Arrow_green_animated2.gif"
import { Link } from "react-router-dom";

function Introduction() {
    return (
        <FlexColumn className="intro">
            <Wrapper>
                <MediumTitle>
                    This year for your birthday I've curated a list of the top rated SciFi movies released for every year since you were born.
                </MediumTitle>
                <MediumTitle>
                    I thought it would be fun to watch them in release order, and look at how the themes change year to year, as well as the advancement of computer graphics over time.
                </MediumTitle>
            </Wrapper>
            <Link to={"/start"}>
                <ArrowButton src={arrow} />
            </Link>
        </FlexColumn>
    )
}

export default Introduction;