import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [techs, setTechs] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handleTech = useCallback(() => {
        setTechs([...techs, newTech]);
        setNewTech('');
    }, [techs, newTech]);

    useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
            setTechs(JSON.parse(storageTech));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(techs));
    }, [techs]);

    const techSize = useMemo(() => techs.length, [techs]);

    return (
        <>
            <ul>
                {techs.map(tech => (
                    <li key={tech}>
                        <strong>{tech}</strong>
                    </li>
                ))}
            </ul>
            <strong>Voce tem {techSize} tecnologias</strong>
            <hr />
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleTech}>
                Enviar
            </button>
        </>
    );
}

export default App;
