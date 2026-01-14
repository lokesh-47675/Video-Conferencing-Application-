import '../css/KnowMore.css'
import Navbar from '../utils/Navbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Student from '../assets/Student.png'
import Footer from "../utils/Footer";

export default function KnowMore () {
  return (
    <div className='hero-bg'>
      <Navbar></Navbar>
      <div>
        <h1>Supporting Seamless Virtual Interaction</h1>
        <div className='first-box'>
          <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='200'
                image='https://plus.unsplash.com/premium_vector-1698192041909-3a5a4a6ee089?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='E-Learning'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  E-Learning
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  E-learning enables structured knowledge sharing through
                  digital platforms, allowing learners to access educational
                  content anytime and from any location.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='200'
                image='https://plus.unsplash.com/premium_vector-1698192173855-392f34a4a089?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D'
                alt='Communication'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Communication
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Effective communication supports clear exchange of ideas in
                  virtual environments, ensuring participants remain aligned and
                  engaged throughout interactions.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='200'
                image='https://plus.unsplash.com/premium_vector-1682303102478-205a13e17265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdGl2aXR5fGVufDB8fDB8fHww'
                alt='Productivity'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Productivity
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Productivity is enhanced by streamlined workflows and focused
                  collaboration, enabling users to achieve more within shorter
                  timeframes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='200'
                image='https://plus.unsplash.com/premium_vector-1683134678960-e6e772f7263f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RG91YnR8ZW58MHx8MHx8fDA%3D'
                alt='No Confusion'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  No Confusion
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Well-designed systems reduce ambiguity by presenting
                  information clearly, helping users understand objectives and
                  actions without unnecessary complexity.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className='card' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='200'
                image='https://plus.unsplash.com/premium_vector-1682306944260-73daeebad9d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xhc3Nyb29tfGVufDB8fDB8fHww'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Digital Classroom
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  A digital classroom provides an interactive virtual space
                  where instructors and learners collaborate in real time,
                  independent of physical boundaries.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className='third-box'>
          <img src={Student} height='450px' width='800px'></img>
          <br></br>
          <div className='third-feature'>
            <h2>
              <b>Global connection with teachers and students around the world</b>
            </h2>&nbsp;
            <h6>Enable global collaboration, research, and learning with our solutions that put your most valued partners or community experts in the same room.</h6>&nbsp;
            <h6>Zoom Phone offers <i><b>global coverage</b></i> with local dialing codes in 70+ countries and territories, plus flexible options to extend your geographic reach further.</h6>&nbsp;
            <h6>Elevate your calls to <i><b>video meetings</b></i>  to connect groups of up to 1,000 people for Faculty meetings, presentations, IT troubleshooting in your district, or guidance consultations — even in places like the media centers, student maker spaces, auditoriums, and cafeterias.</h6>&nbsp;
            <h6>Scale to 100,000 attendees with <i><b>video webinars</b></i>  for live training, town hall style meetings, and professional development conferences.</h6>
          </div>
        </div>

        <div className='knowmore-content-box'>
          <div className='feature'>
            <h5>
              <i class='fa-solid fa-video'></i> Video Meetings
            </h5>
            <h6>
              High-quality video conferencing with support for large groups.
            </h6>
            <h5>
              <i class='fa-solid fa-audio-description'></i> Audio Conferencing
            </h5>
            <h6>Clear and reliable voice communication during meetings.</h6>
            <h5>
              <i class='fa-solid fa-message'></i> Chat & Messaging
            </h5>
            <h6>Instant text communication for individuals and groups.</h6>
            <h5>
              <i class='fa-solid fa-computer'></i> Screen Sharing
            </h5>
            <h6>
              Share screens, presentations, and applications in real time.
            </h6>
            <h5>
              <i class='fa-solid fa-record-vinyl'></i> Meeting Recording
            </h5>
            <h6>Record meetings for later review and reference.</h6>
            <h5>
              <i class='fa-solid fa-people-group'></i> Breakout Rooms
            </h5>
            <h6>
              Divide participants into smaller groups for focused discussions.
            </h6>
          </div>
          <br></br>
          <img
            src='https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            height='400px'
            width='700px'
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
