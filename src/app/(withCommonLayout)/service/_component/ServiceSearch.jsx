"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function ServiceSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    // console.log('router', router);
    console.log('searchParams', searchParams);
    // console.log('pathname', pathname);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchTerm = form.search.value;

        const params = new URLSearchParams(searchParams);
        console.log("params, params()");
        if (searchTerm) {
            params.set("searchTerm", searchTerm);
        } else {
            params.delete("searchTerm");
        }

        router.push(`${pathname}?${params}`)
    }


    return (
        <div className='text-center mx-auto'>
            <div>
                <button onClick={() => router.back()} > back </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="search" placeholder='search here'
                        className='p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full md:w-1/2'
                    />
                    <button className='bg-purple-200 p-2 px-5 cursor-pointer'> Search </button>
                </div>
            </form>
        </div>
    )
}

export default ServiceSearch
