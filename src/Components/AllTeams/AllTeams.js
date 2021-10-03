import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllTeam.css'

const AllTeams = () => {
    const [teams, setTeams] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data?.teams))
    }, [searchText]);

    const handleOnChange = (event) => {
        setSearchText(event.target.value);
    }
    return (
        <div className="container">
            <div className="all-team">
                <h1 className="mt-4 search-title">Our Teams</h1>
            </div>
            <div className="search-field">
                <input onChange={handleOnChange} type="text" className="p-2" placeholder="Search by team name" />{" "}
                <button className="btn-search p-2">Search</button>
            </div>

            <div className="teams-container">
                <div className="row">
                    {
                        teams?.map(team => <div className="col-md-4">
                            <div className="card">
                                <div className="logo-image">
                                    <img className="w-25" src={team.strTeamBadge} alt="" />
                                </div>
                                <div className="info-area">
                                    <h2 className="text-muted">{team.strTeam}</h2>
                                    <h5 className="text-muted">Nick Name: {team.strKeywords}</h5>
                                    <h5 className="text-muted">Formed: {team.intFormedYear}</h5>
                                    <h5 className="text-muted">Stadium: {team.strStadium}</h5>
                                    <h5 className="text-muted">League: {team.strLeague}</h5>
                                    <Link to={`/details/${team.idTeam}`}>
                                        <button className="btn-search">Details</button>
                                    </Link>
                                </div>


                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTeams;