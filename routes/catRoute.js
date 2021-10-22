const catCtrl = require('../controllers/categoryController')
const express = require('express')
const router = express.Router()

router.get('/', catCtrl.getAll)             //to fetch all categories
router.post('/', catCtrl.create)            //to create a new category
router.put('/:id', catCtrl.update)          //to update a category
router.get('/:id', catCtrl.getById)         //to retrieve a category by Id
router.delete('/:id', catCtrl.delete)       //to delete a category by Id


module.exports = router
