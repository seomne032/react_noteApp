import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import 'moment/locale/ko';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { MdModeEdit, MdDelete } from 'react-icons/md';

//MdModeEdit

//MdDelete

export default function Note({ note }) {
    const dt = note.date.toDate();
    const date = moment(dt).format('YYYY년 MMMM Do hh:mm');

    async function remove() {
        if (window.confirm('노트를 삭제하시나요?')) {
            await deleteDoc(doc(db, 'notes', note.id));
        }
    }

    return (
        <li className="note">
            <h2>{note.title}</h2>
            <p>{note.detail}</p>
            <div className="bottom">
                <div className="date">{date}</div>
                <Link to={'/edit'} state={note}>
                    <MdModeEdit />
                </Link>
                <a href="#x" onClick={remove}>
                    <MdDelete />
                </a>
            </div>
        </li>
    );
}
