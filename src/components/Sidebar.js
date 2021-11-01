import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import ProfileImg from "../images/photo.jpg"

const SideNavigationWrapper = styled.div`
  /* hide for small and medium devices */
  display: none;
  position: sticky;
  top: 0;

  img {
    width: 16.5rem;
    border-radius: 50%;
    border: 0.8rem solid ${props => props.theme.colors.lighter};
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.primaryColor};
    padding: 1rem 2rem;
    text-align: center;
    height: 100%;
  }
`

const StickyDiv = styled.div`
  position: sticky;
  top: 25%;
`

function SideNavigation() {
  return (
    <SideNavigationWrapper id="sidebar">
      <StickyDiv>
        <img src={ProfileImg} alt="John Doe" />
        <Navigation />
      </StickyDiv>
    </SideNavigationWrapper>
  )
}

export default SideNavigation
