import './style.css';
import React, { useState } from 'react';
import UserRepo from './UserRepo';
import Pagination from './Pagination';
import SearchPage from './SearchPage';
// import Loading from './Loading';
function UserData() {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [repos, setRepos] = useState([]);

    const changeHandler = event => {
        setUsername(event.target.value);
    };

    var profile;
    var data;
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            // setLoading(false);
            profile = await fetch(`https://api.github.com/users/${username}`);
            data = await profile.json();

            const profilerepo = await fetch(`${data.repos_url}?page=1&per_page=10`)
            const data2 = await profilerepo.json();

            if (data) {
                setUsers(data);
                setRepos(data2);
            }
        }
        catch (error) {
            console.log(error);
        }

    };

    //----------pagination-------------

    const reposPagination = async (currentPage) => {
        const response = await fetch(`https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=10`);
        const data3 = await response.json();
        console.log(data3);
        return data3;
    };

    const handlePageClick = async (data3) => {
        // console.log(data3.selected);

        let currentPage = data3.selected + 1;

        const reposFromServer = await reposPagination(currentPage);

        setRepos(reposFromServer);
    };

//------------refresh page-----------------
    function pagerefresh(){
        window.location.reload(false);
    }

    return (
        <>
            {!users.name ? (<SearchPage changeHandler={changeHandler} submitHandler={submitHandler} username={username} />) : " "}


            <div className='container-fluid bg_img pb-5'>
                <div className='container-lg'>
                <div className="text-center">
                    {!users.name ? " " :(<img className='logo-pointer mt-5' src="images/github-logo.png" alt="logo" onClick={pagerefresh}></img>)}
                </div>
                    <div className='row justify-content-start mt-5'>
                        <div className='col-2'>
                            {!users.avatar_url ? " " : (<img className='roundimg' src={users.avatar_url} alt="profile image"></img>)}

                        </div>
                        <div className='col-4 ms-5 my-auto fw-bold'>
                            <h3 className='t-blue'>{users.name}</h3>
                            <p>{users.bio}</p>
                            {!users.location ? " " : (<p><i className="fa-solid fa-location-dot me-3"></i>{users.location}</p>)}
                            {!users.twitter_username ? " " : (<p><span className='me-2'>Twitter:</span><a href={'https://twitter.com/' + users.twitter_username}>{'@' + users.twitter_username}</a></p>)}
                        </div>
                        {/* <div className='col-4'>
                            <input type="text" placeholder='Enter your username' value={username} onChange={changeHandler}></input>
                            <button type='submit' onClick={submitHandler}><i class="fa-brands fa-github"></i> Search</button>
                        </div> */}
                    </div>
                    {!users.html_url ? " " : (<p className='mt-3 fw-bold'><i className="fa-solid fa-link"></i> <a href={users.html_url}>{users.html_url}</a></p>)}


                    <UserRepo repos={repos} />
                    {!users.name ? " " : (<Pagination handlePageClick={handlePageClick} />)}


                </div>
            </div>

        </>
    )
}
export default UserData;