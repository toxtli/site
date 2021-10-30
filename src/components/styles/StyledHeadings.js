import styled from "styled-components"

const StyledH2 = styled.h2`
  font-size: 6rem;
  line-height: 6.5rem;
  margin: 4rem 0;
  color: ${props => props.theme.colors.black};
  letter-spacing: -0.1rem;
`

const StyledH3 = styled.h3`
  font-size: 3rem;
  color: ${props => props.theme.colors.black};
  letter-spacing: -0.08rem;
`
const StyledH4 = styled.h4`
  font-size: 2.2rem;
  font-weight: ${props => props.theme.font.regular};
  letter-spacing: -0.08rem;
`

export { StyledH2, StyledH3, StyledH4 }
