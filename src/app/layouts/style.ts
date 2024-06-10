import Link from "next/link";
import styled from "styled-components";

export const NavContainer = styled.nav`
    padding : 28px 100px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavContainerLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavLink = styled(Link)`
    color: ${({theme}) => theme.colors.dark[100]};
    text-decoration: none;
    font-size: 16px;
    margin-right: 30px;
`