import './NavTab.css';

import React from 'react';
import NavBtn from '../NavBtn/NavBtn';

function NavTab() {

    const titleLink = {
        id1: 'О проекте',
        id2: 'Технологии',
        id3: 'Студент'
    }

    return (
        <section className="NavTab">
            <section className= 'NavTab__list'>
                    <NavBtn
                        to={"project"}
                        titleLink={titleLink.id1}
                        btnStyle={'NavTab__btn'}
                        textStyle ={'NavTab__btn-text'}
                        navTabStyle={'NavTab__link'}
                    />
                    <NavBtn 
                        to={"techs"}
                        titleLink = {titleLink.id2}
                        btnStyle = {'NavTab__btn'} 
                        textStyle = {'NavTab__btn-text'}
                        navTabStyle = {'NavTab__link'}
                        className = "opacity"
                    /> 
                    <NavBtn 
                        to={"student"}
                        titleLink = {titleLink.id3}
                        btnStyle = {'NavTab__btn'} 
                        textStyle = {'NavTab__btn-text'}
                        navTabStyle = {'NavTab__link'} 
                    />      
                </section>
                
        </section>
    );
}

export default NavTab;