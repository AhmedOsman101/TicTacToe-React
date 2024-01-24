const Cell = ({ item, Click }) => {
    return (
        <>
            <div className="cell" onClick={Click}>
                {item || ""}
            </div>
        </>
    );
};

export default Cell;
