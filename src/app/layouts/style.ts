import Link from "next/link";
import styled from "styled-components";

export const NavContainer = styled.nav`
  padding: 1rem;
  margin: auto;
  max-width: 1240px;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu {
    display: none;
    padding: 0.5rem;
    cursor: pointer;
  }
  @media (max-width: 740px) {
    position: sticky;
    top: 0;
    z-index: 90;
    .menu {
      display: block;
    }
  }
`;

export const NavContainerLinks = styled.ul<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  @media (max-width: 740px) {
    position: fixed;
    top: 4rem;
    left: ${(props) => (props.$open ? "0" : "100%")};
    z-index: 30;
    display: grid;
    align-content: start;
    justify-content: stretch;
    gap: 1rem;
    padding: 1rem;
    width: 100vw;
    height: calc(100% - 3.5rem);
    background: #ffffff;
    transition: 0.3s ease-in;
    button {
      width: 100%;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark[100]};
  text-decoration: none;
  font-size: 16px;
  margin-right: 30px;
  @media (max-width: 740px) {
    border-bottom: 1px solid #e2e2e2;
    display: block;
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
`;

/*************** Footer ***************/
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.brand.lightBlue};
  width: 100%;
  display: grid;
  gap: 2rem;

  .footer-line {
    display: block;
    padding: 2rem 0 0;
    text-align: center;
    border-top: 1px solid #e2e8f0;
    span {
      text-align: center;
    }
  }
`;

export const FooterWrapper = styled.div`
  display: grid;
  gap: 2rem;
  padding: 4rem 1rem;
  margin: auto;
  max-width: 1240px;
  width: 100%;
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  .logo-wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 250px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.dark[500]};
      line-height: 1.5;
    }
  }
`;

export const ModalBody = styled.div`
  display: grid;
  gap: 1.5rem;
  place-items: center;
  line-height: 1.4;
  text-align: center;
  h2 {
    color: #1b495d;
    font-size: 20px;
    font-weight: 700;
  }
  p {
    display: block;
    padding: 0 1rem;
    color: #52575c;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;
    font-weight: 600;
    color: #ffffff;
    background: #0043e6;
    border: 1px solid #0043e6;
    border-radius: 50rem;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
  }
  button.primary-btn {
    color: #ffffff;
    background: #0043e6;
    border: 1px solid #0043e6;
  }
  button.secondary-btn {
    color: #0043e6;
    background: #ffffff;
    border: 1px solid #0043e6;
  }
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  .link-wrap {
    display: grid;
    gap: 1.5rem;

    span {
      color: ${({ theme }) => theme.colors.brand.blue400};
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;
      text-transform: uppercase;
    }

    ul {
      display: grid;
      gap: 1rem;
      text-decoration: none;
      list-style: none;

      li {
        // padding: 10px 0px;
        a {
          text-decoration: none;
          color: #232323;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }

  @media (max-width: 540px){
  grid-template-columns: auto;
  }
`;

export const NewsLetterContainer = styled.div`
  display: grid;
  gap: 1rem;
  span {
    font-size: 14px;
    color: #5582ee;
    font-weight: 400;
    text-transform: uppercase;
  }
  .subscribe-form {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;
    width: auto;
    height: fit-content;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 2rem;
    input {
      width: 100%;
      font-size: 16px;
      padding: 0.5rem 0;
      padding-left: 1rem;
      background: transparent;
      border: none;
      outline: none;
    }
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.5rem;
      white-space: nowrap;
      width: auto;
      font-weight: 600;
      color: #ffffff;
      background: #0043e6;
      border: 1px solid #0043e6;
      border-radius: 50rem;
      cursor: pointer;
      &:disabled {
        opacity: 0.5;
      }
    }
  }
`;
