import './styles/Blogs.css';

import BreadCrump from './BreadCrump';
import Comment from './Comment';
import LoadingSpinner from '../../Global/LoadingSpinner';

import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';


function Blogs(){

    const {username , id} = useParams();
    const [data , setData] = useState({});
    const [loading , setLoading] = useState(true);

    const [love , setLove] = useState(0);
    const [save , setSave] = useState(0);


    useEffect(() => {

        const fetchData = async(req , res) => {
            const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/front/${username}/${id}`);
            
            const data = await responses.json();

            setData(data);
            setLoading(false);
        }

        fetchData();
    } , [id]);

    useEffect(() => {
        console.log(data);
    } , [data])

    const addLove = () => {
        setLove( l => l + 1);
    }

    const addSave = () => {
        setSave(s => s + 1);
    }


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
        return <LoadingSpinner text='fetching data...' size='large'/>
    }

    return(
        <>
            <title>{data.blog.title}</title>
            <BreadCrump auhtor={data.author} title={data.blog.title}/>
            <main className='container'>

                <div className='blog-container'>
                    <div className='blog-hero'>
                        {data.blog.title}
                    </div>

                    <div className='blog-content'>

                        <div className='blog-meta'>
                            <div className='author-avatar'>{data.author[0]}</div>
                            <div className='meta-details'>
                                <div className='auhtor-name'>{data.auhtor}</div>
                                <div className='post-details'>
                                    <span>{`📅 ${formateDate(data.blog.updatedAt)}`}</span>
                                    <span>{`⏱️ ${data.blog.readTime} min read`}</span>
                                    <span>{`👁️ 1.2K views`}</span>
                                </div>
                            </div>
                        </div>
                        <span className='blog-category'>{data.blog.categories}</span>
                        <h1 className='blog-title'>{data.blog.title}</h1>

                        <div className='blog-body'>
                            <p>{data.blog.description}</p>

                        </div>
                        <div className='blog-actions'>

                                <div className="action-buttons">
                                    <div className="action-btn like-btn" onClick={addLove}>
                                        <span>❤️</span> <span>{love}</span>
                                    </div>
                                    <div className="action-btn">
                                        <span>💬</span> <span>{data.blog.comments.length || 0}</span>
                                    </div>
                                    <div className="action-btn" onClick={addSave}>
                                        <span>🔖</span> <span>{save}</span>
                                    </div>
                                </div>

                        </div>

                        <Comment/>
                    </div>

                </div>

            </main>
        </>
    )

}

export default Blogs;