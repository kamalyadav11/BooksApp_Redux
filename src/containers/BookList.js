import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList = () => {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

//whenever state is updated, BookList component is gonna re-render
const mapStateToProps = state => ({
  // whatever is returned from hggere will show up as props inside of BookList
  books: state.books
});

export default connect(mapStateToProps)(BookList);
