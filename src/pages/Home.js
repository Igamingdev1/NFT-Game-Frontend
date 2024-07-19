import { useWeb3React } from "@web3-react/core";
import React from "react";

const Home = () => {
    const { account, chainId } = useWeb3React();

    return (
        <div className="page_wrapper">
            <section className="hero_banner_section d-flex align-items-center mb-130" style={{ backgroundImage: `url(${require("../assets/img/theme/bg/homeboard.webp").default})` }}>
                <div className="container">
                    <div className="hero_banner_inner">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="hero_content">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">Best Game <br />
                                        Playing Today.</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">Simply text of the printing and typesetting industry.</p>
                                    <a className="btn btn-link wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.3s" href="all-game.html">Play Now <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero_position_img">
                    <img src={require("../assets/img/theme/bg/hero.webp").default} alt="" />
                </div>
            </section>
            <section className="gaming_world_section mb-140">
                <div className="container">
                    <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                        <h2>YOU ARE MOST WELCOME <br />
                            IN GAMING WORLD.</h2>
                    </div>
                    <div className="gaming_world_inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single_gaming_world wow fadeInUp" style={{ backgroundImage: `url(${require("../assets/img/theme/others/gaming-world-bg1.webp").default})` }} data-wow-delay="0.1s" data-wow-duration="1.1s">
                                    <div className="gaming_world_thumb">
                                        <img src={require("../assets/img/theme/others/gaming-world1.webp").default} alt="" />
                                    </div>
                                    <div className="gaming_world_text">
                                        <h3>Live Streaming</h3>
                                        <p>When unknown printer took
                                            type and scrambled it to make type
                                            specimen book centuries,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single_gaming_world wow fadeInUp" style={{ backgroundImage: `url(${require("../assets/img/theme/others/gaming-world-bg2.webp").default})` }} data-wow-delay="0.2s" data-wow-duration="1.2s">
                                    <div className="gaming_world_thumb">
                                        <img src={require("../assets/img/theme/others/gaming-world2.webp").default} alt="" />
                                    </div>
                                    <div className="gaming_world_text">
                                        <h3>Game News</h3>
                                        <p>When unknown printer took
                                            type and scrambled it to make type
                                            specimen book centuries,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="single_gaming_world wow fadeInUp" style={{ backgroundImage: `url(${require("../assets/img/theme/others/gaming-world-bg3.webp").default})` }} data-wow-delay="0.3s" data-wow-duration="1.3s">
                                    <div className="gaming_world_thumb">
                                        <img src={require("../assets/img/theme/others/gaming-world3.webp").default} alt="" />
                                    </div>
                                    <div className="gaming_world_text">
                                        <h3>Game Tournaments</h3>
                                        <p>When unknown printer took
                                            type and scrambled it to make type
                                            specimen book centuries,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gaming_video_section mb-118 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gaming_video_inner slick_navigation slick__activation" dataslick='{
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,  
                            "responsive":[ 
                            {"breakpoint":500, "settings": { "slidesToShow": 1 } }  
                            ]                                                     
                        }'>
                                <div className="gaming_video_thumb">
                                    <img src={require("../assets/img/theme/bg/gaming-bg1.webp").default} alt="" />
                                    <div className="gaming_video_paly_icon">
                                        <a className="video_popup" href="#"><img src={require("../assets/img/theme/others/play-btn.webp").default} alt="" /></a>
                                    </div>
                                    <div className="live_streaming_text">
                                        <h3>Watch Live Streaming</h3>
                                    </div>
                                </div>
                                <div className="gaming_video_thumb">
                                    <img src={require("../assets/img/theme/bg/gaming-bg1.webp").default} alt="" />
                                    <div className="gaming_video_paly_icon">
                                        <a className="video_popup" href="#"><img src={require("../assets/img/theme/others/play-btn.webp").default} alt="" /></a>
                                    </div>
                                    <div className="live_streaming_text">
                                        <h3>Watch Live Streaming</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="upcoming_gaming_section mb-125">
                <div className="container">
                    <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                        <h2>Upcoming Match</h2>
                        <p>When unknown printer took type and scrambled it to make <br />
                            type specimen book centuries,</p>
                    </div>
                    <div className="upcoming_gaming_inner">
                        <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center mb-30" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <div className="upcoming_gaming_text">
                                <p>20 August 2021  -  09:00 PM</p>
                                <h3><a href="match-details.html">Roar Spring Game 2021</a></h3>
                                <span>08 Teams Registered</span>
                            </div>
                            <div className="upcoming_play_video text-center">
                                <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img src={require("../assets/img/theme/others/play-btn2.webp").default} alt="" /></a> <br />
                                <span>Live Stream</span>
                            </div>
                            <div className="upcoming_gaming_thumb d-flex align-items-center">
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb1.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/game-vs1.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb2.webp").default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center mb-30" data-wow-delay="0.2s" data-wow-duration="1.2s">
                            <div className="upcoming_gaming_text">
                                <p>20 August 2021  -  09:00 PM</p>
                                <h3><a href="match-details.html">Skrit tournament 2021</a></h3>
                                <span>08 Teams Registered</span>
                            </div>
                            <div className="upcoming_play_video text-center">
                                <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img src={require("../assets/img/theme/others/play-btn2.webp").default} alt="" /></a> <br />
                                <span>Youtube Stream</span>
                            </div>
                            <div className="upcoming_gaming_thumb d-flex align-items-center">
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb3.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/game-vs2.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb4.webp").default} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="upcoming_gaming_list wow fadeInUp d-flex justify-content-between align-items-center" data-wow-delay="0.3s" data-wow-duration="1.3s">
                            <div className="upcoming_gaming_text">
                                <p>20 August 2021  -  09:00 PM</p>
                                <h3><a href="match-details.html">Ninja 360 Game 2021</a></h3>
                                <span>08 Teams Registered</span>
                            </div>
                            <div className="upcoming_play_video text-center">
                                <a className="video_popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><img src={require("../assets/img/theme/others/play-btn2.webp").default} alt="" /></a> <br />
                                <span>Twitch Stream</span>
                            </div>
                            <div className="upcoming_gaming_thumb d-flex align-items-center">
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb5.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/game-vs3.webp").default} alt="" />
                                </div>
                                <div className="single_upcoming_thumb">
                                    <img src={require("../assets/img/theme/others/upcoming-game-thumb6.webp").default} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="others_match_btn text-center">
                        <a className="btn btn-link" href="match.html">Other’s Match </a>
                    </div>
                </div>
            </section>

            <section className="counterup_section mb-115 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="counterup_inner d-flex justify-content-center">
                                <div className="single_counterup one">
                                    <div className="counterup_text">
                                        <h2 className="counterup color1">8697</h2>
                                        <span>TWITCH STREAMS</span>
                                    </div>
                                </div>
                                <div className="single_counterup two">
                                    <div className="counterup_text">
                                        <h2 className="counterup color2">428</h2>
                                        <span>TOTAL GAMES</span>
                                    </div>
                                </div>
                                <div className="single_counterup three">
                                    <div className="counterup_text">
                                        <h2 className="counterup color3">5367</h2>
                                        <span>YOUTUBE STREAMS</span>
                                    </div>
                                </div>
                                <div className="single_counterup four">
                                    <div className="counterup_text">
                                        <h2 className="counterup color4">249</h2>
                                        <span>PRO TEAM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular_gaming_section mb-140">
                <div className="container">
                    <div className="section_title text-center wow fadeInUp mb-60" data-wow-delay="0.1s" data-wow-duration="1.1s">
                        <h2>Popular GAME</h2>
                        <p>When unknown printer took type and scrambled it to make <br />
                            type specimen book centuries,</p>
                    </div>
                    <div className="popular_gaming_inner wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="popular_gaming_thumb">
                                    <a href="#"><img src={require("../assets/img/theme/others/popular-game-thumb1.webp").default} alt="" /></a>
                                    <div className="gaming_details_btn">
                                        <a className="btn btn-link" href="game-details.html">Game Details <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="popular_gaming_thumb">
                                    <a href="#"><img src={require("../assets/img/theme/others/popular-game-thumb2.webp").default} alt="" /></a>
                                    <div className="gaming_details_btn">
                                        <a className="btn btn-link" href="game-details.html">Game Details <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="popular_gaming_thumb">
                                    <a href="#"><img src={require("../assets/img/theme/others/popular-game-thumb3.webp").default} alt="" /></a>
                                    <div className="gaming_details_btn">
                                        <a className="btn btn-link" href="game-details.html">Game Details <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="popular_gaming_thumb">
                                    <a href="#"><img src={require("../assets/img/theme/others/popular-game-thumb4.webp").default} alt="" /></a>
                                    <div className="gaming_details_btn">
                                        <a className="btn btn-link" href="game-details.html">Game Details <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial_section wow fadeInUp" data-bgimg="assets/img/others/testimonial-bg-fullwidth.webp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title mb-60">
                                <h2>What people’s say <br />
                                    ABOUT <span>game studio.</span></h2>
                            </div>
                            <div className="testimonial_inner slick__activation slick_navigation" data-slick='{
                            "slidesToShow": 1,
                            "slidesToScroll": 1,
                            "arrows": true,
                            "dots": false,
                            "autoplay": false,
                            "speed": 300,
                            "infinite": true ,  
                            "responsive":[  
                            {"breakpoint":576, "settings": { "slidesToShow": 1 } }  
                            ]                                                     
                        }' data-bgimg="assets/img/others/testimonial-bg.webp">
                                <div className="testimonial_list d-flex align-items-center">
                                    <div className="testimonial_thumb">
                                        <img src={require("../assets/img/theme/others/testimonial-thumb.webp").default} alt="" />
                                    </div>
                                    <div className="testimonial_content">
                                        <div className="testimonial_desc">
                                            <p>It is a long established fact that a reader will be distracted the
                                                readable content of page when looking at it layout the point using
                                                lorem Ipsum is that it has a more-or-less normal distribution lette
                                                as opposed to using making it look like readable english,
                                                many desktop publishing packages and web page now editors.</p>
                                        </div>
                                        <div className="testimonial_author">
                                            <h3>Randolph Frazier</h3>
                                            <span>Top Rated Gamer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial_list d-flex align-items-center">
                                    <div className="testimonial_thumb">
                                        <img src={require("../assets/img/theme/others/testimonial-thumb.webp").default} alt="" />
                                    </div>
                                    <div className="testimonial_content">
                                        <div className="testimonial_desc">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quos consectetur amet blanditiis, facilis esse illo unde saepe facere dolore porro asperiores ducimus, inventore voluptate doloribus odio fugit magnam voluptatum perferendis? Sit quisquam labore adipisci doloremque! Aperiam voluptate modi quasi are nobis.</p>
                                        </div>
                                        <div className="testimonial_author">
                                            <h3>Roar Spring</h3>
                                            <span>Top Rated Gamer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog_section mb-90">
                <div className="container">
                    <div className="section_title text-center wow fadeInUp mb-70" data-wow-delay="0.1s" data-wow-duration="1.1s">
                        <h2>Latest Blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <div className="row blog_inner">
                        <div className="col-lg-6">
                            <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src={require("../assets/img/theme/blog/blog1.webp").default} alt="" /></a>
                                </div>
                                <div className="blog_content">
                                    <div className="blog_date">
                                        <span><i className="icofont-calendar"></i>  20 January 2021</span>
                                    </div>
                                    <h3><a href="blog-details.html">if you have seen Apple&apos;s
                                        recent jabs.</a></h3>
                                    <a href="blog-details.html">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src={require("../assets/img/theme/blog/blog2.webp").default} alt="" /></a>
                                </div>
                                <div className="blog_content">
                                    <div className="blog_date">
                                        <span><i className="icofont-calendar"></i>  20 January 2021</span>
                                    </div>
                                    <h3><a href="blog-details.html">Lorem ipsum dolor sit amet, adipisicing elit.</a></h3>
                                    <a href="blog-details.html">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src={require("../assets/img/theme/blog/blog3.webp").default} alt="" /></a>
                                </div>
                                <div className="blog_content">
                                    <div className="blog_date">
                                        <span><i className="icofont-calendar"></i>  20 January 2021</span>
                                    </div>
                                    <h3><a href="blog-details.html"> Perferendis hic sint are rem, incidunt vitae.</a></h3>
                                    <a href="blog-details.html">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single_blog d-flex align-items-center wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                                <div className="blog_thumb">
                                    <a href="blog-details.html"><img src={require("../assets/img/theme/blog/blog4.webp").default} alt="" /></a>
                                </div>
                                <div className="blog_content">
                                    <div className="blog_date">
                                        <span><i className="icofont-calendar"></i>  20 January 2021</span>
                                    </div>
                                    <h3><a href="blog-details.html">if you have seen Apple&apos;s
                                        recent jabs.</a></h3>
                                    <a href="blog-details.html">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gaming_update_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gaming_update_inner d-flex justify-content-between align-items-center" style={{ backgroundImage: `url("${require("../assets/img/theme/bg/gaming-update.webp").default}")` }}>
                                <div className="gaming_update_text">
                                    <h2>Connect with us <br />
                                        for gamING update.</h2>
                                </div>
                                <div className="gaming_update_btn">
                                    <a className="btn btn-link" href="contact.html">CONNECT NOW <img src={require("../assets/img/theme/icon/arrrow-icon.webp").default} alt="" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Home;