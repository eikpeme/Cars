import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const ListContainer = styled.div`
  ${tw`
  flex
list-none`};
`;

const NavItem = styled.li`
  ${tw`
text-xs
md: text-base
text-black
font-medium
mr-1
md: mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700
`};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu>
        <ListContainer>
          <NavItem>
            <a href="http://">Home</a>
          </NavItem>
          <NavItem>
            <a href="http://">Cars</a>
          </NavItem>
          <NavItem>
            <a href="http://">Services</a>
          </NavItem>
          <NavItem>
            <a href="http://">Contact Us</a>
          </NavItem>
          <NavItem>
            <a href="http://">Home</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="http://">Home</a>
      </NavItem>
      <NavItem>
        <a href="http://">Cars</a>
      </NavItem>
      <NavItem>
        <a href="http://">Services</a>
      </NavItem>
      <NavItem>
        <a href="http://">Contact Us</a>
      </NavItem>
      <NavItem>
        <a href="http://">Home</a>
      </NavItem>
    </ListContainer>
  );
}
