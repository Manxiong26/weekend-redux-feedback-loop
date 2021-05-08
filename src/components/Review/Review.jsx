import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'


function Review(){

    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const underStanding = useSelector(store => store.underStanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    const submitHandler = () => {
        console.log('Submit Feedback');
        history.push('/ThankYou')
    }

    return (
        <div>
            <p>Feelings: {feeling.rateFeeling}</p>
            <p> Understanding: {underStanding.understanding}</p>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Review;