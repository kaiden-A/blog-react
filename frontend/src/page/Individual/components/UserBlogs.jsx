import './UserBlogs.css'
import { Link } from 'react-router-dom';
function UserBlogs({blogs}){


    const formateDate = (updateDate) => {
        const date = new Date(updateDate);
        const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return formatted
    }


    return(
        <>
            <title>{`${blogs.author} Homepage`}</title>
            <main className="container">
                <h2 className="section-title">Latest Blog Posts</h2>
                <div className="blog-grid">

                    {

                        blogs.blog?.map((blog , i) => 
                            <div className="blog-card" key={i}>
                                <div className="blog-image" style={{backgroundColor: "#6b8cbc"}}>
                                    {blog.categories}
                                </div>
                                <div className="blog-content">
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <p className="blog-excerpt">{blog.description}</p>
                                    <div className="blog-meta">
                                        <span>
                                            {formateDate(blog.updatedAt)}
                                        </span>
                                        <div className="read-time">{`⏱️ ${blog.readTime} min read`}</div>
                                    </div>
                                    <Link to={`/${blogs.author}/${blog._id}`} className="read-more" style={{display: " inline-block" , marginTop: "15px" , fontWeight: 600 , color: "var(--accent)"}}>Read More →</Link>
                                </div>
                            </div>
                        )
                    }

                </div>

            </main>

        </>
    )

}

export default UserBlogs;