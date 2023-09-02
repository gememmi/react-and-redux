import React from 'react';

function ProfileCard({title, handle,image, descrip}){
    
    return (

        <div className="card" style={{ minHeight: "100%" }}>
            <div className="card-image">
                <figure className="image is-1by1">
                <img src= {image} alt = "pda logo"/> 
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-6">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{descrip}</div>
            </div>
        </div>
    )
}

export default ProfileCard;