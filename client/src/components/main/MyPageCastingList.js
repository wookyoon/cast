import React, {useEffect, useState} from 'react';
import CastingStore from '../../store/CastingStore';
import CastingCard from './CastingCard';
import MyPageCastingModal from './MyPageCastingModal';
import MyPageCastingUpdateModal from './MyPageCastingUpdateModal';
import MyPageCastingApplyModal from './MyPageCastingApplyModal';
import { useNavigate } from 'react-router-dom';

function MyPageCastingList({castings, menu, name}) {
    const [isLoading, setLoading] = useState(true);
    const [castingList, setCastingList] = useState(castings);

    useEffect(() => {
        // console.log(castings)
	},[]);

    const handleDelete = (type, id) => {
        if (window.confirm("삭제하시겠습니까?") === true){
            console.log("!",castingList); 
            CastingStore.deleteCastingList(type, id, localStorage.getItem("name")).then(()=>{
                setCastingList(castingList.filter((casting) => casting._id !== id))
                console.log("완료");
                });
            }else{
                console.log("취소");
            }
            console.log("!!",castingList);
      }

    
    return (
		// isLoading ? <p>Loading</p> :
        <>
            <section id='job'>
                    {castingList.map((casting, idx)=>(
                        <div className='card' key = {idx}>
                        <CastingCard casting={casting} menu={menu}/>
                        
                        {menu === "created" &&
                        <div className='buttons'>
                            <button class='btn save' onClick={()=>{CastingStore.setCasting(casting, "check");CastingStore.setMyPageApplyModal(true)}}>지원자 확인</button>
                            <button class='btn save' onClick={()=>{CastingStore.setCasting(casting, "reply");CastingStore.setMyPageApplyModal(true)}}>지원자 결과 확인</button>
                            <button class='btn apply' onClick={()=>{CastingStore.setCasting(casting);CastingStore.setMyPageUpdateModal(true)}}>수정</button>
                            <button class='btn apply' onClick={()=>{handleDelete("create", casting._id)}}>삭제</button>
                        </div>
                        }
                        {menu === "save" &&
                        <div className='buttons'>
                            <button class='btn apply' onClick={()=>{CastingStore.setCasting(casting, "update"); CastingStore.setMyPageModal(true)}}>수정</button>
                            <button class='btn apply' onClick={()=>{handleDelete("save", casting._id)}}>삭제</button>
                        </div>
                        }
                        {menu === "apply" &&
                        <div className='buttons'>
                            <button class='btn apply' onClick={()=>{CastingStore.setCasting(casting, "confirm");CastingStore.setMyPageApplyModal(true)}}>확인</button>
                        </div>
                        }
                    </div>
                    ))}
            </section>
                <MyPageCastingModal />
                <MyPageCastingUpdateModal />
                <MyPageCastingApplyModal />
            </>
    );
}

export default MyPageCastingList;