import styled from "styled-components";

//Image
import stars from '../../assets/space.png'

//Router
import { Link } from 'react-router-dom';

//ReactIcons
import { AiOutlineLeft } from "react-icons/ai";


export const Container = styled.div`
    height: 100%;
    width: 100%;

    padding: 0;
    margin: 0;

    overflow: hidden;
    background-size: cover;
    background-image: url(${stars});
`

export const Icon = styled(AiOutlineLeft)`
    color: #fff;
    background-color: #000;

    border: solid 3px #fff;

    padding: 8px;
`
export const LinkContainer = styled(Link)`
    position: absolute;
    top: 10px;
    left: 10px;
`