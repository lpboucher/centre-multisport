import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useNewsItems = (filter) => {
  const { allContentfulNewsItem } = useStaticQuery(
    graphql`
      query {
        allContentfulNewsItem {
            nodes {
                id
                excerpt
                node_locale
                featuredImage {
                  id
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                title
                appearsOnMainSlider
            }
        }
      }
    `
  )
  return filterQuery(allContentfulNewsItem.nodes, filter);
}