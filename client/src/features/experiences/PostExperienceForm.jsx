import { useState } from "react";

const PostExperienceForm = () => {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { location, title, description });
  };

  return (
    <div className="max-w-md mx-auto h-screen flex justify-center items-center bg-white shadow-md rounded-md overflow-hidden">
      <div>
        <h2 className="text-3xl font-bold text-center  text-stone-900 py-4">
          Share Your Travel Experience
        </h2>
        <form className="px-6 py-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-stone-400 focus:border-stone-400 transition-all duration-300"
              placeholder="Enter the location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-stone-400 focus:border-stone-400 transition-all duration-300"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-800 hover:bg-stone-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-stone-400 focus:ring-opacity-50 transition-all duration-300"
          >
            Post Experience
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostExperienceForm;
