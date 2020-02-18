const { groupBy } = require('./src/utils');

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
      query {
        allDreamsApi {
            nodes {
              data {
                transaction {
                  amount
                  amountInCents
                  bundle
                  createdAt
                  dreamId
                  exponent
                  marketId
                  productId
                  quantity
                  sourceType
                  state
                  transactionType
                  unit
                  userId
                }
              }
            }
        }
      }
    `);

    const { allDreamsApi } = data || {};
    const { nodes } = allDreamsApi || {};
    const dreams = nodes && nodes[0].data;

    const groupById = groupBy('dreamId');
    const groupedDreams = dreams && groupById(dreams);
    const entryTemplate = `${__dirname}/src/templates/dream.js`;

    Object.entries(groupedDreams).forEach(([key, value]) => {
        createPage({
        path: `/dream/${key}`,
        component: entryTemplate,
        context: {
            value,
        },
      })
    });
  }