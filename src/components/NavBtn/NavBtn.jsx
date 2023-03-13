import React from 'react';
import {Link} from 'react-scroll';

export default function NavBtn({titleLink, btnStyle, textStyle, navTabStyle, to}) {

    return (
        <>
            <button className={btnStyle} type="button">
                <p className={navTabStyle}>
                    <Link 
                        className={textStyle} 
                        to={to}
                        smooth={true}
                        duration={1000}
                    >
                        {titleLink}
                    </Link>
                </p>
            </button>
        </>
    );
}
