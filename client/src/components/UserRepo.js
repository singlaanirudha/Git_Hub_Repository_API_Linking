import './style.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function UserRepo() {

    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/singlaanirudha/repos?page=1&per_page=10`);

            setRepos(await response.json());
            
        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getRepos();
    }, []);


    //pagination fetch data

    const fetchRepos = async (currentPage) => {
        const response = await fetch(`https://api.github.com/users/singlaanirudha/repos?page=${currentPage}&per_page=10`);
        const data = await response.json();
        return data;
      };

      const handlePageClick = async (data) => {
        // console.log(data.selected);
    
        let currentPage = data.selected + 1
    
        const reposFormServer = await fetchRepos(currentPage);
    
        setRepos(reposFormServer);
      };



    return (
        <>
            <div className='container-fluid'>
                <div className='container-lg'>
                    <div className='row justify-content-between mt-5'>

                        {
                            repos.map((currElem) => {
                                return (
                                    <>
                                        <div className='col-md-5 carda'>
                                            <h4>{currElem.name}</h4>
                                            <p>{currElem.description}</p>

                                            <h5><u>Languages Used</u></h5>
                                            <p className={currElem.language ? "btn b-blue text-white" : ""}>
                                            {currElem.language ? currElem.language : ""}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>


            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={4}
                marginPagesDisplayed={2}
                pageRangeDisplayed={6}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center my-5"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </>
    )
}
export default UserRepo;