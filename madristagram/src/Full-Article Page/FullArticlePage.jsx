import React from 'react';
import "./fullarticlepage.css"

const FullArticlePage = () => {
  const post = {
    title: 'Real Madrid President, Manager and Captain won 2022 European Golden Boy Awards in their categories',
    image: 'https://via.placeholder.com/800x400', // Replace with your image URL
    author: 'John Doe',
    date: 'November 18, 2023',
    content: `
      <p>Real Madrid President, Florentino Pérez received the 2022 Golden Boy Award for the most highly valued club President of the year according to Italian sports newspaper Tuttosport. Guido Vaciago, director of the paper, presented him with the trophy in the boardroom at Real Madrid City.</p>
      <p>Florentino won the most votes from the panel of legends that the Italian sports paper convened throughout the year in which the Real Madrid have clinched the Champions League, LaLiga, UEFA Super Cup and the Spanish Super Cup.</p>
      <p>Quisque scelerisque eu ligula at auctor. Ut venenatis odio non erat tempor, at tincidunt sapien convallis. Suspendisse et fermentum nulla.</p>
      <p>Integer at convallis nisi. Aliquam sit amet ipsum et lacus luctus cursus a eu nisi. Sed vel turpis sed ipsum eleifend tristique.</p>
    `,
  };

  return (
    <div className="full-article-page">
      <h1>{post.title}</h1>
      <img src={post.image} alt="Article Cover" />
      <div className="post-meta">
        <span className="author">Author: {post.author}</span>
        <span className="date">Date: {post.date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default FullArticlePage;