import { NavLink, Link } from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import * as userService from '../API Services/userServices'
import Button from '@mui/material/Button';


function Navbar({user, setUser}) {
    const navigate = useNavigate();

    function handleLogOut() {
        navigate('/')
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className="navbar">
          <div className="nav-section welcome-section">
            <h2>Inventory Management System 🏢 </h2>
            <p>Welcome, {user.accountType} {user.name}!</p>
          </div>
          <div className="links-container">
            <div className="nav-section page-links">
                <NavLink to="/" className="link">
                <Button className='link' variant="contained" color="primary">
                    Inventories
                </Button>
                </NavLink>
            </div>
            <div className="nav-section logout-section">
                <Button className='link' onClick={handleLogOut} variant="contained" color="primary">
                    Log Out
                </Button>
            </div>
          </div>
        </nav>
      );
}

export default Navbar