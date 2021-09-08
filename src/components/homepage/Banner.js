import React from 'react'
import heroMan from "../../img/hero/hero_man.png";


const Banner = () => {
    return (
        <div className="slider-area ">
            <div className="slider-active">
                <div className="single-slider slider-height" data-background="assets/img/hero/h1_hero.jpg" >

                    <div className="container">

                        <div className="row d-flex align-items-center justify-content-between">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                                <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                    <img src={heroMan} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                <div className="hero__caption">
                                    <span data-animation="fadeInRight" data-delay=".4s">60% Discount</span>
                                    <h1 data-animation="fadeInRight" data-delay=".6s">Winter <br/> Collection</h1>
                                    <p data-animation="fadeInRight" data-delay=".8s">Best Cloth Collection By 2020!</p>
                                    <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                        <a href="industries.html" className="btn hero-btn">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

               
            </div>



            
        </div>
        // </div>
        // </div>
    )
}

export default Banner
