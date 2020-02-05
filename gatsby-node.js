const _ = require(`lodash`);
const path = require(`path`);

const languages = require('./src/data/languages');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const locales = languages.langs;

  locales.forEach((locale) => {
    const prefix = locale;
    ['index', 'contact', 'gallery', 'calendar', 'social'].forEach((template) => {
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
      const articles = result.data.articles.edges;
      const postsPerNewsPage = 1;
      const maxNewsPages = 2;
      const postsPerArchivePage = 1;
      const numNewsPages = Math.min(Math.ceil(articles.length / postsPerNewsPage), maxNewsPages);
      const numArchivePages = Math.ceil((articles.length - (maxNewsPages * postsPerNewsPage)) / postsPerArchivePage);
      let template = 'news';
      Array.from({ length: numNewsPages }).forEach((_, i) => {
        const pathSuffix = i === 0 ? '' : `${i + 1}`
        createPage({
          path: `/${prefix}/${template}/${pathSuffix}`,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            locale: locale,
            limit: postsPerNewsPage,
            skip: i * postsPerNewsPage,
            numPages: numNewsPages,
            currentPage: i + 1,
            showAll: true
          }
        });
      });

      template = 'archive';
      Array.from({ length: numArchivePages }).forEach((_, i) => {
        const pathSuffix = i === 0 ? '' : `${i + 1}`
        createPage({
          path: `/${prefix}/${template}/${pathSuffix}`,
          component: path.resolve(`./src/templates/${template}.js`),
          context: {
            locale: locale,
            limit: postsPerArchivePage,
            skip: (i * postsPerArchivePage) + (postsPerNewsPage * maxNewsPages),
            numPages: numArchivePages,
            currentPage: i + 1
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