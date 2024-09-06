import "./App.css"
import ProfilePic from "./assets/profilePhoto.png"

function LastSeen () {
  const date = new Date();

  const options = {
    year: 'numeric',
    month: 'short', 
    day: '2-digit'
};

  return (<>
  <div>
    <p style={{fontSize:"1.2rem"}}>Joined on {date.toLocaleString("en-US",options)} </p>
  </div>
  </>);
}

function ProfilePhoto(props) {
  return (<>

      <div className="user-card">
        <img src={props.imgSrc}  alt="Profile Photo Not Available."className="profile-pic"/>
        <h2>Manoj V</h2>
        <p>Junior Python Developer</p>
        <div className="skills">
          <SkillCard skills={["HTML","CSS","JAVASCRIPT","REACT","REACT NATIVE","NODE JS","MONGO DB",
                              "PYTHON","NUMPY","PANDAS","JAVA","NETWORKING","GIT","GITHUB","DOCKER","VS CODE","LINUX"]}/>
        </div>
        <LastSeen />
      </div>
    </>)
}

function SkillCard(props) {


  return (<>
          {props.skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <p>{skill}</p>
            </div>))}
  </>);
}

function App() {

  return (

    <>
      <ProfilePhoto imgSrc={ProfilePic}/>
      <div className="subcribe">
        <h2>SUBCRIBE</h2>
        <p>Sign in to receive news and daily updates</p>
        <div>
          <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          <input type="text" placeholder="Email"/>
        </div>
          <input type="button" value="Subcribe"/>
      </div>
    </>
  );
}

export default App;

