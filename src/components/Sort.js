export const Sort = ({handleSortName,handleSortWeight}) => {
    return(
        <>
            <input type="radio" id="name" name="sort" value='Sort By Name' onClick={handleSortName} autoComplete="true" />
            <label htmlFor="name"> Sort By Name</label>
            <input type="radio" id="weight" name="sort" value='Sort By Weight' onClick={handleSortWeight} autoComplete="true" />
            <label htmlFor="weight"> Sort By Weight</label><br />
        </>
    )
}