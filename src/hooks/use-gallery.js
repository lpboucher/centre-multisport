import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useGallery = (filter) => {
  const { allContentfulGallery } = useStaticQuery(
    graphql`
      query {
        allContentfulGallery {
            nodes {
              node_locale
              location
              images {
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
  const result = filterQuery(allContentfulGallery.nodes, filter);
  if (result.length === 1) return result[0];
  return result;
}