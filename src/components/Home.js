import React, { useState } from "react";
import "./css/Home.css";
import AddPosts from "./AddPosts";
import EditPost from "./EditPost";
import PostTable from "./PostTable";

const Home = () => {
	const postData = [{ id: 1, title: "meet", body: "abc", tag: "agh" }];
	const initialFormState = { id: null, title: "", body: "", tag: "" };

	const [posts, setPosts] = useState(postData);
	const [currentPost, setCurrentPost] = useState(initialFormState);
	const [editing, setEditing] = useState(false);

	const addPost = (post) => {
		post.id = posts.length + 1;
		setPosts([...posts, post]);
	};

	const deletePost = (id) => {
		setEditing(false);
		setPosts(posts.filter((post) => post.id !== id));
	};

	const updatePost = (id, updatedPost) => {
		setEditing(false);
		setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
	};

	const editRow = (post) => {
		setEditing(true);
		setCurrentPost({
			id: post.id,
			title: post.title,
			body: post.body,
			tag: post.tag,
		});
	};

	return (
		<>
			<div className="container">
				<div className="flex-row">
					<div className="flex-large">
						{editing ? (
							<>
								<h2>Edit Post</h2>
								<EditPost
									editing={editing}
									setEditing={setEditing}
									currentPost={currentPost}
									updatePost={updatePost}
								/>
							</>
						) : (
							<>
								<h2>Add Post</h2>
								<AddPosts addPost={addPost} />
							</>
						)}
					</div>
					<div className="flex-large">
						<h2>View Posts</h2>
						<PostTable
							posts={posts}
							editRow={editRow}
							deletePost={deletePost}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
