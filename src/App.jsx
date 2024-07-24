import Player from './components/Player.jsx';
import TimeChallenges from './components/TimeChallenges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenges title='Easy' targetTime={1}/>
        <TimeChallenges title='Not Easy' targetTime={5}/>
        <TimeChallenges title='difficult' targetTime={10}/>
        <TimeChallenges title='only pros' targetTime={15}/>

      </div>
    </>
  );
}

export default App;
