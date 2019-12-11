import { useStaticQuery, graphql } from "gatsby"
export const useActivityItems = () => {
  const { allContentfulActivityItem } = useStaticQuery(
    graphql`
      query {
        allContentfulActivityItem {
            nodes {
              id
              label
              node_locale
              icon {
                id
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
      }
    `
  )
  return allContentfulActivityItem.nodes;
}