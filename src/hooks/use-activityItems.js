import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useActivityItems = (filter) => {
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
              specifications {
                label
              }
            }
          }
      }
    `
  )
  return filterQuery(allContentfulActivityItem.nodes, filter);
}