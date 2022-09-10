import React,{useState, useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import CastingStore from '../../store/CastingStore';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

function MyPageCastingModal() {
    const navigate = useNavigate();
    useEffect(() => {
    },[]);

    const handleSubmit = (param) => {
        CastingStore.applyCasting(CastingStore.casting._id, CastingStore.motivation, param, "temp").then((re) => {
            console.log(re)
            navigate(0)
        })
    }

    return (
        <Modal
			onClose={() => CastingStore.setMyPageModal(false)}
			onOpen={() => CastingStore.setMyPageModal(true)}
			open={CastingStore.mypageOpen}
			>
			<Modal.Header>{CastingStore.casting.title}</Modal.Header>
			<div className='content'>
				
				<div className='description'>
					<Modal.Description>
					{CastingStore.casting.tag.map((tag, i)=>(
                    <p key={i} >#{tag}</p>
                ))} 
                <h1>{CastingStore.casting.name}</h1>
                <h1>{CastingStore.casting.genre}</h1>
                <h1>{CastingStore.casting.role}</h1>
                <h1>{CastingStore.casting.director}</h1>
					</Modal.Description>
				</div>
                <Form reply>
                    <Form.TextArea  value={CastingStore.motivation} onChange={(e)=>CastingStore.setMotivation(e.target.value)}/>
                    <Button
                        content='Save'
                        labelPosition='left'
                        icon='edit'
                        primary
                        onClick={()=>handleSubmit("save")}
                    />
                    <Button
                        content='Apply'
                        labelPosition='left'
                        icon='edit'
                        primary
                        onClick={()=>handleSubmit("apply")}
                    />
     
                </Form>
			</div>


			<Modal.Actions>
				<Button onClick={() => CastingStore.setMyPageModal(false)}>Cancel</Button>
				<Button onClick={() => CastingStore.setMyPageModal(false)} positive>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
    );
}

export default observer(MyPageCastingModal);