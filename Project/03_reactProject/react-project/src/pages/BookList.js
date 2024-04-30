import {useEffect, useState} from "react";
import {getBookList} from "../api/BookAPI";
import BookItem from "../components/Bookitem"
import {useSearchParams} from "react-router-dom";

function BookList() {

    const [bookList, setBookList] = useState();


    const [params] = useSearchParams();
    const keyword = params.get('keyword');


    useEffect(() => {
        getBookList(keyword).then(data => setBookList(data));
    }, []);

    console.log('bookList : ', bookList);

    return (
        <div className="content-row">
            {bookList && bookList.map(book => <BookItem key={book.title} book={book}/>)}

        </div>
    );


}


export default BookList;