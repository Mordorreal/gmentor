import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import FirstScreenComponent from '../components/landing/first_screen_component';
import SecondScreenComponent from '../components/landing/second_screen_component';
import ThirdScreenComponent from '../components/landing/third_screen_component';
// import ForthScreenComponent from '../components/landing/forth_screen_component';
import FifthScreenComponent from '../components/landing/fifth_screen_component';
import SixthScreenComponent from '../components/landing/sixth_screen_component';
import SubscribeComponent from '../components/landing/subscribe_component';
import FooterComponent from '../components/landing/footer_component';

const LandingPage = () => {
  return (
    <Layout>
      <SEO title="Gmentor" />
      <FirstScreenComponent />
      <SecondScreenComponent />
      <ThirdScreenComponent />
      <SubscribeComponent />
      {/*<ForthScreenComponent />*/}
      <FifthScreenComponent />
      <SixthScreenComponent />
      <FooterComponent />
    </Layout>
  );
};

export default LandingPage;
