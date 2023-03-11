import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Edit() {
    const navigate = useNavigate();
    const titleRef = useRef();
    const detailRef = useRef();
    const note = useLocation().state;
    console.log(note);

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
                        defaultValue={`aaa`}
                    />
                </div>
                <div>
                    <label>어떠셨나요?</label>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="내용을 입력해주세요"
                        ref={detailRef}
                        defaultValue={`ddd`}
                    ></textarea>
                </div>
                <div className="btns">
                    <button>취소하기</button>
                    <button>수정하기</button>
                </div>
            </form>
        </div>
    );
}
