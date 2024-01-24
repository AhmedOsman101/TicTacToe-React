import XElement from "./XElement";
import OElement from "./OElement";

const Cell = ({ item, Click }) => {
    return (
        <>
            <div className="cell" onClick={Click}>
                {item == "X" ? <XElement /> : ""}
                {item == "O" ? <OElement /> : ""}
            </div>
        </>
    );
};

export default Cell;
