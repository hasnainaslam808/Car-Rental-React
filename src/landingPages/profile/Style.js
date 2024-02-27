import styled from "styled-components";

export const FormDiv = styled.div`
.label{
color: #1A202C;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 600;
line-height: 24px;
word-wrap: break-word
}
.error-para{
    color: red;
    font-size: 12px;
font-family: Plus Jakarta Sans;
line-height: 24px;
word-wrap: break-word
}
.input-relative{
    position: relative;
}
.cross{
    position: absolute;
    top: 58px;
    right: 23px;

}
.input{
    width: 100%;
    border: 0;
    border-radius: 5px;
    height: 48px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
    color: #90A3BF;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 500;
line-height: 21px;
word-wrap: break-word;
padding: 10px;
outline: none;
}
.phone-input{
    width: 56%;
    border: 0;
    border-radius: 5px;
    height: 48px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
    color: #90A3BF;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 500;
line-height: 21px;
word-wrap: break-word;
padding: 10px;
outline: none;

@media (max-width: 768px) {
    width: 80%;
}

@media (max-width: 425px) {
    width: 82%;
}
}
.check-input{
    width: 40%;
    border: 0;
    border-radius: 5px;
    height: 48px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
    color: #90A3BF;
    font-size: 14px;
    font-family: Plus Jakarta Sans;
    font-weight: 500;
    line-height: 21px;
    word-wrap: break-word;
    padding: 12px;
    padding-left: 38px;
    outline: none;
    margin: 15px;
}
.ReactFlagsSelect-module_selectBtn__19wW7 {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    font-family: inherit;
    border: 0px;
    border-radius: 4px;
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
    height: 47px;
}

.backColor2{
    background-color: #F6F7F9;
    height: 27vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Inter';
}
.driving-lisence{
    color: #252525;
font-size: 18px;
font-family: Plus Jakarta Sans;
font-weight: 600;
line-height: 28.80px;
letter-spacing: 0.36px;
}
.margin{
    margin-top: -68%;

    @media (max-width: 425px) {
    margin-top: -67%;
}

@media (max-width: 320px) {
    margin-top: -98%;
}
}

`