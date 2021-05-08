import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';


function Review(){

    const history = useHistory();
    const feeling = useSelector (store => store.feeling);
    const underStanding = useSelector(store => store.underStanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    const submitHandler = () => {
        console.log('Submit Feedback');
        history.push('/ThankYou')
    }

    return (
        <div>
            <p>Feeling: {feeling.feeling}</p>
            <p>Understanding: {underStanding.understanding}</p>
            <p>Support: {support.support}</p>
            <p>Cooment: {comment.comment}</p>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Review;