import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddBlog.css"; // Import CSS module
import { Container, Form, Button } from "react-bootstrap";

const AddBlog = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        const sortedCountries = res.data.map(country => country.name.common).sort();
        setCountries(sortedCountries);
      })
      .catch((err) => console.error("Error fetching countries", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/blogs/", { 
        username, title, short_description: shortDescription, content, country: selectedCountry
      })
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <Container className="add-blog-container">
      <h1 className="text-center">Add New Blog</h1>
      <Form onSubmit={handleSubmit} className="blog-form">
        <Form.Group>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Short Description</Form.Label>
          <Form.Control type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={5} value={content} onChange={(e) => setContent(e.target.value)} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} required>
            <option value="">Select a Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Post Blog</Button>
        <Button variant="secondary" className="mt-3 ms-2" onClick={() => navigate("/")}>Back</Button>
      </Form>
    </Container>
  );
};

export default AddBlog;
  