import React from 'react';
import { Link } from 'react-router-dom';

const Infrmtn = ({info}) => {
    // console.log(info)

    const {id, image, title, category, background_color, category_background_color, text_color } = info || {}
    return (
        <>
            <Link to={`/singleInfo/${id}`} className='mx-auto w-[312px]'>
                <div style={{background: background_color, color: text_color}} className="w-[312px] h-[283px] card card-compact shadow-xl mt-6">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 style={{background: category_background_color}} className="w-24 p-1 rounded text-center text-sm font-medium">{category}</h2>
                        <p className='text-xl font-semibold'>{title}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Infrmtn;