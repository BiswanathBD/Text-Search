import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log(searchTerm);

  const articleData = [
    {
      id: 1,
      title: "React 19: The End of useMemo?",
      content:
        "With the stable release of the React Compiler, manual memoization is becoming a thing of the past. Learn how the new build-time optimization engine handles dependency tracking automatically, allowing for cleaner component logic and 'blazingly fast' performance without the boilerplate.",
    },
    {
      id: 2,
      title: "The Rise of AI-First Workflows",
      content:
        "In 2026, frontend development isn't just about writing code; it's about orchestrating AI agents. Tools like GitHub Copilot and Cursor have evolved into full-cycle partners that can now generate entire UI systems from high-level architectural prompts while maintaining strict TypeScript standards.",
    },
    {
      id: 3,
      title: "Why WCAG 2.2 is Now the Global Baseline",
      content:
        "Accessibility compliance has moved from 'nice-to-have' to a legal requirement in many regions. This guide covers the essential 2026 updates, including focus appearance, accessible authentication, and why native HTML elements like <dialog> are beating custom ARIA widgets for reliability.",
    },
    {
      id: 4,
      title: "Mastering the TanStack Ecosystem",
      content:
        "From TanStack Query to the new TanStack Start meta-framework, the ecosystem has become the 'Swiss Army Knife' of modern web apps. Discover how to build type-safe, backendless applications using tRPC and server functions to bridge the gap between your client and database.",
    },
    {
      id: 5,
      title: "WebAssembly: Performance Beyond JavaScript",
      content:
        "WebAssembly (Wasm) is no longer just for video editors and games. In 2026, we're seeing Wasm used for heavy client-side data processing and real-time AI inference directly in the browser, providing near-native speeds while keeping user data private and local.",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Search</h1>
        <a
          href="https://github.com/BiswanathBD/Text-Search"
          target="_blank"
          className="bg-black text-white px-4 py-2 rounded-full text-semibold flex items-center gap-2"
        >
          <FaGithub /> <span>Repository</span>
        </a>
      </nav>

      <section className="relative">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search..."
          className="border border-gray-300 py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-4 w-full"
        />
        <p
          onClick={() => setSearchTerm("")}
          className="absolute top-1/2 right-3 hover:text-red-600"
        >
          <RxCross2 size={18} />
        </p>
      </section>
      <p className="text-green-700">
        <strong>{articleData.length} posts</strong> were found.
      </p>
      <article>
        {articleData.map((article) => (
          <div key={article.id} className="border-b border-gray-300 py-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.content}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default App;
