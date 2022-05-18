//Created but not used after learning ReactPaginate


import { useState } from "react";

function Pagination_test() {

    const [items, setItems] = useState([]);

    const getRepos = async (currentPage) => {
        const response = await fetch(`https://api.github.com/users/mojombo/repos?_page=${currentPage} &_limit=10`)
        const data = await response.json();
        return data;
    };

    const handelPageClick = async (data) =>{
        console.log(data.selected);

        let currentPage= data.selected + 1 ;
        const reposFromServer =await getRepos(currentPage);

        setItems(reposFromServer); 
    }


    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-5 mb-4">
                    <li className="page-item" onClick={handelPageClick}>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li onClick={handelPageClick} className="page-item"><a className="page-link" >1</a></li>
                    <li onClick={handelPageClick} className="page-item"><a className="page-link">2</a></li>
                    <li onClick={handelPageClick} className="page-item"><a className="page-link">3</a></li>
                    <li className="page-item" onClick={handelPageClick}>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
                <div className="p-container d-flex justify-content-evenly">
                <button className="p-button" onClick={handelPageClick}><i className="fa-solid fa-arrow-left-long me-2"></i>Older</button>
                <button className="p-button" onClick={handelPageClick}>Newer<i className="fa-solid fa-arrow-right-long ms-2"></i></button>
                </div>
            </nav>


        </>
    );
}
export default Pagination_test;