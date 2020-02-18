
import React from "react"

import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from "recharts"

const TinyLineChart = ({ data, filter }) => {

    // console.log(data);
    let balance = 0;
    let pending = 0;

    let chartdata = data
    //.filter(d => d.transaction.state === filter)
    .map(d => d.transaction)
    .map(t => ({ amount: t.amount, date: new Date(t.createdAt), state:t.state }))
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  for (let i = 0; i < chartdata.length; i++) {
    balance += chartdata[i].amount
    chartdata[i].balance = balance
    if (chartdata[i].state === 'settled') {
        pending += chartdata[i].amount;
    }
    chartdata[i].pending = pending;
  }
//   console.log(chartdata);
return (
  <ResponsiveContainer>
    <AreaChart data={chartdata} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <Area type="monotone" dataKey="balance" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="pending" stroke="pink" fill="pink" />
      <Tooltip />
    </AreaChart>
  </ResponsiveContainer>
)}

export default TinyLineChart
