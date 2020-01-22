const _ = require(`lodash`);
const path = require(`path`);

const languages = require('./src/data/languages');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const locales = languages.langs;

  locales.forEach((locale) => {
    const prefix = locale;
    ['index', 'contact', 'gallery', 'about'].forEach((template) => {
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
        }
      `).then((result) => {
      const prefix = locale;
      const catNames = ['all', ...result.data.categories.edges.map(cat => cat.node.name)];
      catNames.forEach(cat => {
        const postsPerPage = 3;
        const catArticles = cat !== 'all' ? 
          result.data.articles.edges.filter(article => article.node.category.name === cat)
          :
          result.data.articles.edges;
        const numPages = Math.ceil(catArticles.length / postsPerPage);
        const template = 'news';
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: `/${prefix}/${template}${cat !== 'all' ? `/${cat.toLowerCase()}` : ''}${i === 0 ? `/` : `/${i + 1}`}`,
            component: path.resolve(`./src/templates/${template}.js`),
            context: {
              category: cat !== 'all' ? cat : null,
              locale: locale,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              showAll: cat === 'all'
            }
          });
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
    })}
  ))
}