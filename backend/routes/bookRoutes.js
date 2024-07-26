const express = require('express');
const { getBooks, createBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getBooks);
router.post('/', authMiddleware, createBook);
router.delete('/:id', authMiddleware, deleteBook);

module.exports = router;
