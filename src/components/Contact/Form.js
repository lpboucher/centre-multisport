import React from 'react';

const Form = () => {
    return (
        <div className="kwes-form">
            <form method="POST" action="https://kwes.io/api/foreign/forms/c4le2SssjnJ5fmKJph3m">
                <label for="name">Your Name</label>
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;