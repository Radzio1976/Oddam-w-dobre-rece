import React from 'react';
import Axios from 'axios';

class ThreeColumns extends React.Component {
    state = {
        bags: 0,
        organisations: 0,
        collections: 0
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/thingsToGive/").then((response) => {
            let bagsSum = 0;
            console.log(response.data)
            for (let i = 0; i < response.data.length; i++) {
                bagsSum += response.data[i].bagsQuantity
            }
            const organisationsArray = []
            for (let i = 0; i < response.data.length; i++) {
                if (organisationsArray.includes(response.data[i].organisationName) === false) {
                    organisationsArray.push(response.data[i].organisationName)
                }
            }
            this.setState({
                bags: bagsSum,
                organisations: organisationsArray.length,
                collections: response.data.length
            })
        })

    }

    render() {
        return (
            <section className="three-columns">
                <div className="three-columns-container">
                    <div className="three-columns-container_column">
                        <h1>{this.state.bags}</h1>
                        <h4>Oddanych worków</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="three-columns-container_column">
                        <h1>{this.state.organisations}</h1>
                        <h4>Wspartych organizacji</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="three-columns-container_column">
                        <h1>{this.state.collections}</h1>
                        <h4>Zorganizowanych zbiórek</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>

            </section>
        )
    }
}

export default ThreeColumns;