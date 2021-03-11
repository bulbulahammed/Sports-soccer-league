import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './team.css';
import Team from '../Team/Team';
import Header from '../Header/Header';

const Leagues = () => {
    const [teams, setTeams] = useState([]);
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])

    console.log(teams);
    return (
        <div className="teams">
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Leagues;