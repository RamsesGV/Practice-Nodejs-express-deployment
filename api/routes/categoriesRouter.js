const express = require('express')
const { faker } = require('@faker-js/faker')
const router = express.Router()

router.get('/:categoryId/products/:productId',(req,res) => {
  const { categoryId,productId }  = req.params
  res.json({
    productId,
    categoryId,
    name:'product 4',
    price: 1004
    })

  })

  router.post('/',(req,res) => {
    const body = req.body
    res.json({
      message:'category created',
      data:body
    })
  })

  router.put('/:id' , (req,res) => {
    const { id } = req.params
    const body = req.body
    res.json({
      message:'category updated',
      data:body,
      id,
    })
  })

  router.patch('/:id', (req,res) => {
    const { id } = req.params
    const body = req.body
    res.json({
      message:'category updated whit patch',
      data:body,
      id,
    })
  })

  router.delete('/:id' , (req,res) =>{
    const { id } = req.params
    res.json({
      message:'category deleted',
      id,

    })
  })

  module.exports = router
