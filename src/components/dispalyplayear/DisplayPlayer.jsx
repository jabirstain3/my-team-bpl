import { useEffect, useState } from 'react';
import PlayerShowcase from '../playerShowcare/PlayerShowcase';
import PlayerSelected from '../Playerselected/PlayerSelected';

const DisplayPlayer = ({ handleDebit, showToast }) => {
    const [select, setSelect] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([])
    // console.log(selectedPlayers);
    
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('demoData.json')
            .then((res) => res.json())
            .then((data) => {
                setPlayers(data);       
            })
            .catch((error) => {
                console.error('Error fetching players:', error);
            });
    }, []);

    const handalTab = ( a ) => {
        setSelect( a );
    }

    const handlePlayerSelect = (player) => {
        if (selectedPlayers.length < 6) {
            const isSelected = selectedPlayers.some(selectedPlayer => selectedPlayer.playear_id === player.playear_id);

            if (isSelected) {
                showToast( 'error', 'Player already selected!');
                return;
            }

            const transfar = handleDebit(player.price);
            if (transfar) {
                setSelectedPlayers([...selectedPlayers, player]);
                showToast( 'success', `${player.name} selected successfully!`);
            } 
        } else {
            showToast( 'error', 'You can only select 6 players!');
        }
    }
    
    const handleDeletePlayer = ( id, name ) => {
        const updatedPlayers = selectedPlayers.filter(player => player.playear_id !== id);
        setSelectedPlayers(updatedPlayers);
        showToast('success', `${name} removed from team.`);
    }

    const HandelWayToSelectMore = () => {
        setSelect(false);
    }
    
    return (
        <div className='sectionBase '>
            <div className="flex flex-wrap-reverse justify-center sm:justify-between items-center gap-10">
                { select ?
                    <h2 className='text-2xl font-bold text-[#131313]'>Selected Player ({selectedPlayers.length}/6)</h2> :
                    <h2 className='text-2xl font-bold text-[#131313]'>Available Players</h2>
                }

                <div className="border border-[#13131327] flex items-center rounded-lg font-bold">
                    <button onClick={() => handalTab(false)} className={`btn rounded-none rounded-l-lg ${ select ? "" : "btn-accent text-white" }`}>Available</button>
                    <button onClick={() => handalTab(true)} className={`btn rounded-none rounded-r-lg ${ select ? "btn-accent text-white" : "" }`}>Selected ({selectedPlayers.length})</button>
                </div>

            </div>
            
            <div className="">
                { select ?
                    <PlayerSelected selectedPlayers={selectedPlayers} handleDeletePlayer={handleDeletePlayer} HandelWayToSelectMore={HandelWayToSelectMore}/>:
                    <PlayerShowcase players={players} handlePlayerSelect={handlePlayerSelect} />
                }
            </div>
        </div>
    );
};

export default DisplayPlayer;