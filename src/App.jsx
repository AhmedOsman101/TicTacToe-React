import "./App.css";
import Board from "./Components/Board";
import StatsBar from "./Components/StatsBar";

function App() {
    return (
        <>
            <div className="container">
                <StatsBar />
                <Board />
            </div>
        </>
    );
}

export default App;
