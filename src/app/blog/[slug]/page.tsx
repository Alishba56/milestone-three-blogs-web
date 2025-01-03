import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Data } from "../../../data/top";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = Data.find((data) => data.slug === slug);
  if (blog) {
    return (
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image
                    className="mr-4 w-16 h-16 rounded-full"
                    src={blog.image}
                    alt="Alishba shahzad"
                  />
                  <div>
                    <Link
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {blog.title}
                    </Link>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {blog.description}
                    </p>
                    <p className="text-base font-bold text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {blog.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {blog.h1}
              </h1>
            </header>



            
            <p className="lead">{blog.decs1}</p>
            <h1 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {blog.h2}
            </h1>
            <p>{blog.decs2}</p>
            <Image
              src={blog.image}
              alt="Digital art by Anonymous"
              className="w-[1000px] h-[400px]"
            />
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {blog.h3}
            </h2>
            <p>{blog.decs3}</p>
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {blog.h4}
            </h2>
            <p>{blog.decs4}</p>
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {blog.h5}
            </h2>
            <p>{blog.decs5}</p>
            <Image
              src={blog.image}
              alt="Typography example"
              className="w-[1000px] h-[400px]"
            />
            <h3>Best practices for setting up your prototype</h3>
            <p>
              <strong>Low fidelity or high fidelity?</strong> Fidelity refers to
              how close a prototype will be to the real deal. If you’re simply
              preparing a quick visual aid for a presentation, a low-fidelity
              prototype — like a wireframe with placeholder images and some
              basic text — would be more than enough. But if you’re going for
              more intricate usability testing, a high-fidelity prototype — with
              on-brand colors, fonts and imagery — could help get more pointed
              results.
            </p>
            <p>
              <strong>Consider your user</strong>. To create an intuitive user
              flow, try to think as your user would when interacting with your
              product. While you can fine-tune this during beta testing,
              considering your user’s needs and habits early on will save you
              time by setting you on the right path.
            </p>
            <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion (20)
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-2xl font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
                      <Image
                        className="mr-2 w-6 h-6 rounded-full"
                        src={blog.image}
                        alt="other"
                      />
                      Other
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <button
                    id="dropdownComment1Button"
                    data-dropdown-toggle="dropdownComment1"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                  <div
                    id="dropdownComment1"
                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Remove
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </Link>
                      </li>
                    </ul>
                  </div>
                </footer>
                <p>
                  Very straight-to-point article. Really worth time reading.
                  Thank you! But tools are just the instruments for the UX
                  designers. The knowledge of the design tools are as important
                  as the creation of the design strategy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <button
                    type="button"
                    className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    <svg
                      className="mr-1.5 w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                    Reply
                  </button>
                </div>
              </article>
            </section>
          </article>
        </div>
        <aside
          aria-label="Related articles"
          className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
        >
          <div className="px-4 mx-auto max-w-screen-xl">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Related articles
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Data.map(
                (data, index) =>
                  index <= 3 && (
                    <article key={index} className="max-w-xs">
                      <Link href={data.slug}>
                        <Image
                          src={data.image}
                          className="mb-5 rounded-lg"
                          alt="Image 1"
                          width={320}
                          height={240}
                          layout="responsive"
                        />{" "}
                        {/* Added responsive layout */}
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                          {data.title}{" "}
                          {/* Assuming 'title' is a property in your data */}
                        </h2>
                        <p className="mb-4 text-gray-500 dark:text-gray-400">
                          {data.description}
                        </p>{" "}
                        {/* Assuming 'description' is a property in your data */}
                        <button className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                          Read in 2 minutes
                        </button>
                      </Link>
                    </article>
                  )
              )}
            </div>
          </div>
        </aside>
      </main>
    );
  }
<div>Blog not found</div>
}
export default page;