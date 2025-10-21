# Contentful Setup Instructions

## 1. Create a Contentful Account
- Go to [contentful.com](https://contentful.com) and create an account
- Create a new space for your project

## 2. Set Up Content Model
Create a content type called "Blog Post" with the following fields:

### Required Fields:
- **Title** (Short text) - `title`
- **Slug** (Short text) - `slug` (unique)
- **Excerpt** (Rich text) - `excerpt`
- **Content** (Rich text) - `content`
- **Featured Image** (Media) - `featuredImage`
- **Author** (Short text) - `author`
- **Published Date** (Date & time) - `publishedDate`

## 3. Environment Variables
Create a `.env.local` file in your project root with:

```
REACT_APP_CONTENTFUL_SPACE_ID=your-space-id-here
REACT_APP_CONTENTFUL_ACCESS_TOKEN=your-access-token-here
```

## 4. Get Your Credentials
- **Space ID**: Found in Settings > General Settings
- **Access Token**: Found in Settings > API Keys > Content Delivery API

## 5. Content Type ID
Update the `BLOG_POST_CONTENT_TYPE` in `src/lib/contentful.js` to match your content type ID (usually "blogPost" or similar).

## 6. Test Your Setup
1. Create a sample blog post in Contentful
2. Visit `/blog` to see your posts
3. Click on a post to view the single post page

## Features Included:
- ✅ Blog listing page with pagination
- ✅ Single blog post page
- ✅ Responsive design
- ✅ SEO-friendly URLs
- ✅ Image optimization
- ✅ Reading time calculation
- ✅ Author information
- ✅ Published date sorting
- ✅ Navigation integration
