const express = require('express');
const router = express.Router();

const itemController = require('../controllers/ItemController');

// get all items
router.get('/', (req, res, next) => {
  itemController.getAll(req, res, next);
})

// search item
router.get('/search/:kw', (req, res, next) => {
  itemController.search(req, res, next);
})

// get an item by id
router.get('/:id', (req, res, next) => {
  itemController.getById(req, res, next);
})

// add item
router.post('/', (req, res, next) => {
  itemController.insert(req, res, next);
})

// update item
router.put('/:id', (req, res, next) => {
  itemController.update(req, res, next);
})

// delete item
router.delete('/:id', (req, res, next) => {
  itemController._delete(req, res, next);
})

// add to cart
router.post('/add_to_cart/:id', (req, res, next) => {
  itemController.addToCart(req, res, next);
})

// get by type
router.get('/get_by_category/:type', (req, res, next) => {
  itemController.getByType(req, res, next);
})

module.exports = router;
