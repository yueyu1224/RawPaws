import React, { useState, useEffect } from 'react';
import './styles/CommunityForum.css';

function CommunityForum({ sessionId }) {
    const [replies, setReplies] = useState([]);
    const [newReplyContent, setNewReplyContent] = useState('');
    const [error, setError] = useState('');

    const mainPost = {
        title: "Discussion on Healthy Pet Diets",
        username: "ExpertVet",
        content: "Let's discuss the benefits of a raw food diet for our pets...",
    };

    useEffect(() => {
        fetch('/api/forum', {
            method: 'GET',
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => setReplies(data.posts))
        .catch(error => {
            console.error('Error fetching forum posts:', error);
            setError('Failed to load posts. Please try again later.');
        });
    }, []);

    const handleNewReplySubmit = async (e) => {
        e.preventDefault();
        if (!sessionId) {
            setError('You must be logged in to post in the forum.');
            return;
        }

        try {
            const response = await fetch('/api/forum', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: newReplyContent }),
                credentials: 'include',
            });

            if (response.ok) {
                const newPost = await response.json();
                setReplies([...replies, newPost]);
                setNewReplyContent('');
            } else {
                throw new Error('Failed to post the message');
            }
        } catch (error) {
            console.error('Error posting new forum message:', error);
            setError('Failed to post your message. Please try again.');
        }
    };

    return (
        <div className='community-forum'>
            <h2>{mainPost.title}</h2>
            <p>Posted by: {mainPost.username}</p>
            <p>{mainPost.content}</p>

            <div className='forum-replies'>
                {replies.map(reply => (
                    <div key={reply.id} className='forum-reply'>
                        <p>{reply.username} replied: {reply.content}</p>
                    </div>
                ))}
            </div>

            {sessionId && (
                <form onSubmit={handleNewReplySubmit} className="new-reply-form">
                    <textarea
                        value={newReplyContent}
                        onChange={(e) => setNewReplyContent(e.target.value)}
                        placeholder="Write your reply here..."
                        required
                    />
                    <button type="submit">Post Reply</button>
                </form>
            )}

            {!sessionId && <p>Please log in to post replies.</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default CommunityForum;