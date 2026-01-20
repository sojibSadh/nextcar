import React from 'react';
import ServiceCard from './_component/ServiceCard';
import ServiceSearch from './_component/ServiceSearch';
import { getAllServices } from '@/services/services.service';


async function servicePage({ searchParams }) {
    const getParams = await searchParams;
    // console.log(getParams);

    const services = await getAllServices({ ...getParams });


    return (
        <div>
            <h2>service page</h2>
            <ServiceSearch />
            {services?.data?.length === 0 ? <div className='text-center text-3xl mt-20 font-bold'>No Service Found</div> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {services?.data?.map(service => {
                        return <ServiceCard service={service} key={service?._id} >  </ServiceCard>
                    })}
                </div>
            }

        </div>
    )
}

export default servicePage
