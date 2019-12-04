import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:{}
  }

  componentDidMount(){
    BooksAPI.getAll().then(data=>{
      this.setState({books:data})
      console.log(this.state.books)
    }).catch(error=>error)
  }
  render() {
    const {books}=this.state;
    return (
      <div className="app">
       <div className="List-books">
       <div className="list-books-title">
         <h1>My Reads</h1>
         </div>
<div className="list-books-content">
  <ListBooks books={books}/>
</div>
</div>
</div>
    )
  }
}
export default BooksApp
