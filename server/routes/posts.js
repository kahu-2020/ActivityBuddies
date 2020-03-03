const express = require('express')
const db = require('../db/db')
const router = express.Router()
const sgMail = require('@sendgrid/mail')

router.use(express.json())

const { getTokenDecoder } = require('authenticare/server')


router.get('/:id', (req, res) => {
  db.getPostsByLocation(req.params.id)
  .then(postList => {
      res.json(postList)
  })
})


//router to add new posts
router.post('/', (req, res) => {
  const newPost = req.body
  db.addPost(newPost)
  .then(newPostId => {
    res.json(newPostId)
  })
})

// TODO: multiple id's will cause problem -kelly
router.get('/:id', getTokenDecoder(), (req, res) => {
    console.log('hi' + req.user)
    db.getPostsByLocation(req.params.id)
    .then(postList => {
        res.json(postList)
    })
})

router.get('/upcoming/:id', (req, res) => {
  db.getUpComingPosts(req.params.id)    
    .then(upComingPosts => {
      console.log(upComingPosts)
        res.json(upComingPosts)
  })
})

router.post('/rsvp', (req, res) => {
  db.setRsvp(req.body)
  .then(console.log('hello'))
})

// TODO: turn this into a post route so can use req.body to send 
//       data.
router.post('/sendEmail', (req,res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
   to: req.body.to,
   from: req.body.from,
   subject: req.body.subject,
   text: 'The date is ' + new Date(),
   html: '<strong>The date is ' + new Date() + '</strong>',
 };
 sgMail.send(msg)
 .then(apiRes => {
   console.log(apiRes.body)
   res.json({message: 'sent'})
 })
 .catch(err => {
   console.log(err)
  res.status(500).json({message: 'error'})
})
})

// router.get('/', (req,res) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//    to: 'hnry.harcourt@gmail.com',
//    from: 'test@example.com',
//    subject: 'Sending with Twilio SendGrid is Fun',
//    text: 'and easy to do anywhere, even with Node.js',
//    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//  };
//  sgMail.send(msg)
//  .then(stuff => {
//    res.send('yay')
//  })
// })

module.exports = router
