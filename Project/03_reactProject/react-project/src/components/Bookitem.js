import {Link} from "react-router-dom";
import bookList from "../pages/BookList";
import {useState} from "react";

function Bookitem({book}) {

    //response = fetch(url) 으로 선언..
    //응답화면은 rss.이런식으로 나오고있고..


    return (
        //<Link to={`/book/`}>
            <div className="item">
                <h3> 책 제목 :  {book.title}</h3>
                <h3> 저자 : {book.author}</h3>
                <h3> 출판사 : {book.publisher}</h3>
                <h3> 출판년도 : {book.pubdate}</h3>

            </div>

    )
}

export default Bookitem;