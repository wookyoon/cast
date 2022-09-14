import React,{useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import CastingStore from '../../store/CastingStore';
import ContentStore from '../../store/ContentStore';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import TagSearch from '../content/TagSearch';

function MyPageCastingUpdateModal() {
    const navigate = useNavigate();
    const [shootingDateYear, setShootingDateYear] = useState()
    const [shootingDateMonth, setShootingDateMonth] = useState()
    const [shootingDateDay, setShootingDateDay] = useState()
    const [dDayYear, setDDayYear] = useState()
    const [dDayMonth, setDDayMonth] = useState()
    const [dDayDay, setDDayDay] = useState()

    useEffect(() => {
    },[]);

    const options = [
        {text: '단편', value: '단편' },
        {text: '장편', value: '장편' },
        {text: '기타', value: '기타' },
      ]

    const handleSubmit = (param) => {
        // let now = new Date();  
        // let y = now.getFullYear();
        // let m = now.getMonth() + 1;
        // let d =now.getDate();
        console.log("###", CastingStore.casting.tag)
        // CastingStore.casting.tag = ContentStore.tags
        // const created = y.toString()+"."+m.toString()+"."+d.toString()
        // const shootingDate = shootingDateYear+"."+shootingDateMonth+"."+shootingDateDay;
        // const dDay = dDayYear+"."+dDayMonth+"."+dDayDay;
        // CastingStore.casting.shootingDate = shootingDate
        // CastingStore.casting.dDay = dDay

        console.log(CastingStore.casting)
        CastingStore.castingCreate("update").then((re) => {
            console.log(re)
            // navigate(0)
        })
    }

    return (
        <Modal
			onClose={() => CastingStore.setMyPageUpdateModal(false)}
			onOpen={() => CastingStore.setMyPageUpdateModal(true)}
			open={CastingStore.mypageUpdateOpen}
			>
			<Form.Input value = {CastingStore.casting.title} onChange={(e)=> CastingStore.setCastingValue("title", e.target.value)} />
			<div className='content'>
				<div className='description'>
					<Modal.Description>
					
                <TagSearch type={"update"}/>
                <Form.Input value = {CastingStore.casting.genre} onChange={(e)=> CastingStore.setCastingValue("genre", e.target.value)} />
                <Form.Input value = {CastingStore.casting.role} onChange={(e)=> CastingStore.setCastingValue("role", e.target.value)} />
                <Form.Input value = {CastingStore.casting.location} onChange={(e)=> CastingStore.setCastingValue("location", e.target.value)} />
                <Form.Input value = {CastingStore.casting.production} onChange={(e)=> CastingStore.setCastingValue("production", e.target.value)} />
                <Form.Input value = {CastingStore.casting.director} onChange={(e)=> CastingStore.setCastingValue("director", e.target.value)} />
                <Form.TextArea value = {CastingStore.casting.explanation} onChange={(e)=> CastingStore.setCastingValue("explanation", e.target.value)} />
                <Form.TextArea value = {CastingStore.casting.roleExplanation} onChange={(e)=> CastingStore.setCastingValue("roleExplanation", e.target.value)} />
                <Form.TextArea value = {CastingStore.casting.note} onChange={(e)=> CastingStore.setCastingValue("note", e.target.value)} />
                <Form.Select placeholder={CastingStore.casting.category}
                    options={options}
                    aria-label="Default select example" onChange={(e, {value})=>CastingStore.setCastingValue("category", value)} />
                  

                <label>촬영일</label>
                <Form.Input
                    onChange = {(e)=>{setShootingDateYear(e.target.value);}}
                    value={CastingStore.casting.shootingDate}
                    placeholder="2022"
                />
                 <Form.Input
                    onChange = {(e)=>{setShootingDateMonth(e.target.value);}}
                    value={CastingStore.casting.shootingDate}
                    placeholder="09"
                />
                 <Form.Input
                    onChange = {(e)=>{setShootingDateDay(e.target.value);}}
                    value={CastingStore.casting.shootingDate}
                    placeholder="00"
                />
                <label>마감일</label>
                <Form.Input
                    onChange = {(e)=>{setDDayYear(e.target.value);}}
                    value={CastingStore.casting.dDay}
                    placeholder="0000"
                />
                <Form.Input
                    onChange = {(e)=>{setDDayMonth(e.target.value);}}
                    value={CastingStore.casting.dDay}
                    placeholder="00"
                />
                <Form.Input
                    onChange = {(e)=>{setDDayDay(e.target.value);}}
                    value={CastingStore.casting.dDay}
                    placeholder="00"
                />
					</Modal.Description>
				</div>
                <Form reply>
                    <Button
                        content='Save'
                        labelPosition='left'
                        icon='edit'
                        primary
                        onClick={()=>handleSubmit("update")}
                    />
                </Form>
			</div>

			<Modal.Actions>
				<Button onClick={() => CastingStore.setMyPageUpdateModal(false)}>Cancel</Button>
				<Button onClick={() => CastingStore.setMyPageUpdateModal(false)} positive>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
    );
}

export default observer(MyPageCastingUpdateModal);
// CastingStore.setCastingValue("category", e.target.value)