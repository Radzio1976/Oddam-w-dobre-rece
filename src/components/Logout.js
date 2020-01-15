import React from 'react';
import Decoration from '../../src/assets/images/Decoration.svg';
import { AuthContext } from '../App';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>
                {
                    ({ isAuth }) => {
                        return (
                            isAuth ?
                                <Redirect to="/login" /> :
                                <section className="logout-section">
                                    <div className="logout-container">
                                        <h1>Wylogowanie nastąpiło pomyślnie</h1>
                                        <img src={Decoration}></img>
                                        <button onClick={() => this.props.history.push("/")}>Strona główna</button>
                                    </div>
                                </section>
                        )
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default Logout;