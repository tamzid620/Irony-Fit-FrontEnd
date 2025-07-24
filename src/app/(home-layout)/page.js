import React from 'react';
import Banner from '../Components/Shared/UserShared/Banner/Banner';
import ClasseDesignForU from '../Components/Shared/UserShared/ClasseDesignForU/ClasseDesignForU';
import IntroductionIF from '../Components/Shared/UserShared/IntroductionIF/IntroductionIF';
import Testimonial from '../Components/Shared/UserShared/Testimonial/Testimonial';
import OurProducts from '../Components/Shared/UserShared/OurProducts/OurProducts';
import SharedLoading from '../config/SharedLoading';

const Home = () => {
    return (
        <div>
            <Banner />
            <ClasseDesignForU />
            <IntroductionIF />
            <OurProducts/>
            <Testimonial/>
        </div>
    );
};

export default Home;