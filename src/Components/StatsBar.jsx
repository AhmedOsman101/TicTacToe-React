import OElement from "./OElement";
import XElement from "./XElement";

const StatsBar = () => {
    return (
        <>
            <div className="title">
                <h1>Tic Tac Toe</h1>
                <h2 id="displayScore">
                    {<XElement />}: scoreX -{<OElement />}: scoreY
                </h2>
                <h3 id="playerTurn">
                    Player&apos;s {true ? <OElement /> : <XElement />} turn
                </h3>
            </div>
        </>
    );
};

export default StatsBar;
