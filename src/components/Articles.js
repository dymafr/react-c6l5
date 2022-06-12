import React from 'react';
import Article from './Article';

function Articles({}) {
  const articles = [
    { title: 'Un titre 1', content: 'Contenu 1' },
    { title: 'Un titre 2', content: 'Contenu 2' },
    { title: 'Un titre 3', content: 'Contenu 3' },
  ];

  return (
    <div style={{ width: '700px' }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((article) => (
        <Article
          key={article.title}
          content={article.content}
          title={article.title}
        />
      ))}
    </div>
  );
}

export default Articles;
