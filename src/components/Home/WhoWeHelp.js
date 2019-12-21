import React from 'react';
import Axios from 'axios';
import Decoration from '../../assets/images/Decoration.svg';

class WhoWeHelp extends React.Component {
    state = {
        buttonsArray: [],
        fundation: [],
        items: [],
        paginationButtons: [],
        currentPage: 1,
        itemsPerPage: 3
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/fundations").then((response) => {
            let buttonsArray = []
            for (let i = 0; i < response.data.length; i++) {
                buttonsArray.push(response.data[i].name)
            }
            this.setState({
                buttonsArray: buttonsArray
            })

        })
        Axios.get("http://localhost:3000/fundations?id=0").then((response2) => {
            this.setState({
                fundation: response2.data,
                items: response2.data[0].items
            })
            let paginationArray = []
            for (let i = 0; i < Math.ceil(response2.data[0].items.length / 3); i++) {
                paginationArray.push(i + 1)
            }
            this.setState({
                paginationButtons: paginationArray
            })
        })

    }

    changeOrganisation = (index) => {
        Axios.get(`http://localhost:3000/fundations?id=${index}`).then((response) => {
            this.setState({
                currentPage: 1,
                fundation: response.data,
                items: response.data[0].items
            })
            let paginationArray = []
            for (let i = 0; i < Math.ceil(response.data[0].items.length / 3); i++) {
                paginationArray.push(i + 1)
            }
            this.setState({
                paginationButtons: paginationArray
            })
        })
    }

    paginationClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const currentItems = this.state.items.slice(indexOfFirstItem, indexOfLastItem);
        return (
            <section className="who-we-help-section">
                <h1>Komu pomagamy</h1>
                <img src={Decoration}></img>
                <div className="container-for-buttons">
                    {
                        this.state.buttonsArray.map((value, index) => {
                            return (
                                <h3 className="fundation-button" key={index} onClick={() => this.changeOrganisation(index)}>{value}</h3>
                            )
                        })
                    }
                </div>
                <div className="fundations-container">
                    {
                        this.state.fundation.map((value, index) => {
                            return (
                                <>
                                    <div className="description-container">
                                        <h3 key={index}>{value.desc}</h3>
                                    </div>

                                </>
                            )
                        })
                    }
                    {
                        currentItems.map((value1, index2) => {
                            return (
                                <div className="items-container" key={index2}>
                                    <div className="description-header-container">
                                        <h3>{value1.header}</h3>
                                    </div>
                                    <div className="description-subheader-container">
                                        <h4>{value1.subheader}</h4>
                                        <h4>{value1.desc}</h4>
                                    </div>
                                    <hr style={{ display: index2 === 2 ? "none" : "block" }}></hr>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pagination-buttons-container">
                    {
                        this.state.paginationButtons.map((number) => {
                            return (
                                <p key={number}
                                    id={number} onClick={this.paginationClick} className="pagination-button">{number}</p>
                            )
                        })
                    }
                </div>
            </section >
        )
    }
}

export default WhoWeHelp;