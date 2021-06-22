import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_PLAYGROUNDS = gql`
  query levelByPlayground($playground_id: Int){
    levelByPlaygroundId(playgroundId: $playground_id){
      id
      name
    }
  }
`;

  
function LevelsByPlayground({playground_id}) {

    const { loading, error, data } = useQuery(ALL_PLAYGROUNDS, {variables :{playground_id}});
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.levelByPlaygroundId.map(({ id, name }) => (
      <div key={id}>
        <Link to={`/level/${id}`}>{name}</Link>
      </div>
    ));
  }

export default LevelsByPlayground