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
                fluid(maxWidth: 635, maxHeight: 415) {
                    ...GatsbyContentfulFluid
                }
                file {
                  url
                  contentType
                }
                description
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