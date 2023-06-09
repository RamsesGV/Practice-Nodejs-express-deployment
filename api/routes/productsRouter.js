const express = require('express')
const productsServices = require('../services/productsService')
const router = express.Router();
const service = new productsServices();

router.get('/', (req, res) => {
    const products = service.find()
  res.json(products)

})

router.get('/filter',(req,res) => {
  res.send('yo soy un filter')
})

router.get('/:id', (req,res) => {
  const { id }  = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req,res) => {
  const body = req.body
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
})

router.patch('/:id', (req,res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const resp = service.delete(id)
  res.json(resp)
})

module.exports = router;
