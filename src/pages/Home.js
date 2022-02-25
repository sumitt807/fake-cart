import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import JamboSlider from '../components/JamboSlider'
import WhyShopWithUs from '../components/WhyShopWithUs'

const Home = () => {
    return (
        <div>
            <Header />
            <JamboSlider />
            <WhyShopWithUs />
            <Footer />
        </div>
    )
}

export default Home