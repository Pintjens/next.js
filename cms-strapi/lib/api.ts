import { log } from "console";

async function getStrapiData(query : string) {
  try{
    log(query)
    const response = await fetch(process.env.BASE_API_URL + query);
    const data = await response.json();
    log(query, data.data)
    return data.data
  }
  catch(error){
    console.error(error);
  }
}

export async function fetchGlobals(){
  const data = await getStrapiData("global?populate=*");
  return data;
}

export async function fetchPosts() {
  const data = await getStrapiData("posts");
  return data;
}


// export async function getPreviewPostBySlug(slug) {
//   const data = await fetchAPI(
//     `
//   query PostBySlug($where: JSON) {
//     posts(where: $where) {
//       slug
//     }
//   }
//   `
//   )
//   return data?.posts[0]
// }

