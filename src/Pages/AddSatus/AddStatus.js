import React, { useState } from 'react';

const AddStatus = () => {

    const [status, setStatus] = useState({});

    const handleAddStatus = event =>{
        event.preventDefault();
        fetch('https://social-media-server-alpha.vercel.app/addstatus', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(status)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                window.alert('Status insert successfully');
                event.target.reset();
            }
        })

    }


    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newStatus = {...status}
        newStatus[field] = value;
        setStatus(newStatus);
        
    }

    return (
        <div>
        <h3 class="text-lg font-bold"> Add a new Status</h3>
        <br /><br />
        <form onSubmit={handleAddStatus}>
                Input the Status: 
                <input onBlur={handleInputBlur} type="text" name="description" placeholder='write your status' required/>
                <br/><br />
                Input the Satus picture's URL: 
                <input onBlur={handleInputBlur} type="text" name="pic" placeholder='Product picture url' required/>
                <br/><br />
                <button type="submit" className="btn btn-sm">Submit</button>
                <br /><br />
        </form>
    </div>
    );
};

export default AddStatus;