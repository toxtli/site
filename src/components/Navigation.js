import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  font-family: "Saira Semi Condensed", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: ${props => props.theme.font.bold};
  letter-spacing: 0.07rem;
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.light};

  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
`

const Navigation = () => (
  <StyledNav>
    <StyledLink to="#about">About</StyledLink>
    <StyledLink to="#experience">Experience</StyledLink>
    <StyledLink to="#education">Education</StyledLink>
    <StyledLink to="#publications">Publications</StyledLink>
    <StyledLink to="#skills">Skills</StyledLink>
    <StyledLink to="#interests">Interests</StyledLink>
    <StyledLink to="#awards">Awards</StyledLink>
  </StyledNav>
)

export default Navigation
