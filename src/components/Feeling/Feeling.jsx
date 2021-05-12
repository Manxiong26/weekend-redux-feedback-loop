//importing the useDispatch to dispatch the store reducer 
import { useDispatch } from 'react-redux';
//importing the useHistory to to go to the next component on the DOM
import {useHistory} from 'react-router-dom';
//importing the useState to use local state
import {useState} from 'react';

function Feelings(){

const history = useHistory();
//local state for the form 
const [feeling, setFeeling] = useState('');
//This let's us dispatch actions to the redux
const dispatch = useDispatch();
//button is enable when a number between 0-6 is put in the input 
const isEnabled = feeling > 0 && feeling < 6

//the click button that will go to the next page
const clickNext = (event) => {
    event.preventDefault();
    dispatch({type:'ADD_FEELINGS', payload: {feeling: feeling }})
    //this will take us to the Review page 
 history.push('/Understanding')
}

    return(
        <div>
            
            <p>How are you Feeling Today</p>
            <input type="Number" placeholder="Rate 1-5"
            value={feeling} onChange={(event) => setFeeling(event.target.value)}/>
            <button onClick={clickNext} disabled={!isEnabled}>Next</button>
        </div>

    )
}

export default Feelings;