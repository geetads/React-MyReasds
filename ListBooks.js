import React from 'react'

const ListBooks =(props)=>{

const {books}=props;

return (

<div className="list-books-content">
    <div className="bookshelf">
        <ol className="books-grid">{books.length>0 && (books.map((book,i)=>(
            <li key={i}>
                       <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
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
        )))
                      }
            </ol>
    </div>
</div>

)
}
    
export default ListBooks