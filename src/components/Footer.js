import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 links">
                    <h5>Links</h5>
                    <br/>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 address">
                    <h5>Our Address</h5>
                    <br/>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-3 social">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus-square"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook-square"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin-square"></i></a><br/>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter-square"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube-square"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center copyright">             
                <div className="col-auto">
                    <br/>
                    <p>© Copyright 2018 M Tucci S</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;