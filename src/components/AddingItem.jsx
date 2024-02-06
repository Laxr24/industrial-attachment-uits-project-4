import React from 'react';

const AddingItem = ({ item }) => {

    const { image, category, title, price, price_bg, background_color, text_color, category_background_color } = item || {}
    console.log(item)


    return (
        <div style={{ background: background_color, color: text_color }} className='rounded-xl'>
            <div className='flex'>
                <img className='rounded-l-xl w-[180px] h-[155px]' src={image} alt="" />
                <div className='h-[155px] flex ml-5'>
                    <div className='flex-col my-auto'>
                        <h2 style={{ background: category_background_color }} className="w-24 p-1 rounded text-center text-sm font-medium">{category}</h2>
                        <p className='p-1 pl-0 text-xl font-semibold'>{title}</p>
                        <p className='pb-1' style={{ color: price_bg }} >${price}</p>
                        <button style={{ background: price_bg }} className=' h-auto p-2 rounded text-white text-xl font-semibold '>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddingItem;