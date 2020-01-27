import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useAbout = (filter) => {
  const { allContentfulAbout } = useStaticQuery(
    graphql`
      query {
        allContentfulAbout {
            nodes {
              title
              content {
                json
              }
              node_locale
              slug
            }
          }
      }
    `
  )
  const result = filterQuery(allContentfulAbout.nodes, filter);
  if (result.length === 1) return result[0];
  return result;
}