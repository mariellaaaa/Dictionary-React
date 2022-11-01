import React from "react";

const AddWOrd = ({ inputToAdd, addInput, list, setList, setSearchMessage}) => {

    const onInputChange = (event) => {
        addInput(event.target.value.toLowerCase());
    };

    const handleClick = () => {
        let word = inputToAdd;
        setList([...list, word]);
        addInput("");
        setSearchMessage(`The word: ${inputToAdd} has been successfully added `);
    };

    return (
        <div>
            <input 
            type="text" 
            placeholder="Add a word to list" 
            className="add-input"
            value={inputToAdd}
            onChange={onInputChange}
            />
            <button onClick={handleClick} className="button-add" type="submit" >Add</button>
    </div>

    )
}

export default AddWOrd;