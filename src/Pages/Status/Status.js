import React from 'react';
import { Link } from 'react-router-dom';

const Status = (status) => {
    return (

    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={status.status.pic} alt={status.status.description} /></figure>
  <div className="card-body">
    
  <p>Description: {status.status.description}</p>
    <div className="card-actions justify-end">
    <Link to={`/booking/${status.status._id}`}>
            <button className='btn btn-primary'>Detail</button>
    </Link>
    </div>
  </div>
  <input type="text" placeholder="Comment here" className="input input-bordered w-full max-w-xs" />
  <br />
  <button className="btn btn-sm">Comment</button>
  <br /><br />
</div>



    );
};

export default Status;