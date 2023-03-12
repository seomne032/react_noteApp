import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'moment/locale/ko';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Write() {
    const navigate = useNavigate();
    const titleRef = useRef();
    const detailRef = useRef();

    function goBack(e) {
        e.preventDefault();
        navigate(-1);
    }

    async function write(e) {
        e.preventDefault();
        //쓰기
        await addDoc(collection(db, 'notes'), {
            title: titleRef.current.value,
            detail: detailRef.current.value,
            date: serverTimestamp(),
        });
        //쓰기가 완료하면 홈으로간다
        navigate('/');
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
                    />
                </div>
                <div>
                    <label>어떠셨나요?</label>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="내용을 입력해주세요"
                        ref={detailRef}
                    ></textarea>
                </div>
                <div className="btns">
                    <button onClick={goBack}>취소하기</button>
                    <button onClick={write}>작성하기</button>
                </div>
            </form>
        </div>
    );
}
