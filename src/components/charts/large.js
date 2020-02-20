import React from "react"

import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts"

const TinyLineChart = ({ data }) => {
  let balance = 0
  let pending = 0
  let settled = 0
  let created = 0;

  let chartdata = data
    .map(d => d.transaction)
    .map(t => ({
      amount: t.amount,
      date: new Date(t.createdAt),
      state: t.state,
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  for (let i = 0; i < chartdata.length; i++) {
    balance += chartdata[i].amount
    chartdata[i].balance = balance
    if (chartdata[i].state === "pending") {
        pending += chartdata[i].amount
      }
      if (chartdata[i].state === "settled") {
        settled += chartdata[i].amount
      }
      if (chartdata[i].state === "created") {
        created += chartdata[i].amount
      }
      chartdata[i].pending = pending
      chartdata[i].settled = settled
      chartdata[i].created = created
  }
  return (
    <ResponsiveContainer>
      <AreaChart
        data={chartdata}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <Area
          type="monotone"
          dataKey="settled"
          stroke="#372ede"
          fill="#372ede"
          stackId="1"
        />
        <Area type="monotone" stackId="1" dataKey="pending" stroke="#f90c0c" fill="#f90c0c" />
        <Area type="monotone" stackId="1" dataKey="created" stroke="green" fill="green" />

        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default TinyLineChart
