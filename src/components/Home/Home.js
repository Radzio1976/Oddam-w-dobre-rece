import React from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from './AboutUs';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import WhoWeHelp from './WhoWeHelp';
import Contact from './Contact';



class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <HomeHeader />
                <ThreeColumns />
                <FourSteps fourSteps={this.props.fourSteps} />
                <AboutUs aboutUs={this.props.aboutUs} />
                <WhoWeHelp whoWeHelp={this.props.whoWeHelp} />
                <Contact contact={this.props.contact} />
            </div>
        )
    }
}

export default Home;