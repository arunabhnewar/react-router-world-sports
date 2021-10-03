import React, { useContext } from 'react';
import { userContext } from '../../App';
import AllTeams from '../AllTeams/AllTeams';
import MenuBar from '../MenuBar/MenuBar';
import './Sports.css';

const Sports = () => {
    const [user, setUser] = useContext(userContext);
    return (
        <div className="sports-container">
            <MenuBar></MenuBar>
            <AllTeams></AllTeams>
        </div>
    );
};

export default Sports;