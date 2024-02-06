import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Infrmtn from './Infrmtn';

const Home = () => {



    const information = useLoaderData();
    console.log(information);

    const [searchBtn, setSearchBtn] = useState('')

    const handleSearch = (e) => {

        e.preventDefault();
        const searchField = e.target.search.value;
        setSearchBtn(searchField)
        console.log(searchField)
    }


    return (
        <>
            <div className='bg-[#fff7eef2] shadow-md flex flex-col h-80 w-full '>
                <div className='text-center flex-none my-auto mb-5'>
                    <p className='text-5xl font-bold '>I Grow By Helping People In Need</p>
                </div>
                <div className='text-center flex-none my-auto mt-5'>
                    <div className="join">
                        <form onSubmit={handleSearch}>
                            <input className="input outline-none input-bordered join-item" type='text' name='search' placeholder="Search Here" />
                            <button className="btn  bg-[#FF444A] join-item rounded-lg ">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-4 my-20'>
                {
                    information?.filter(item => {
                        return searchBtn.toLowerCase() === '' ? item : item.category.toLowerCase().includes(searchBtn)
                    }).map(infos => <Infrmtn key={infos.id} info={infos}></Infrmtn>)
                }
            </div>
        </>

    );
};

export default Home;