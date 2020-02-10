import { useStaticQuery, graphql } from "gatsby";
import { filterQuery } from "../utils/queryFilters";
export const useSEO = (filter) => {
  const { allContentfulAbout } = useStaticQuery(
    graphql`
        query {
            allContentfulAbout {
                nodes {
                    seoKeywords
                    slug
                    node_locale
                }
            }
        }
    `
  )
  const result = filterQuery(allContentfulAbout.nodes, filter);
  if (result.length === 1) return result[0];
  return result;
}