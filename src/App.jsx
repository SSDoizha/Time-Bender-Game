import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={5} />
        <TimerChallenge title={"Not Easy"} targetTime={10} />
        <TimerChallenge title={"Hard"} targetTime={15} />
        <TimerChallenge title={"Pros only"} targetTime={20} />
      </div>
    </>
  );
}

export default App;
