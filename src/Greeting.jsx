import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './context';

export default function Greeting(props) {
    const [name, setName] = useState('Puneet');
    const [surname, setSurname] = useState('Gared');
    const theme = useContext(ThemeContext);

    useEffect(() => {
        document.title = name + ' ' + surname;
    })

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value)
    }

    return (
        // <ThemeContext.Consumer>
        //     {theme => (
        <section style={{ backgroundColor: theme.background }}>
            <div>
                <h3>{name},{surname}</h3>
                <label >Name : </label>
                <input type="text"
                    value={name}
                    onChange={handleNameChange} />
            </div>
            <div>
                <label >Surname : </label>
                <input type="text"
                    value={surname}
                    onChange={handleSurnameChange} />
            </div>

        </section>
        //     )}
        // </ThemeContext.Consumer>

    )
}