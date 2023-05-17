const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/', (req,res) => {
  const { limit, offset }  = req.query
  if(limit && offset) {
    res.json({
      limit,
      offset,
    })
  }else {
    res.send('no hay parametros')
  }
})

router.post('/', (req,res) => {
const body = req.body
res.json({
  message:'user created',
  data:body

})
})

router.patch('/:id', (req,res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data:body,
    id,
  })
})

router.put('/:id', (req,res) =>{
  const { id } = req.params
  const body = req.body
  res.json({
    message:'putupdate',
    data:body,
    id,

  })
})

router.delete('/:id', (req,res) => {
  const { id } = req.params
  res.json({
    message:'user Deleted',
    id,

  })
})

module.exports = router
