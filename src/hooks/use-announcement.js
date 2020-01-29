import { useStaticQuery, graphql } from "gatsby"
import { filterQuery } from "../utils/queryFilters"
export const useAnnouncement = (filter) => {
  const { allContentfulAnnouncementItem } = useStaticQuery(
    graphql`
      query {
        allContentfulAnnouncementItem {
            nodes {
                isActive
                node_locale
                text
              }
        }
      }
    `
  )
  return filterQuery(allContentfulAnnouncementItem.nodes, filter);
}