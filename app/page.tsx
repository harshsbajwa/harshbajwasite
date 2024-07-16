import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <p className="text-4xl mb-8">
        harsh bajwa
      </p>
      <p className='text-2xl mb-4'>
        coming soon.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
