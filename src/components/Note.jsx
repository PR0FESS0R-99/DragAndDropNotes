import React, {useRef} from 'react'

function Note({note, onDragEnd}) {

    const noteRef = useRef(null);
    const offsetXRef = useRef(0);
    const offsetYRef = useRef(0);



    const handeMouseDown = (e) => {

        const NoteElement = noteRef.current;
        const rect = NoteElement.getBoundingClientRect();

        offsetXRef.current = e.clientX - rect.left;
        offsetYRef.current = e.clientY - rect.top;

        e.preventDefault();

        const handeMouseMove = (e) => {
            const newX = e.clientX - offsetXRef.current + 'px';
            const newY = e.clientY - offsetYRef.current + 'px';
            
            NoteElement.style.left = newX;
            NoteElement.style.top = newY;
        };

        const handeMouseUp = (e) => {
            document.removeEventListener('mousemove', handeMouseMove);
            document.removeEventListener('mouseup', handeMouseUp);

            onDragEnd(note.id, NoteElement.style.left, NoteElement.style.top);
        }

        document.addEventListener('mousemove', handeMouseMove);
        document.addEventListener('mouseup', handeMouseUp);
    };

    return (
        <div ref={noteRef}
            style={{
                left:note.x,
                top:note.y,
            }}
            onMouseDown={handeMouseDown}
            className='note'
        >
            <span className='note-icon'>+++</span>
            <span className='note-content'>
                <b>
                    {note.content}
                </b>
            </span>

        </div>
    )
}

export default Note