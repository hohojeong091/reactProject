import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getBookList} from "../api/BookAPI";

function Main() {

    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setKeyword(e.target.value)
    }

    const onClickHandler = () => {
        navigate(`/book?keyword=${keyword}`);
    }
    return (

            <div className="content-row">
                <h1> 책 검색 서비스 Beta Ver. </h1>
                <input type="text" value={keyword} onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>검색하기</button>
            </div>
    );
}

export default Main;