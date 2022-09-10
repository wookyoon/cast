import React,{useState, useEffect } from 'react';
import { Button, Modal, Form, Checkbox } from 'semantic-ui-react';
import CastingStore from '../../store/CastingStore';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
function MyPageCastingApplyModal() {
    const navigate = useNavigate();
    const [reply, setReply] = useState()
    // const [pass, setPass] = useState(false)
    // const [fail, setFail] = useState()
    
    useEffect(() => {
    },[]);

    const handleSubmit = (type, id) => {
        // console.log("####", id)

        CastingStore.applyCasting(CastingStore.casting._id, reply, id, "reply").then((re) => {
            console.log(re)
            // navigate(0)
        })
    }

    return (
        <Modal
			onClose={() => CastingStore.setMyPageApplyModal(false)}
			onOpen={() => CastingStore.setMyPageApplyModal(true)}
			open={CastingStore.mypageApplyOpen}
			>
               {CastingStore.type==="reply" && CastingStore.filteredResultCasting.map((apply, idx)=>(
                    <div key={idx} >
                        <Modal.Header>지원자 이름 : {apply.name}</Modal.Header>
                        <Modal.Description>동기 : {apply.motivation}</Modal.Description>
                        <Modal.Description>답장 : {apply.reply}</Modal.Description>
                
                    </div>
                ))} 
                {CastingStore.type==="check" && CastingStore.filteredCasting.map((apply, idx)=>(
                    <div key={idx} >
                        <Modal.Header>지원자 이름 : {apply.name}</Modal.Header>
                        <Modal.Description>동기 : {apply.motivation}</Modal.Description>
                <Form reply>
                <Form.TextArea  onChange={(e)=>setReply(e.target.value)}/>
                <Button
                        content='Reply'
                        labelPosition='left'
                        icon='edit'
                        primary
                        onClick={()=>handleSubmit("reply",apply._id)}
                    />
                </Form>
                    </div>
                ))} 
			<Modal.Actions>
				<Button onClick={() => CastingStore.setMyPageApplyModal(false)}>Cancel</Button>
				<Button onClick={() => CastingStore.setMyPageApplyModal(false)} positive>
					Ok
				</Button>
			</Modal.Actions>
		</Modal>
    );
}

export default observer(MyPageCastingApplyModal);