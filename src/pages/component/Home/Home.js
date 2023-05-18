import React from 'react';
import Banner from '../Banner/Banner';
import BenefitOfDonation from '../BanefitOfDonation/BenefitOfDonation';
import DonateService from '../DonateService/DonateService';
import AboutDonation from '../AboutDonation/AboutDonation';
import NoteChild from '../NoteChile/NoteChild';
import ProjectReview from '../ProjectReview/ProjectReview';
import Testimonial from '../Testimonial/Testimonial';
import News from '../News/News';
import Gallery from '../Gallery/Gallery';
import Subscribe from '../Subcribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BenefitOfDonation/>
            <DonateService/>
            <AboutDonation/>
            <NoteChild/>
            <Gallery/>
            <ProjectReview/>
            <Testimonial/>
            <News/>
            <Subscribe/>
        </div>
    );
};

export default Home;