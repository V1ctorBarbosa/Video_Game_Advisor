import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    height: 100vh;
    width: 100vw;
    
    margin: auto;
    display: flex;
    flex-direction: column;

    button, label, input {
        font-family: 'Press Start 2P', cursive;
    }
`

export const Form = styled.form`
    display: flex;
    gap: 50px;

    margin: auto;
    padding: 1rem;
    background-color: #000000;
`
export const PreviewSection = styled.div``

export const AdvisePreview = styled.img``

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    font-size: 18px;
    color: #fff;
`

export const Input = styled.input`
    width: 200px;
    padding: 8px;
    font-size: 18px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    height: fit-content;
    width: fit-content;

    margin: 20px auto;
    padding: 10px 20px;
    font-size: 18px;

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

export const Error = styled.p``