import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blogs/")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="home-container">
      <h1 className="text-center">Blogs</h1>
      {blogs.map((blog) => (
        <Card key={blog.id} className="mb-3">
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Subtitle className="text-muted">By {blog.username}</Card.Subtitle>
            <Card.Text>{blog.short_description}</Card.Text>
            <Link to={`/blog/${blog.id}`}>
              <Button variant="info">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      <Link to="/add-blog">
        <Button variant="success" className="mt-3">Add New Blog</Button>
      </Link>
    </Container>
  );
};

export default Home;
