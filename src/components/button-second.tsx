import React from "react";
import styled from "styled-components";

const ButtonEl = styled.button`
background-color: #fff;
border: none;
border-radius: 28px;
margin-top: 4px;
padding: 16px 48px;
width: 340px;
height: 56px;
font-family: 'Play', sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 133%;
color: #000;
`;

type ButtonProps = {
    value: string;
};

function ButtonSecond ({ value }: ButtonProps) {
    return(
        <ButtonEl>{value}</ButtonEl>
    );
};

export { ButtonSecond }