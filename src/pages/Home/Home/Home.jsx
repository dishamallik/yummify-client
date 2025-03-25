import React from 'react';
import Banner from '../../Banner/Banner';
import Slider from '../../Slider/Slider';
import Popup from '../../Popup/Popup';
import Recipe from '../../../Components/Recipe/Recipe';
import Video from '../../../Components/Video';
import { Helmet } from 'react-helmet-async';
import FoodSlider from '../../../Components/FoodSlider';

const Home = () => {
    return (
        <div>
            
       <Banner/>
       <FoodSlider/>
       
       <Popup/>
       <Recipe/>
       {/* <Video/> */}
       <Slider/>
        </div>
    );
};

export default Home;