import './styles/CreatePost.css'

import { Link } from 'react-router-dom';
function CreatePost(){

    return(
        <>
        <title>Create New Post</title>
        <div className="main-content">
    
            <div className="top-header">
                <div className="page-title">
                    <h1>Create New Blog Post</h1>
                    <p>Write and publish a new blog post for your audience</p>
                </div>
                
                <div className="header-actions">
                    <div className="notification-icon">
                        <span>🔔</span>
                        <span className="notification-badge">3</span>
                    </div>
                    
                    <Link to={'/admin/dashboard'} className="btn btn-outline">Back to Dashboard</Link>
                </div>
            </div>
            
            
            <div className="create-blog-content">
                
                <div className="blog-form-section">
                    <div className="section-header">
                        <h2 className="section-title">Post Details</h2>
                        <div className="form-actions">
                            <button type="button" className="btn btn-outline" id="saveDraftBtn">Save Draft</button>
                            <button type="button" className="btn btn-accent" id="previewBtn">Preview Post</button>
                        </div>
                    </div>
                    
                    <form className="blog-form" id="blogForm">
                        <div className="form-group">
                            <label htmlFor="post-title">Post Title <span className="required">*</span></label>
                            <input type="text" id="post-title" className="form-control" placeholder="Enter a compelling title for your post" required />
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group category-select">
                                <label htmlFor="post-category">Category <span className="required">*</span></label>
                                <select id="post-category" className="form-control" required>
                                    <option value="">Select a category</option>
                                    <option value="travel">Travel</option>
                                    <option value="technology">Technology</option>
                                    <option value="food">Food & Cooking</option>
                                    <option value="lifestyle">Lifestyle</option>
                                    <option value="health">Health & Wellness</option>
                                    <option value="business">Business</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="education">Education</option>
                                </select>
                            </div>
                            
                            <div className="form-group read-time-input">
                                <label htmlFor="read-time">Read Time (minutes) <span className="required">*</span></label>
                                <input type="number" id="read-time" className="form-control" placeholder="5" min="1" max="60" required />
                                <span className="input-suffix">min</span>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="post-content">Post Content <span className="required">*</span></label>
                            <textarea id="post-content" className="form-control" placeholder="Write your blog post content here..." required></textarea>
                        </div>
                        
                        <div className="form-actions" style={{borderTop: "1px solid #eee" , paddingTop: "20px"}}>
                            <button type="reset" className="btn btn-outline">Clear Form</button>
                            <button type="submit" className="btn btn-accent">Publish Post</button>
                        </div>
                    </form>
                </div>
                
                
                <div className="preview-section">
                    <div className="preview-header">
                        <h2 className="preview-title">Post Preview</h2>
                        <button className="preview-toggle" id="togglePreview">
                            <span>Show Preview</span>
                            <span>▼</span>
                        </button>
                    </div>
                    
                    <div className="preview-content">
                        <div className="preview-placeholder" id="previewPlaceholder">
                            <p>Your post preview will appear here</p>
                            <p><small>Fill out the form above and click "Preview Post" to see how your post will look</small></p>
                        </div>
                        
                        <div className="preview-blog" id="previewBlog">
                            <div className="preview-category" id="previewCategory">Category</div>
                            <h1 className="preview-blog-title" id="previewTitle">Your Blog Post Title</h1>
                            <div className="preview-meta">
                                <span>By Alex Johnson</span>
                                <span>•</span>
                                <span id="previewDate">Today</span>
                                <span>•</span>
                                <span id="previewReadTime">5 min read</span>
                            </div>
                            <div className="preview-content-text" id="previewContent">
                                <p>Your blog content will appear here. This is a preview of how your post will look to readers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default CreatePost;