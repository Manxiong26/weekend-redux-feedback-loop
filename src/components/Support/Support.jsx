    //importing the useDispatch to dispatch the store reducer 
    import { useDispatch } from 'react-redux';
    //importing the useHistory to to go to the next component on the DOM
    import {useHistory} from 'react-router-dom';
    //importing the useState to use local state
    import {useState} from 'react';

function Support(){

        const history = useHistory();
        //local state for the form 
        const [support, setSupport] = useState('');
        //This let's us dispatch actions to the redux
        const dispatch = useDispatch();
        //button is enable when a number between 0-6 is put in the input 
        const enabled = support > 0 && support < 6
        //click handler to submit feedback and go to the next page 
        const clickNext = (event) => {
            event.preventDefault();
            dispatch({type:'ADD_SUPPORT', payload: {support: support}})
         history.push('/Comment')
        }


    return (
        <div>

            <p>How Well are you being supported?</p>
            <input type="Number" placeholder="Rate 1-5"
            value={support} onChange={(event) => setSupport(event.target.value)}/>
            <button onClick={clickNext} disabled={!enabled}>Next</button>
        </div>
    )
}

export default Support;