import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          '<https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=TU_TOKEN_DE_ACCESO>'
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div>
      <h2>Instagram Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;
