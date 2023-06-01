import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, }) => {

  return (
    <div className="blogList content">
      <h1>{title}</h1>
      {
        blogs.map((blog) => (
          <div className="blogShow" key={blog.id}>
   
            <Link to='/blogdetails'>
              <h1>{blog.title}</h1>
              <p>Written by {blog.author}</p>
            </Link>

           


          </div>

        ))
      }

      ljkglflgkjslfh
    </div>
  );
}

export default BlogList;