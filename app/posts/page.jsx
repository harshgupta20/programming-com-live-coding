"use client";

import axios from 'axios';
import PostCard from '../components/PostCard';

const Page = async () => {

    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts").
        then((res) => { return { success: true, data: res.data } }).
        catch((err) => { return { success: false, error: err.message } });


    let userCreatePosts = localStorage.getItem("userCreatePosts");
    if(userCreatePosts && posts?.success){
        posts.data = [...posts.data, JSON.parse(userCreatePosts)];
    }

    return (
        <>
            <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    posts?.success && posts?.data?.map((post, key) => {
                        return <PostCard key={key} title={post.title} description={post.body} postId={post.id} />
                    })
                }
            </div>

            {
                !posts?.success &&
                <div className='flex justify-center h-[90vh] items-center mt-4 flex-col text-center'>
                   <div className='text-red-500'>Something Went Wrong.</div>
                   <p className='text-gray-500'>Its not you, its us.</p>
                </div>
            }
        </>
    )
}

export default Page;