import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    height: 100vh;
    width: 100vw;
    
    margin: auto;
    display: flex;
    flex-direction: column;

    button, div {
        font-family: 'Press Start 2P', cursive;
    }
`
export const Top = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
`

export const NullImage = styled.div`
    margin: auto;
    cursor: pointer;
`

export const AdviseImage = styled.img`
    width: 500px;
    height: fit-content;
    max-height: 100%;
    margin: auto;
`

export const Bottom = styled.div`
    height: 30%;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: max-content;
    height: fit-content;
    margin: auto;
    padding: 1rem;

    border: solid 3px #fff;
    background-color: #000;
    color: #fff;

    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
`