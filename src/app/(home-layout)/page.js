import React from 'react';
import Banner from '../Components/Shared/UserShared/Banner/Banner';
import ClasseDesignForU from '../Components/Shared/UserShared/ClasseDesignForU/ClasseDesignForU';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='flex justify-center'>
                <div className='max-w-6xl'>
                    <ClasseDesignForU />
                </div>
            </div>
        </div>
    );
};

export default Home;