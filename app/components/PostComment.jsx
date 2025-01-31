import { FaRegUser } from "react-icons/fa";

const PostComment = ({commentName}) => {
    return (
        <>
            <div className='bg-gray-800 flex p-2 items-center'>
                <div className='mt-2 mr-2 text-black bg-gray-700 p-2 rounded-md'><FaRegUser size={10} color="white" /></div>
                {commentName}
            </div>
        </>
    )
}

export default PostComment