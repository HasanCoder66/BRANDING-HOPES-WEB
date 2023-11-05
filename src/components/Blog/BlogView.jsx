import React from "react";
import './blogview.css'
// import { useRef } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged , auth } from "../../firebase/config.js";
function BlogView() {

//   const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || []

//   const navigate = useNavigate()


//   const user = useRef()
//   const blogcontent = useRef()
//   const blogdescription = useRef()
//   const blogtitle = useRef()

//   function createBlogHandler () {
//     // console.log(user.current.value);
//     // console.log(blogcontent.current.value);
//     // console.log(blogdescription.current.value);
//     // console.log(blogtitle.current.value);

//     const blog = {
//       username: user?.current?.value,
//       blogcontent: blogcontent?.current?.value,
//       blogdescription: blogdescription?.current?.value,
//       blogtitle: blogtitle?.current?.value
//     }

    // allBlogs.push(blog)

//     localStorage.setItem('allBlogs', JSON.stringify(allBlogs))
//     toast.success('blog added')
//     setTimeout(() => {
//       navigate('/')
//     }, 5000)
//   }

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       console.log(user)
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log(uid)
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });

{/* lg:px-8 bg-gray-500 shadow-lg shadow-gray-500/ */}
{/* <input
  placeholder="User Name"
  type="text"
  className="userInput"
  // ref={user}
/> */}
  return (
    <div  className='parent  '>
      <input
        placeholder="Blog Content"
        // ref={blogcontent}
        type="text"
        className="blogInput w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
      <input
        // ref={blogtitle}
        placeholder=" Blog Title"
        type="text"
        className="blogTitleInput w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
      <input
        // ref={blogdescription}
        placeholder="Blog description "
        type="text"
        className="blogDescInput w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
      {/* onClick={createBlogHandler} */}
      <button className="button  bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 " >Create Blog</button>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default BlogView;