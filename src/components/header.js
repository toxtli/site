import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import FlexContainer from "./styles/FlexContainer"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background: ${props => props.theme.primaryColor};
  padding: 1.5rem 2rem;

  a {
    text-decoration: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    display: none;
  }
`

const NavWrapper = styled.div`
  display: ${props => (props.hidden ? "none" : "flex")};
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-weight: ${props => props.theme.font.regular};
`

const StyledBtn = styled.button`
  background: ${props => props.theme.primaryColor};
  font-size: 3rem;
  padding: 0.6rem 1.2rem;
  border: solid 1px ${props => props.theme.colors.light};
  border-radius: 3px;

  .fa-bars {
    color: ${props => props.theme.colors.light};
  }
`

const Header = ({ siteTitle }) => {
  const [isHidden, setIsHidden] = useState(true)

  const handleMenuClick = () => setIsHidden(!isHidden)
  return (
    <HeaderWrapper>
      <FlexContainer>
        <StyledLink to="/">{siteTitle}</StyledLink>
        <StyledBtn onClick={() => handleMenuClick()} aria-label="menu">
          <FontAwesomeIcon icon="bars" />
        </StyledBtn>
      </FlexContainer>
      <NavWrapper hidden={isHidden} onClick={() => handleMenuClick()}>
        <Navigation />
      </NavWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
