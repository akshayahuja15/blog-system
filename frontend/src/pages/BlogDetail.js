import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card } from "react-bootstrap";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`)
      .then((res) => {
        setBlog(res.data);

        if (res.data.country) {
          axios.get(`https://restcountries.com/v3.1/name/${res.data.country}`)
            .then((countryRes) => {
              setCountryInfo(countryRes.data[0]);
            })
            .catch((err) => console.error("Error fetching country info", err));
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Container className="blog-detail-container">
      <Card className="p-4">
        <h1>{blog.title}</h1>
        <p><strong>By:</strong> {blog.username}</p>
        <p>{blog.content}</p>

        {countryInfo && (
          <div>
            <h3>Country: {countryInfo.name.common}</h3>
            <p><strong>Region:</strong> {countryInfo.region}</p>
            <p><strong>Population:</strong> {countryInfo.population}</p>
            <img src={countryInfo.flags.svg} alt="Country Flag" width="150px" />
            
          </div>
        )}

        <Button variant="danger" onClick={() => navigate("/")}>Back</Button>
      </Card>
    </Container>
  );
};

export default BlogDetail;
