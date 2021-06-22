import {
    useQuery,
    gql
  } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_PLAYGROUNDS = gql`
  query allPlaygrounds{
    allPlaygrounds{
      id
      name
      dif
    }
  }
`;

  
function AllPLaygrounds() {

    const { loading, error, data } = useQuery(ALL_PLAYGROUNDS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return <div>
      <h1>Playgrounds</h1>
    {data.allPlaygrounds.map(({ id, name, dif }) => (
      <div key={id}>
        <Link to={`/playground/${id}`}>{name}</Link>
      </div>
    ))}
    </div>
  }

export default AllPLaygrounds