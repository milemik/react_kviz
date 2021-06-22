import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const QUESTION_BY_LEVEL = gql`
query questionByLevel($level_id: Int){
    questionsByLevel(levelId: $level_id) {
      id
      question
    }
  }
`;

  
function QuestionbyLevel({match}) {
    const { loading, error, data } = useQuery(QUESTION_BY_LEVEL, {variables :{level_id: match.params.id}});
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <div>
      <h1>Select a question</h1>
     {data.questionsByLevel.map(({ id, question }) => (
            <div className="questions" key={id}>
              <Link to={`/question/${id}`}>{question}</Link>
            </div>
        ))}
        </div>
  }

export default QuestionbyLevel