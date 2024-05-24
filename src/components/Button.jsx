import React from "react";

const Button = ({ styles }) => (
  <a href="tel:+251975363208" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} cursor-pointer`}>
    Call Me
  </a>

);

export default Button;
