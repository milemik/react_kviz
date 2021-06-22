import { useQuery, gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
 
const QUESTION = gql`
  query questionQuery($question_id: Int) {
    question(questionId: $question_id) {
      question
      answerSet {
        id
        text
      }
    }
  }
`;

const ANSWER_MUTATION = gql`
mutation craeteAnswer($answer_id: Int!, $username: String!) {
  createAnswer(answerId: $answer_id, username: $username) {
    answer {
      username
      points
      finishedPlaygrounds {
        id
      }
      finishedLevels {
        id
      }
      finishedQuestions {
        id
      }
    }
  }
}
`;


function Question({match}) {

    const { loading, error, data } = useQuery(QUESTION, {variables :{question_id: match.params.id}});
  
    const [createanswer, { loading: mutationLoading, error: mutationError }] = useMutation(ANSWER_MUTATION);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p><Link to={`/`}>Home</Link></p>;

    return <div>
        <h4>{data.question.question}</h4> 
            {data.question.answerSet.map(({ id, text }) => (
            <div className="answers" key={id}>
                <form onSubmit={e => {
                  e.preventDefault();
                  createanswer({variables :{answer_id: id, username: "JUSTTEST"}})}}>
                
                <button className="answer-btn" type="submit">{text}</button>
                </form>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
            </div>
        ))}
        <Link to={`/question/${parseInt(match.params.id) + 1}`}>Next Question</Link>
        <br />
    </div>
  }

export default Question