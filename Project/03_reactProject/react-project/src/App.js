import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import BookList from "./pages/BookList";
import './App.css';
import BookDetail from "./pages/BookDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="book" element={<BookList/>}/>
                    <Route path="detail" element={<BookDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;