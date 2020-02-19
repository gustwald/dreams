const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj.transaction[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const sum = arr => arr.reduce((acc, val) => { return acc + val; }, 0)
const average = arr => arr.reduce(( acc, val ) => acc + val, 0 ) / arr.length;

module.exports = {
    groupBy,
    average,
    sum,
}