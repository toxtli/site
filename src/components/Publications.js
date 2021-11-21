import React from "react"
import YAMLData from "../content/publications.yaml"
import StyledSection from "./styles/StyledSection"
import StyledItem from "./styles/StyledItem"
import { StyledH3, StyledH4 } from "./styles/StyledHeadings"
import Heading from "./Heading"
import ReactMarkdown from 'react-markdown'

const Publication = ({ publication }) => (
  <StyledItem>
    <div>
      <StyledH3>{publication.title}</StyledH3>
      <ReactMarkdown>{publication.authors.trim()}</ReactMarkdown>
      <ReactMarkdown>{publication.venue.trim()}</ReactMarkdown>
    </div>
  </StyledItem>
)

const Publications = () => {
  return (
    <StyledSection id="publications">
      <Heading title="Publications" />
      {YAMLData.content.map((data, index) => {
        return <Publication publication={data.publication} key={`publication-${index}`}></Publication>
      })}
    </StyledSection>
  )
}

export default Publications
