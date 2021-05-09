//importing the useHistory to to go to the next component on the DOM
import {useHistory} from 'react-router-dom';
//importing the useSelector to select the store reducer
import {useSelector} from 'react-redux';


function Review(){

    const history = useHistory();
    //use the useSelector to change the store.feeling to feeling 
    const feeling = useSelector (store => store.feeling);
    //use the useSelector to change the store.underStanding to underStanding 
    const underStanding = useSelector(store => store.underStanding);
    //use the useSelector to change the store.support to support 
    const support = useSelector(store => store.support);
    //use the useSelector to change the store.comment to comment 
    const comment = useSelector(store => store.comment);

    //click handler to submit feedback and go to the next page 
    const submitHandler = () => {
        console.log('Submit Feedback');
        history.push('/ThankYou')
    }

    return (
        <div>
            {/*calling the store state and payload here*/}
            <p>Feeling: {feeling.feeling}</p>
            <p>Understanding: {underStanding.understanding}</p>
            <p>Support: {support.support}</p>
            <p>Cooment: {comment.comment}</p>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Review;