import './style.css';

function UserRepo({ repos }) {

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
                                            <p className={currElem.language ? "btn b-blue text-white" : " "}>
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



        </>
    )
}
export default UserRepo;