import React from 'react';

function Article({ title, content }) {
  return (
    <div className="card p-20 mb-20">
      <h2 className="mb-10">
        <h2>{title}</h2>
      </h2>
      <p>{content}</p>
    </div>
  );
}

export default Article;
