import styled from "styled-components";

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em;
`

export const FlexColumnTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const BigTitle = styled.h1`
  width: 80%;
  font-size: 3em;
  text-shadow: 2px 2px blue;
`;

export const MediumTitle = styled.h1`
  width: 80%;
  font-size: 2em;
  text-shadow: 1px 1px blue;
  
`;

export const ArrowButton = styled.img`
  margin: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`

export const Icon = styled.img<{size:number}>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    padding-right: 10px;
`

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: rgb(252,255,251);
    height: 400px;
    width: 600px;
    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 300px rgb(249,249,249);
    border-radius: 25px;
`;