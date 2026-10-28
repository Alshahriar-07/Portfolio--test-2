"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100svh",
          backgroundColor: "#050505",
          color: "#f2f2f0",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <title>Something went wrong — Al Shahriar Sowan</title>
        <main
          id="main"
          style={{
            display: "flex",
            minHeight: "100svh",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(1.5rem, 6vw, 6rem)",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: "0.6875rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#a0a0a0",
            }}
          >
            Application error
          </p>
          <h1
            style={{
              margin: "2rem 0 0",
              maxWidth: "18ch",
              fontSize: "clamp(2.8rem, 10vw, 7.5rem)",
              lineHeight: 0.84,
              letterSpacing: "-0.06em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Something went wrong.
          </h1>
          <p
            style={{
              margin: "1.5rem 0 0",
              maxWidth: "34rem",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
              color: "#a0a0a0",
            }}
          >
            The site hit an unexpected problem. You can try loading it again, or return to the homepage.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2.5rem",
              borderTop: "1px solid #292929",
              paddingTop: "1.5rem",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                minHeight: "3rem",
                padding: "0 1.25rem",
                border: "1px solid #f2f2f0",
                backgroundColor: "#f2f2f0",
                color: "#050505",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                minHeight: "3rem",
                alignItems: "center",
                padding: "0 1.25rem",
                border: "1px solid #292929",
                color: "#f2f2f0",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: "0.625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Back to home
            </Link>
          </div>
          <p
            style={{
              margin: "4rem 0 0",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
              fontSize: "0.625rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7d7d7d",
            }}
          >
            Al Shahriar Sowan / Websites &amp; software
          </p>
        </main>
      </body>
    </html>
  );
}
