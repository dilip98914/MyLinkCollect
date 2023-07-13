exports.INTERNAL_SERVER_ERROR = function (res) {
  return res.status(500).send({
    message: 'something went wrong'
  })
}

exports.getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randomDate = function (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

exports.getRandomChoice = function (dataArray) {
  const random = Math.floor(Math.random() * dataArray.length);
  return dataArray[random]
}
