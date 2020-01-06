import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../App'
import { Redirect } from 'react-router-dom';

function Navigation(props) {
    return (
        <AuthContext.Consumer>
            {
                ({ isAuth, logout }) => {
                    return (
                        <nav>
                            <div className="upper-nav">
                                {
                                    isAuth ?
                                        <>
                                            <h4>Cześć {localStorage.getItem("email")}</h4>
                                            <h4 onClick={() => props.history.push("/give-things")}>Oddaj rzeczy</h4>
                                            <h4 onClick={logout}>Wyloguj</h4>
                                        </> :
                                        <>
                                            <h4 onClick={() => props.history.push("/login")}>Zaloguj</h4>
                                            <h4 onClick={() => props.history.push("/register")}>Załóż konto</h4>
                                        </>
                                }
                            </div>
                            <div className="lower-nav">
                                <ul>
                                    <li onClick={() => props.history.push("/")}>Start</li>
                                    <li>O co chodzi?</li>
                                    <li>O nas</li>
                                    <li>Fundacja i organizacje</li>
                                    <li>Kontakt</li>
                                </ul>
                            </div>
                        </nav>
                    )
                }
            }
        </AuthContext.Consumer>
    )
}

export default withRouter(Navigation);