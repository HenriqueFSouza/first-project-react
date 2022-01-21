import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.isBack ? 'transparent' :  'rgb(0, 0, 0, 0.8)' };
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: ${props => props.isBack? '1px solid #ffff' : 'none'};
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer; 
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 136px;

    &:hover { 
        opacity: 0.9;
    }

    &:active{ 
        opacity: 0.7;
    } 
    img {${props => props.isBack && ' transform: rotateY( 180deg)'}} `