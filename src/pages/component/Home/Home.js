import React from 'react';
import Banner from '../Banner/Banner';
import BenefitOfDonation from '../BanefitOfDonation/BenefitOfDonation';
import DonateService from '../DonateService/DonateService';
import AboutDonation from '../AboutDonation/AboutDonation';
import NoteChild from '../NoteChile/NoteChild';
import ProjectReview from '../ProjectReview/ProjectReview';
import Testimonial from '../Testimonial/Testimonial';
import News from '../News/News';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BenefitOfDonation/>
            {/* <HeroSection/> */}
            <DonateService/>
            <AboutDonation/>
            <NoteChild/>
            <ProjectReview/>
            <Testimonial/>
            <News/>
        </div>
    );
};

export default Home;