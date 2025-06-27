// Using Destructuring to access props in a functional component
function ProfileCard({ name, age, location, bio, hobbies, occupation, isMember }) {

    return(
    <div>
        <h3>Name: {name}</h3>
        <p><b>Age: {age}</b></p>
        <p><b>Location: {location}</b></p>
        <p><b>Bio: {bio}</b></p>
        <p><b>Hobbies: {hobbies.join(', ')}</b></p>
        <p><b>Occupation: {occupation}</b></p>
        <p><b>Status: {isMember? "Active":"Guest"}</b></p>
    </div>

    );
}



//Using Dot Notation to access props in a functional component
// function ProfileCard(props){

//     return(
//     <div className="profile-card">
//         <h3>Name: {props.name}</h3>
//         <p><b>Age: {props.age}</b></p>
//         <p><b>Location: {props.location}</b></p>
//         <p><b>Bio: {props.bio}</b></p>
//         <p><b>Hobbies: {props.hobbies.join(', ')}</b></p>
//         <p><b>Occupation: {props.occupation}</b></p>
//         <p><b>Status: {props.isMember? "Active":"Guest"}</b></p>
//     </div>

//     );
// }

export default ProfileCard;