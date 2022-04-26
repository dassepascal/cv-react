import Experience from '../../components/Knowledges/Experiences';
import Hobbies from '../../components/Knowledges/Hobbies';
import Languages from '../../components/Knowledges/Languages';
import OtherSkills from '../../components/Knowledges/OtherSkills';
import Navigation from '../../components/Navigation';
import './style.scss';

export default function Knowledges() {
  return (
    <div className="knowledges">


      <Navigation />

      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
}
