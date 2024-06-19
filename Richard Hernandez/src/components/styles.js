import styled from "styled-components";

export const Container = styled.div`
    background-color: #1e041e;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    color: #e9e9e9;
    font-family: sans-serif;
    & h1{
        font-size:50px;
        text-align: center;
    }
    & h2{
        font-size:20px;
        text-align: center;
    }
`

export const Search = styled.div`
    margin: 40px;
    & input{
        height: 35px;
        border: none;
        border-radius: 10px 0px 0px 10px;
        padding-left: 10px;
    }
    & input:active{
        border: none;
    }
    & button{
        height: 37px;
        border: none;
        border-radius: 0px 10px 10px 0px;
        font-weight: 700;
        width: 90px;
        background-color: #05041e;
        color: #ffffff;
    }
    & button:hover{
        background-color: #05041e;
        color: #ffffff;
        transition: 0.5s;
    }

`

export const RenderPersonaje = styled.div`

    background-color: #05041e;
    padding: 10px;
    border-radius: 20px;
    text-align: center;

`