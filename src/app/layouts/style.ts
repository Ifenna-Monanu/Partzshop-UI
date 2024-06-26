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

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.brand.lightBlue};
  width: 100%;
  display: flex;
  padding: 61px 100px;
  flex-direction: column;

  .flex-display {
    display: flex;
    justify-content: space-between;
  }

  .logo-wrap {
    display: flex;
    flex-direction: column;
    span {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.dark[500]};
      margin-top: 25px;
      width: 210px;
      line-height: 26x;
    }
  }

  .link-wrap,
  .news-wrap {
    display: flex;
    flex-direction: column;

    span {
      color: ${({ theme }) => theme.colors.brand.blue400};
      font-size: 14px;
      line-height: 23px;
      margin-bottom: 16px;
      text-transform: uppercase;
    }

    ul {
      text-decoration: none;
      list-style: none;

      li {
        padding: 10px 0px;
        a {
          text-decoration: none;
          color: #232323;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }

  .news-wrap {
    flex-basis: 30%;

    .subscribe {
      position: relative;
      width: 397px;
      border: 1px solid #e4e4e7;
      height: 53px;
      display: flex;
      justify-content: space-between;
      background-color: #ffffff;
      padding: 0px 6px;
      border-radius: 33px;
      align-items: center;

      input {
        border: none;
        height: 51px;
        border-radius: 33px;
        padding: 0px 12px;
        width: 245px;
        font-size: 15px;
        background-color: transparent;
      }

      input:focus {
        outline: none;
      }

      button {
        background-color: #0043e6;
        width: 146px;
        border-radius: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: white;
        height: 43px;
      }
    }
  }

  .footer-line {
    border-top: 1px solid #e2e8f0;
    display: block;
    margin-top: 20px;
    padding: 35px 0px 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    padding: 61px 20px;
    .flex-display {
      flex-direction: column;
    }

    .logo-wrap,
    .link-wrap,
    .news-wrap {
      margin-bottom: 35px;

      span {
        margin-top: 10px;
      }
    }
  }
`;
