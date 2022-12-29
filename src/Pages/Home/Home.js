import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddStatus from '../AddSatus/AddStatus';
import Status from '../Status/Status';

const Home = () => {
    const allStatus = useLoaderData();
    return (
        <div>
            <AddStatus></AddStatus>


            <section>
                <h1 class="text-center font-bold text-2xl">All Status</h1>
                <div  class="grid justify-center">
            {
                allStatus.map(status => <Status key={status._id} status={status}></Status>)
            }
            </div>

            </section><br /><br /><br />
            
        </div>
    );
};

export default Home;