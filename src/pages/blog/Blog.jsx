import { useState, useEffect } from 'react';

import Pagination from '../../components/Pagination';
import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/posts');

				if (!response.ok) {
					throw new Error('Error fetching data');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				console.log('Error fetching data', error);
			}
		};

		fetchPosts();
	}, []);

	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
		<section id="blog" className="blog">
			<div className="container">
				<div className="blog__wrapper">
					<ScrollReveal>
						<div className="blog__header">
							<h2>Discover our Ironclan</h2>
							<Button href={`/create`} className="btn__round">
								Add post
							</Button>
						</div>
					</ScrollReveal>
					<ScrollReveal>
						<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
					</ScrollReveal>
					<ScrollReveal>
						<div className="blog__posts">
							{currentPosts.map((post) => (
								<article className="blog__post" key={post.id}>
									{post.photo && (
										<div className="post-img-wrapper">
											<img src={post.photo} alt={post.title} className="img-fluid post-img" />
										</div>
									)}
									<h3 className="small-heading">{post.title}</h3>
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
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
};

export default Blog;
