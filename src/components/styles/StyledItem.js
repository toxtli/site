import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media
    (min-width: ${props => props.theme.breakpoints.medium}) {
    flex-direction: row;

    .timeline {
      flex-shrink: 0;
    }
  }
`

export default StyledDiv