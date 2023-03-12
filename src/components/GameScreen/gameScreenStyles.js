import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    height: 100vh;
    width: 100vw;
    
    margin: auto;
    display: flex;
    flex-direction: column;

    position: relative;

    button, div {
        font-family: 'Press Start 2P', cursive;
    }
`

export const NullImage = styled.div`
    margin: auto;
    cursor: pointer;
    color: #fff;
`

export const AdviseImage = styled.img`
    width: 500px;
    height: fit-content;
    max-height: 100%;

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1.5rem;

    border: solid 5px #ffffff;
    background-color: #000000;
`

export const Button = styled.button`
    width: max-content;
    height: fit-content;

    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1rem;

    font-weight: 600;
    font-size: 24px;
    cursor: pointer;

    background:#000;
    color: #fff;
    border: solid 3px #fff;

    transition: all .3s ease-out; 
    box-shadow: inset 0 -8px 0 0 rgba(0,0,0,.2),
        1px 1px 0 0 #fff,
        2px 2px 0 0 #fff,
        3px 3px 0 0 #fff,
        4px 4px 0 0 #fff,
        5px 5px 0 0 #fff,
        6px 6px 0 0 #fff,
        7px 7px 0 0 #fff,
        8px 8px 0 0 #fff,
        9px 9px 0 0 #fff,
        10px 10px 0 0 #fff,
        11px 11px 0 0 #fff,
        12px 12px 0 0 #fff;

    :active{
    border: solid 3px #fff;
    box-shadow: inset 0 -10px 0 0 rgba(0,0,0,.2),
        1px 1px 0 0 #fff,
        2px 2px 0 0 #fff,
        3px 3px 0 0 #fff,
        4px 4px 0 0 #fff,
        5px 5px 0 0 #fff;
    }
`