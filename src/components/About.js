import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import StyledSection from "./styles/StyledSection"
import config from '../../config';

const StyledAbout = styled(StyledSection)`
  padding-top: 16rem;
  h1 {
    font-size: 10rem;
    line-height: 10rem;
    margin: 0;
    padding-top: 4rem;
    color: ${props => props.theme.colors.black};
  }

  h3 {
    font-size: 2.5rem;
    font-weight: ${props => props.theme.font.thin};
    margin: 0;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.8rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    justify-content: flex-start;
  }
`

const IconsWrapper = styled.div`
  display: flex;

  .fa-facebook-f,
  .fa-twitter,
  .fa-github,
  .fa-linkedin-in {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.darkGrey};
    padding: 1.2rem;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin: 1rem 2rem 1rem 0;
  }
`
function About() {
  return (
    <StyledAbout id="about">
      <h1>
        {config.firstName} <span className="orange">{config.lastName}</span>
      </h1>
      <h3>
        {config.address} · {config.phone} ·
        <span className="orange">{config.email}</span>
      </h3>
      <p>
        {config.bio}
      </p>
      <IconsWrapper>
        <a href={`https://www.linkdein.com/in/${config.linkedin}`}>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
        <a href={`https://www.github.com/${config.github}`}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href={`https://www.twitter.com/${config.twitter}`}>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </IconsWrapper>
    </StyledAbout>
  )
}

export default About
