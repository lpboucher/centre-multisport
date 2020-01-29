const _ = require(`lodash`);
const path = require(`path`);

const languages = require('./src/data/languages');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const locales = languages.langs;

  locales.forEach((locale) => {
    const prefix = locale;
    ['index', 'contact', 'gallery', 'calendar'].forEach((template) => {
      const slug = template === 'index' ? '' : `/${template}`;
      createPage({
        path: `/${prefix}${slug}`,
        component: path.resolve(`./src/templates/${template}.js`),
        context: { locale, template },
      })
    }) 
  })

  await Promise.all(locales.map((locale) => {
    graphql(`
        {
          articles: allContentfulNewsItem(filter: {node_locale: { eq: "${locale}" } }) {
            edges {
              node {
                node_locale
                slug
                category {
                  name
                }
              }
            }
          }
          categories: allContentfulNewsCategory(filter: {node_locale: { eq: "${locale}" } }) {
            edges {
              node {
                node_locale
                name
              }
            }
          }
          about: allContentfulAbout(filter: {node_locale: { eq: "${locale}" } }) {
            edges {
              node {
                title
                content {
                  json
                }
                node_locale
                slug
              }
            }
          }
        }
      `).then((result) => {
      const prefix = locale;
      const postsOnFirstPage = 5;
      const postsPerPage = 10;
      const numPages = Math.ceil(((result.data.articles.edges.length - postsOnFirstPage) / postsPerPage)) + 1;
      const template = 'news';
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/${prefix}/${template}${i === 0 ? `/` : `/${i + 1}`}`,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            locale: locale,
            limit: i === 0 ? postsOnFirstPage : postsPerPage,
            skip: i === 0 ? 0 : ((i * postsPerPage) - postsOnFirstPage),
            numPages: numPages,
            currentPage: i + 1,
            showAll: true
          }
        });
      });

      result.data.articles.edges.forEach(item => {
        const template = 'article';
        const prefix = item.node.node_locale;
        const p = `/${prefix}/${template}/${item.node.slug}`;
        createPage({
          path: p,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            locale: item.node.node_locale,
            template: template,
            slug: item.node.slug
          },
        });
      });

      result.data.about.edges.forEach(item => {
        const template = 'about';
        const prefix = item.node.node_locale;
        const p = `/${prefix}/${item.node.slug}`;
        createPage({
          path: p,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            locale: item.node.node_locale,
            template: template,
            slug: item.node.slug
          },
        });
      });

    })
  }))
}