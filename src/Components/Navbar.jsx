import { NavLink, Link } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import * as userService from '../API Services/userServices'

function Navbar({user, setUser}) {
    const navigate = useNavigate();

    function handleLogOut() {
        navigate('/')
        userService.logOut();
        setUser(null);
    }
    console.log(user)
    return (
        <nav>
            <div className="nav-section">
                <h2>Welcome, <br/>{user.name}!</h2>
            </div>
            <div className="nav-section page-links">
                <NavLink to={"/"}><p>Inventories</p></NavLink>
            </div>  
            <div className="nav-section">
                <Link onClick={handleLogOut}><p>Log out</p></Link>
            </div>
        </nav>
    )
}

export default Navbar