import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the book title"],
        trim: true,
      },
      author: {
        type: String,
        required: [true, "Please enter the book author"],
        trim: true,
      },
      image: {type:String, required:true},
      price: {
        type: Number,
        required: [true, "Please enter the price"],
      },
      category: {
        type: String,
        required: [true, "Please enter the book category"],
      },
      description: {
        type: String,
        required: [true, "Please enter the book description"],
      },
      createdAt: { type: Date, default: Date.now }
});

const books = mongoose.model('books', bookSchema);

export default books;
