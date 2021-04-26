import React, { Component } from "react";

export default class Book extends Component {
  state = {};
  render() {
    const { book, handleState, isButtonClicked } = this.props;
    return (
      <li className="list-group-item d-flex flex-column flex-lg-row">
        <blockquote class="blockquote">
          <p class="mb-0">{book.name}</p>
          <footer class="blockquote-footer">
            <cite title="Source Title">Written by {book.author}</cite>
          </footer>
        </blockquote>

        <span className="ml-lg-auto text-center text-lg-left">
          {book.price}
        </span>
        <div className="d-flex ml-lg-4">
          <span
            className="mr-lg-3"
            style={{ cursor: "pointer" }}
            onClick={() => handleState(book.id)}
          >
            <i class="fas fa-trash"></i>
          </span>
          <span className="ml-auto ml-lg-auto">
            <small>{`(${book.quantity} items are available)`}</small>
          </span>
        </div>
      </li>
    );
  }
}
