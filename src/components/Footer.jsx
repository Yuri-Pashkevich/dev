import React from 'react';
import '../styles/Footer.scss';

export const Footer = () => {
    const footerSocials = [
        {social: 'linkedin', href: 'https://www.linkedin.com/in/yuri-pashkevich', svg: './svg/linkedin-brands.svg'},
        {social: 'telegram', href: 'https://t.me/Yuri_Pashkevich', svg: './svg/telegram-plane-brands.svg'},
        {social: 'github', href: 'https://github.com/Yuri-Pashkevich', svg: './svg/github-brands.svg'},
        {social: 'gmail', href: 'mailto:yuri.p4work@gmail.com', svg: './svg/envelope-regular.svg'}
    ]
    const socialItems = footerSocials.map(item => (
        <li className="socials-item" key={item.social}>
            <a className="socials-link" href={item.href} target="_blank" rel="noopener noreferrer">
                <img className="socials-image" src={item.svg} alt="svg"/>
            </a>
        </li>
    ))
    return (
        <div className="footer">
            <ul className="footer-socials">
                {socialItems}
            </ul>
        </div>
    )
}