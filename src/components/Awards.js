import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import StyledSection from "./styles/StyledSection"
import Heading from "./Heading"

const StyledList = styled.ul`
  margin: 0;
  padding-left: 1rem;

  li {
    list-style: none;
    padding: 0.5rem 0;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.gold};
  font-size: 2rem;
  padding-right: 0.5rem;
`

const Interests = () => {
  return (
    <StyledSection id="awards">
      <Heading title="Awards & Certifications" />
      <StyledList>
        <li>
          <StyledIcon icon="trophy" /> Google Analytics Certified Developer
        </li>
        <li>
          <StyledIcon icon="trophy" /> Mobile Web Specialist - Google
          Certification
        </li>
        <li>
          <StyledIcon icon="trophy" /> 1st Place - University of Colorado
          Boulder - Emerging Tech Competition 2009
        </li>
        <li>
          <StyledIcon icon="trophy" /> 1st Place - University of Colorado
          Boulder - Adobe Creative Jam 2008 (UI Design Category)
        </li>
        <li>
          <StyledIcon icon="trophy" /> 2nd Place - University of Colorado
          Boulder - Emerging Tech Competition 2008
        </li>
        <li>
          {" "}
          <StyledIcon icon="trophy" /> 3rd Place - James Buchanan High School -
          Hackathon 2005
        </li>
      </StyledList>
    </StyledSection>
  )
}

export default Interests
