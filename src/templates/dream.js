import React, { useState } from "react"
import { Link } from "gatsby"
import { sum, average, groupByWeek } from "../utils"
import { DreamWrapper, BackButton, Filter } from "../style"
import TinyLineChart from "../components/charts/large"
import Arrow from "../assets/arrow.svg"

export default ({ pageContext: { value }, ...props }) => {
//   console.log(props)
  const { location } = props || {}
  const { state } = location || {}
  const { dreamName } = state || {}
  const [quickDataFilter, setQuickDataFilter] = useState("settled")

  const balance = sum(
    value
    //   .filter(d => d.transaction.state === quickDataFilter)
      .map(v => v.transaction.amount)
  )
  const averageTransaction = average(
    value
    //   .filter(d => d.transaction.state === quickDataFilter)
      .map(v => v.transaction.amount)
  )
  console.log(value);
//   const transactionsAmount = value.filter(
//     v => v.transaction.state === quickDataFilter
//   )

// const lepra = groupByWeek(value);
  return (
    <>
      <BackButton>
        <Link to="/">
          <Arrow />
        </Link>
      </BackButton>
      <Filter>
        filter on
        <div className="filterItems">
            <a style={{ textDecoration: quickDataFilter === 'pending' ? 'line-through' : 'none' }} onClick={() => setQuickDataFilter(quickDataFilter === "pending" ? 'settled' : 'pending')}>settled</a>
            <a style={{ textDecoration: quickDataFilter === 'settled' ? 'line-through' : 'none'}} onClick={() => setQuickDataFilter(quickDataFilter === "pending" ? 'settled' : 'pending')}>pending</a>
        </div>
      </Filter>
      <DreamWrapper>
        {/* <div className="sidebar">
                <h1 className="title">{dreamName}</h1>
            </div> */}
        <div className="data">
          <div className="name-data">
            <h1 className="title">{dreamName}</h1>
          </div>
          <div className="quick-data">
            <div className="quick-data--child">
              <h2 className="title">{balance && balance}</h2>
              <p className="explain">total dream balance</p>
            </div>
            <div className="quick-data--child">
              <h2 className="title">
                {value && value.length}
              </h2>
              <p className="explain">transactions</p>
            </div>
            <div className="quick-data--child">
              <h2 className="title">
                {averageTransaction && averageTransaction.toFixed(1)}
              </h2>
              <p className="explain">average transaction value</p>
            </div>
          </div>
          <div className="chart-data">
            <TinyLineChart filter={quickDataFilter} data={value} />
          </div>
        </div>
      </DreamWrapper>
    </>
  )
}
