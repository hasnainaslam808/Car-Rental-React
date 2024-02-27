import styled from "styled-components"

export const CoverImg = styled.div`


height: 100%;
`
export const SigninDiv = styled.div`
.signIn-heading{
color: #333333;
font-size: 24px;
font-family: Poppins;
font-weight: 700;
line-height: 30px;
letter-spacing: 0.20px;
word-wrap: break-word;
}
.error-para{
    color: red;
font-size: 14px;
font-family: Poppins;
font-weight: 400;
line-height: 5px;
word-wrap: break-word;
margin-left: 99px;
@media (max-width: 425px) {
        margin-left: 73px;
    }
    @media (max-width: 320px) {
        margin-left: 48px;
       
    }  
}

.password{
    border: 1px solid #E2E8F0;
    width: 65%;
    border-radius: 10px;
    margin-left: 98px;
    @media (max-width: 425px) {
        margin-left: 68px;
    }
    @media (max-width: 320px) {
        margin-left: 44px;
        width: 80%;
    }
}

.signIn-subheading{
color: #64748B;
font-size: 14px;
font-family: Poppins;
font-weight: 400;
line-height: 5px;
word-wrap: break-word;
@media (max-width: 320px) {
    line-height: 18px;
}
}
.email-label{
color: #333333;
font-size: 14px;
font-family: Poppins;
font-weight: 600;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
margin-left: 99px;
@media (max-width: 425px) {
        margin-left: 73px;
    }
    @media (max-width: 320px) {
        margin-left: 48px;
       
    }
}
.forgetPara{
color: #3563E9;
font-size: 14px;
font-family: Poppins;
font-weight: 500;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
text-decoration: none;
cursor: pointer;
}
.signIn{
    margin-left: 73px;
    padding: 12px;
    width: 79%;
    border-radius: 5px;
    background-color: lightgray;
    height: 50px;
    cursor: pointer;
}
.google{
color: #333333;
font-size: 14px;
font-family: Poppins;
font-weight: 500;
word-wrap: break-word
}
.signupPara{
color: #333333;
font-size: 16px;
font-family: DM Sans;
font-weight: 400;
line-height: 27.20px;
word-wrap: break-word
}
.blue{
color: #3563E9;
font-size: 16px;
font-family: DM Sans;
font-weight: 400;
line-height: 27.20px;
word-wrap: break-word
}
.or{
color: #90A3BF;
font-size: 14px;
font-family: Inter;
font-weight: 500;
line-height: 22.40px;
word-wrap: break-word
}
.passwordMargin{
    margin-left: 10%;
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
export const PasswordInput = styled.input`
    width: 70%;
    height: 50px;
    color: #94A3B8;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 25.60px;
    word-wrap: break-word;
    border: 0;
    outline: none;
    margin-left: 10px;
`

export const Button = styled.button`
color: white;
font-size: 16px;
font-family: Poppins;
font-weight:600;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
background-color: #3563E9;
border: 0;
width: 57%;
height: 55px; 
border-radius: 8px;
margin-left: 126px;
@media (max-width: 425px) {
        margin-left: 83px;
    }
`