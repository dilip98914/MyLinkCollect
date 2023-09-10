const express = require('express');
const Collection = require('../models/collection');
const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const { title, description, isPrivate } = req.body;
    if (req.file) {
      //later
    } else {
      const collection = await Collection.create({
        title,
        description: description || '',
        isPrivate: isPrivate || false,
        user_id: req.user.id
      })
    }

    res.status(200).send({
      message: 'Successfully added collection!',
      success: true,
      data: [collection]
    })

  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: 'Internal server error!',
      success: false,
      data: []
    })
  }
})

//delete collection,edit,read(all or single)
//create, delete link,edit,read(all or single)
//check public /private in case accessing someone else's link


//lets see can I go faster and defeat him

//pricing page
//login/registyer page
//contact us
//forgot password
//remind me feature
//search
//faq
//saved collection
//upgrade account->logic and pay functinalities
//edit profile
//like feature
//view count increase feature
//shareable links and option to share at twitter,facebook,reddit,instagram,quora
//paginated view for infinite collections
//on hover show info about links & collection


module.exports = router;