import SignUpForm from "../../Components/SignUpForm"
import LoginForm from "../../Components/LoginForm"
import { useState } from "react";

function AuthPage({ setUser }) {
    const [showLoginForm, setShowLoginForm] = useState(true);

    return (
        <div className="auth-container">
            <h1>INVENTORY MANAGEMENT SYSTEM</h1>
            <div className="auth-toggle-buttons">
                <button 
                  onClick={() => setShowLoginForm(true)} 
                  disabled={showLoginForm}
                  className="auth-toggle-button">
                    Login
                </button>
                <button 
                  onClick={() => setShowLoginForm(false)} 
                  disabled={!showLoginForm}
                  className="auth-toggle-button">
                    Sign Up
                </button>
            </div>
            {showLoginForm ? (
                <LoginForm setUser={setUser} />
            ) : (
                <SignUpForm setUser={setUser} />
            )}
        </div>
    );
}


export default AuthPage