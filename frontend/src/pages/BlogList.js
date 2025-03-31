import { useEffect, useState } from "react";
import { fetchBlogs } from "../api";

function BlogList({ onViewBlog }) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs().then(setBlogs);
    }, []);

    return (
        <div>
            <h2>List of Blogs</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.short_content}</p>
                    <button onClick={() => onViewBlog(blog.id)}>View Detail</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
