import { useState } from "react"

export default function Player({ initialName, symbol,isActive }) {
    
    const [isEditing, setIsEditing] = useState(false);

    const [playerName, setPlayerName] = useState(initialName);

    let playerEle= <span className="player-name">{playerName}</span>
    
    if (isEditing) {
        playerEle = <input type="text" value={playerName}  onChange={handleChange} />;
    }

    function handleIsEditing() {
        
        setIsEditing(isEditing => !isEditing);

        
    }

    function handleChange(event) {
        
        setPlayerName(event.target.value);
    }
    

    return   <li className={isActive ? 'active' :undefined}>
    <span className="player">

            {playerEle}
            <span className="player-symbol">{symbol}</span>

    </span>


        <button onClick={handleIsEditing}>{ isEditing ? 'save' : 'edit'}</button>
  </li>


}