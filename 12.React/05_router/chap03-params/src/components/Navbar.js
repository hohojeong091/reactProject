import {Link, NavLink} from "react-router-dom";
function Navbar() {
    const activeStyle = {
        backgroundColor : 'orangered'
    };

    return (
        /*NavLink 컴포넌트는 Link 컴포넌트와 거의 유사하게 사용할 수 있다.
        * 단, 현재 Nav의 상태가 active 인지에 대한 값을 이용하여 스타일을 조작할 수 있다. */
        <div>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive? activeStyle : undefined}>
                        Menu
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;