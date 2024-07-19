import * as React from 'react';

export default function Footer() {

    return (
        <footer className="footer_widgets">
            <div className="main_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main_footer_inner d-flex">
                                <div className="footer_widget_list">
                                    <div className="footer_logo">
                                        <a href="#"><img src={require("../assets/img/theme/logo/logo.webp").default} alt="" /></a>
                                    </div>
                                    <div className="footer_contact_desc">
                                        <p>It long estabhed fact that reader
                                            will ditracted the readable content
                                            looking using readable.</p>
                                    </div>
                                    <div className="footer_social">
                                        <ul className="d-flex">
                                            <li><a className="facebook" href="https://www.facebook.com"><i className="icofont-facebook"></i></a></li>
                                            <li><a className="dribbble" href="https://dribbble.com"><i className="icofont-dribbble"></i></a></li>
                                            <li><a className="youtube" href="https://www.youtube.com"><i className="icofont-youtube-play"></i></a></li>
                                            <li><a className="twitter" href="https://twitter.com"><i className="icofont-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer_widget_list contact">
                                    <h3>Contact</h3>
                                    <div className="footer_contact_info">
                                        <div className="footer_contact_info_list">
                                            <span>Location:</span>
                                            <p>136 Harding Ave
                                                Wheeling, West Virginia</p>
                                        </div>
                                        <div className="footer_contact_info_list">
                                            <span>Phone:</span>
                                            <p><a href="#">00 (62) 632 867 4497</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_widget_list">
                                    <h3>today’s winners</h3>
                                    <div className="footer_winners_gallery">
                                        <div className="footer_winners_list d-flex">
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners1.webp").default} alt="" /></a>
                                            </div>
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners2.webp").default} alt="" /></a>
                                            </div>
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners3.webp").default} alt="" /></a>
                                            </div>
                                        </div>
                                        <div className="footer_winners_list d-flex">
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners4.webp").default} alt="" /></a>
                                            </div>
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners5.webp").default} alt="" /></a>
                                            </div>
                                            <div className="footer_winners_thumb">
                                                <a href="game-details.html"><img src={require("../assets/img/theme/others/winners6.webp").default} alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_widget_list footer_list_menu">
                                    <h3>Content</h3>
                                    <div className="footer_menu">
                                        <ul>
                                            <li><a href="about.html"> Copywriting</a></li>
                                            <li><a href="about.html">Social Media</a></li>
                                            <li><a href="about.html">Interactive Media</a></li>
                                            <li><a href="about.html">Motion Design</a></li>
                                            <li><a href="about.html">Illustration</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer_bottom_inner d-flex justify-content-between">
                                <div className="copyright_right">
                                    <p> © 2021  BONX  Made with  <i className="icofont-heart"></i>  by <a href="https://hasthemes.com">HasThemes</a></p>
                                </div>
                                <div className="footer_bottom_link_menu">
                                    <ul className="d-flex">
                                        <li><a href="about.html">Terms & Condition  </a></li>
                                        <li><a href="about.html">Privacy Policy  </a></li>
                                    </ul>
                                </div>

                                <div className="scroll__top_icon">
                                    <a id="scroll-top" href="#"><img src={require("../assets/img/theme/icon/scroll-top.webp").default} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
