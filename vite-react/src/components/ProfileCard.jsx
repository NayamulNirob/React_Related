function ProfileCard(props){

    return(
    <div className="profile-card">
        <h3>Name: {props.name}</h3>
        <p><b>Age: {props.age}</b></p>
        <p><b>Location: {props.location}</b></p>
        <p><b>Bio: {props.bio}</b></p>
        <p><b>Hobbies: {props.hobbies.join(', ')}</b></p>
        <p><b>Occupation: {props.occupation}</b></p>
    </div>

    );
}

export default ProfileCard;