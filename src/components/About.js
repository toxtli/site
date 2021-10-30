import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import StyledSection from "./styles/StyledSection"

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
        John <span className="orange">Doe</span>
      </h1>
      <h3>
        Cheyenne Wells, CO 80810 · (317) 585-8468 ·
        <span className="orange">john@email.com</span>
      </h3>
      <p>
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </p>
      <IconsWrapper>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
      </IconsWrapper>
    </StyledAbout>
  )
}

export default About
