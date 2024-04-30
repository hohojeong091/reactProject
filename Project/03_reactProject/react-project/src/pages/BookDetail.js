import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function BookDetail() {
    const {title} = useParams;

    const [book, setBook] = useState();

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/book?keyword=${keyword}`);
    }

    useEffect(() => {
        getBookDetail(title).then(data=>setBook(data));
    }, []);

    return (
        <div className="content-col">
            {book &&
                <>
                    <h1> {book.title}</h1>
                    <div> 책 제목 : {book.title}</div>
                    <div> 저자 : {book.author}</div>
                    <div> 출판사 : {book.publisher}</div>
                    <div> 출판년도 : {book.pubdate}</div>

                    <button onClick={onClickHandler}> 메인으로</button>
                </>
            }
        </div>
    )

}

export default BookDetail;