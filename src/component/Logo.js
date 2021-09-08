import logo from '../images/tweetwords.png'
import React from 'react';

const Logo = () => {
    return (
        <>
            <div className="logo">
                <a href="/" style={{ color: "unset", border: "unset" }}  ><img alt="Tweetwords logo" src={logo} title="logo" /></a>
            </div>
        </>
    );
}

export default React.memo(Logo);
