import React, { useState } from "react"
import { Link } from "gatsby"
import { sum, average } from "../utils"
import { DreamWrapper, BackButton, Filter } from "../style"
import TinyLineChart from "../components/charts/large"
import Arrow from "../assets/arrow.svg"

export default ({ pageContext: { value }, ...props }) => {
  const { location } = props || {}
  const { state } = location || {}
  const { dreamName } = state || {}
  const [quickDataFilter, setQuickDataFilter] = useState("total")

  const balance = sum(
    value
      .filter(d => {
        if (quickDataFilter === "total") {
          return d.transaction.state === "settled" || "pending"
        } else {
          return d.transaction.state === "pending"
        }
      })
      .map(v => v.transaction.amount)
  )
  const averageTransaction = average(
    value
      .filter(d => {
        if (quickDataFilter === "total") {
          return d.transaction.state === "settled" || "pending"
        } else {
          return d.transaction.state === "pending"
        }
      })
      .map(v => v.transaction.amount)
  )
  const transactionsAmount = value.filter(d => {
    if (quickDataFilter === "total") {
      return d.transaction.state === "settled" || "pending"
    } else {
      return d.transaction.state === "pending"
    }
  })

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
          <a
            style={{
              textDecoration:
                quickDataFilter === "pending" ? "line-through" : "none",
            }}
            onClick={() =>
              setQuickDataFilter(
                quickDataFilter === "pending" ? "total" : "pending"
              )
            }
          >
            total
          </a>
          <a
            style={{
              textDecoration:
                quickDataFilter === "total" ? "line-through" : "none",
            }}
            onClick={() =>
              setQuickDataFilter(
                quickDataFilter === "pending" ? "total" : "pending"
              )
            }
          >
            pending
          </a>
        </div>
      </Filter>
      <DreamWrapper>
        <div className="data">
          <div className="name-data">
            <h1 className="title">{dreamName}</h1>
          </div>
          <div
            style={{
              color: quickDataFilter === "total" ? "#8884d8" : "#cd2222",
            }}
            className="quick-data"
          >
            <div className="quick-data--child">
              <h2 className="title">{balance && balance}</h2>
              <p className="explain">dream balance</p>
            </div>
            <div className="quick-data--child">
              <h2 className="title">
                {transactionsAmount && transactionsAmount.length}
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
