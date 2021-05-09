//importing the useDispatch to dispatch the store reducer 
import { useDispatch } from 'react-redux';
//importing the useHistory to to go to the next component on the DOM
import {useHistory} from 'react-router-dom';
//importing the useState to use local state
import {useState} from 'react';

function Comment(){

    const history = useHistory();
    //local state for the form 
    const [comment, setComment] = useState("");
    //This let's us dispatch actions to the redux
    const dispatch = useDispatch();

    //the click button that will go to the next page
    const clickNext = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_COMMENTS', payload: {comment: comment}})
        //this will take us to the Review page 
     history.push('/Review')
    }

    return (
            <div>

                <p>Any comments you want to leave?</p>
                    <textarea rows="10" cols="50" type="text" placeholder="Comments"
                    value={comment} onChange={(event) => setComment(event.target.value)}/>
                    <p><button onClick={clickNext}>Next</button></p>
            </div>
    )
}

export default Comment;