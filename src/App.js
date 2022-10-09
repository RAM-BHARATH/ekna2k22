import './App.css';
import Home from './pages/Home';
import './styles/dist/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import IndEvent from './pages/IndEvent';
import IndEvent2 from './pages/IndEvent2';
import IndEvent3 from './pages/IndEvent3';
import IndEvent4 from './pages/IndEvent4';
import NonTechEventTemplate from './pages/NonTechEventTemplate';
import NonTechEventTemplateRounds from './pages/NonTechEventTemplateRounds';
import StudentAmbassador from './pages/StudentAmbassador';
import Sponsors from './pages/Sponsors';

function App() {
  
  const eventsList = [
    {
      eventName: 'Electro-Matrix',
      id: 'event-tech-1',
      eventUrl:'events/tech/1',
      type: 0,
      imgUrl: '/assets/event_images/electro-matrix.jpeg',
      description: 'Electro-Matrix is the event all about playing with the Electronics with so much of fun and competitiveness. This event consists of tasks like design and debugging of electronic circuits.In Circuit design where the participants will design an electronic circuit in a competitive manner according to the desired O/P and given constraints. In Circuit Debugging, the task is all about the error identification and rectification in the electronic circuit on your way according to the desired O/P.',
      registrationLink: 'https://forms.gle/UpYawoYRJ2CYz7fV6',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      tasks: ['Design of Logic circuit with a Boolean expression in hand ( K-Map simplification may be needed )',
              'Design amplifier with op-amp at the desired gain .',
              'Design a circuit to display a desired number with the seven segment display.',
              'Identify the bug at resistance voltage drop circuit, wheatstone bridge circuit etc...',
      ],
      notes: ['At each level after the 8 th minute, the hint paper will be provided if participants in need.',
              'All Hardware components will be provided for each team'
      ],
      rules: [
        'The maximum number of  participants per team is 2.',
        'This event will be conducted in a level wise. Each level consists of One task which is need to be done.',
        'Each level duration is 15 mins. If one completes the first level only, they can move on to second level.',
        'In that 15 mins, How fast and accurate the participants completes the task accordingly the scores will be provided at each level.',
        'At each level after the 8 th minute, the hint paper will be provided if participants in need.',
        'Depends upon the situation, the number of levels will be decided.',
        'The scores at each level will be added results the final score. Depends upon the final score, the prizes will be given.',
        'Judges decision will be the final. No more arguments or appeal will be entertained.'
      ],
      eventOrganizers: [
        'Vigneshwaran V - 8072899835',
        'Naveenraj K -  6380824773'
      ]
    },
    {
      eventName: 'Analogy-o-Mania!',
      id: 'event-tech-2',
      eventUrl:'events/tech/2',
      type: 0,
      imgUrl: '/assets/event_images/analogy.jpeg',
      registrationLink: 'https://forms.gle/1AHQajCVTVib8PRN6',
      description: "A game of comparing science with nature . Everyone with a basic knowledge of science can participate in this game . It's a kind of quiz game with so much of fun. The team which get the  highest score will be the winner 🏆.",
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        'There should be maximum 2 members per team',
        'You can represent your team with a name',
        'The game may be conducted in mobile phones so a person from team can join the quiz with their phone and other should not use his/ her phone to search any answer or for other purpose',
        'Persons from different institutions can be a part of the same team. However, one person',
        'Depending upon scores only winner is decided',
        'The quiz may be of three rounds. First is filtering round , then semifinals and finals.',
        'Violating rules may result in immediate disqualification of the team form the game.',
        'Other information will be given before the starting of event'
      ],
      eventOrganizers: [
        'Gokul K - Lokes6369173273',
        'Jayaprabakshini V P -  9944256036'
      ]
    },
    {
      eventName: 'IQuid',
      id: 'event-tech-3',
      eventUrl:'events/tech/3',
      type: 0,
      imgUrl: '/assets/event_images/iquid.jpeg',
      registrationLink: 'https://forms.gle/Lc5n249gf719Q6nC6',
      description: 'IQuid is the most unique quest of all the events where all fields of engineering disciplines can participate in it. This event comprises various Mathematical  puzzles to solve in sequential stages with increasing difficulty of finding clues and some challenges for the human IQ and memory in every stage to pass on. The  person who cracks the overall twists and turns will top the event!',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        'The event will be conducted in 3 rounds Preliminary , Secondary , Finale',
        'The teams that are able to pass each rounds will be promoted to next with calculating the time taken to complete',
        ' Each team must have two members, they will be provided with questions to solve in which they will be given a number as a reward',
        'The number that they receive as a reward of solving a question must be kept in mind and should be added to the next following question’s rewards',
        'Later completing the stages the added answer which is a resultant of adding reward numbers of each question will be verified with the final answer',
        'Total time given for each round is 20mins . Each round will have a 5 questions to solve time taken to solve each question is not particular but total time(20mins) will be taken in account.',
        'The quick and correctness of answer in the final will be award as winner followed by runner and 2nd runner.'
      ],
      eventOrganizers: [
        'Lokesh U E - 7904637424',
        'Sowmiya P - 9361592046',
        'Inisha M - 9791786058'
      ]
    },
    {
      eventName: 'Papier Presentella ',
      id: 'event-tech-4',
      eventUrl:'events/tech/4',
      type: 0,
      imgUrl: '/assets/event_images/paper.jpeg',
      registrationLink: 'https://forms.gle/uLs9CGBptTmpVdFv6',
      description: 'Presenting a formal talk to share new information. A technical fest where all the departments can participate to show their way of presenting style, language and how effectively and promptly each one answer the questions. The one who attains the top three will be rewarded.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        'Maximum number of participants in a Team is 2',
        'One person  may not be a part of multiple teams for the same event.',
        'Paper should be in IEEE Format.',
        'Abstract should not exceed more than 250 words and Paper should not exceed 15 pages.',
        'Kindly Mail your abstract, paper and ppt . The difficulties  will be addressed through the same email-id(eknatechnicalevents@gmail.com).',
        'The mail with submissions should contain: Title- theme of the paper, Names of the authors,Phone no of the authors, E-mail ID’s',
        'Participants should bring hardcopies and soft-copies of the submitted paper and PowerPoint presentations must be in the .ppt or .pptx format.',
        'Hard copies should be submitted  before presentation to the judges',
        'The teams will get 10 minutes for presentation and followed by question and answer session.',
        'Last day to submit soft copy of your report (via e-mail) will be two days prior presentation.',
        'The participants will have to present their papers in MS power point supported (.ppt Or. pptx ) only.',
        'The decision of judges will be final and no arguments or appeal will be entertained.'
      ],
      eventOrganizers: [
        'Geetha N - 8778483779',
        'Poovarasan I - 6379664859'
      ]
    },
    {
      eventName: 'Robot Expo',
      id: 'event-tech-5',
      eventUrl:'events/tech/5',
      type: 0,
      imgUrl: '/assets/event_images/robot-expo.jpeg',
      registrationLink: 'https://forms.gle/gwP9q1HDop4Kupyi6',
      description: "The robot expo where future meets today's possibilities and the participants from various department  can showcase their robots in this expo and their robots will be scrutinized by the panel of judges and the robot which flabbergast the panel will get exciting prizes.",
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        'Team Participants should present before 9.00 am for registration and to get place allocation for their respective robots.',
        'Team participating in this expo must showcase their robot in physical format',
        'Every team should showcase their robot from 9.00 am to 3.30 p.m.',
        'Participants should demonstrate their robots to the visitors and the panel.',
        'Judges decision is the final'
      ],
      eventOrganizers: [
        'Prabhu V - 9597498264',
        'Neena Nayak R K - 7299729933'
      ]
    },
    {
      eventName: 'Mr. Coder',
      id: 'event-tech-6',
      eventUrl:'events/tech/6',
      type: 0,
      imgUrl: '/assets/event_images/coder.jpeg',
      registrationLink: 'https://forms.gle/13rzRoZPURMA2fRMA',
      description: 'A contest to find the master coder in the room. Participants are faced with challenges like, writing code, debugging code, understanding logic and rewriting code. Marks are rewarded as per difficulty level and difficulty increases through stages. Top three coders will be rewarded and the winner will snatch the title of "Mr. coder" and cash prize.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        'Two rounds will be conducted.',
        'Top 10 scorers from the first round will compete in the second round for top 3 positions.',
        'Each challenge has a pre-determined score.',
        "A participant's score depends on the number of test cases successfully passed.",
        'Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.',
        'Note- everyone must have a hacker rank account for participating in the contest.'
      ],
      eventOrganizers: [
        'Akshayavani A - 8300831655',
        'Boornima Shree S - 9345678146'
      ]
    },
    {
      eventName: 'Water Rocketry',
      id: 'event-tech-7',
      eventUrl:'events/tech/7',
      type: 0,
      imgUrl: '/assets/event_images/water-rocketry.jpeg',
      registrationLink: 'https://forms.gle/QXFNNLtYPARES5dNA',
      description: 'Teams with handmade water rockets compete against each other to find the best rocket among them. Top 3 Water rockets that perfectly manages the best aerodynamics, size  to weight ratio and low wind drag would be rewarded with amazing cash prize and the winner bags the title of "water Rocketry".',
      location: 'Main ',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["I - ₹2000", "II - ₹1000", "III- Trophy + Certificate"],
      rules: [
        [
          'A team should consist of two members.',
          'Participants should bring their own handmade water rocket and horizontal launchpad, set with 45° launch angle.',
          '1 to 2 litre bottles can be used to build the water rocket.',
          'Both the rocket and launchpad should  withstand a standard pressure of 60 psi with 40% water filled, without any technical failure, when air is pumped by the organizers.',
          'Based on Distance covered horizontally, top 10 rockets will be qualified for round 2.'
        ],
        [
          'The vertical launchpad is provided by the organizers.',
          'Same durability conditions apply for round 2 as mentioned in round 1.',
          'Top 10 rockets qualified from round 1 will compete in round 2.',
          'Top three places are selected based on accurately measuring the air time of rockets when launched vertically.'
        ]
      ],
      eventOrganizers: [
        'Lokesh U E - 7904637424',
        'Mohammed Zahid N - 8883281818'
      ]
    },
    {
      eventName: 'Solo Dance',
      id: 'event-non-tech-1',
      type: 1,
      imgUrl: '/assets/event_images/solo dance.jpg',
      eventUrl:'events/non-tech/1',
      registrationLink: 'https://forms.gle/JBQZCfxknUqReLE68',
      description: 'Do you have a unique skill in dance? Then this contest is for you. Solo dance is a contest that is performed by an Individual with the sound track. Here you can express your own talent &Skills.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophy"],
      rounds: [
        'Round 1 - Prelims',
        'Round 2 - Final'
      ],
      rules: [
          'Any style of Dance is allowed',
          'Track limit for Round 1: 2 minutes',
          'Track limit for Round 2: Maximum 3:30 minutes',
          'Bring your sound track',
          'Prelims will be there',
          'Props can be used',
          'No vulgarity in music/Performance/costumes',
          'Judges decision is final',
          'The general rules & Regulation should be followed, otherwise it would lead to disqualification.'
      ],
      eventOrganizers: [
        'Thinesh Raj - 9944999259'
      ]
    },
    {
      eventName: 'Euphony',
      id: 'event-non-tech-2',
      type: 1,
      imgUrl: '/assets/event_images/euphony.jpg',
      eventUrl:'events/non-tech/2',
      registrationLink: 'https://forms.gle/y1qxsUgvGdLgNfLA6',
      description: 'Euphony is a grand solo singing event which is a great platform for all singers to showcase their innate talent through their euphonious voice. So do participate and  gear yourself up for an exhilarating event.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophy"],
      rules: [
        'Duration of the song can be 4 to 5 minutes.',
        'Song can be Classical/Western',
        'Karaoke only allowed',
        'Bring  Karaoke in pendrive',
        'The participants will be judged based on the song selection, voice quality, rhythm and their appeal to the audience.',
        'Obscenity of any kind is prohibited.',
        'Decision of the judges will be definite.',
        'The general guidelines and time constraints must be rigorously adhered to be in order to avoid participant disqualification.'
      ],
      eventOrganizers: [
        'Sakthivel GR - 9789735839',
      ]
    },
    {
      eventName: 'PicaShow',
      id: 'event-non-tech-3',
      type: 1,
      imgUrl: '/assets/event_images/pica show.jpg',
      eventUrl:'events/non-tech/3',
      registrationLink: 'https://forms.gle/CLhBBkgG8nGLbKaw6',
      description: 'PicaShow is a modern art contest where the artists have chance to show their fantastic painting. ',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Medals & Certificates"],
      rules: [
        'No of participants - 1',
        'Duration : 1 hour 30 minutes',
        'Theme : As your wish',
        'Artwork can be abstract, still life, symbolism, cubism, landscape, portraits etc.',
        'Painting can also be on any drawing paper, charts or canvas.',
        'Artwork cannot be larger than A4 (8.3 * 11.7 in) size.',
        'Carry your own properties, things will not be provided here.',
        'Participants should explain their painting in front of judge.',
        'Judges decision are final.',
        'General rules & the time limits should be strictly followed.'
      ],
      eventOrganizers: [
        'Sowmiya. P - 9361592046'
      ]
  
    },
    {
      eventName: 'Fashion Crisco',
      id: 'event-non-tech-4',
      type: 1,
      imgUrl: '/assets/event_images/fashion.jpg',
      eventUrl:'events/non-tech/4',
      registrationLink: 'https://forms.gle/SiTdVHSHCnQExWySA',
      description: 'Fashion crisco is a show that provides the platform for the fashion designers to showcase their work and skills',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophy"],
      rules: [
        'Minimum:6 participants, Maximum: 10 participants',
        'Time limit: 8 minutes',
        'Select any theme accordingly',
        'Carry your own props and costumes',
        'Bring your sound Track',
        'No vulgarity in music/costumes',
        'Judges decision are final',
        'The general rules should be followed strictly otherwise the team or the person will get eliminated'
      ],
      eventOrganizers: [
        'Kaviya I - 9344865917'
      ]
    },
    {
      eventName: 'Slick Standups',
      id: 'event-non-tech-5',
      type: 1,
      imgUrl: '/assets/event_images/standup.jpg',
      eventUrl:'events/non-tech/5',
      registrationLink: 'https://forms.gle/QtYY8tYEbBA77GYSA',
      description: 'Slick Standups is nothing but a standup comedy event. It Is An Individual Competition. Participants Will Be Judged On The Basis Of Content, fluency, Spontaneity, Presentation & Sense Of Humor.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophy"],
      rules: [
        'Duration : Maximum 4 Minutes',
        'No Participant Can Point Out Any Individual Or Religion In Any Way And Any Dual Meaning Obscene Content Is Strictly Not Allowed.',
        'Decision Of The Judges Will Be Final And Binding.',
        'No Specific Language'
      ],
      eventOrganizers: [
        'Gugan M - 7418200298'
      ]
    },
    {
      eventName: 'Shutter bug',
      id: 'event-non-tech-6',
      type: 1,
      imgUrl: '/assets/event_images/photography.jpg',
      eventUrl:'events/non-tech/6',
      registrationLink: 'https://forms.gle/z4ufAc8EGyQPNaUM9',
      description: 'Are you the person with the beautiful eyes who captures the moment with your magical device? then this platform is for you to showcase the moments captured by you.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Medals & Certificates"],
      themes: ['Architecture', 'Street Photography', 'Reflection', 'Women Empowerment', 'Nature'],
      rules: [
        'Photos should not be edited',
        'Individual participation,team participation is not allowed',
        'Photos should be sent to the given number(7356591700) in jpeg format',
      ],
      eventOrganizers: [
        'Santhosh Kumar.P - 7356591700'
      ]
    },
    {
      eventName: 'Nadiganda',
      id: 'event-non-tech-7',
      type: 1,
      imgUrl: '/assets/event_images/mime.jpg',
      eventUrl:'events/non-tech/7',
      registrationLink: 'https://forms.gle/PVnBhBAkenG7zJPF6',
      description: 'Nadiganda is a group mime event. It is a theatrical technique of suggesting action, character or emotion without words, using only gesture, expression and movement .',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophies"],
      rules: [
        'Maximum 7-8 members per team.',
        'Duration : 4-5 minutes',
        'Carry your own properties and things for the performance'
      ],
      eventOrganizers: [
        'Kavin Kumar C - 6383216478'
      ]
    },
    {
      eventName: 'Shorty Cutz',
      id: 'event-non-tech-8',
      type: 1,
      imgUrl: '/assets/event_images/Short film.jpg',
      eventUrl:'events/non-tech/8',
      registrationLink: 'https://forms.gle/CUBFL2N2tM2cZd3Z8',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophies"],
      description: 'Shorty Cutz is a event for Passionate Directors.You can express your Direction skills ! Create your shorty cutz and reveal your Passionate Directors.',
      rules: [
        'Duration : Maximum 6 minutes',
        'Any theme of your content',
        'No vulgarity in your videos',
        'Videos should be send before 2 days of the symposium',
        'Judge decision are final',
        'The shorty cutz can be your own creative story'
      ],
      eventOrganizers: [
        'B. Griffin - 6383228850',
        'H.Vinil - 8072812182'
      ]
    },
    {
      eventName: 'Euphoria',
      id: 'event-non-tech-9',
      type: 1,
      imgUrl: '/assets/event_images/Euphoria.jpg',
      eventUrl:'events/non-tech/9',
      registrationLink: 'https://forms.gle/GHauiMkg1vk3yBQFA',
      description: 'Euphoria is a group dance contest where the dance troops are welcomed to give us a frenetic perfomance.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Cash Prizes & Trophy"],
      rules: [
        'Minimum: 5 participants, Maximum: 10 participants',
        'Any style of dance is allowed',
        'Maximum 5 minutes',
        'No vulgarity in music/costume/perfomance',
        'Bring your sound track',
        'Judges decision are final',
        'The general rules & the time limits should be strictly followed otherwise the team will get disqualified'
      ],
      eventOrganizers: [
        'Sakthivel GR - 9789735839'
      ]
    },
    {
      eventName: 'QUIZITE (Quiz)',
      id: 'event-non-tech-10',
      type: 1,
      imgUrl: '/assets/event_images/quiz.jpg',
      eventUrl:'events/non-tech/10',
      registrationLink: 'https://forms.gle/Ba9cydpn4xohY5L57',
      description: 'Quizite is a group quiz competition where contestants are welcomed to show their extensive knowledge.',
      location: 'Main Campus',
      date: 'Nov 4',
      time: '9am - 9pm',
      prize:["Medals & Certificates"],
      rules: [
        'Minimum: 2 participants, Maximum: 3 participants',
        'No of rounds: 3',
        'Judges decision will be considered as final',
        'General rules should be strictly followed, otherwise contestants would be disqualified.'
      ],
      eventOrganizers: [
        'Niloparnisha B - 6381044858'
      ]
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
          <Route element={<IndEvent3 indEvent={eventsList[0]}/>} path="/events/tech/1"/>
          <Route element={<IndEvent indEvent={eventsList[1]}/>} path="/events/tech/2"/>
          <Route element={<IndEvent indEvent={eventsList[2]}/>} path="/events/tech/3"/>
          <Route element={<IndEvent indEvent={eventsList[3]}/>} path="/events/tech/4"/>
          <Route element={<IndEvent indEvent={eventsList[4]}/>} path="/events/tech/5"/>
          <Route element={<IndEvent indEvent={eventsList[5]}/>} path="/events/tech/6"/>
          <Route element={<IndEvent4 indEvent={eventsList[6]}/>} path="/events/tech/7"/>
          <Route element={<NonTechEventTemplateRounds indEvent={eventsList[7]}/>} path="/events/non-tech/1"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[8]}/>} path="/events/non-tech/2"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[9]}/>} path="/events/non-tech/3"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[10]}/>} path="/events/non-tech/4"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[11]}/>} path="/events/non-tech/5"/>
          <Route element={<NonTechEventTemplateRounds indEvent={eventsList[12]}/>} path="/events/non-tech/6"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[13]}/>} path="/events/non-tech/7"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[14]}/>} path="/events/non-tech/8"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[15]}/>} path="/events/non-tech/9"/>
          <Route element={<NonTechEventTemplate indEvent={eventsList[16]}/>} path="/events/non-tech/10"/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
