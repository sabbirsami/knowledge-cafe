import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <>
            <Card className="mt-4">
                <Card.Img variant="top" src={blog.cover} />
                <Card.Body>
                    <div className="py-3 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                            <div style={{ width: "50px" }}>
                                <img
                                    src={blog.author_img}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="ps-2">
                                <h4 className="mb-0">{blog.author}</h4>
                                <p className="mb-0">
                                    <small>{blog.posted_date}</small>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="text-secondary m-0 pe-2">
                                {blog?.reading_time} min read
                            </p>
                            <button className="btn p-0 m-0">book</button>
                        </div>
                    </div>
                    <h3>{blog.title}</h3>
                    <div>
                        <p>{blog.hashtags.map((hash) => hash)}</p>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
};
export default Blog;
