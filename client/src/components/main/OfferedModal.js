import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoginStore from '../../store/LoginStore';
import { observer } from 'mobx-react';
function OfferedModal({offers}) {
    useEffect(() => {
	}, []);

    const handleSubmit = () => {
        // const data = {
        //   user : video.name,
        //   offer : {
        //     name : name,
        //     message : message
        //   }
        // }
    
        // LoginStore.setOffer(data);
      }
    return (
            <div>
    <Dialog open={LoginStore.offeredOpen} onClose={()=>LoginStore.setOfferedModal(false)}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
          {offers.map((offer, idx)=>(
              <div key={idx}>
              <DialogContentText >
                {offer.name} 
         </DialogContentText>
            <DialogContentText key={idx}>
                {offer.message}
         </DialogContentText>
              </div>
          ))}
        
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>LoginStore.setOfferedModal(false)}>Cancel</Button>
        <Button onClick={()=>{handleSubmit(); LoginStore.setOfferedModal(false)}}>Send</Button>
      </DialogActions>
    </Dialog>
  </div>
    );
}

export default observer(OfferedModal);