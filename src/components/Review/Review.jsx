import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Review(){

    const history = useHistory();
    const feelingData = useSelector(store => store.feeling);
    const underStandingData = useSelector(store => store.underStanding);
    const supportData = useSelector(store => store.support);
    const commentData = useSelector(store => store.comment);

    const submitHandler = () => {
        console.log('Submit Feedback');
        history.push('/')
    }

    return (
        <div>
            
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Review;