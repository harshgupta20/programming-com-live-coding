import PostComment from '@/app/components/PostComment';
import axios from 'axios'
import Image from 'next/image';
import React from 'react'

const Page = async ({ params }) => {
  const { postId } = params

  const comments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).
    then((res) => { return { success: true, data: res.data } }).
    catch((err) => { return { success: false, error: err.message } });

  return (
    <div>
      <div>
        <div className='bg-gray-100 flex p-4 border-2 border-gray-200 rounded'>
          <div className='mt-2 mr-2 text-black text-xl font-bold'>Post Id: <span className='text-xl text-indigo-500'>{postId}</span></div>
          <div className='mt-2 mr-2 text-black'>
            <Image src="/postcard.jpg" alt="post-image" width={90} height={20} />
          </div>
        </div>
      </div>

      <div className='flex flex-col bg-gray-800 p-3'>
        Comments :
        {
          comments?.success && comments?.data?.map((comment) => {
            return <PostComment commentName={comment?.name} />
          })
        }
      </div>
    </div>
  )
}

export default Page