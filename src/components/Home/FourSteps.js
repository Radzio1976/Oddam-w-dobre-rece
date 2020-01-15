import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Decoration from '../../assets/images/Decoration.svg';
import Icon1 from '../../assets/images/Icon1.svg';
import Icon2 from '../../assets/images/Icon2.svg';
import Icon3 from '../../assets/images/Icon3.svg';
import Icon4 from '../../assets/images/Icon4.svg';
import { AuthContext } from '../../App';

function FourSteps(props) {
    return (
        <AuthContext.Consumer>
            {
                ({ isAuth }) => {
                    return (
                        <section className="four-steps-wrapper" ref={props.fourSteps}>
                            <h1>Wystarczą cztery proste kroki</h1>
                            <img src={Decoration}></img>
                            <div className="four-steps_container">
                                <div className="four-steps_container-for-boxes">
                                    <div className="four-steps_container_box">
                                        <img src={Icon1}></img>
                                        <p>Wybierz rzeczy</p>
                                        <hr></hr>
                                        <p>ubrania, zabawki,</p>
                                        <p>sprzęt i inne</p>
                                    </div>
                                    <div className="four-steps_container_box">
                                        <img src={Icon2}></img>
                                        <p>Spakój je</p>
                                        <hr></hr>
                                        <p>skorzystaj z</p>
                                        <p>worków na śmieci</p>
                                    </div>
                                    <div className="four-steps_container_box">
                                        <img src={Icon3}></img>
                                        <p style={{ marginTop: "-26px" }}>Zdecyduj komu</p>
                                        <p>chcesz pomóc</p>
                                        <hr></hr>
                                        <p>wybierz zaufane</p>
                                        <p>miejsce</p>
                                    </div>
                                    <div className="four-steps_container_box">
                                        <img src={Icon4}></img>
                                        <p>Zamów kuriera</p>
                                        <hr></hr>
                                        <p>kurier przyjedzie</p>
                                        <p>w dogodnym terminie</p>
                                    </div>
                                </div>
                            </div>
                            {
                                isAuth ?
                                    <div onClick={() => props.history.push("/give-things")} className="four-steps-button">
                                        <h1>ODDAJ</h1>
                                        <h1>RZECZY</h1>
                                    </div> :
                                    <div onClick={() => props.history.push("/login")} className="four-steps-button">
                                        <h1>ODDAJ</h1>
                                        <h1>RZECZY</h1>
                                    </div>
                            }
                        </section>
                    )
                }
            }
        </AuthContext.Consumer>
    )
}

export default withRouter(FourSteps);