import { useState, useEffect } from 'react';

import Pagination from '../../components/Pagination';
import Button from '../../components/Button';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');

				if (!response.ok) {
					throw new Error('An error occured');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
		<section id="blog" className="blog">
			<div className="container">
				<div className="blog__wrapper">
					<div className="blog__header">
						<h2>Discover our Ironclan</h2>
						<Button href={`/create`} className="btn__round">
							Add post
						</Button>
					</div>

					<div className="blog__posts">
						{error && <p>{error.message}</p>}

						{currentPosts.map((post) => (
							<article className="blog__post" key={post.id}>
								{post.photo && (
									<div className="blog__post-img-wrapper">
										<img src={post.photo} alt={post.title} className="blog__post-img" />
									</div>
								)}
								<h3>{post.title}</h3>
								<p className="blog__post-description">{post.description}</p>
								<p className="small-text-size blog__post-author">{post.name}</p>
								<div className="form__btn">
									<Button href={`/update/${post.id}`} className="btn__inverse">
										Update
									</Button>
									<Button href={`/delete/${post.id}`} className="btn__inverse">
										Delete
									</Button>
								</div>
							</article>
						))}
					</div>

					<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
				</div>
			</div>
		</section>
	);
};

export default Blog;
