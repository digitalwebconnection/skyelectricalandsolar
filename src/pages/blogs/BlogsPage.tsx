import { BlogHero, BlogListSection } from "./components";
import { BLOG_POSTS, type BlogPost } from "./data/blogData";
import { useNavigation } from "../../context";

export function BlogsPage() {
  const { navigate } = useNavigation();

  const handleSelectPost = (post: BlogPost) => {
    navigate(`/blogs/${post.slug}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf8f5]">
      {/* 1. Hero Section (First hero section as requested) */}
      <BlogHero />

      {/* 2. Blog List Section (Then blog section) */}
      <BlogListSection
        posts={BLOG_POSTS}
        onSelectPost={handleSelectPost}
      />
    </div>
  );
}

export default BlogsPage;

