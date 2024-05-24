import { telegram, github, projects } from "../assets";
import styles, { layout } from "../style";
import { projectss } from "../constants";

const Projects = () => (
  <div>
    <section id="projects" className={layout.section}>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Explore my Creative <br className="sm:block hidden" /> Portfolio
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to the heart of my digital universe where ideas transform into digital artistry. This Projects section showcases a curated selection of my most ambitious and successful ventures. Each project is a testament to my dedication to craftsmanship, innovative use of technology, and my relentless pursuit of perfection.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://github.com/eze-din" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /></a>
        <a href="https://t.me/eze_din08" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegram" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /></a>
        </div>
      </div>
      
      <div className={layout.sectionImg}>
        <img src={projects} alt="Project" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
    </section>
    
    <section className={layout.section}>
      {/* New Projects Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projectss.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-5 text-xl font-semibold">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  {project.title}
                </a>
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
