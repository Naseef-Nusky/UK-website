import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { getBlogPosts, formatBlogPost, getImageUrl } from '../lib/contentful';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const blogPosts = await getBlogPosts();
        const formattedPosts = blogPosts.map(formatBlogPost).filter(Boolean);
        setPosts(formattedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <section>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0047b2] mb-8">
              Our Blog
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest insights, tips, and updates from Henderson Thomas Investigations. 
              Our expert team shares valuable knowledge about private investigation services and industry trends.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No blog posts yet</h2>
            <p className="text-gray-500">Check back soon for our latest insights and updates.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer"
              >
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={getImageUrl({ fields: { file: { url: post.featuredImage } } })}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#0047b2] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt ? documentToPlainTextString(post.excerpt) : 'No excerpt available'}
                  </p>

                  {/* Read More Link - Bottom Right */}
                  <div className="flex justify-end mt-auto">
                    <span className="inline-flex items-center text-[#0047b2] font-semibold hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogPage;
