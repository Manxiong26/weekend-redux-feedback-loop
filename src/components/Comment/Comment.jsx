import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Comment(){

    const history = useHistory();
    const [comment, setComment] = useState(0);
    const dispatch = useDispatch();

    const clickNext = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_UNDERSTANDING', payload: {comment: comment}})
     history.push('/Review')
    }

    return (
            <div>

                <p>How Well are you being supported?</p>
                    <input type="text" placeholder="Comments"
                    value={comment} onChange={(event) => setComment(event.target.value)}/>
                    <button onClick={clickNext}>Next</button>
            </div>
    )
}

export default Comment;