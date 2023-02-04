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

export const AdvisePreview = styled.img``

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin: auto;
    padding: 1rem;
    background-color: #000000;
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

    margin: auto;
    padding: 10px 20px;

    border: solid 3px #fff;

    background-color: #000000;
    color: #FFFFFF;
    font-size: 18px;
`

export const Error = styled.p``