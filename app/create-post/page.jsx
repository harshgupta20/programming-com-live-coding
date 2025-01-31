"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {

    const router = useRouter();
    const [formSubmissionInProgress, setFormSubmissionInProgress] = useState(false);

    const handleSubmit = (e) => {
        setFormSubmissionInProgress(() => true);
        try{
            e.preventDefault();
            const title = e.target.title.value;
            const description = e.target.description.value;
            const existingPosts = JSON.parse(localStorage.getItem("userCreatePosts")) || [];
            localStorage.setItem("userCreatePosts", JSON.stringify([...existingPosts, { title, description }]));
            router.push("/posts");
        }
        catch(err){
            console.log(err);
        }
        finally{
            setFormSubmissionInProgress(() => true);
        }
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-4xl font-bold mb-4">Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Enter description"
              required
            ></textarea>
          </div>
          <button
            className="bg-indigo-500 w-100 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={formSubmissionInProgress}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Page;