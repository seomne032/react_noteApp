import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

export default function Write() {
    const navigate = useNavigate();
    const titleRef = useRef();
    const detailRef = useRef();

    function goBack(e) {
        e.preventDefault();
        navigate(-1);
    }

    function write(e) {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(detailRef.current.value);

        fetch('http://localhost:3001/notes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                detail: detailRef.current.value,
                date: moment().format(' YYYY MMMM Do h:mm:ss a'),
            }),
        }).then(res => {
            if (res.ok) {
                navigate('/');
            }
        });
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
