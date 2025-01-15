
async function getStrapiData(query : string) {
  try{

    const response = await fetch(process.env.BASE_API_URL + query);
    const data = await response.json();

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

export async function fetchHealings(){
  const data = await getStrapiData("healings?populate=*");
  return data;
}

export async function fetchHealing(slug : string){
  const data = await getStrapiData("healings?populate=*");
  return data.filter(x => x.slug == slug)[0];
}



export async function fetchWorkshops(){
  const data = await getStrapiData("workshops?populate=*");
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

