import { useEffect, useState } from 'react';
import AddingItem from './AddingItem';

const Donation = () => {

    const [showMore, setShowMore] = useState(false);
    const [addedItem, setAddedItem] = useState();
    const [noData, setNoData] = useState();

    useEffect(() => {
        const dntItm = JSON.parse(localStorage.getItem('donated'));

        if (dntItm) {
            setAddedItem(dntItm);
        }
        else {
            setNoData("NO DATA FOUND")
        }

    }, [])

    const handleRemove = () =>{
        localStorage.clear()
        setAddedItem([])
        setNoData("NO DATA FOUND")
    }
    console.log(showMore);

    return (
        <div>
            {
                noData ? <p className='h-auto flex justify-center items-center mt-36'>{noData}</p>
                    :
                    <div className='w-[1300px] mx-auto'>

                        <div className='mt-7'>
                            {
                                addedItem?.length > 0 && <div className='w-36 mx-auto'>
                                    <button className='btn btn-secondary w-36' onClick={handleRemove}>Clear Data</button>
                                </div>
                            }
                        </div>
                        
                         <div className='grid grid-cols-2 gap-5 mx-auto mt-12 w-[1024px] '>
                             {showMore ? addedItem?.map(items => <AddingItem key={items.id} item={items}></AddingItem>):addedItem?.slice(0,4).map(items =><AddingItem key={items.id} item={items}></AddingItem>)}
                         </div> 
                        
                        <div className='flex justify-center items-center my-16 '>
                         {addedItem?.length>4 && <button onClick={() => setShowMore(!showMore)} className= ' bg-green-300 p-2  rounded-xl btn btn-warning'>
                                {showMore ? "Show Less" : "Show More"}
                            </button>}
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;