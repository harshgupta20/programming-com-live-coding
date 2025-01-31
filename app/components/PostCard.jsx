import Image from "next/image";
import Link from "next/link";

const PostCard = ({ title, description, postId }) => {
    return (
        <>
            <Link href={`/posts/${postId}`}>
                <div className='bg-gray-100 flex p-4 border-2 border-gray-200 rounded m-3'>
                    {/* <div className='mt-2 mr-2 text-black'><FaRegUser /></div> */}
                    <div className='mt-2 mr-2 text-black'>
                        <Image src="/postcard.png" alt="post-image" width={20} height={20} />
                    </div>
                    <div>
                        <h2 className='font-bold text-black'>{title}</h2>
                        <p className='text-sm text-gray-700'>{description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
};

export default PostCard