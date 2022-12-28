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
                <div  class="grid grid-cols-1 gap-2 border-4 gap-4 md:grid-cols-3">
            {
                allStatus.map(status => <Status key={status._id} status={status}></Status>)
            }
            </div>

            </section><br /><br /><br />
            
        </div>
    );
};

export default Home;