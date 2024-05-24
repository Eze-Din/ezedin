import { post } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { blog } from "../constants";

const Blog = () => (
  <div>
    <section id="blog" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Explore my Insights <br className="sm:block hidden" /> and Experiences.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to my blog—a space dedicated to sharing my journey as a developer and designer. Here, you will find a diverse range of articles that delve into the nuances of technology, creative projects, and industry best practices. Whether you`re looking for in-depth tutorials, insightful case studies, or personal reflections on the ever-evolving tech landscape, my blog aims to provide valuable content that educates, inspires, and engages.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={post} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>

    <section className={layout.section}>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blog.map((post, index) => (
            <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-300">
                <a href={post.link}>{post.title}</a>
              </h3>
              <p className="text-gray-400 mt-2">{post.date}</p>
              <p className="text-gray-300 mt-4">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Blog;
