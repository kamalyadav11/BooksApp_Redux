import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList = () => {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
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

//Anything returned from this function will show up as props inside BookList
const mapDispatchToProps = dispatch => {
  //whenever selectBook is called, the result should be [assed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
