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
        <ol className="books-grid">{ searchBookResult && searchBookResult.length>0  && (searchBookResult.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.Shelf} 
                                       onChange={(e)=>this.onhandleSelectChange(book,e)}> >
                                <option value="none" disabled>Move to...</option>
                                <option name="currentlyReading" value="currentlyReading">Currently Reading</option>
                                <option name="wantToRead" value="wantToRead">Want to Read</option>
                                <option name="read" value="read">Read</option>
                                <option name="none" value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          {Array.isArray(book.authors)?
                          book.authors.map((author,i)=>(
                            <div key={i} className="book-authors">{author}</div>
                          ))
                        :
                        false
                        }
                        </div>
                        </li>
                        )))}
                        </ol>

                            </div>
                            </div>
                      );
                       }
                       }     

            
    
 
        export default SearchBooks
