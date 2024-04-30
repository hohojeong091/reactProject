import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function BookDetail() {

    const [bookDetail, setBookDetail] = useState();

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/book?keyword=${keyword}`);
    }


    return (
        <div className="content-col">
            {book &&
                <>
                    <h1> {book.title}</h1>
                    <div> 책 제목 : {book.title}</div>
                    <div> 저자 : {book.author}</div>
                    <div> 출판사 : {book.publisher}</div>
                    <div> 출판년도 : {book.pubdate}</div>


                </>
            }
        </div>
        <button onClick={onClickHandler}> 메인으로 </button>
)


}
export default BookDetail;