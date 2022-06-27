import React,{ useEffect ,useState} from "react";
import Button from '@mui/material/Button';

function Question(){

    const [que,setQue]=useState();
    const [ans,setAns]=useState();
    const [userInput,setuserInput]=useState();
    const [queno,setQueNo]=useState(1);
    const [answerWindow,setAnswerWindow]= useState(false);
    const [score,setScore] = useState(0);
    const [loading,setLoading] = useState(true);
    const [catergory,setCategory] = useState();
    useEffect(()=>{
        const endpoint='https://jservice.io/api/random';
        fetchQuestion(endpoint);
    },[]);
    function fetchQuestion(endpoint){
        fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                // console.log(res[0]);
                setQue(res[0].question);
                setAns(res[0].answer);
                setCategory(res[0].category.title);
            },setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }
    function submithandler(){
        if(userInput===ans){
            setScore(score+1);
            setAnswerWindow("trueanswer");
        }
        else{
            setAnswerWindow("wronganswer");
        }
    }
    function nextQuestion(){
        setAnswerWindow(false);
        setQueNo(queno+1);
        const endpoint = 'https://jservice.io/api/random';
        fetchQuestion(endpoint);
    }
    return(
        <>
        {
            loading ? "loading..." :
            <div>
                <h1 display={{alignText:"center"}}>{queno}. {que} </h1>
                <p>catergory : {catergory}</p>
                <h2>Score: {score}</h2>
                <input type="text" placeholder="Your Answer" onChange={(e)=>{setuserInput(e.target.value)}}></input>

                <p></p>
                <Button size="small" color="secondary" variant="outlined" onClick={submithandler}>Submit</Button>
                <p></p>
                <Button size="small" color="primary" variant="outlined" onClick={nextQuestion}>Next Question</Button>
                {
                    (answerWindow==="trueanswer") ? <p>Nice Correct Answer </p> : null
                }
                {
                    (answerWindow==="wronganswer") ? <p>Nice Try.. Correct Answer is {ans}</p> : null
                }
            </div>
        }
        </>
    );
}

export default Question;