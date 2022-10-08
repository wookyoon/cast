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

function OfferModal({video, name}) {
  const [message, setMessage] = useState();

  useEffect(() => {
	}, []);

  const handleSubmit = () => {
    const data = {
      user : video.name,
      offer : {
        name : name,
        message : message
      }
    }

    LoginStore.setOffer(data);
  }

  return (
        <div>
    <Dialog open={LoginStore.offerOpen} onClose={()=>LoginStore.setOfferModal(false)}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(e)=>setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>LoginStore.setOfferModal(false)}>Cancel</Button>
        <Button onClick={()=>{handleSubmit(); LoginStore.setOfferModal(false)}}>Send</Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default observer(OfferModal);