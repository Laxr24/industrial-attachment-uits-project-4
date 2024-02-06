import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleInfo = () => {


    const { id } = useParams(); /* eikhne j json use kora hoitase sheta dynamic api na. ty dynamic vabe id dia pawa jabe na. tai id ta pawar jonne amra useParams dia id ta pabo */
    console.log(id);

    const [datas, setData] = useState();

    const snglInfo = useLoaderData();
    console.log(snglInfo);

    useEffect(() => {
        const findData = snglInfo?.find(data => data.id == id)
        setData(findData);

    }, [id, snglInfo])


    const donateItem = () => {
        const donateItemArray = []

        const dntItm = JSON.parse(localStorage.getItem('donated'));

        if (!dntItm) {
            donateItemArray.push(datas);
            localStorage.setItem('donated', JSON.stringify(donateItemArray));
            Swal.fire({
                icon: 'success',
                title: 'Good Job, Thank You For Your donation',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
        else {
            const isExist = dntItm?.find(datas => datas.id == id)

            if (!isExist) {
                donateItemArray.push(...dntItm, datas);
                localStorage.setItem('donated', JSON.stringify(donateItemArray));
                Swal.fire({
                    icon: 'success',
                    title: 'Good Job, Thank You For Your donation',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Already added',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
        }
    }

    const { image, price, title, description, price_bg } = datas || {}

    return (
        <div className='w-[900px] my-12 h-[500px] mx-auto'>
            <img className=' w-full h-[500px] rounded-lg relative ' src={image} alt="" />
            <div className=' w-[900px] bottom-[96px] flex bg-[#000000a6] h-24 rounded-b-lg relative'>
                <button onClick={donateItem} style={{ background: price_bg }} className='flex h-auto my-auto ml-7 p-2 rounded text-white text-xl font-semibold '>Donate ${price}</button>
            </div>
            <div className=' mb-10'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className=''>{description}</p>
            </div>

        </div>
    );
};

export default SingleInfo;