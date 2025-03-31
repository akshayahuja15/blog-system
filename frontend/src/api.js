const API_URL = "http://127.0.0.1:8000/api";

export const fetchBlogs = async () => {
    const response = await fetch(`${API_URL}/blogs/`);
    return response.json();
};

export const createBlog = async (blogData) => {
    const response = await fetch(`${API_URL}/blogs/new/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
    });
    return response.json();
};

export const fetchBlogDetails = async (id) => {
    const response = await fetch(`${API_URL}/blogs/${id}/`);
    return response.json();
};
