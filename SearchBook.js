import React from 'react'
import {Link} from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  state = {
    search:'',
    showSearchPage: false
    
  }


handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({search:e.target.value});
    if(this.props.onSearchBook && this.state.search!==""){
      this.props.onSearchBook(e.target.value);
    }
  } 

  onhandleSelectChange=(book,e)=>{
    e.preventDefault();
    const value=e.target.value;
    console.log(value);
    if (this.props.onUpdateShelf){
      this.props.onUpdateShelf(book,value);
    }
  
    }
  
  

  render() {

   
    const  {searchBookResult}=this.props;
    const {books,onUpdateShelf}=this.props;

    console.log("searchBookResult",searchBookResult);
    console.log("books",books)
let verifiedBooks=[];
if (searchBookResult && searchBookResult.length>0){
  verifiedBooks=searchBookResult.map(searchBook=>{
    books && books.length>0 && books.forEach(bookOnShelf=>{
      if(searchBook.id===bookOnShelf.id){
        searchBook.shelf=bookOnShelf.shelf
      }
       else{
        books.shelf='none';
      }
    });
    return searchBook
  });
}

    return( 
      
<div>
        <div className="search-books">
        
            <div className="search-books-bar">
              <Link to='/' className='close-search'>
                close
              </Link>
              
              <div className="search-books-input-wrapper">
            
                <form className='search-book-form'>
                <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.search}
                onChange={this.handleChange}
                
                />
                </form>
                </div>
                
</div>
</div>
             

<div>
              <div className='bookshelf-books'></div>
         { searchBookResult && searchBookResult.length>0  && (<ListBooks books={verifiedBooks} onUpdateShelf={onUpdateShelf}/>)}
              
           </div>
                </div>       
                      );
                       }
                       }     

            
    
 
        export default SearchBooks
