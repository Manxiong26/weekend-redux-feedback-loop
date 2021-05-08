    import { useDispatch } from 'react-redux';
    import {useHistory} from 'react-router-dom';
    import {useState} from 'react';

function Support(){

        const history = useHistory();
        const [support, setSupport] = useState('');
        const dispatch = useDispatch();
    
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
            <button onClick={clickNext}>Next</button>
        </div>
    )
}

export default Support;