import { useState } from 'react';

export default function Hello({ name, age }) {
    // const [age, setAge] = useState(15);
    // const [name, setName] = useState('Alice');

    // function plus() {
    //     setAge(age + 1);
    // }

    // function minus() {
    //     setAge(age - 1);
    // }

    // function changeName() {
    //     // 이름이 Alice 라면 Picaso 로 바꾸고, Picaso 라면 Alice 로 바꾼다
    //     setName(name === 'Alice' ? 'Picaso' : 'Alice');
    // }

    return (
        <div>
            {/* <h1>
                Welcome {name} ({age})
            </h1>
            <button onClick={plus}>plus age</button>
            <button onClick={minus}>minus age</button>
            <button onClick={changeName}>change name</button> */}

            <div>
                <h1>
                    Welcome {name}({age})
                </h1>
            </div>
        </div>
    );
}
