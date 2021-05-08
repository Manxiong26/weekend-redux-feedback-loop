import {useHistory} from 'react-router-dom'

function ThankYou () {

    const history = useHistory();

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