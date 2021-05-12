//importing the useDispatch to dispatch the store reducer 
import { useDispatch } from 'react-redux';
//importing the useHistory to to go to the next component on the DOM
import {useHistory} from 'react-router-dom';
//importing the useState to use local state
import {useState} from 'react';

function Understanding(){

    const history = useHistory();
    //local state for the form 
    const [understanding, setUnderstanding] = useState('');
    //This let's us dispatch actions to the redux
    const dispatch = useDispatch();
    //button is enable when a number between 0-6 is put in the input 
    const enabled = understanding > 0 && understanding < 6
    //the click button that will go to the next page
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
            <button onClick={clickNext} disabled={!enabled}>Next</button>
        </div>
    )
}

export default Understanding;