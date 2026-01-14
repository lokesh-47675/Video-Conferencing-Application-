import React, { useState,useEffect } from 'react'
import Navbar from '../utils/Navbar'
import TextField from '@mui/material/TextField'

import '../css/Endcall.css'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'

export default function EndCall () {
  const [feedback, setFeedback] = useState('')
  const [sent, setSent] = useState(false)

  let handleSubmit = event => {
    if(feedback){
        event.preventDefault()
        setFeedback('')
        setSent(true)
        return;
    }
  }

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [sent])

  return (
    <div className='page'>
      <Navbar></Navbar>
      <h2>Meeting ended. Looking forward to connecting again!</h2>
      <div className='textfield'>
        <TextField
          id='outlined-textarea'
          label='Give Your Valuable Feedback'
          placeholder='Share Your Experience'
          multiline
          value={feedback}
          onChange={event => setFeedback(event.target.value)}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white'
            },
            '& input::placeholder': {
              color: 'white',
              opacity: 0.7
            },
            '& .MuiInputLabel-root': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }
            }
          }}
        />
      </div>
      <br></br>
      <Button variant='contained' endIcon={<SendIcon />} onClick={handleSubmit}>
        Submit
      </Button>
      <br></br>
      {sent && <p>Thank You for giving Feedback!</p>}
    </div>
  )
}
