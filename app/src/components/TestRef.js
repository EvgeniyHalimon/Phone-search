import React, { useRef } from 'react';

function TestRef() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
    inputEl.current.focus();
    };
    return (
        <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
        </>
    );
}

export default TestRef