import styled from 'styled-components'
import Background from './../../assets/background.svg'

export const Containers = styled.div`
    background: url("${Background}") ;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

export const Image = styled.img`
    margin-top: 30px;

`


export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: #EEEEEE;

    line-height: 22px;
    margin-left: 25px;

`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;

    border: none;
    outline: none;

    padding-left: 25px; 
    margin-bottom: 34px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
`



