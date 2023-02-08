import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex w-screen justify-center bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
