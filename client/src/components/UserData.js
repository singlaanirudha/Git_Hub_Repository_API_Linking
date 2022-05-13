import './style.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import UserRepo from './UserRepo';
import Loading from './Loading';
function UserData() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try{
            setLoading(false);
            const response = await fetch('https://api.github.com/users/singlaanirudha');

        setUsers(await response.json());
        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        getUsers();
    }, []);


    if (loading) {
        return <Loading />
    }

    return (
        <>

            <div className='container-fluid main_container py-5' style={{"letterSpacing":1.5}}>
                <div className='row'>
                    <div className='col-md-10 mx-auto my-5 content_container'>

                        <div className='container-fluid'>
                    <div className='container-lg'>
                        <div className='row justify-content-start mt-5'>
                            <div className='col-2'>
                                <img className='roundimg' src={users.avatar_url} alt="profile image"></img>
                            </div>
                            <div className='col-4 ms-5 my-auto fw-bold'>
                                <h3 className='t-blue'>{users.name}</h3>
                                <p className='text-white'>{users.bio}</p>
                                <p className='text-white'><i className="fa-solid fa-location-dot me-3 text-white"></i>{users.location}</p>
                                <p><span className='me-2 text-white'>Twitter:</span><a className='text-white' href={'https://twitter.com/'+users.twitter_username}>{'@'+users.twitter_username}</a></p>
                            </div>
                        </div>
                        <p className='mt-3 fw-bold text-white'><i className="fa-solid fa-link"></i> <a className='text-white' href={users.html_url}>{users.html_url}</a></p>

                        <UserRepo />

                    </div>
                        </div>

                    </div>
                </div>
            </div>        
                    
        </>
    )
}
export default UserData;