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
      eventName: 'Design and Debug',
      id: 'event-tech-1',
      eventUrl:'events/tech/1',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Analogy-O-Mania',
      id: 'event-tech-2',
      eventUrl:'events/tech/2',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Paper Presentation',
      id: 'event-tech-3',
      eventUrl:'events/tech/3',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'IQid',
      id: 'event-tech-4',
      eventUrl:'events/tech/4',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Startup ideas Presentation',
      id: 'event-tech-5',
      eventUrl:'events/tech/5',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Robot Expo',
      id: 'event-tech-6',
      eventUrl:'events/tech/6',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Code Debugging',
      id: 'event-tech-7',
      eventUrl:'events/tech/7',
      type: 'Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Dance',
      id: 'event-non-tech-1',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Music Band',
      id: 'event-non-tech-2',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Modern Art',
      id: 'event-non-tech-3',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
  
    },
    {
      eventName: 'Fashion Show',
      id: 'event-non-tech-4',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Slick Standups',
      id: 'event-non-tech-5',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Photography',
      id: 'event-non-tech-6',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Miming',
      id: 'event-non-tech-7',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Shortfilm',
      id: 'event-non-tech-8',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Adzap',
      id: 'event-non-tech-9',
      type: 'Non-Technical',
      imgUrl: '/assets/event_images/little-boom-g3ece53c31_640.jpg',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quibusdam deserunt, eius id quia molestiae ab asperiores fuga cupiditate veniam pariatur amet? Deleniti voluptate harum quibusdam saepe corrupti placeat optio.'
    },
    {
      eventName: 'Quiz',
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
          <Route element={<IndEvent indEvent={eventsList[0]}/>} path="/events/tech/1"/>
          <Route element={<IndEvent indEvent={eventsList[1]}/>} path="/events/tech/2"/>
          <Route element={<IndEvent indEvent={eventsList[2]}/>} path="/events/tech/3"/>
          <Route element={<IndEvent indEvent={eventsList[3]}/>} path="/event/tech/4"/>
          <Route element={<IndEvent indEvent={eventsList[4]}/>} path="/event/tech/5"/>
          <Route element={<IndEvent indEvent={eventsList[5]}/>} path="/event/tech/6"/>
          <Route element={<IndEvent indEvent={eventsList[6]}/>} path="/event/tech/7"/>
          <Route element={<IndEvent indEvent={eventsList[7]}/>} path="/event/non-tech/1"/>
          <Route element={<IndEvent indEvent={eventsList[8]}/>} path="/event/non-tech/2"/>
          <Route element={<IndEvent indEvent={eventsList[9]}/>} path="/event/non-tech/3"/>
          <Route element={<IndEvent indEvent={eventsList[10]}/>} path="/event/non-tech/4"/>
          <Route element={<IndEvent indEvent={eventsList[11]}/>} path="/event/non-tech/5"/>
          <Route element={<IndEvent indEvent={eventsList[12]}/>} path="/event/non-tech/6"/>
          <Route element={<IndEvent indEvent={eventsList[13]}/>} path="/event/non-tech/7"/>
          <Route element={<IndEvent indEvent={eventsList[14]}/>} path="/event/non-tech/8"/>
          <Route element={<IndEvent indEvent={eventsList[15]}/>} path="/event/non-tech/9"/>
          <Route element={<IndEvent indEvent={eventsList[16]}/>} path="/event/non-tech/10"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
