import { NavLink, Link } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    // function handleLogOut() {
    //     navigate('/')
    //     userService.logOut();
    //     setUser(null);
    // }
    
    return (
        <nav>
            {/* <div className="nav-section">
                <img className="logo" src="/logo.svg" />
                <h2>Welcome, <br/>{user.name}!</h2>
            </div> */}
            <div className="nav-section page-links">
                <NavLink to={"/"}><p>Inventories</p></NavLink>
            </div>  
            {/* <div className="nav-section">
                <Link onClick={handleLogOut}><img src="/logout.svg"/><p>Log out</p></Link>
            </div> */}
        </nav>
    )
}

export default Navbar