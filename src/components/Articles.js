import React from 'react';

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
        <div className="mb-20">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
