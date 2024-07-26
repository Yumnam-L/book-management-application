const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.userId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  const { title, author, genre, coverImage, description } = req.body;
  try {
    const book = new Book({
      title,
      author,
      genre,
      coverImage,
      description,
      user: req.user.userId,
    });

    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
