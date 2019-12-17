import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useNavigation = (filter) => {
  const { allContentfulNavigation } = useStaticQuery(
    graphql`
      query {
        allContentfulNavigation {
          nodes {
            id
            type
            node_locale
            items {
              id
              label
              link
            }
          }
        }
      }
    `
  )
  const result = filterQuery(allContentfulNavigation.nodes, filter);
  if (result.length === 1) return result[0];
  return result;
}