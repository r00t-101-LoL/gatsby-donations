import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Container from "@atoms/container"
import DonationForm from "@atoms/donationForm"
import { media } from "@utils/media"

const SectionHeader = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      file(relativePath: { eq: "top.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Header grid>
      <Image>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <Content>
        <h1>Support Causes You Care About</h1>
        <p>
          We are alliance of more than 120 of America's best charities. Our 501(c)(3) high-impact nonprofit members are reviewed annually and must meet specific eligibility criteria before they’re approved for membership. Search below to learn more about our nonprofit members' work and learn how you can support them through workplace giving. {" "}
        </p>
        <DonationForm />
      </Content>
    </Header>
  )
}

export default SectionHeader

const Header = styled(Container)`
  align-items: center;
  grid-template-columns: 1fr;
  grid-gap: 0;

  @media ${media.lg} {
    grid-template-columns: 40fr 60fr;
  }
`

const Image = styled.div`
  width: 100%;
  height: 100%;

  @media ${media.lg} {
    border-right: 4px solid ${props => props.theme.colors.primary};
  }

  .gatsby-image-wrapper {
    height: 100%;
    max-height: 75vh;
    width: 100%;

    @media ${media.lg} {
      max-height: none;
    }

    img {
      object-position: top center !important;
    }
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 4rem 2rem;

  p {
    margin-bottom: 2rem;
  }
`
