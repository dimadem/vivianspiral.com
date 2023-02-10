import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col min-w-full justify-center p-0 m-0 bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
