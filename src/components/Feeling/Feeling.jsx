import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Feelings(){

const history = useHistory();
const [feeling, setFeeling] = useState(0);
const dispatch = useDispatch();

const clickNext = (event) => {
    event.preventDefault();
    dispatch({type:'ADD_FEELINGS', payload: {feeling: feeling}})
 history.push('/Understanding')
}

    return(
        <div>
            
            <p>How are you Feeling Today</p>
            <input type="Number" placeholder="Rate"
            value={feeling} onChange={(event) => setFeeling(event.target.value)}/>
            <button onClick={clickNext}>Next</button>
        </div>
    )
}

export default Feelings;