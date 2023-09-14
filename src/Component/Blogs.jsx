import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddToBookmark }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div>
            {blogs.map((blog) => (
                <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>
            ))}
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
};
export default Blogs;
