import styled from "styled-components";
export const Nav = styled.nav`
color: black;
font-size: 18px;
font-family: "Poppins";
font-weight: 400;
word-wrap: break-word;
cursor: pointer;

.modal-backdrop.show {
    opacity: 0 !important;
}

.modal-backdrop {
    /* --bs-backdrop-zindex: 1050; */
    --bs-backdrop-bg: none !important;
    --bs-backdrop-opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--bs-backdrop-zindex);
    width: 100vw;
    height: 100vh;
    background-color: none !important;
    display: none !important;
}
.log{
color: #333333;
font-size: 20px;
font-family: Inter;
font-weight: 500;
word-wrap: break-word
}
.log-para{
color: #808D9E;
font-size: 12px;
font-family: Inter;
font-weight: 500;
word-wrap: break-word
}
.log-button{
    padding: 11px 119px;
}
.log-modal{
    width: 71%;
    height: 215px 
}

/* .navBorder{
    border-bottom: solid #3563E9;   
} */

.drop{
    border: 0 !important;
    background: white !important;
}
.dropPara{
color: #222222;
font-size: 15px;
font-family: Poppins;
font-weight: 400;
line-height: 18px;
word-wrap: break-word
}
.dropPara:hover{
    color: blue;
    transform: translate(3sec);
}
.dropImg{
    width: 12px 
}
.dropSubPara{
    font-size: 8px;
    margin-top: -20px;
    margin-left: 5px;
    color: black;
}
.shayan{
    margin-left: 5px;
}
.dropdown-toggle::after {
    display: none !important;
   
}
`

export const ListItem = styled.li`
.born{
    border-bottom: ${({active}) => active && '3px solid #3563E9'};
}
`;