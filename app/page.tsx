import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-6xl font-bold tracking-tighter">
        harsh bajwa.
      </h1>
      <p className="text-4xl mb-8">
        {
          `hi, my name is harsh.`
        }
      </p>
      <p className='text-2xl mb-4'>
        {
          'i am an incoming 4th year computer science student at the university of toronto. i am interested in everything human, so, naturally, i am fascinated by design—by extension, everything software. besides that, i cannot get enough of art, history, math, and philosophy. i love to read, and if you have any recommendations i would love to hear from you.'
        }
      </p>
      <p className='text-2xl mb-8'>
        {
          'if you are interested in professional inquiries, i would direct you toward my resume, github, or contact information, i look forward to sharing my love of software with you. but, i would be a fool to let a perfectly good blog go to waste, so, until i no longer feel like it, i will use the blog on this site to share anything and everything that i feel like sharing, though most likely i will only share quotations from books that i can\'t stop thinking about. i hope they make you think as well.'
        }
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
