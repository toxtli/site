import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Heading from "./Heading"
import StyledSection from "./styles/StyledSection"

const IconsWrapper = styled.div`
  margin-bottom: 2rem;
`

const StyledList = styled.ul`
  margin: 0;
  padding-left: 1rem;

  li {
    list-style: none;

    :before {
      content: "✔";
      padding-right: 1rem;
    }
  }
`
const StyledH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: ${props => props.theme.font.regular};
  letter-spacing: -0.1rem;
  margin-bottom: 2rem;
`
const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 4.5rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  margin: 1rem 2rem 1rem 0;
`
const Skills = () => {
  return (
    <StyledSection id="skills">
      <Heading title="Skills" />
      <StyledH3>Programming languages & tools</StyledH3>
      <IconsWrapper>
        <StyledIcon icon={["fab", "html5"]} />
        <StyledIcon icon={["fab", "css3-alt"]} />
        <StyledIcon icon={["fab", "js"]} />
        <StyledIcon icon={["fab", "angular"]} />
        <StyledIcon icon={["fab", "react"]} />
        <StyledIcon icon={["fab", "sass"]} />
        <StyledIcon icon={["fab", "less"]} />
        <StyledIcon icon={["fab", "wordpress"]} />
        <StyledIcon icon={["fab", "gulp"]} />
        <StyledIcon icon={["fab", "grunt"]} />
        <StyledIcon icon={["fab", "npm"]} />
      </IconsWrapper>
      <StyledH3>Workflow</StyledH3>
      <StyledList>
        <li>Mobile-First, Responsive Design</li>
        <li>Cross Browser Testing & Debugging</li>
        <li>Cross Functional Teams</li>
        <li>Agile Development & Scrum</li>
      </StyledList>
    </StyledSection>
  )
}

export default Skills
