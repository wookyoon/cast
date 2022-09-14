import React, { useEffect, useState } from 'react';
import Banner from '../main/Banner';
import Search from '../common/Search';
import CastingStore from '../../store/CastingStore';
import CastingCard from './CastingCard';
import recommendedTags from '../../utils/castingRecommendedTags';
import categorys from '../../utils/castingCategory';
import CastingModal from './CastingModal';

function CastingList() {
	const [isLoading, setLoading] = useState(true);
	const [castingList, setCastingList] = useState();

	useEffect(() => {
		CastingStore.getCastingList('all', 0).then(() => {
			setLoading(false);
			setCastingList(CastingStore.castings);
		});
	}, []);

	const handleOnClickTag = (tag) => {
		CastingStore.getCastingList(0, tag).then(() => {
			setCastingList(CastingStore.castings);
		});
	};

	const handleOnClickCategory = (category) => {
		CastingStore.getCastingList(category, 0).then(() => {
			setCastingList(CastingStore.castings);
		});
	};

	return isLoading ? (
		<p>Loading</p>
	) : (
		<>
		<section id='castinglist'>
			<table />
			<Banner />
			<table />
			<Search />
			<section id='work'>
				<div className='category'>
					<ul>
						<li>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								{categorys.map((category, i) => (
									<div key={i}>
										&nbsp; &nbsp; &nbsp;
										<h1 onClick={() => handleOnClickCategory(category)}>
											{' '}
											{category}
										</h1>
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
								{recommendedTags.map((tag, i) => (
									<div key={i}>
										<h1 onClick={() => handleOnClickTag(tag)}>#{tag}</h1>
										&nbsp; &nbsp; &nbsp;
									</div>
								))}
							</div>
						</li>
					</ul>
				</div>
				{castingList.map((casting, idx) => (
					<div key ={idx} >
					<CastingCard casting={casting} key={idx} menu={"all"}/>
                        <div className='buttons'>
                            <button class='btn save' onClick={()=>{}}>저장</button>
                            <button class='btn apply' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>지원</button>
                        </div>
					</div>
				))}
			</section>
			</section>
		</>
	);
}

export default CastingList;
