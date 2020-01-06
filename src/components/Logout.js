import React from 'react';
import Decoration from '../../src/assets/images/Decoration.svg'

class Logout extends React.Component {
    render() {
        return (
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

export default Logout;