import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useBanner = (filter) => {
  const { allContentfulBanner } = useStaticQuery(
    graphql`
      query {
        allContentfulBanner {
            nodes {
                appearsOn
                tagline
                node_locale
                content {
                file {
                    url
                }
                }
            }
        }
      }
    `
  )
  return filterQuery(allContentfulBanner.nodes, filter);
}