const express = require('express');
const router = express.Router();

const Cart = require('./models/cart');
const User = require('./models/user');
const Item = require('./models/item');
const Review = require('./models/review');

// Cart routes
router.get('/carts', async (req, res) => {
  const carts = await Cart.find().populate('userId').populate('items.itemId');
  res.json(carts);
});

router.get('/carts/:id', async (req, res) => {
  const cart = await Cart.findById(req.params.id).populate('userId').populate('items.itemId');
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).send('Cart not found');
  }
});

router.post('/carts', async (req, res) => {
  const cart = new Cart({
    userId: req.body.userId,
    items: req.body.items
  });
  await cart.save();
  res.json(cart);
});

router.put('/carts/:id', async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (cart) {
    cart.userId = req.body.userId || cart.userId;
    cart.items = req.body.items || cart.items;
    await cart.save();
    res.json(cart);
  } else {
    res.status(404).send('Cart not found');
  }
});

router.delete('/carts/:id', async (req, res) => {
  const cart = await Cart.findByIdAndDelete(req.params.id);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).send('Cart not found');
  }
});

// User routes
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});




router.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  await user.save();
  res.json(user);
});




router.put('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    await user.save();
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

router.delete('/users/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Item routes
router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get('/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

router.post('/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  });
  await item.save();
  res.json(item);
});

router.put('/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    item.name = req.body.name || item.name;
    item.price = req.body.price || item.price;
    item.description = req.body.description || item.description;
    await item.save();
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

router.delete('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Review routes
router.get('/reviews', async (req, res) => {
  const reviews = await Review.find().populate('userId').populate('itemId');
  res.json(reviews);
});

router.get('/reviews/:id', async (req, res) => {
  const review = await Review.findById(req.params.id).populate('userId').populate('itemId');
  if (review) {
    res.json(review);
  } else {
    res.status(404).send('Review not found');
  }
});

router.post('/reviews', async (req, res) => {
  const review = new Review({
    userId: req.body.userId,
    itemId: req.body.itemId,
    rating: req.body.rating,
    comment: req.body.comment
  });
  await review.save();
  res.json(review);
});

router.put('/reviews/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    review.userId = req.body.userId || review.userId;
    review.itemId = req.body.itemId || review.itemId;
    review.rating = req.body.rating || review.rating;
    review.comment = req.body.comment || review.comment;
    await review.save();
    res.json(review);
  } else {
    res.status(404).send('Review not found');
  }
});

router.delete('/reviews/:id', async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).send('Review not found');
  }
});

module.exports = router;

