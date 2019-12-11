import { useStaticQuery, graphql } from "gatsby"
export const useNavigation = () => {
  const { allContentfulNavigation } = useStaticQuery(
    graphql`
      query {
        allContentfulNavigation {
            edges {
              node {
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
      }
    `
  )
  return allContentfulNavigation.edges.map(item => item.node);
}