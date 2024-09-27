import React from 'react';

const posts = [
  { id: 1, title: 'Cómo cuidar tus plantas de interior', excerpt: 'Aprende los mejores tips para cuidar tus plantas en casa.' },
  { id: 2, title: 'Las mejores plantas para exteriores', excerpt: 'Descubre qué plantas son perfectas para decorar tu jardín.' },
];

const BlogPreview = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Últimos Posts del Blog</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2">{post.excerpt}</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
              Leer Más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPreview;
