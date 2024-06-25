// src/components/Header.tsx
import styled from 'styled-components';
import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 0;
    height: 130px;
    background-color: #ffffff;
    transition: transform 0.3s ease-out;

    &.hide-header {
        transform: translateY(-100%);
    }
`;

const HomeTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Modified NavLink component to accept isActive prop
const NavLink = styled.a<{ isActive?: boolean }>`
    color: ${({ isActive }) => (isActive? 'black' : 'gray')};
    text-decoration: none;
    margin: 0 10px;
    font-weight: ${props => (props.isActive? 'bold' : 'normal')}; // Conditionally bold based on isActive prop
`;

const Header = () => { // Destructure location from props
    const headerRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const showHeader = window.scrollY < 130;
            const headerElement = headerRef.current;
            if (headerElement) {
                headerElement.classList.toggle("hide-header",!showHeader);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Determine if the NavLink is active
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <HeaderWrapper ref={headerRef}>
            <HomeTitle>BLOGLIFFI</HomeTitle>
            <NavLinks>
                <NavLink href="/projects" isActive={isActive('/projects')}>Projects</NavLink>
                <NavLink href="/blog" isActive={isActive('/blog')}>Blog</NavLink>
                <NavLink href="/album" isActive={isActive('/album')}>Album</NavLink>
                <NavLink href="/about" isActive={isActive('/about') || isActive('/')}>About</NavLink>
            </NavLinks>
        </HeaderWrapper>
    );
};

export default Header;
