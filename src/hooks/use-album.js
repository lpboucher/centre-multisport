import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useAlbum = (filter) => {
  const { allContentfulAlbum } = useStaticQuery(
    graphql`
      query {
        allContentfulAlbum {
            nodes {
              node_locale
              label
              slug
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
  const result = filterQuery(allContentfulAlbum.nodes, filter);
  if (result.length === 1) return result[0];
  return result;
}