import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MenuBar from '../MenuBar/MenuBar';
import './Details.css';
import male from '../../images/male.jpg';
import female from '../../images/female.jpg';

const Details = () => {
    const { teamId } = useParams();
    const [teamDetails, setTeamDetails] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data?.teams[0]));
    }, [teamId])
    return (
        <div className="details-container">
            <MenuBar></MenuBar>
            <div className="team-details">
                <div className="male-female-img">

                    {teamDetails.strGender === "Male" ? (
                        <img className="img-fluid w-25 mt-4" src={male} alt="" />
                    ) : (
                        <img className="img-fluid w-25 mt-4" src={female} alt="" />)}
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="logo-image">
                            <img className="w-25 mt-3" src={teamDetails.strTeamBadge} alt="" />
                        </div>
                        <h1>{teamDetails.strTeam}</h1>
                        <h3>{teamDetails.strLeague}</h3>
                        <h5>Stadium Location: {teamDetails.strStadiumLocation}</h5>
                        <h5>Capacity: {teamDetails.intStadiumCapacity}</h5>


                    </div>
                    <div className="col-md-6 mt-5">
                        <h1>About Team</h1>
                        <h5>{teamDetails.strDescriptionEN}</h5>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;