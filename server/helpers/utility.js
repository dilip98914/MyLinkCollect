exports.INTERNAL_SERVER_ERROR = function (res) {
  return res.status(500).send({
    message: 'something went wrong'
  })
}  