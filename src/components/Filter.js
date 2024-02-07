export const Filter = ({isGreased,handleGreasedHogs}) => {
    return(
        <button onClick={handleGreasedHogs}>{isGreased ? "Greased" : "All"} Hogs</button>
    )
}