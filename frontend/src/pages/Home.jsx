/* eslint-disable react-refresh/only-export-components */

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { Button, IconButton, TextField } from '@mui/material'
import { AuthContext } from '../context/AuthContext'
import Navbar from '../utils/Navbar'
import '../css/Home.css'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export function Home () {
  let router = useNavigate()
  const [meetingCode, setMeetingCode] = useState('')

  const { addToUserHistory } = useContext(AuthContext)

  const token = localStorage.getItem('token')

  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (meetingCode) {
        await navigator.clipboard.writeText(meetingCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch (error) {
      console.error('Failed to copy text:', error)
    }
  }

  let handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return

    if (token) {
      await addToUserHistory(meetingCode)
      router(`/${meetingCode}`)
    } else {
      router(`/${meetingCode}?guest=true`)
    }
  }

  return (
    <>
      <div className=' hero-background home'>
        <Navbar></Navbar>

        <div className='meetContainer'>
          {token ? (
            <h2>Enter a meeting code to create or join a meeting</h2>
          ) : (
            <h2>Enter a meeting code to join a meeting</h2>
          )}
          <div className='meeting-code'>
            <TextField
              size='small'
              id='outlined-basic'
              required
              placeholder='Meeting Code'
              variant='outlined'
              onChange={e => setMeetingCode(e.target.value)}
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
            &nbsp;&nbsp;
            <Button
              variant='outlined'
              onClick={handleCopy}
              startIcon={<ContentCopyIcon />}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {copied ? 'Copied' : 'Copy'}
            </Button>{' '}
            &nbsp;&nbsp;
            <Button onClick={handleJoinVideoCall} variant='contained'>
              {token ? 'Join' : 'Join as Guest'}
            </Button>
          </div>
          <p>
            Note*: Share this meeting code with participants to allow them to
            join the meeting.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;