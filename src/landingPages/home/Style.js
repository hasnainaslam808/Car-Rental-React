import styled from "styled-components";
import driver from '../../images/driver.png'


export const BannerDiv = styled.div`
.banner-img{
width:95%;

}
`


export const H5 = styled.h5`
color: black;
font-size: 32px;
font-family: "Poppins";
font-weight: 900;
text-transform: capitalize;
word-wrap: break-word;

@media (max-width:1024px) {    
    font-size: 23px; 
}
@media (max-width: 768px) {
    font-size: 17px;
}
@media (max-width: 425px) {
    font-size: 20px;
    
}
`;

export const P = styled.p`
color: black;
font-size: 26px;
font-family: "Roboto";
font-weight: 400;
word-wrap: break-word;

@media (max-width:1024px) {
    font-size: 20px; 
}
@media (max-width:768px) {
    font-size:15px;
}

`;
export const Button = styled.button`
background-color: #3563E9;
    border-radius: 8px;
    padding: 10px 35px 10px;
    color: white;
    border: 0;
    width: 212px;
    height: 53px;
    font-size: 18px
`;
export const Div = styled.div`
position: absolute;
top: 247px;
left: 76%;
z-index: 4;


@media (max-width:1024px) {
    top: 194px;
    left: 79%;
}
@media (max-width:768px) {
    top: 131px;
}
@media (max-width: 425px) {
    top: 171px;
    left: 5%;
    
}
@media (max-width: 375px) {
    top: 155px;
    
}
@media (max-width: 320px) {
    top: 130px;
    
}

`
export const H2 = styled.div`
color: black;
font-size: 46px;
font-family:"Poppins";
font-weight: 900;
margin-top: 130px;
word-wrap: break-word;

@media (max-width: 768px) {
    margin-top: 68px;
    font-size: 39px;
    
}
@media (max-width: 425px) {
    margin-top: 0px;
    font-size: 36px;

}
`;

export const P1 = styled.div`
color: rgba(0, 0, 0, 0.60);
font-size: 20px;
font-family: "Poppins";
font-weight: 400;
word-wrap: break-word;

@media (max-width: 768px) {
    font-size: 16px;
    
}
`;



export const BgColor = styled.div`
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);


.view{
color: #3563E9;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 600;
word-wrap: break-word;
cursor: pointer;
}
.recent{
color: #90A3BF;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 600;
word-wrap: break-word
}
.pkr{
color: #1A202C;
font-size: 10px;
font-family: 'Plus Jakarta Sans';
font-weight: 700;
word-wrap: break-word
}
.carpic{
    margin-top: 0px;
}
@media (max-width:425px) {
    margin-top: 135px;
}
@media (max-width:320px) {
    margin-top: 159px;
}
.price{
color: #1A202C;
font-size: 20px;
font-family: 'Plus Jakarta Sans';
font-weight: 700;
word-wrap: break-word
}
.day{
color: #90A3BF;
font-size: 14px;
font-family: 'Plus Jakarta Sans';
font-weight: 700;
word-wrap: break-word
}
`
export const ExperienceDiv = styled.div`



.experince-heading1{
color: black;
font-size: 45px;
font-family: Poppins;
font-weight: 600;
word-wrap: break-word
}

.experience-heading{
color: #3563E9;
font-size: 30px;
font-family: Poppins;
font-weight: 600;
word-wrap: break-word;
}
.experience-para{
color: rgba(0, 0, 0, 0.60);
font-size: 20px;
font-family: Roboto;
font-weight: 400;
word-wrap: break-word;
}
@media (max-width: 425px) {

.experince-heading1{
    font-size: 35px;
}    
}
`;
export const SubscriptionDiv = styled.div`
.bg-subscription{
width: 100%;
height: 65vh;
background-image: url(${driver});                            
background-position: center;
background-repeat: no-repeat;
background-size: cover;

@media (min-width: 2560px ) {
height: 18vh;
    
}
}

.driver-heading{
color: white;
font-size: 40px;
font-family: Poppins;
font-weight: 600;
text-transform: capitalize;
word-wrap: break-word
}

.driver-headings{
color: white;
font-size: 40px;
font-family: Poppins;
font-weight: 600;
text-transform: capitalize;
line-height: 44px;
word-wrap: break-word
}
.subscribe{
color: white;
font-size: 30px;
font-family: Roboto;
font-weight: 400;
text-transform: capitalize;
word-wrap: break-word
}
.subscribe-input{
    margin: 0;
    line-height: inherit;
    padding: 20px;
    width: 65%;
    font-family: Poppins;
    font-size: 18px;
    border-radius: 7px;
    border: none;
    outline: none;
}
.sub-button{
    position: relative;
    top: -1px;
    left: -128px;
    font-family: Poppins;
    font-size: 18px;
    padding: 16px 40px;
    background-color: #3563E9;
    color: white;
}
.modal-para{
    color: #333333;
font-size: 20px;
font-family: Inter;
font-weight: 500;
word-wrap: break-word
}
.modal-subpara{
    color: #808D9E;
font-size: 12px;
font-family: Inter;
font-weight: 500;
word-wrap: break-word
}
.check-bg{
    background-color: #ecf0ff;
}
.modal{
    width: 69%;
    margin-left: 154px;

    @media (max-width: 768px) {
       
    width: 64%;
    margin-left: 111px;

    }
    @media (max-width: 425px) {
    width: 83%;
    margin-left: 37px;
    }
    @media(max-width: 320px) {
    width: 88%;
    margin-left: 20px 
    }
}


@media (max-width: 425px) {
    .driver-heading{
        font-size: 30px;
    }
    .driver-headings{
    font-size: 20px;
    }
    .subscribe{
        font-size: 17px;
    }
    .subscribe-input{
        width: 90%;
    }
    .sub-button{
        top: -55px;
    left: 234px;
    font-family: Poppins;
    font-size: 19px;
     padding: 9px 18px 8px;


    }
    
}
@media (max-width: 375px) {
    .sub-button{
    top: -57px ;
    left: 187px ;
    }
    
}
@media (max-width: 320px) {
    .sub-button{
   top: -58px;
    left: 129px;
    font-size: 17px;
    padding: 12px 25px;
    }
}
`

