//importing the useHistory to to go to the next component on the DOM
import {useHistory} from 'react-router-dom'

function ThankYou () {

    const history = useHistory();

    //click handler to go back to main page to start a new feedback
const handleSubmit = () => {
    console.log('Leaving Thank you page');
    history.push('/');
}

    return(
        <div>
            <h1>Thank You</h1>
            <button onClick={handleSubmit}>Leave New FeedBack</button>
        </div>
    )
}

export default ThankYou;