import React from 'react';
import './team.css';
import { useHistory } from 'react-router-dom';
const Team = (props) => {
    const { idTeam, strTeamBadge, strTeam, strSport } = props.team;
    const history = useHistory();
    const handleClick = (teamId) => {
        const url = `/teamid/${teamId}`
        history.push(url);
    }
    return (
        <div className="col-md-4">
            <div className="single-team">
                <div className="team-img">
                    <img src={strTeamBadge} alt="" />
                </div>
                <h4>{strTeam}</h4>
                <p>Sports Type: {strSport}</p>
                <button className="btn btn-primary" onClick={() => handleClick(idTeam)}>Explore</button>
            </div>
        </div>
    );
};

export default Team;