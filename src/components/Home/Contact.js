import React from 'react';
import Axios from 'axios';
import Decoration from '../../assets/images/Decoration.svg';
import Facebook from '../../assets/images/Facebook.svg';
import Instagram from '../../assets/images/Instagram.svg';

class Contact extends React.Component {
    state = {
        name: {
            value: "",
            error: ""
        },
        email: {
            value: "",
            error: ""
        },
        info: {
            value: "",
            error: ""
        },
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: {
                error: "",
                value: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (this.state.name.value.length < 5) {
            this.setState({
                name: {
                    ...this.state.name,
                    error: "Podane imię jest nieprawidłowe!"
                }
            })
            isValid = false;
        }
        if (this.state.email.value.includes("@") === false || this.state.email.value.length < 5) {
            this.setState({
                email: {
                    ...this.state.email,
                    error: "Podany email jest nieprawidłowy!"
                }
            })
            isValid = false;
        }
        if (this.state.info.value.length < 120) {
            this.setState({
                info: {
                    ...this.state.info,
                    error: "Wiadomość musi mieć conajmniej 120 znaków!"
                }
            })
            isValid = false;
        }
        if (isValid) {
            Axios.post("http://localhost:3000/contacts", { email: this.state.email.value, name: this.state.name.value, info: this.state.info.value }).then((response) => {
                this.setState({
                    name: {
                        error: "",
                        value: ""
                    },
                    email: {
                        error: "",
                        value: ""
                    },
                    info: {
                        error: "",
                        value: ""
                    },
                    message: "Wiadomość została wysłana! Wkrótce się skontaktujemy."
                })
            }).then((error) => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <>
                <section className="contact-section">
                    <div className="contact-section-left">

                    </div>
                    <div className="contact-section-right">
                        <div className="contact-form-title">
                            <h1>Skontaktuj się z nami</h1>
                            <img src={Decoration}></img>
                            <p>{this.state.message}</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="contact-form-upper">
                                <label>Wpisz swoje imię
                            <input type="text" name="name" value={this.state.name.value} onChange={this.handleChange}></input></label>
                                <p>{this.state.name.error}</p>
                                <label>Wpisz swój email
                            <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange}></input></label>
                                <p>{this.state.email.error}</p>
                            </div>
                            <label>Wpisz swoją wiadomość</label>
                            <textarea name="info" value={this.state.info.value} onChange={this.handleChange}></textarea>
                            <p>{this.state.info.error}</p>
                            <button>Wyślij</button>
                        </form>
                    </div>
                </section>
                <footer>
                    <div className="footer-copyright"><p>Copyright by Coders Lab</p></div>
                    <div className="footer-social">
                        <img src={Facebook}></img>
                        <img src={Instagram}></img>
                    </div>
                </footer>
            </>
        )
    }
}

export default Contact;