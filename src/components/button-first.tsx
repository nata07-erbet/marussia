import React from "react";
import styled from "styled-components";

const ButtonEl = styled.button`
background-color: #67a5eb;
border: none;
border-radius: 28px;
margin-top: 24px;
padding: 16px 48px;
width: 340px;
height: 56px;
font-family: 'Play', sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 133%;
color: #fff;
`;

type ButtonProps = {
    value: string;
};

function ButtonFirst ({ value }: ButtonProps) {
    return(
        <ButtonEl>{value}</ButtonEl>
    );
};

export { ButtonFirst }