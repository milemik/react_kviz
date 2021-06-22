import LevelsByPlayground from "../FetchData/LevelByPlayground"


function Playground ({match}) {
    console.log(match.params.id);
    return <div>
        <h2>Levels</h2>
        <LevelsByPlayground playground_id={match.params.id} />
    </div>
    
}


export default Playground