import "./Nav.css";
function Nav() {
    return (

        <nav>


            <div className="logo">
                <span className="pet">Pet</span>-<span className="shop">Shop</span>.kg
                <p>easy, accessible and simple</p>
            </div>


            <div className="top-menu">
                <ul>
                    <li><a href="https://google.com">DOGS</a></li>
                    <li><a href="https://google.com">CATS</a></li>
                    <li><a href="https://google.com">BIRDS</a></li>
                    <li><a href="https://google.com">Animal feed</a></li>
                    <li><a href="https://google.com">Other</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;