import SelectedPlayearCard from "../selectedPlayearCard/SelectedPlayearCard";

const PlayerSelected =  ({ selectedPlayers, handleDeletePlayer, HandelWayToSelectMore }) => {


    return (
        <div className="px-4 py-10">
            <div className="flex flex-col gap-4">
                {selectedPlayers.map((player) => <SelectedPlayearCard key={player.playear_id} player={player} handleDeletePlayer={handleDeletePlayer}/>)}
            </div>

            <button onClick={HandelWayToSelectMore} className="btn btn-accent mt-6 text-white">Add More Player</button>

        </div>
    );
};

export default PlayerSelected;