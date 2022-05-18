import React from "react";
import './style.css';
function SearchPage({ changeHandler, submitHandler,username}) {
    return (
        <>
            <div className="container-lg">
                <div className="text-center my-5">
                    <img src="images/github-logo.png" alt="logo"></img>
                    <h1>GitHub</h1>
                </div>
                <div className="text-center">
                <input className="search-bar" type="text" placeholder='Enter your GitHub username' value={username} onChange={changeHandler}></input>
                </div>
                <div className="text-center mt-5">
                <button className="profile-btn text-white" type='submit' onClick={submitHandler}><i className="me-3 fa-brands fa-github fa-lg"></i>Get Profile</button>
                </div>
            </div>
            
        </>
    )
}
export default SearchPage;