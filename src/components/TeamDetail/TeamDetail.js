import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './teamdetail.css';
import malePhoto from '../../images/male.png';
import femalePhoto from '../../images/female.png';
import twetterIcon from '../../images/Twitter.png';
import facebookIcon from '../../images/Facebook.png';
import youtubeIcon from '../../images/YouTube.png';

const TeamDetail = () => {
    const { dynamicTeamId } = useParams();
    const [teams, setTeam] = useState([]);
    const { strGender, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strTeamBanner, strDescriptionEN, strTwitter, strFacebook, strYoutube } = teams;
    const gender = strGender;
    let teamPhoto;
    const detailStyle = {
        backgroundImage: `url(${strTeamBanner})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }
    console.log(strTeamBanner)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${dynamicTeamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [])

    console.log(gender);

    if (gender === "Male") {
        teamPhoto = <img className="w-100" src={malePhoto} alt="" />
    }
    else {
        teamPhoto = <img className="w-100" src={femalePhoto} alt="" />
    }

    return (
        <div>
            <div style={detailStyle} className="details-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-2 col-sm-2 text-center">
                            <div className="team-detail-badge">
                                <img className="w-100" src={strTeamBadge} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details-area">
                <div className="container">
                    <div className="row justify-content-between detail-content">
                        <div className="col-md-4 col-sm-4">
                            <h2>{strTeam}</h2>
                            <p>Founded: {intFormedYear}</p>
                            <p>Country: {strCountry}</p>
                            <p>Sports Type:{strSport}</p>
                            <p>Team Gender: {strGender}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="details photo">{teamPhoto}</div>
                        </div>
                    </div>
                    <div className="detail-description">
                        <div className="single-description"><p>This is Description: {strDescriptionEN}</p></div>
                        <div className="single-description"><p>This is Description: {strDescriptionEN}</p></div>
                    </div>
                    <div className="row justify-content-center social-icon-area">
                        <div className="col-md-4 col-sm-2 text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center single-social-icon"> <a target="_blank" href={`https://${strTwitter}`}><img src={twetterIcon} alt="" /></a> </div>
                                <div className="col-md-4 text-center single-social-icon"><a target="_blank" href={`https://${strFacebook}`}><img src={facebookIcon} alt="" /></a> </div>
                                <div className="col-md-4 text-center single-social-icon"><a target="_blank" href={`https://${strYoutube}`}><img src={youtubeIcon} alt="" /></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TeamDetail;