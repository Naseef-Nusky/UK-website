import { createClient } from 'contentful';

// Contentful configuration
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID || 'babc4mhdh1yv';
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || 'qvCEq4p4NScALtr1yGyDRHxfgcvXa_hkTNfSlJSKtCw';
const PREVIEW_ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_PREVIEW_ACCESS_TOKEN || 'J01YndLVqAudpMZmeKmAuCCG69Ldr-wP56ro_s_83_0';

// Create Contentful client for published content
export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// Create Contentful client for preview/draft content
export const previewClient = createClient({
  space: SPACE_ID,
  accessToken: PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

// Blog post content type ID - update this to match your Contentful content type ID
const BLOG_POST_CONTENT_TYPE = 'blogPost';

// Fetch all blog posts (published content)
export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      order: '-fields.publishedDate', // Order by published date (most recent first)
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Fetch all blog posts including drafts (preview content)
export const getBlogPostsPreview = async () => {
  try {
    const response = await previewClient.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      order: '-fields.publishedDate', // Order by published date (most recent first)
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts preview:', error);
    return [];
  }
};

// Fetch a single blog post by slug (published content)
export const getBlogPostBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Fetch a single blog post by slug including drafts (preview content)
export const getBlogPostBySlugPreview = async (slug) => {
  try {
    const response = await previewClient.getEntries({
      content_type: BLOG_POST_CONTENT_TYPE,
      'fields.slug': slug,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching blog post preview:', error);
    return null;
  }
};

// Fetch a single blog post by ID
export const getBlogPostById = async (id) => {
  try {
    const response = await client.getEntry(id);
    return response;
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
};

// Helper function to format blog post data
export const formatBlogPost = (post) => {
  if (!post) return null;
  
  return {
    id: post.sys.id,
    title: post.fields.title,
    slug: post.fields.slug,
    excerpt: post.fields.excerpt, // Keep as rich text object
    content: post.fields.content, // Keep as rich text object
    featuredImage: post.fields.featuredImage?.fields?.file?.url,
    author: post.fields.author || 'Henderson Thomas Investigations',
    publishedDate: post.fields.publishedDate || post.sys.createdAt,
    updatedDate: post.sys.updatedAt,
  };
};

// Helper function to get image URL
export const getImageUrl = (image) => {
  if (!image?.fields?.file?.url) return null;
  return `https:${image.fields.file.url}`;
};
