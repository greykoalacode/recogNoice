import React from 'react';

const Navigation =({ onRouteChange , isSignedIn }) => {
    if(isSignedIn){
        return (
        <div className="flex flex-column mb4">
        <h1 className="">RecogNoice</h1>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black pa3 pointer ma0'>
                Sign Out
            </p>
        </nav>
        </div>
        );
    }
    else{
        return(
        <div>
        <h1>RecogNoice</h1>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
            
            <p onClick={() => onRouteChange('signin') } className='f3 link dim black  pa3 pointer ma0'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black  pa3 pointer ma0'>Register</p>
        </nav>
        </div>
        );
    }
}
export default Navigation;