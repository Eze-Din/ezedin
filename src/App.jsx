import styles from "./style";
import { Projects, Business, Blog, Resume, Contact, Clients, CTA, Footer, Navbar, Testimonials, Hero, MovingLine } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <MovingLine />
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Projects />
        <Blog />
        <Resume />
        <Contact />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
