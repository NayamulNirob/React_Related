// Using Destructuring to access props in a functional component

import PropTypes from "prop-types";
import "./ProfileCard.css";

function ProfileCard({
  name,
  age,
  location,
  bio,
  hobbies,
  occupation,
  skills,
  onSkillsClick,
  isMember,
}) {
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>
      <p>
        <b>Age: {age}</b>
      </p>
      <p>
        <b>Location: {location}</b>
      </p>
      <p>
        <b>Bio: {bio}</b>
      </p>
      <p>
        <b>
          Skills :{" "}
          {skills.map((skill, index) => {
            return (
              <span key={index} onClick={() => onSkillsClick(skill)}>
                {skill}{" "}
              </span>
            );
          })}
        </b>
      </p>
      <p>
        <b>Hobbies: {hobbies.join(", ")}</b>
      </p>
      <p>
        <b>Occupation: {occupation}</b>
      </p>
      <p>
        <b>Status:</b>
        <span className={isMember ? "status-active" : "status-guest"}>
          {isMember ? "Active" : "Guest"}
        </span>
      </p>
    </div>
  );
}

// PropTypes for ProfileCard component Validation

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  occupation: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
};

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
