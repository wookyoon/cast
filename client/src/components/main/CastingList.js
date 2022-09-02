import React, {useEffect, useState} from 'react';
import CastingStore from '../../store/CastingStore';
import CastingCard from './CastingCard';
import recommendedTags from '../../utils/castingRecommendedTags';
import categorys from '../../utils/castingCategory';
function CastingList() {
    const [isLoading, setLoading] = useState(true);
    const [castingList, setCastingList] = useState();
    
    useEffect(() => {
        CastingStore.getCastingList("전체", 0).then(()=>{
            setLoading(false);
            setCastingList(CastingStore.castings)
        })
    },[]);

    const handleOnClickTag = (tag) => {
        CastingStore.getCastingList(0, tag).then(()=>{
            setCastingList(CastingStore.castings);
        })
    }

    const handleOnClickCategory = (category) => {
        CastingStore.getCastingList(category, 0).then(()=>{
        setCastingList(CastingStore.castings);
        })
    }

    return (
        isLoading ? <p>Loading</p> :
        <>
        <section id='work'>
        <div className='category'>
				<ul>
					<li>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {categorys.map((category, i)=>(
                            <div key={i}>
                            &nbsp; &nbsp; &nbsp;
                            <h1 onClick={()=>handleOnClickCategory(category)}> {category}</h1>
                            </div>
                        ))}
                    </div>
					</li>
				</ul>
			</div>
			<div className='tags'>
				<ul>
					<li>
						<h1>추천태그</h1>
					</li>
					<li>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {recommendedTags.map((tag, i)=>(
                            <div key={i}>
                            <h1 onClick={()=>handleOnClickTag(tag)}>#{tag}</h1>
                            &nbsp; &nbsp; &nbsp;
                            </div>
                        ))}
                    </div>
					</li>
				</ul>
			</div>
            {castingList.map((casting, idx) => ( 
                <CastingCard casting = {casting} key = {idx} />
            ))}
            </section>
        </>
    );
}

export default CastingList;