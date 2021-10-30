import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { theme } from "../styles/theme"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTrophy } from "@fortawesome/free-solid-svg-icons"
// components
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import SEO from "../components/Seo"
// Load typeface
require("@openfonts/saira-condensed_latin")
require("typeface-open-sans")

library.add(fab, faBars, faTrophy)

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    /* happy rems  😄 */
    font-size: 16px; /* px fallback */
    font-size: 1.6rem; /* default font-size for document */
    line-height: 1.5; /* a nice line-height */
    }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Saira Condensed', sans-serif;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }

  main{
    padding: 0 2rem;

    @media (min-width: ${props => props.theme.breakpoints.medium}) {
    padding-left: 3rem;
    max-width: 100rem;
    }
  }  

  .orange{
    color: ${props => props.theme.colors.orange};
  }
  
  .bg{
    background: gold;
  }

  .active {
    color: ${props => props.theme.colors.white};
  }
`
const StyledWrapper = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    display: grid;
    grid-template-columns: 25rem 1fr;
  }
`
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <SEO title="John Doe's Resume" />
    <StyledWrapper>
      <Header siteTitle="John Doe" />
      <Sidebar />
      <main>{children}</main>
    </StyledWrapper>
  </ThemeProvider>
)

export default Layout
