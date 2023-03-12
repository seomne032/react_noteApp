import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

export default function Edit() {
    const navigate = useNavigate();
    const titleRef = useRef();
    const detailRef = useRef();
    const note = useLocation().state;

    //수정하기
    async function edit(e) {
        e.preventDefault();
        const noteRef = doc(db, 'notes', note.id);
        await updateDoc(noteRef, {
            title: titleRef.current.value,
            detail: detailRef.current.value,
        });
        //수정 후 홈으로 돌아가기
        navigate('/');
    }

    //취소하기
    function goBack(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="container">
            <h2>오늘 하루를 기록해요</h2>
            <form>
                <div>
                    <label>어떤 일이 있으셨나요?</label>
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        ref={titleRef}
                        defaultValue={note.title}
                    />
                </div>
                <div>
                    <label>어떠셨나요?</label>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="내용을 입력해주세요"
                        ref={detailRef}
                        defaultValue={note.detail}
                    ></textarea>
                </div>
                <div className="btns">
                    <button onClick={goBack}>취소하기</button>
                    <button onClick={edit}>수정하기</button>
                </div>
            </form>
        </div>
    );
}
