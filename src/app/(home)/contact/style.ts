import styled from "styled-components";

export const ContactWraper = styled.div`
    border: 1px solid #0043E61A;
    background-color: #FFFFFFB2;
    border-radius: 24px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px;
    margin: 0 auto;
    margin: 50px 100px;

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;
        margin: 0 auto;

        .contact-head {
            padding: 8px 24px;
            text-align: center;
            background-color: ${({theme}) => theme.colors.brand.lightBlue};
            border-radius: 36px;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            width: 143px;
            span {
                color: #0043E6;
            }
        }

        .contact-title {
            h1 {
                font-size: 40px;
                margin-top: 10px;
                text-align: center;
                line-height: 40px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            span {
                color: #667085;
                font-size: 14px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media (max-width: 450px) {
        height: auto;
        margin: 20px;
        padding: 35px 12px;

        .wrapper {
            width: 90%;
        }
    }

`

export const ContactForm = styled.form`
     width: 100%;
     margin-top: 45px;  
    .flex-input {
        display: flex;
        column-gap: 15px;
        align-items: center;
    }

    .button {
        margin-top: 20px;
    }

    @media (max-width: 450px) {
        .flex-input {
        flex-direction: column;

        }
    }

`