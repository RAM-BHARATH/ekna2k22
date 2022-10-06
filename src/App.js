import './App.css';
import Home from './pages/Home';
import './styles/dist/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import IndEvent from './pages/IndEvent';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';

function App() {
  
  const eventsList = [
    {
      eventName: 'Event Tech 1',
      id: 'event-tech-1',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 2',
      id: 'event-tech-2',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 3',
      id: 'event-tech-3',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 4',
      id: 'event-tech-4',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 5',
      id: 'event-tech-5',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 6',
      id: 'event-tech-6',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Tech 7',
      id: 'event-tech-7',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 1',
      id: 'event-non-tech-1',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 2',
      id: 'event-non-tech-2',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 3',
      id: 'event-non-tech-3',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
  
    },
    {
      eventName: 'Event Non-Tech 4',
      id: 'event-non-tech-4',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 5',
      id: 'event-non-tech-5',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 6',
      id: 'event-non-tech-6',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 7',
      id: 'event-non-tech-7',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 8',
      id: 'event-non-tech-8',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 9',
      id: 'event-non-tech-9',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Event Non-Tech 10',
      id: 'event-non-tech-10',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
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
          <Route element={<IndEvent indEvent={eventsList[0]}/>} path="/event-tech-1"/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
