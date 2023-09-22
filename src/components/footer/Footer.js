import '../../styles/css/style.css';
import logo from '../../assets/images/logo/logo-footer.svg';
import facebookIcon from '../../assets/images/social/icon-facebook.svg';
import twitterIcon from '../../assets/images/social/icon-twitter.svg';
import pinterestIcon from '../../assets/images/social/icon-pinterest.svg';
import instagramIcon from '../../assets/images/social/icon-instagram.svg';

import React from 'react';

export default function Footer() {
    return (
        <footer id="footer-wrapper" className="wrapper">
            <div className="footer container">
                <img className="footer__logo" src={logo} alt="Shortly Logo"/>
                <FooterNav
                    titles={["Features", "Resources", "Company"]}
                    links={[
                        [
                            {name: "Link Shortening", url: "#"},
                            {name: "Branded Links", url: "#"},
                            {name: "Analytics", url: "#"},
                        ],
                        [
                            {name: "Blog", url: "#"},
                            {name: "Developers", url: "#"},
                            {name: "Support", url: "#"},
                        ],
                        [
                            {name: "About", url: "#"},
                            {name: "Our Team", url: "#"},
                            {name: "Careers", url: "#"},
                            {name: "Contact", url: "#"},
                        ],
                    ]}
                />
                <SocialMediaIcons/>
            </div>
        </footer>
    );
}

function FooterNav({titles, links}) {
    return (
        <nav className="footer__nav">
            {titles.map((title, iMenu) => {
                return (
                    <section className="footer__menu" key={"menu " + (iMenu + 1)}>
                    <h4 className="footer__menu-title" key="title">{title}</h4>
                    <ul className="footer__menu-links" key={"links " + (iMenu + 1)}>
                        {links[iMenu].map((link) => {
                            return (
                                <li className="footer__menu-link" key={link.name}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                    </section>
                );
            })}
        </nav>
    );
}

function SocialMediaIcons() {
    return (
        <div className="footer__social-media">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" title="Facebook">
                    <use href={`${facebookIcon}#facebook`} />
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" title="Twitter">
                    <use href={`${twitterIcon}#twitter`} />
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" title="Pinterest">
                    <use href={`${pinterestIcon}#pinterest`} />
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" title="Instagram">
                    <use href={`${instagramIcon}#instagram`} />
                </svg>
            </a>
        </div>
    );
}