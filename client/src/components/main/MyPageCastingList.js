import React, {useEffect, useState} from 'react';
import CastingStore from '../../store/CastingStore';
import CastingCard from './CastingCard';
import MyPageCastingModal from './MyPageCastingModal';

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
            <section id='work'>
                <div>
                    {castingList.map((casting, idx)=>(
                        <div key = {idx}>
                        <CastingCard key = {idx} casting={casting} menu={menu}/>
                        
                        {menu === "created" &&
                        <div className='buttons'>
                            <button class='btn save' onClick={()=>{}}>지원자 확인</button>
                            <button class='btn apply' onClick={()=>{}}>수정</button>
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
                            <button class='btn apply' onClick={()=>{}}>확인</button>
                        </div>
                        }
                    </div>
                    ))}
                </div>
            </section>
                <MyPageCastingModal />
            </>
    );
}

export default MyPageCastingList;