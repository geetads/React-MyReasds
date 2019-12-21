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

 static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  }
  handleChange=(e)=>{
    console.log(e.target.value);
    this.props.onSearchBook(e.target.value);
  }

  render() {

   
    const  {searchBookResult}=this.props;
    


    return( 
      

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
             


              <div className='bookshelf-books'></div>
        <ol className="books-grid">{searchBookResult.length>0 && (searchBookResult.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf}>
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
                            
                      );
                       }
                       }
                        
           
                

            
    
 
        export default SearchBooks