import { Link } from "react-router-dom";

const Blogs = ({ limit }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      description:
        "A deep dive into React Hooks and how to use them effectively.",
      link: "https://example.com/react-hooks",
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      description: "When to use CSS Grid and Flexbox in your projects.",
      link: "https://example.com/css-grid-vs-flexbox",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      description: "Explore the new features introduced in ES6.",
      link: "https://example.com/es6-features",
    },
    {
      id: 4,
      title: "Building REST APIs with Node.js",
      description: "Learn how to build RESTFUL APIs using Node.js and Express.",
      link: "https://example.com/nodejs-rest-api",
    },
    {
      id: 5,
      title: "Introduction to TypeScript",
      description:
        "A beginner's guide to TypeScript and its benefits over JavaScript.",
      link: "https://example.com/introduction-to-typescript",
    },
    {
      id: 6,
      title: "Understanding Async/Await in JavaScript",
      description:
        "A comprehensive guide to using async/await for asynchronous programming.",
      link: "https://example.com/async-await",
    },
  ];

  const displayedBlogs = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <>
      <div className={"flex items-center gap-1 my-4 cursor-default"}>
        <Link to={"/blogs"}>
          <h1
            className={
              "text-xl font-medium text-white/85 hover:text-white cursor-pointer"
            }
          >
            Latest Blogs
          </h1>
        </Link>
      </div>
      <ul>
        {displayedBlogs.map((blog) => (
          <li key={blog.id} className={"mb-4"}>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className={"text-lg text-blue-400 hover:underline"}
            >
              {blog.title}
            </a>
            <p className={"text-sm text-white/70"}>{blog.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blogs;
