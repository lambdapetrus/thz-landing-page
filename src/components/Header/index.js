import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = () => {
  const { fbImage, igImage, logoMarcos } = useStaticQuery(
    graphql`
      query {
        fbImage: file(relativePath: {eq: "icone-facebook.png"}) {
          childImageSharp {
            fixed(width: 24, height: 24) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        igImage: file(relativePath: {eq: "icone-instagram.png"}) {
          childImageSharp {
            fixed(width: 23, height: 23) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        logoMarcos: file(relativePath: {eq: "logo-marcos.png"}) {
          childImageSharp {
            fixed(width: 200, height: 80) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `  
  )

  return (
    <header>
      <div>
        <div>
          <a href="https://www.facebook.com/THZ2965/" target="_blank">
            <Img fixed={fbImage.childImageSharp.fixed}/>
          </a>
          <a href="https://www.instagram.com/marcosdosimoveis/" target="_blank">
            <Img fixed={igImage.childImageSharp.fixed}/>
          </a>
        </div>
        <a href="https://www.royalimoveis.com" target="_blank">
          <Img fixed={logoMarcos.childImageSharp.fixed}/>
        </a>
      </div>
    </header>
  )
}

export default Header
