import React, { useState } from "react";

const AddPosts = (props) => {
	const initialFormState = { id: null, title: "", body: "", tag: "" };
	const [post, setPost] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setPost({ ...post, [name]: value });
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (!post.title || !post.body || !post.tag) return;
				props.addPost(post);
				setPost(initialFormState);
			}}
		>
			<input
				type="text"
				class="form-control"
				id="exampleInputEmail1"
				placeholder="Enter title"
				name="title"
				value={post.title}
				onChange={handleInputChange}
				required
			/>
			<input
				type="text"
				class="form-control"
				id="exampleInputEmail1"
				placeholder="Enter body"
				name="body"
				value={post.body}
				onChange={handleInputChange}
				required
			/>
			<input
				type="text"
				class="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp"
				placeholder="Enter tags"
				name="tag"
				value={post.tag}
				onChange={handleInputChange}
				required
			/>
			<button class="btn btn-primary">Add Post</button>
		</form>
	);
};

export default AddPosts;
