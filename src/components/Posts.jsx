import { useState } from "react";
import post from "../data/dataposts";

function Posts() {
  const [countLike, setCountLike] = useState(post);

  const buttonLike = (id) => {
    const clonePost = [...countLike];
    const updateLike = clonePost.map((item, index) => {
      if (index == id) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    });
    setCountLike(updateLike);
  };

  const buttonDisLike = (id) => {
    const clonePost = [...countLike];
    const updateLike = clonePost.map((item, index) => {
      if (item.likes === 0) {
        return { ...item, likes: 0 };
      } else if (index == id) {
        console.log(item.likes);
        return { ...item, likes: item.likes - 1 };
      }
      return item;
    });
    setCountLike(updateLike);
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {countLike.map((item, index) => {
          return (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>{`${item.title} #${item.id}`}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => buttonLike(index)}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => buttonDisLike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
