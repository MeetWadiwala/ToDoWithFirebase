import React, { useEffect, useState } from "react";

const EditPost = (props) => {
	const [post, setPost] = useState(props.currentPost);
	useEffect(() => {
		setPost(props.currentPost);
	}, [props]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setPost({ ...post, [name]: value });
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();

				props.updatePost(post.id, post);
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
			<button class="btn btn-primary m-2">Update Post</button>
			<button
				type="submit"
				class="btn btn-primary"
				onClick={() => props.setEditing(false)}
			>
				Cancel
			</button>
		</form>
	);
};

export default EditPost;
