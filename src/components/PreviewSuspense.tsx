// "use-client";

// import { PreviewSuspense } from "next-sanity/preview";
// import PreviewBlogList from "./PreviewBlogList";
// import { groq } from "next-sanity";

// const query = groq`
// *[_type=="post"] {
//   ...,
//   author->,
//   categories[]->,
// } | order(_createdAt desc)
// `;

// export default function PrevSuspense(){
//     return (
//         <PreviewSuspense
//             fallback={
//                 <div role="status">
//                 <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
//                     Loading Preview Data
//                 </p>
//                 </div>
//             }
//             >
//             <PreviewBlogList query={query} />
//         </PreviewSuspense>
//     )
// }