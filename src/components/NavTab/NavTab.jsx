import React from 'react';
import NavBtn from '../NavBtn/NavBtn';
import './NavTab.css';


export default function NavTab() {

    const titleLink = {
        id1: 'О проекте',
        id2: 'Технологии',
        id3: 'Студент'
    }

    return (
        <section className="NavTab">
            <section className= 'NavTab__list'>
                    <NavBtn
                        to={"about-project"}
                        titleLink={titleLink.id1}
                        iconStyle={'NavTab__btn'}
                        textStyle ={'NavTab__btn-text'}
                        navTabStyle={'NavTab__link'} 
                    />
                    <NavBtn 
                        to={"techs"}
                        titleLink = {titleLink.id2}
                        iconStyle = {'NavTab__btn'} textStyle = {'NavTab__btn-text'}
                        navTabStyle = {'NavTab__link'}
                        className = "opacity"
                    /> 
                    <NavBtn 
                        to={"about-me"}
                        titleLink = {titleLink.id3}
                        iconStyle = {'NavTab__btn'} textStyle = {'NavTab__btn-text'}
                        navTabStyle = {'NavTab__link'} 
                    />      
                </section>
                
        </section>
    );
}
