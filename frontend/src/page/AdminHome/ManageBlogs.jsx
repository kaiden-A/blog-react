import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

import DeleteBlog from './components/DeletePopup';
import ManageBlogHeader from './components/ManageBlogHeader';


import './styles/ManageBlogs.css';

import LoadingSpinner from '../Global/LoadingSpinner'
import ManageBlogStat from './components/ManageBlogStat';
import EditBlog from './components/EditBlog';
function ManageBlogs(){

    const [data , setData] = useState({});
    const [filter , setFilter] = useState('all');
    const [loading , setLoading] = useState(true);
    const[category , setCategory] = useState("all");
    const [openDelete , setOpenDelete] = useState(false);
    const [openEdit , setOpenEdit] = useState(false);
    const [selectedBlog , setSelectedBlog] = useState({});

    const navigate = useNavigate();

    useEffect( () => {

        const fetchData = async () => {
            
            try{

                const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin/blogs` , {
                    method : 'GET',
                    credentials : "include"
                });

                const data = await responses.json();
                setData(data);
                setLoading(false);

            }catch(err){
                console.log(err);
            }
        }
        fetchData();
        
    } , []);
    

    
    const formateDate = (updateDate) => {
        const date = new Date(updateDate);
        const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return formatted
    }


    if(loading){
        return <LoadingSpinner text='fetching data' size='large'/>
    }

    const filteredBlogs = data.blogs.filter(blog => {
        if(filter === "published" && !blog.publish) return  false;
        if(filter === "draft" && blog.publish)return false;

        if(category !== "all" && blog.categories !== category) return false;

        return true;
    })

    const uniqueCategories = [...new Set(data.blogs.map(blog => blog.categories))];

    const blogDelete = async (id) => {

        try{

            const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin/blogs/${id}` , {
                method : 'DELETE',
                credentials : 'include'
            })

            const data = await responses.json();

            if(data.success){
                setData(d => ({...d , blogs : d.blogs.filter(b =>  b._id !== id)}))
                setOpenDelete(false)
                setSelectedBlog("")
            }

        }catch(err){
            console.log(err);
        }
    }

    const editBlog = (id, data) => {
        setData(d => ({
            ...d,
            blogs: d.blogs.map(blog =>
            blog._id === id ? { ...data } : blog
            )
        }));
    };


    return(
        <>
            <title>Blog's Management</title>
            <div className='main-content'>

                <ManageBlogHeader/>
                <ManageBlogStat data={data}/>

                <div className="blog-management-section">
                    <div className="section-header">
                        <h2 className="section-title">All Blog Posts</h2>
                        <div className="filter-controls">
                            <select className="filter-select" onChange={(e) => setFilter(e.target.value)}>
                                <option value="all">All Status</option>
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                            <select className="filter-select" onChange={(e) => setCategory(e.target.value)}>
                                <option value="all">All Categories</option>
                                {
                                    uniqueCategories.map((blog , index) => 
                                        <option key={index} value={blog}>{blog}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>

                    <div className="blogs-grid">

                        {
                            filteredBlogs.map(blog => 

                                <div className="blog-card"  key={blog._id}>
                                    <div className="blog-image">{blog.categories}</div>
                                    <div className="blog-content">
                                        <div className="blog-header">
                                            <span className="blog-category">{blog.category}</span>
                                            <span className={`blog-status ${blog.publish ? "status-published" : "status-draft"}`}>
                                                {blog.publish ? "Published" : "Drafts"}
                                            </span>
                                        </div>
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <p className="blog-excerpt">{blog.description}</p>
                                        <div className="blog-meta">
                                            <div className="author-info">
                                                <div className="author-avatar">{data.author[0]}</div>
                                                <span>{data.author}</span>
                                            </div>
                                            <span>{formateDate(blog.updatedAt)}</span>
                                        </div>
                                        <div className="blog-actions">
                                            <button className="action-btn view" 
                                                onClick={() => navigate(`/${data.author}/${blog._id}`)}
                                            >
                                                View
                                            </button>
                                            <button className="action-btn edit" 
                                                onClick={() => {
                                                    setSelectedBlog(blog);
                                                    setOpenEdit(true);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button className="action-btn delete" 
                                                onClick={() => {
                                                    setSelectedBlog(blog);
                                                    setOpenDelete(true)
                                                }}
                                            >
                                                    Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>

                <DeleteBlog 
                    title={selectedBlog?.title}
                    boxTitle={'Confirm Deletion'}
                    msg={'Are you sure you want to delete this blog post? This action cannot be undone.'}
                    isOpen={openDelete}
                    onClose={() => setOpenDelete(false)}
                    handleDelete={() => blogDelete(selectedBlog._id)}
                />
                <EditBlog
                    isOpen={openEdit}
                    onclose={() => setOpenEdit(false)}
                    data = {selectedBlog}
                    handleEdit={(newData) => editBlog(selectedBlog._id , newData)}
                />
                
            </div>
        </>
    )
}

export default ManageBlogs;