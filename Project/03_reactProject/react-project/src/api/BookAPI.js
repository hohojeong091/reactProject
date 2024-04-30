
/* 네이버  도서 검색 API로 도서 검색하기 */

import BookList from "../pages/BookList";

const BASE_URL ='/v1/search/book'

const API_ID ='25fBNFQqQLezKlXG9Ydv'
const API_SECRET = 'tGNjmflA3q'

export async function getBookList(keyword) {
    const url = `${BASE_URL}.json?query=${keyword}`

    const response = await fetch(url,{
        headers : {
            'X-Naver-Client-Id' : API_ID,
            'X-Naver-Client-Secret' : API_SECRET
        }
    });

    const data = await response.json();

    console.log(data);

    return data.items;






}


