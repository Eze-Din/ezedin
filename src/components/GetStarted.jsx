import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="https://t.me/eze_din08" target="_blank" rel="noopener noreferrer"> {/* Add your target URL here */}
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Let`s</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">be a Team</span>
        </p>
      </div>
    </div>
  </a>

);

export default GetStarted;
