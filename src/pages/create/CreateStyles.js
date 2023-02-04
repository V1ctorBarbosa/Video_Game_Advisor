import styled from "styled-components";

//Image
import stars from '../../assets/space.png'

export const Container = styled.div`
    height: 100%;
    width: 100%;

    padding: 0;
    margin: 0;

    overflow: hidden;
    background-size: cover;
    background-image: url(${stars});
`