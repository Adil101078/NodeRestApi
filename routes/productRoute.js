const productCtrl = require('../controllers/productController')
const express = require('express')
const router = express.Router()

router.get('/', productCtrl.getAll)             //to fetch all products
router.get('/:id', productCtrl.getById)         //to fetch a product by Id
router.post('/', productCtrl.create)            //to create a new product
router.put('/:id', productCtrl.update)          //to update a product by Id
router.delete('/:id', productCtrl.delete)       //to delete a product by Id


module.exports = router