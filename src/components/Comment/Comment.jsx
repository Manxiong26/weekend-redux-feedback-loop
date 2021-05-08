import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Comment(){

    const history = useHistory();
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const clickNext = (event) => {
        event.preventDefault();
        dispatch({type:'ADD_COMMENTS', payload: {comment: comment}})
        
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