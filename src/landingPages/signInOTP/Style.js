import styled from "styled-components";

export const SignIn2Div = styled.div`

margin-top: 20%;

.heading{
color: #333333;
font-size: 24px;
font-family: Poppins;
font-weight: 700;
line-height: 30px;
letter-spacing: 0.20px;
word-wrap: break-word
}
.para{
color: #64748B;
font-size: 14px;
font-family: Poppins;
font-weight: 400;
line-height: 14px;
word-wrap: break-word
}
.time{
    font-size: 25px;
    font-family: 'Poppins';
}
 input, optgroup, select, textarea {
    /* padding: 20px; */
    margin: 8px;
    font-family: Poppins;
    font-size: 50px;
    line-height: inherit;
    height: 59px;
    border-radius: 10px;
    border: 1px solid #E2E8F0;
    outline: none;

    @media (max-width: 375px) {
        margin: 6px;
    }
    @media (max-width: 320px) {
        margin: 4px;
        font-size: 35px;
    }
}
.email-label{
color: #333333;
font-size: 14px;
font-family: Poppins;
font-weight: 600;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word
}
.resendButton{
color: #333333;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 700;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
border: 0;
background-color: white;

}
`
export const EmailInput = styled.input`
width: 80%;
height: 50px;
color: #94A3B8;
font-size: 16px;
font-family: Poppins;
font-weight: 400;
line-height: 25.60px;
word-wrap: break-word;
`
export const Button = styled.button`
color: white;
font-size: 18px;
font-family: Poppins;
font-weight:600;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
background-color: #3563E9;
border: 0;
width: 60%;
height: 58px;
border-radius: 8px;
`
export const CoverImg2 = styled.div`
.cover{
    height: 641px;
}
`