import React from "react"
import YAMLData from "../content/experience.yaml"
import StyledSection from "./styles/StyledSection"
import StyledItem from "./styles/StyledItem"
import { StyledH3, StyledH4 } from "./styles/StyledHeadings"
import Heading from "./Heading"

const Job = ({ job }) => (
  <StyledItem>
    <div>
      <StyledH3>{job.role}</StyledH3>
      <StyledH4>{job.company}</StyledH4>

      <p>{job.description}</p>
    </div>

    <p className="orange timeline">{job.timeline}</p>
  </StyledItem>
)

const Experience = () => {
  return (
    <StyledSection id="experience">
      <Heading title="Experience" />
      {YAMLData.content.map((data, index) => {
        return <Job job={data.job} key={`job-${index}`}></Job>
      })}
    </StyledSection>
  )
}

export default Experience
