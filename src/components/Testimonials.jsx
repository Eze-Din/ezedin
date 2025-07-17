import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What Others are <br className="sm:block hidden" /> Saying
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        A firsthand accounts from clients, colleagues, and collaborators who have worked with me on various projects. Their words reflect their experiences and the impact of our collaborations.
        </p>
      </div>
    </div>

    <div className="overflow-hidden w-full">
      <div className="flex flex-row flex-nowrap gap-6 animate-scroll w-max">
        {feedback.map((item, index) => (
          <FeedbackCard key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
