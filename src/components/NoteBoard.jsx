import React, { useState } from 'react'
import './Note.css'
import Note from './Note';

const initialNotes = [
    { id: 1, content: 'Finish the React project', x: '40px', y: '40px' },
    { id: 2, content: 'Prepare for the upcoming meeting', x: '100px', y: '50px' },
    { id: 3, content: 'Buy groceries for the week', x: '60px', y: '80px' },
    { id: 4, content: 'Read the new tech article on JavaScript', x: '120px', y: '30px' },
    { id: 5, content: 'Schedule a doctor\'s appointment', x: '75px', y: '60px' },
    { id: 6, content: 'Review the latest PRs on GitHub', x: '90px', y: '120px' },
    { id: 7, content: 'Plan the weekend trip', x: '130px', y: '100px' },
    { id: 8, content: 'Update the resume with recent projects', x: '50px', y: '90px' },
    { id: 9, content: 'Clean the workspace', x: '110px', y: '70px' },
    { id: 10, content: 'Start learning about Docker', x: '140px', y: '150px' },
];

function NoteBoard() {
    const [notes, setNotes] = useState(initialNotes)

    const onDragEnd = (id, x, y) => {
        setNotes((pre) => (
            pre.map(note => note.id === id ? { ...note, x, y } : note)
        ));
    };


    return (
        <div className='note-board'>
            {
                notes.map(note => <Note key={note.id} note={note} onDragEnd={onDragEnd} />)
            }
        </div>
    )
}

export default NoteBoard