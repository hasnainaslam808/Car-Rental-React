import styled from "styled-components";


export const CoverImg = styled.div`
width:100%;
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

.password{
    margin-left: 113px;
    width: 65%;
    height: 47px;
    color: #94A3B8;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 25.60px;
    word-wrap: break-word;
    border-radius: 8px;
    border: 1px solid #94A3B8;
    outline: none;
    @media (max-width: 1024px) {
        margin-left: 85px;
    }
    @media (max-width: 768px) {
        margin-left: 126px;
    }
    @media (max-width: 425px) {
        margin-left: 72px;
    }
    @media (max-width: 320px) {
        margin-left: 30px;
    width: 247px 
    }
}

.error-para{
    color: red;
font-size: 14px;
font-family: Poppins;
font-weight: 400;
line-height: 5px;
word-wrap: break-word;
margin-left: 115px ;

}

.signIn-subheading{
color: #64748B;
font-size: 14px;
font-family: Poppins;
font-weight: 400;
line-height: 5px;
word-wrap: break-word;
}
.email-label{
color: #333333;
font-size: 14px;
font-family: Poppins;
font-weight: 600;
line-height: 22.40px;
letter-spacing: 0.20px;
word-wrap: break-word;
margin-left: 116px;
@media (max-width: 1024px) {
        margin-left: 86px;
    }
    @media (max-width: 768px) {
        margin-left: 126px;
    }
    @media (max-width: 425px) {
        margin-left: 73px;
    }
    @media (max-width: 320px) {
      
        margin-left: 30px;
    }
}
.forgetDiv{
    padding-left: 118px;
    padding-right: 137px;
    @media (max-width: 1024px) {
        padding-left: 87px;
    padding-right: 85px;
    }
    @media (max-width: 768px) {
        padding-left: 128px;
    padding-right: 141px;

    }
    @media (max-width: 425px) {
        padding-left: 53px;
    padding-right: 42px;
    }
    @media (max-width: 375px) {
        padding-left: 29px;
    padding-right: 14px;
    }
    @media (max-width: 320px) {
        padding-left: 0px;
    padding-right: 0px;
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
    margin-left: 114px;
    padding: 14px;
    width: 65%;
    border-radius: 5px;
    background-color: #F9F9F9;
    height: 50px;
    cursor: pointer;
    @media (max-width: 1024px) {
        margin-left: 90px;
    }
    @media (max-width: 768px) {
       margin-left: 133px;

    }
    @media (max-width: 425px) {
       margin-left: 66px;
    }
    @media(max-width:320px) {
        margin-left: 25px;
    width: 249px;
    }
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
word-wrap: break-word;
cursor: pointer;
}
.or{
color: #90A3BF;
font-size: 14px;
font-family: Inter;
font-weight: 500;
line-height: 22.40px;
word-wrap: break-word
}




`
export const EmailInput = styled.input`
margin-left: 115px ;
width: 65%;
height: 47px;
color: #94A3B8;
font-size: 16px;
font-family: Poppins;
font-weight: 400;
line-height: 25.60px;
word-wrap: break-word;
border-radius: 8px;
    border: 1px solid #94A3B8;
    outline: none;

    @media (max-width: 1024px) {
        margin-left: 83px;
    }
    @media (max-width: 768px) {
        margin-left: 126px;
    }
    @media (max-width: 425px) {
        margin-left: 70px;
    }
    @media (max-width: 320px) {
        width: 85%;
        margin-left: 28px;
    }
`
export const PasswordInput = styled.input`
    width: 70%;
    height: auto;
    color: #94A3B8;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 25.60px;
    word-wrap: break-word;
    border: 0;
    outline: none;
    margin-left: 7px;
    @media (max-width: 375px) {
        width: 74%;
    }
   
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
width: 50%;
height: 40px;
border-radius: 8px;
`