import React from 'react';
import Banner from '../Banner/Banner';
import BenefitOfDonation from '../BanefitOfDonation/BenefitOfDonation';
import AboutDonation from '../AboutDonation/AboutDonation';
import NoteChild from '../NoteChile/NoteChild';
import ProjectReview from '../ProjectReview/ProjectReview';
import Testimonial from '../Testimonial/Testimonial';
import News from '../News/News';
import Gallery from '../Gallery/Gallery';
import Subscribe from '../Subcribe/Subscribe';
import Donate from '../DonateService/Donate';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BenefitOfDonation/>
            <Donate/>
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