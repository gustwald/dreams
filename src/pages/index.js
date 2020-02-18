import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { groupBy } from "../utils"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { allDreamsApi } = data || {}
  const { nodes } = allDreamsApi || {}
  const dreams = nodes && nodes[0].data
  const groupById = groupBy("dreamId")
  const groupedDreams = dreams && groupById(dreams)
  console.log(groupedDreams)

  return (
    <Layout>
      {Object.keys(groupedDreams).map((dream, i) => (
        <Link
          key={i}
          state={{ dreamName: `Dream #${i + 1}` }}
          to={`/dream/${dream}`}
        >{`Dream #${i + 1}`}</Link>
      ))}
    </Layout>
  )
}
export default props => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
