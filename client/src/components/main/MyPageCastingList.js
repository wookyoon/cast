import React, {useEffect, useState} from 'react';
import CastingStore from '../../store/CastingStore';
import CastingCard from './CastingCard';
import MyPageCastingModal from './MyPageCastingModal';

function MyPageCastingList({menu, name}) {
    const [isLoading, setLoading] = useState(true);
    const [castingList, setCastingList] = useState();

    useEffect(() => {
        CastingStore.getCastingList(menu, name).then(()=>{
			setLoading(false);
			setCastingList(CastingStore.castings);
            console.log(CastingStore.castings)
        });
	},[]);

    return (
		isLoading ? <p>Loading</p> :
        <>
            <section id='work'>
                <div>
                    {castingList.map((casting, idx)=>(
                        <CastingCard key = {idx} casting={casting} menu={menu}/>
                    ))}
                </div>
            </section>
            <MyPageCastingModal />
        </>
    );
}

export default MyPageCastingList;