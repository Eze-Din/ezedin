import styles from '../style';
import { academicAchievements, certificates } from "../constants";

const TreeItem = ({ title, institution, date, description }) => (
  <div className="ml-4 border-l-2 border-blue-400 pl-4 relative mb-8">
    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
    <h4 className="text-xl font-semibold text-white">{title}</h4>
    <p className="text-gray-400 mt-2">{institution}</p>
    <p className="text-gray-400 mt-2">{date}</p>
    <p className="text-gray-300 mt-4">{description}</p>
  </div>
);

const Resume = () => (
    <section id="resume" className={styles.section}>
      <div className="container mx-auto px-5 py-24">
        <h2 className={`${styles.heading2} text-center mb-16`}>Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Academic Achievements</h3>
            <div className="ml-4 border-l-2 border-gray-700 pl-4">
              {academicAchievements.map((achievement, index) => (
                <TreeItem key={index} {...achievement} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-8">Certificates</h3>
            <div className="ml-4 border-l-2 border-gray-700 pl-4">
              {certificates.map((certificate, index) => (
                <TreeItem key={index} {...certificate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Resume;
