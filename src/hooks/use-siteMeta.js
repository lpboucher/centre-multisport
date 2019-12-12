import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetaData = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteData {
        site {
          siteMetadata {
                addressLine
                city
                postalCode
                phone
                email
            }
        }
      }
    `
  )
  return site.siteMetadata
}