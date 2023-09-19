exports.getCollection = async function (isAuthor) {
  try {

    let collection = await Collection.findOne({
      id: req.params.id
    })


  } catch (err) {
    console.error(err)
    return { error: true }
  }
}