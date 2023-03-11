import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Note({ note }) {
    const [screen, setScreen] = useState(false);

    function remove() {
        if (window.confirm('정말 삭제하시겠어요?')) {
            fetch(`http://localhost:3001/notes/${note.id}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    setScreen(true);
                }
            });
        }
    }

    if (screen === true) {
        return null;
    }

    return (
        <li className="note">
            <h2>{note.title}</h2>
            <p>{note.detail}</p>
            <div className="bottom">
                <div className="date">{note.date}</div>
                <Link to={'/edit'} state={note}>
                    <button>수정</button>
                </Link>
                <button onClick={remove}>삭제</button>
            </div>
        </li>
    );
}
