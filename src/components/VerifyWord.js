import React from "react";

const VerifyWord = ({ inputToVerify, verifyInput, list, setSearchMessage }) => {

    const onInputChange = (event) => {
        verifyInput(event.target.value.toLowerCase());
    };

    const verifyInputWord = () => {
        verifyInput("");

        let wasFound = false;
        for (const word of list) {
            if (word === inputToVerify) {
                wasFound = true;
            }
        }
        wasFound?
        setSearchMessage(`The word: ${inputToVerify} is in the list`):
        setSearchMessage(`The word: ${inputToVerify} is not in the list`);
    };

    return (
        <div>
            <input
            type="text" 
            placeholder="Enter a word for searching" 
            className="verify-input"
            value={inputToVerify}
            required
            onChange={onInputChange}
            />
            <button onClick={verifyInputWord} className="button-verify" type="submit">Verify</button>
        </div>
    )
}

export default VerifyWord;