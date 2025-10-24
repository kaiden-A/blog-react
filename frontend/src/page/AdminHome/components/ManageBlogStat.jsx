

function ManageBlogStat({data}){

    return(

        <div className="blog-management-content">
            
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon total">📚</div>
                    <div className="stat-info">
                        <h3>{data.blogsLength}</h3>
                        <p>Total Blogs</p>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-icon published">✅</div>
                    <div className="stat-info">
                        <h3>{data.publishLength}</h3>
                        <p>Published</p>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-icon draft">📄</div>
                    <div className="stat-info">
                        <h3>{data.draftLength}</h3>
                        <p>Drafts</p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default ManageBlogStat;