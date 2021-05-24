import { GetStaticProps } from "next";
import { ReactElement } from "react";

import Head from "next/head";
import Link from "next/link";

// Lib
import { getAllProductGategorieUnivers } from "@lib/prismic/api";
// import { Link } from "prismic-reactjs";

export default function Home({ allProducts }): ReactElement {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>DC Personal Home | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-2 text-center h-screen">
        <div className="h-full grid grid-cols-2 text-gray-50">
          <h1 className="text-5xl absolute top-32 left-1/2 transform -translate-x-1/2">
            DC
            <br />
            Personal Shop
          </h1>

          <div className="flex place-items-center justify-center bg-men-home bg-no-repeat bg-center bg-cover">
            <ul>
              <li className="text-3xl mb-4">
                <Link href="/homme">
                  <a href="/homme" className="text-gray-50 no-underline hover:underline">
                    {allProducts[0].gender}
                  </a>
                </Link>
              </li>
              {allProducts[0].categories.map(({ text, href }) => (
                <li className="mb-2" key={text}>
                  <Link href={`homme/${href}`}>
                    <a href={`homme/${href}`} className="text-gray-50 no-underline hover:underline">
                      {text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex place-items-center justify-center bg-girl-home bg-no-repeat bg-center bg-cover">
            <ul className="text-gray-50">
              <li className="text-3xl mb-4">
                <Link href="/women">
                  <a href="/women" className="text-gray-50 no-underline hover:underline">
                    {allProducts[1].gender}
                  </a>
                </Link>
              </li>
              {allProducts[1].categories.map(({ text, href }) => (
                <li className="mb-2" key={text}>
                  <Link href={`/femme/${href}`}>
                    <a
                      href={`/femme/${href}`}
                      className="text-gray-50 no-underline hover:underline"
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false, previewData }) => {
  const allProducts = await getAllProductGategorieUnivers(previewData);
  return {
    props: { preview, allProducts }
  };
};
