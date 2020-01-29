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
                content {
                  json
                }
                node_locale
                featuredImage {
                  id
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
                title
                slug
                appearsOnMainSlider
                date
            }
        }
      }
    `
  )
  return filterQuery(allContentfulNewsItem.nodes, filter);
}