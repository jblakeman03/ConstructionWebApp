import "./Navbar.css"

function Navbar(){
    return( 
        <nav className="nav">
            <a href="/" className="site-title">Blakeman Brothers Construction</a>
            <ul> 
                <li>
                    <a href='/Home'>Home</a>
                </li>
                <li>
                    <a href='/AboutUS'>About Us</a>
                </li>
                <li>
                    <a href='/Services'>Services</a>
                </li>
                <li>
                    <a href='/ContactUS'>Contact Us</a>
                </li>
                <li>
                    <a href='/LogIn'>Log In </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar