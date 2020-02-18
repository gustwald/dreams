const moment = require('moment');
moment.locale('sv');
const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj.transaction[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const sum = arr => arr.reduce((acc, val) => { return acc + val; }, 0)
const average = arr => arr.reduce(( acc, val ) => acc + val, 0 ) / arr.length;

const dateConverter = (timestamp) => {
    const a = new Date(timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = `${date} ${month} ${year}`;
    return time;
}

const groupByWeek = (dates) => {
}

module.exports = {
    groupBy,
    sum,
    average,
    dateConverter,
    groupByWeek,
}