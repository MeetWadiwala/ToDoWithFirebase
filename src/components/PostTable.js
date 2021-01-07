import React from "react";

const PostTable = (props) => {
	return (
		<div className="homemain">
			<table className="table border shadow">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Body</th>
						<th scope="col">Tags</th>
						<th scope="col">Operations</th>
					</tr>
				</thead>
				<tbody>
					{props.posts.length > 0 ? (
						props.posts.map((post) => (
							<tr key={post.id}>
								<td>{post.title}</td>
								<td>{post.body}</td>
								<td>{post.tag}</td>
								<td>
									<button
										onClick={() => {
											props.editRow(post);
										}}
										className="btn btn-success button muted-button mx-2"
									>
										Edit
									</button>
									<button
										onClick={() => props.deletePost(post.id)}
										className=" btn btn-danger button muted-button"
									>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan={5}>No Posts</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default PostTable;
