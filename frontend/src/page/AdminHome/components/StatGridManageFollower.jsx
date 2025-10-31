

function StatGridManageFollower({followers , following}){

    return(

        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon followers">👥</div>
                <div className="stat-info">
                    <h3>{followers}</h3>
                    <p>Total Followers</p>
                </div>
            </div>
            
            <div className="stat-card">
                <div className="stat-icon following">❤️</div>
                <div className="stat-info">
                    <h3>{following}</h3>
                    <p>Following</p>
                </div>
            </div>
        </div>
    )
}

export default StatGridManageFollower;