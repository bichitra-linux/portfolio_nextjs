import { generateKeywords } from "@/utils/seo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const content = "Bichitra Gautam is a web developer and freelancer specializing in software development and technology. With years of experience in the industry, Bichitra has honed his skills in various programming languages and frameworks, including JavaScript, React, Node.js, and more. He is passionate about creating efficient, scalable, and user-friendly web applications. Bichitra is also an advocate for continuous learning and keeps himself updated with the latest trends and advancements in technology. In addition to his technical expertise, he has a keen eye for design and usability, ensuring that the applications he develops are not only functional but also visually appealing and easy to use.";


  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href="https://bichitra.com.np" />
        <meta name="description" content="Developer Portfolio of Bichitra Gautam" />
        <meta name="keywords" content={generateKeywords(content)} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bichitra Gautam" />
        <meta property="og:title" content="Bichitra Gautam Portfolio" />
        <meta property="og:description" content="Developer Portfolio of Bichitra Gautam" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://bichitra.com.np" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="fEyXDUzyc3iHzAk1KkyVH58S-uEYVwRwvs5lJe20LeY" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q68YQ5Q3YG`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Q68YQ5Q3YG', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
