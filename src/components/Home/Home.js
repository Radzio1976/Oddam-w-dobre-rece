import React from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from './AboutUs';
import ThreeColumns from './ThreeColumns';



class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <HomeHeader />
                <ThreeColumns />
            </div>
        )
    }
}

export default Home;