import React from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from './AboutUs';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';



class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HomeHeader />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
            </div>
        )
    }
}

export default Home;