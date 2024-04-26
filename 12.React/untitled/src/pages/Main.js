import {Route} from "react-router-dom";

function Main() {
    return (
        <div>
            <h1> 메인페이지 </h1>
            <nav>
                <Route to="/" element={<Main/>}> Home</>
                <Route to="/about"> Home</Route>
                <Route to="/menu"> Home</Route>
            </nav>
        </div>
    );
}

export default Main;