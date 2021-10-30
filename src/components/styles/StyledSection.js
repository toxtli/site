import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  color: ${props => props.theme.colors.darkGrey};
  padding: 5rem 0;
  margin: 0;
`

export default StyledSection
