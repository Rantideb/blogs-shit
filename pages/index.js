import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  return {
    props: {
      blogs: allBlogs,
    },
  };
};

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Rantideb's Random Rant's</title>
        <meta name="title" content="Rantideb's Random Rant's" />
        <meta
          name="description"
          content="I'm totally useless and high-functioning psychopathic writing down my random rant's."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content=" " />
        <meta property="og:title" content="Random Rant's" />
        <meta
          property="og:description"
          content="Rantideb's Random Rant's"
        />
        <meta
          property="og:image"
          content=" "
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blogs.ranti.dev/" />
        <meta property="twitter:title" content="Rantideb's Random Rant's" />
        <meta
          property="twitter:description"
          content="Rantideb's Random Rant's"
        />
        <meta
          property="twitter:image"
          content=" "
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map(
                (blog) =>
                  blog.data.isPublished && (
                    <BlogHeader
                      key={blog.data.Id}
                      data={blog.data}
                      content={blog.content}
                      readTime={blog.readTime.text}
                    />
                  )
              )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
