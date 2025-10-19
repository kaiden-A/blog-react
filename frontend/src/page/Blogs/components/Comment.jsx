import './styles/Comments.css'

function Comment(){

    return(
        
        <div className='comments-section'>
            <h2 className='section-title'>Comments (42)</h2>

            <div className='comment-form'>
                <h3>Leave a Comment</h3>

                <form>

                    <div className="form-group">
                        <label htmlFor="comment">Your Comment</label>
                        <textarea id="comment" className="form-control" placeholder="Share your thoughts..."></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Your email"/>
                    </div>
                    <button type="submit" className="btn">Post Comment</button>

                </form>
                <div className='comments-list'>
                    <div className='comment'>
                        <div className='comment-content'>
                            <div className='comment-header'>
                                <div className='comment-auhtor'>Tom Davis</div>
                                <div className='comment-date'>May 18 , 2023</div>
                            </div>
                            <div className='comment-text'>

                            </div>
                            

                        </div>

                    </div>
                </div>

            </div>

        </div>
        
    )

}

export default Comment;