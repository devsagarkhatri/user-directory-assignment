import { useState } from "react";

let toggleModal = () => {
  let modal = document.getElementById("content");
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};

const Post = ({ post }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="post p-5 bg-info rounded border border-light"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="post-title">
          <h3>
            Title : <i>{post?.title}</i>
          </h3>
        </div>
        {isOpen && (
          <div id="content">
            Content : <i>{post?.body} </i>
          </div>
        )}
      </div>
      {/* <div className="modal">
        <div className="post-title">
          <h3>{post?.title}</h3>
        </div>
        <div className="post-content">{post?.body}</div>
        <button
          className="btn btn-primary"
          //   onClick={() => closeModal}
        >
          Close
        </button>
      </div> */}
    </>
  );
};

export default Post;
