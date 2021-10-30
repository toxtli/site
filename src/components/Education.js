import React from "react"
import YAMLData from "../content/education.yaml"
import StyledSection from "./styles/StyledSection"
import StyledItem from "./styles/StyledItem"
import { StyledH3, StyledH4 } from "./styles/StyledHeadings"
import Heading from "./Heading"

const School = ({ school }) => (
  <StyledItem>
    <div>
      <StyledH3>{school.name}</StyledH3>
      <StyledH4>{school.degree}</StyledH4>
      <p>{school.description}</p>
    </div>

    <p className="orange timeline">{school.timeline}</p>
  </StyledItem>
)

const Education = () => {
  return (
    <StyledSection id="education">
      <Heading title="Education" />
      {YAMLData.content.map((data, index) => {
        return <School school={data.school} key={`school-${index}`} />
      })}
    </StyledSection>
  )
}

export default Education
