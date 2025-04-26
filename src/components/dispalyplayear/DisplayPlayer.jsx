import { useEffect, useState } from 'react';
import PlayerShowcase from '../playerShowcare/PlayerShowcase';
import PlayerSelected from '../Playerselected/PlayerSelected';

const DisplayPlayer = () => {
    const [select, setSelect] = useState(false);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/players')
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
            setSelectedPlayers([...selectedPlayers, player]);
        } else {
            alert('You can only select 6 players!');
        }
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
                    <PlayerSelected selectedPlayers={selectedPlayers} />:
                    <PlayerShowcase players={players} handlePlayerSelect={handlePlayerSelect}/>
                }
            </div>
        </div>
    );
};

export default DisplayPlayer;