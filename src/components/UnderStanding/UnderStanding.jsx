import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Understanding(){

    const history = useHistory();
    const [understanding, setUnderstanding] = useState(0);
    const dispatch = useDispatch();

    const clickNext = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_UNDERSTANDING', payload: {understanding: understanding}})
     history.push('/Supported')
    }

    return (
        <div>

            <p>How Well are you understanding the content?</p>
            <input type="Number" placeholder="Rate"
            value={understanding} onChange={(event) => setUnderstanding(event.target.value)}/>
            <button onClick={clickNext}>Next</button>
        </div>
    )
}

export default Understanding;