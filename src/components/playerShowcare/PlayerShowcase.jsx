import PlayerCard from "../playerCard/PlayerCard";

const PlayerShowcase = ({players, handlePlayerSelect}) => {
    // console.log(players);
    
    return (
        <div className="flex flex-wrap justify-center gap-10 m-10">
            {players.map((player) => <PlayerCard key={player.playear_id} player={player} handlePlayerSelect={handlePlayerSelect}/>)}
        </div>
    );
};

export default PlayerShowcase;