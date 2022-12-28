import React from 'react';
import { Link } from 'react-router-dom';

const Status = (status) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
           <figure><img src={status.status.pic} alt={status.status.catagory} /></figure>
        <div  className="card-body gap-4">
          <p>Description: {status.status.catagory}</p>
      </div>
           <Link to={`/booking/${status.status._id}`}>
            <button className='btn btn-primary'>Detail</button>
          </Link>
          <br />            
    </div>
    );
};

export default Status;