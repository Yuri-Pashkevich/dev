import React from 'react'
import '../styles/Skills.scss'

export const Skills = () => {
    const skills = [
        { skill: 'html5', svg: './svg/html5-brands.svg' },
        { skill: 'css3', svg: './svg/css3-alt-brands.svg' },
        { skill: 'scss', svg: './svg/sass-brands.svg' },
        { skill: 'es5, es6', svg: './svg/js-brands.svg' },
        { skill: 'react', svg: './svg/react-brands.svg' },
        { skill: 'npm', svg: './svg/npm-brands.svg' },
        { skill: 'git', svg: './svg/git-alt-brands.svg' },
        { skill: 'github', svg: './svg/github-brands.svg' },
        { skill: 'figma', svg: './svg/figma-brands.svg' },
        { skill: 'adobe', svg: './svg/adobe-brands.svg' },
        { skill: 'vs code', svg: './svg/visual-studio-code.svg' },
        { skill: 'bootstrap', svg: './svg/bootstrap-brands.svg' },
    ]
    const skillsItems = skills.map(item => (
        <li className="skills-item" key={item.skill}>
            <div className="icon-wrapper">
                <img className="skills-icon" src={item.svg} alt="svg"/>
            </div>
            <div className="skill-text">
                {item.skill}
            </div>
        </li>
    ))
    return (
        <ul className="skills">
            {skillsItems}
        </ul>
    )
}
