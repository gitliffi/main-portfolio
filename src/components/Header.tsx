// src/components/Header.tsx
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 0;
`;

const HomeTitle = styled.h1`
  font-size: 48px; /* Adjust the font size as needed */
  margin-bottom: 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 0 10px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HomeTitle>BLOGLIFFI</HomeTitle>
            <NavLinks>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/album">Album</NavLink>
                <NavLink href="/about">About</NavLink>
            </NavLinks>
        </HeaderWrapper>
    );
};

export default Header;
