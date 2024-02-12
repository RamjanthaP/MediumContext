// components/PostForm.js
import React, { useState } from 'react';

function PostForm() {
  const [postContent, setPostContent] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // call the API endpoint /api/postToLinkedIn with the post content
    try {
      const response = await fetch('/api/postToLinkedIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: postContent }),
      });

      if (response.ok) {
        console.log('Post was successfully created on LinkedIn');
        setPostContent(''); // Clear the form
      } else {
        console.error('Failed to post content to LinkedIn');
      }
    } catch (error) {
      console.error('Error posting to LinkedIn:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder='Write your LinkedIn post here...'
        rows='4'
        required
      ></textarea>
      <button type='submit'>Post to LinkedIn</button>
    </form>
  );
}

export default PostForm;
