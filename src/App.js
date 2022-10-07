import './App.css';
import Home from './pages/Home';
import './styles/dist/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import IndEvent from './pages/IndEvent';
import IndEvent2 from './pages/IndEvent2';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';

function App() {
  
  const eventsList = [
    {
      eventName: 'Electro-Matrix',
      id: 'event-tech-1',
      eventUrl:'events/tech/1',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/UpYawoYRJ2CYz7fV6'
    },
    {
      eventName: 'Analogy-o-Mania!',
      id: 'event-tech-2',
      eventUrl:'events/tech/2',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/1AHQajCVTVib8PRN6 '
    },
    {
      eventName: 'IQuid',
      id: 'event-tech-3',
      eventUrl:'events/tech/3',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/Lc5n249gf719Q6nC6 '
    },
    {
      eventName: 'Papier Presentella ',
      id: 'event-tech-4',
      eventUrl:'events/tech/4',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/uLs9CGBptTmpVdFv6'
    },
    {
      eventName: 'Robot Expo',
      id: 'event-tech-5',
      eventUrl:'events/tech/5',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/gwP9q1HDop4Kupyi6'
    },
    {
      eventName: 'Mr. Coder',
      id: 'event-tech-6',
      eventUrl:'events/tech/6',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/13rzRoZPURMA2fRMA'
    },
    {
      eventName: 'Water Rocketry',
      id: 'event-tech-7',
      eventUrl:'events/tech/7',
      type: 0,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      registrationLink: 'https://forms.gle/QXFNNLtYPARES5dNA'
    },
    {
      eventName: 'Dance',
      id: 'event-non-tech-1',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/1',
      registrationLink1: 'https://forms.gle/JBQZCfxknUqReLE68',
      registrationLink2: 'https://forms.gle/GHauiMkg1vk3yBQFA'
    },
    {
      eventName: 'Music Band',
      id: 'event-non-tech-2',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/2',
      registrationLink1: 'https://forms.gle/y1qxsUgvGdLgNfLA6',
      registrationLink2: 'https://forms.gle/LavV85WCts7TEmQ36'
    },
    {
      eventName: 'Modern Art',
      id: 'event-non-tech-3',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat opt',
      eventUrl:'events/non-tech/3',
      registrationLink: 'https://forms.gle/CLhBBkgG8nGLbKaw6'
  
    },
    {
      eventName: 'Fashion Show',
      id: 'event-non-tech-4',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/4',
      registrationLink: 'https://forms.gle/SiTdVHSHCnQExWySA'
    },
    {
      eventName: 'Slick Standups',
      id: 'event-non-tech-5',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/5',
      registrationLink: ''
    },
    {
      eventName: 'Photography',
      id: 'event-non-tech-6',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/6',
      registrationLink: 'https://forms.gle/z4ufAc8EGyQPNaUM9'
    },
    {
      eventName: 'Mime',
      id: 'event-non-tech-7',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/7',
      registrationLink: 'https://forms.gle/PVnBhBAkenG7zJPF6'
    },
    {
      eventName: 'Shortfilm',
      id: 'event-non-tech-8',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/8',
      registrationLink: 'https://forms.gle/CUBFL2N2tM2cZd3Z8'
    },
    {
      eventName: 'Adzap',
      id: 'event-non-tech-9',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/9',
      registrationLink: 'https://forms.gle/E1K885svUp8mDmz79'
    },
    {
      eventName: 'Quiz',
      id: 'event-non-tech-10',
      type: 1,
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.',
      eventUrl:'events/non-tech/10',
      registrationLink: 'https://forms.gle/Ba9cydpn4xohY5L57'
    },
  ]


  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home />} path="/" loading/>
          <Route element={<Events eventsList={eventsList}/>} path="/events"/>
          <Route element={<StudentAmbassador />} path='/student-ambassador'/>
          <Route element={<Sponsors />} path='/sponsors'/>
          <Route element={<IndEvent indEvent={eventsList[0]}/>} path="/events/tech/1"/>
          <Route element={<IndEvent indEvent={eventsList[1]}/>} path="/events/tech/2"/>
          <Route element={<IndEvent indEvent={eventsList[2]}/>} path="/events/tech/3"/>
          <Route element={<IndEvent indEvent={eventsList[3]}/>} path="/events/tech/4"/>
          <Route element={<IndEvent indEvent={eventsList[4]}/>} path="/events/tech/5"/>
          <Route element={<IndEvent indEvent={eventsList[5]}/>} path="/events/tech/6"/>
          <Route element={<IndEvent indEvent={eventsList[6]}/>} path="/events/tech/7"/>
          <Route element={<IndEvent2 indEvent={eventsList[7]}/>} path="/events/non-tech/1"/>
          <Route element={<IndEvent2 indEvent={eventsList[8]}/>} path="/events/non-tech/2"/>
          <Route element={<IndEvent indEvent={eventsList[9]}/>} path="/events/non-tech/3"/>
          <Route element={<IndEvent indEvent={eventsList[10]}/>} path="/events/non-tech/4"/>
          <Route element={<IndEvent indEvent={eventsList[11]}/>} path="/events/non-tech/5"/>
          <Route element={<IndEvent indEvent={eventsList[12]}/>} path="/events/non-tech/6"/>
          <Route element={<IndEvent indEvent={eventsList[13]}/>} path="/events/non-tech/7"/>
          <Route element={<IndEvent indEvent={eventsList[14]}/>} path="/events/non-tech/8"/>
          <Route element={<IndEvent indEvent={eventsList[15]}/>} path="/events/non-tech/9"/>
          <Route element={<IndEvent indEvent={eventsList[16]}/>} path="/events/non-tech/10"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
