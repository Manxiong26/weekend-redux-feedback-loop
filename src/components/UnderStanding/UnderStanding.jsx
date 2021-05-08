import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Understanding(){

    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();

    const clickNext = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_UNDERSTANDING', payload: {understanding: understanding}})
     history.push('/Supported')
    }

    return (
        <div>

            <p>How Well are you understanding the content?</p>
            <input type="Number" placeholder="Rate 1-5"
            value={understanding} onChange={(event) => setUnderstanding(event.target.value)}/>
            <button onClick={clickNext}>Next</button>
        </div>
    )
}

export default Understanding;