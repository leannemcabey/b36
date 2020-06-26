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
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const BigTitle = styled.h1`
  max-width: 80%;
  font-size: 3em;
  text-shadow: 2px 2px blue;
  
  @media (max-width: 500px) {
    font-size: 30px;
  }
 
`;

export const MediumTitle = styled.h1`
  width: 80%;
  font-size: 2em;
  text-shadow: 1px 1px blue;
  
  @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const ArrowButton = styled.img`
  margin: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  
  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
  }
`

export const Icon = styled.img<{size:number}>`
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    padding-right: 10px;
    
    @media (max-width: 500px) {
        height: 30px;
        width: 30px;
    }
`

export const Wrapper = styled.section`
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    background-color: rgb(252,255,251);
    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 300px rgb(249,249,249);
    border-radius: 25px;
    height: 400px;
    max-width: 600px;
    width: 600px;
    
    @media (max-width: 500px) {
        margin-top: 100px;
        height: 300px;
        width: 100%;
        min-width: 280px;
    }
`;