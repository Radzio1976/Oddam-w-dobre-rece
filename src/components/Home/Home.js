import React from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from './AboutUs';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import WhoWeHelp from './WhoWeHelp';



class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HomeHeader />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WhoWeHelp />
            </div>
        )
    }
}

export default Home;