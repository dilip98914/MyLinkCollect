const express = require('express')
const router = express.Router()

// exports.userLogin = async (req, res) => {
//   logger.info("inside user login")
//   req.assert('email', 'email cannot be empty.').notEmpty();
//   req.assert('password', 'password cannot be empty.').notEmpty();
//   var errors = req.validationErrors();
//   if (errors) {
//       return res.status(500).send({ status_code: 400, status: 'failure', message: errors })
//   } else {
//       try {
//           var inputData = req.body;
//           let user = await userService.findUserByEmail(inputData.email);
//           if (user != null) {
//               if (crypto.decrypt(user.password) == inputData.password) {
//                   let token = await auth.createToken(user);
//                   let obj = {id,email,usertype,verified,isActive} = user;
//                   res.status(200).json({ status_code: 200, status: 'success', message: 'User Logged In successfully', data: { token,id,email,usertype,verified,isActive } });
//               } else {
//                   res.status(405).json({ status_code: 405, status: 'failure', message: 'invalid credentials' });
//               }
//           } else {
//               res.status(405).json({ status_code: 405, status: 'failure', message: 'user not found' });
//           }
//       } catch (err) {
//           logger.error(err)
//           res.status(500).json({ status_code: 500, status: 'failure', message: err.message });
//       }
//   }
// }

router.get('/', async (req, res, next) => {
  res.render('pages/homepage', {})
})
router.get('/dashboard', async (req, res, next) => {
  res.render('pages/dashboard', {})
})

module.exports = router;