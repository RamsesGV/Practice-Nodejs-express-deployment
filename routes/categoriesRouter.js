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

  module.exports = router
