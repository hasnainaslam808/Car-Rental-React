import styled from "styled-components";

export const BackGround = styled.div`
 background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
`

export const Div = styled.div`
.img-width{
    width: 18%;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(246,244,244,0.989233193277311)0%);
}
.tab{
    height: 362px;
    width: 835px;

  
    @media (max-width: 1024px) {
        width: 655px;
    }
    @media (max-width:768px) {
        width: 730px;
    }
    @media (max-width:425px) {
    height: 278px;
    width: 395px;
    }
    @media (max-width:375px) {
    height: 278px;
    width: 338px;
    }
    @media (max-width: 320px) {
    height: 262px;
    width: 296px; 
   }
}
.cartab{
   border-radius: 60px;
   width: 100%;
   height: 362px;

  
   @media(max-width: 1024px) {
    width: 653px;
    height: 314px 
   }
   @media(max-width: 768px) {
    width: 728px;
    height: 329px 
   }
   @media (max-width: 425px) {
    height: 262px;
    width: 408px; 
    border-radius: 25px;
   }
   @media (max-width: 375px) {
    height: 262px;
    width: 350px; 
   }
   @media (max-width: 320px) {
    height: 262px;
    width: 284px; 
   }
}

.carHeading{
    color: #1A202C;
font-size: 32px;
font-family: Plus Jakarta Sans;
font-weight: 700;
line-height: 48px;
word-wrap: break-word
}
.heart{
    margin-top: -35px;
    margin-right: -7%;
    @media(max-width: 768px) {
   margin-right :-2% ;
   }

}
.reviews{
color: #333333;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 500;
letter-spacing: 0.28px;
word-wrap: break-word
}
.favPara{
    color: #333333;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 400;
line-height: 40px;
word-wrap: break-word
}
.typeCar{
color: #90A3BF;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 400;
line-height: 30px;
word-wrap: break-word
}
.sport{
color: #333333;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 600;
line-height: 30px;
word-wrap: break-word
}
.typeCars{
color: #90A3BF;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 400;
line-height: 30px;
word-wrap: break-word;
margin-left: -75px;
}
.sports{
color: #333333;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 600;
line-height: 30px;
word-wrap: break-word;
margin-left: -33px;
}
.price{
color: #1A202C;
font-size: 28px;
font-family: Plus Jakarta Sans;
font-weight: 700;
word-wrap: break-word
}
.day{
    color: #90A3BF;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 700;
word-wrap: break-word
}
.button{
color: white;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 700;
line-height: 24px;
word-wrap: break-word;
background-color: #3563E9;
border: none;
width: 111%;
height: 85%;
border-radius: 12px;
}
.cardHeading{
color: #1A202C;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 600;
word-wrap: break-word
}
.reviewButton{
    color: white;
    font-size: 19px;
    font-family: Plus Jakarta Sans;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
    background-color: #3563E9;
    border: none;
    width: 44px;
    border-radius: 8px;
    height: 28px;
    margin-left: 10px;
    margin-top: 4px;
}
.reviewsButton{
    color: #90A3BF;
font-size: 16px;
font-family: Plus Jakarta Sans;
font-weight: 600;
line-height: 24px;
word-wrap: break-word
}
.profileName{
color: #1A202C;
font-size: 20px;
font-family: Plus Jakarta Sans;
font-weight: 700;
line-height: 30px;
word-wrap: break-word;
white-space: nowrap;
}
.profileDesig{
color: #90A3BF;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 500;
line-height: 0px;
word-wrap: break-word;
white-space: nowrap;
}
.reviewDate{
color: #90A3BF;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 500;
line-height: 0px;
word-wrap: break-word
}
.review{
color: #596780;
font-size: 14px;
font-family: Plus Jakarta Sans;
font-weight: 400;
line-height: 22px;
word-wrap: break-word;
margin-left: 71px;
@media (max-width: 320px) {
    margin: 0px;
}
}
.img{
    width: 70px;
}

`
export const RecentDiv = styled.div`
.view{
color: #3563E9;
font-size: 16px;
font-family: "Plus Jakarta Sans";
font-weight: 600;
word-wrap: break-word;
cursor: pointer;
}
p{
color: #90A3BF;
font-size: 16px;
font-family: "Plus Jakarta Sans";
font-weight: 600;
word-wrap: break-word
}
.car-name{
color: #1A202C;
font-size: 20px;
font-family: 'Plus Jakarta Sans';
font-weight: 700;
line-height: 16px;
word-wrap: break-word
}
.car-type{
color: #90A3BF;
font-size: 14px;
font-family: 'Plus Jakarta Sans';
font-weight: 700;
word-wrap: break-word
}
.car-pic{
    height: 100px;
}
.car-feature-text{
color: #90A3BF;
font-size: 14px;
font-family: 'Plus Jakarta Sans';
font-weight: 500;
line-height: 21px;
word-wrap: break-word
}
`