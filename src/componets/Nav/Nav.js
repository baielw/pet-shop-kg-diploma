import "./Nav.css";
function Nav() {
    return (

        <nav>





            <div className="top-menu">
                <ul>
                    <li> 
                        <div className="logo">
                        <span className="pet">Pet</span>-<span className="shop">Shop</span>.kg
                        <p className="logo.p">easy, accessible and simple</p>
                    </div>
                    </li>
                    <li><a href="https://google.com">HOME</a></li>
                    <li><a href="https://google.com">animals</a></li>                    
                    <li><a href="https://google.com">ABOUT</a></li>
                    <li><a href="https://google.com">CONTACT</a></li>

                </ul>
            </div>
          
        </nav>
    );
}


export default Nav;