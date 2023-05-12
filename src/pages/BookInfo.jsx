import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BookInfo = ({ books }) => {
  const {id} = useParams()
  const book = books.find(book => +book.id === +id)
  console.log(book)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                  className="book__selected--ig"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating={book.rating}></Rating>
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice}></Price>
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente laboriosam sit iste consequuntur voluptates enim
                    omnis, illum reprehenderit magnam corporis animi, illo,
                    nihil officia? Corporis maiores modi quidem quod in.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente laboriosam sit iste consequuntur voluptates enim
                    omnis, illum reprehenderit magnam corporis animi, illo,
                    nihil officia? Corporis maiores modi quidem quod in.
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;