import styles from '../styles/EditBlog.module.css';
import { useState } from 'react';
function EditBlog({isOpen , onclose , data , handleEdit}){

    if(!isOpen) return null;

    const [readTime , setReadTime] = useState(data?.readTime || 0);
    const [post , setPost] = useState(data?.description || "");
    const [title , setTitle] = useState(data?.title || "");
    const [category , setCategory] = useState(data?.categories || "");
    const changeValue = (e , type) => {

        const convert  = {
            "readTime" : 0 ,
            "post" : 1,
            "title" : 2,
            "category" : 3
        };


        let choose = convert[type];

        switch(choose){
            case 0 : setReadTime(e.target.value); break;
            case 1 : setPost(e.target.value) ; break ;
            case 2 : setTitle(e.target.value) ; break;
            case 3 : setCategory(e.target.value) ; break;
        }
    }

    const handleform = async (e  , id, publish) =>{

        e.preventDefault();

        try{

            const responses = await fetch(`http://localhost:5000/api/admin/blogs/${id}` , {
                method : 'PUT',
                credentials : 'include',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify({title , description : post , readTime , publish})
            })

            const data = await responses.json();
            console.log(data);

            if(data.success){

                const data = {
                    title,
                    description : post,
                    readTime,
                    publish
                }

                handleEdit(data);
                onclose();
            }

        }catch(err){
            console.log(err);
        }
    }

    return(

        <>
            <div className={styles["blog-form-overlay"]}></div>
            <div className={styles["blog-form-section"]}>

                <div className={styles["section-header"]}>
                    <h2 className={styles["section-title"]}>Post Details</h2>
                    <button className={`${styles["close-button"]}`} onClick={onclose}>&times;</button>
                </div>
                
                <form className={styles["blog-form"]} onSubmit={(e) => handleform(e , data._id, true)}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="post-title">Post Title <span className={styles["required"]}>*</span></label>
                        <input 
                            type="text"  
                            className={styles["form-control"]} 
                            value={title}
                            placeholder="Enter a compelling title for your post" 
                            required
                            onChange={(e) => changeValue(e, "title")}
                        />
                    </div>
                    
                    <div className={styles["form-row"]}>
                        <div className={`${styles["form-group"]} ${styles["category-select"]}`}>
                            <label htmlFor="post-category">Category <span className={styles["required"]}>*</span></label>
                            <select value={category} className={styles["form-control"]} required onChange={(e) => changeValue(e, "category")}>
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
                        
                        <div className={`${styles["form-group"]} ${styles["read-time-input"]}`}>
                            <label htmlFor="read-time">Read Time (minutes) <span className={styles["required"]}>*</span></label>
                            <input 
                                type="number"  
                                className={styles["form-control"]} 
                                placeholder="5" 
                                min="1" max="60" 
                                value={readTime}
                                required
                                onChange={(e) => changeValue(e, "readTime")}
                            />
                            <span className={styles["input-suffix"]}>min</span>
                        </div>
                    </div>
                    
                    <div className={styles["form-group"]}>
                        <label htmlFor="post-content">Post Content <span className={styles["required"]}>*</span></label>
                        <textarea 
                            className={styles["form-control"]} 
                            placeholder="Write your blog post content here..." 
                            required
                            value={post}
                            onChange={(e) => changeValue(e, "post")}
                        ></textarea>
                    </div>
                    
                    <div className={styles["form-actions"]} style={{borderTop: "1px solid #eee", paddingTop: "20px"}}>
                        <button type='button' className={`${styles["btn"]} ${styles["btn-outline"]}`} onClick={(e) => handleform(e , data._id, data.publish)}>Update Form</button>
                        <button type='submit' className={`${styles["btn"]} ${styles["btn-accent"]}`}>Publish Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditBlog;