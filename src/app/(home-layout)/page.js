import React from 'react';
import Banner from '../Components/Shared/UserShared/Banner/Banner';
import ClasseDesignForU from '../Components/Shared/UserShared/ClasseDesignForU/ClasseDesignForU';
import IntroductionIF from '../Components/Shared/UserShared/IntroductionIF/IntroductionIF';

const Home = () => {
    return (
        <div>
            <Banner />
            <ClasseDesignForU />
            <IntroductionIF />
        </div>
    );
};

export default Home;