import './App.css';
import Counters from './Counters';
import CheckList from './ui-ux to-do list/CheckList';
import SwitchDefault from './Switch';
import Emoji from './Emoji';
import Dicegame from './Dicegame';
import ToggleGroup from './ToggleGroup';
import SignUpForm from './form/SignUpForm';
import RandomQuote from './useEffect/RandomQuote';
import HogwartsHouses from './Tabs';
import Game from './xo/Game';
import InvestmentInfo from './investment-calc/InvestmentInfo';
import Countdown from './Refs and Portals/Countdown';
import Projects from './projectChecklist/Projects';
function App() {

  return (
    <>
      <Projects />
      {/* <Countdown />
      <InvestmentInfo />
      <Game />
      <HogwartsHouses />
      <CheckList />
      <RandomQuote />
      <Counters />
      <ToggleGroup />
      <SwitchDefault />
      <SignUpForm />
      <Emoji />
      <Dicegame noDice={2} /> */}
    </>

  );
}

export default App


// const data = [
//   { id: uuid(), task: "Analyze user metrics", isCompleted: true },
//   { id: uuid(), task: "Create user personas", isCompleted: true },
//   { id: uuid(), task: "Develop wireframes", isCompleted: false },
//   { id: uuid(), task: "Optimize user flows", isCompleted: false },
//   { id: uuid(), task: "Build interactive prototypes", isCompleted: true },
//   { id: uuid(), task: "Conduct user research", isCompleted: false },
//   { id: uuid(), task: "Design mockups", isCompleted: false },
//   { id: uuid(), task: "Gather user feedback", isCompleted: true },
//   { id: uuid(), task: "Review competitor designs", isCompleted: false },
//   { id: uuid(), task: "Perform A/B testing", isCompleted: true },
//   { id: uuid(), task: "Collaborate with developers", isCompleted: false },
//   { id: uuid(), task: "Ensure accessibility compliance", isCompleted: true },
//   { id: uuid(), task: "Create style guide", isCompleted: true },
//   { id: uuid(), task: "Design responsive layouts", isCompleted: false },
//   { id: uuid(), task: "Test on multiple devices", isCompleted: true },
//   { id: uuid(), task: "Refine UI components", isCompleted: false },
//   { id: uuid(), task: "Conduct usability testing", isCompleted: false },
//   { id: uuid(), task: "Update design documentation", isCompleted: true },
//   { id: uuid(), task: "Iterate on design", isCompleted: false },
//   { id: uuid(), task: "Present designs to stakeholders", isCompleted: false }
// ];
