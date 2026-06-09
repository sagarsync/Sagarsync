import React from 'react';
import { blogPosts } from '../data/companyData.js';

export default function Blog() {
  return (
    <section className="page-transition py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase">Developer Insights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-1">Manual Engineering Logs</h2>
          <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto">
            Informative, detailed guides and strategies written manually by our full-stack developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl border border-pebble overflow-hidden flex flex-col justify-between shadow-sm">
              <div className="p-6">
                <span className="text-[10px] font-bold text-sage uppercase tracking-wider">{post.category} • {post.date}</span>
                <h3 className="font-extrabold text-lg text-forest mt-2 mb-3">{post.title}</h3>
                <p className="text-slateTeal text-xs leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <div className="bg-pebbleLight px-6 py-4 border-t border-pebble flex items-center justify-between text-xs font-bold text-forestDark">
                <span>Written by: {post.author}</span>
                <i className={`fas ${post.icon}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
