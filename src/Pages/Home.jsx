import React from 'react';

import Hero from '../Components/Home/Hero/Hero'
import Intro from '../Components/Home/Intro/Intro';
import SnapShot from '../Components/Home/SnapShots/SnapShot'
import HomeCardSection from '../Components/Home/CardSection/HomeCardSection'
import '../Components/_main.scss'

const Home = () => {
    return(
        <div>
            <Hero />
            <Intro />
            <SnapShot />
            <HomeCardSection />
        </div>
    )
}

export default Home;