import React from 'react'


function Database({ dataArr, deleteData, currentPage}) {
  return (
    <div className='row'>
       {dataArr.length > 0 ? dataArr.map((data) => {
                return <>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <img className="card-img-top" src={data.photo1 || data.img_url || data.images[0]} alt={`${data.hotel_name || data.name || data.title} Image`} />
                            <div className="card-body">
                                <h5 className="card-title">{data.hotel_name || data.name || data.title}</h5>
                                <p className="card-text text-muted">{ }{data.title ? "" : "$" + (data.rentperday || data.rentperhr) + "/" + (data.rentperday ? "/day" : "/hr")}</p>
                                {/* <p className="card-text text-muted">${data.description}</p> */}
                            </div>
                            <div className="card-img-overlay d-flex justify-content-end">
                                <button className="btn btn-danger btn-sm" onClick={() => deleteData(data._id)} style={{ height: '40px' }}>
                                    <TrashIcon />
                                    <span className="sr-only" >Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }) : <h1 className="text-center mb-5">{`No ${currentPage} is avaliable at present moment`}</h1>}
    </div>
  )
}

function TrashIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    );
}

export default Database
