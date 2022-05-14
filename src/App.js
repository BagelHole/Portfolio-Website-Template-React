import './css/styles.css';
import Header from './Header.js';
import RoadSkills from './RoadSkills'
import Footer from './Footer'
import Features from './Features'
import MediaContainer from './Media_container';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MediaContainer></MediaContainer>
      <RoadSkills></RoadSkills>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default App;
