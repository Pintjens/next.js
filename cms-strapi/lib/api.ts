async function fetchAPI(query) {
  try{

    const response = await fetch(process.env.BASE_API_URL + "posts");
    const data = await response.json();
    return data.data
  }
  catch(error){
    console.error(error);
  }
}

export async function fetchPosts() {
  const data = await fetchAPI("ou");
  return data
}


export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `
  )
  return data?.posts[0]
}

export async function getStrapiData(path : string){

  try{
    const response = await fetch(process.env.BASE_API_URL + path);
    const data = await response.json();
    return {} = data.data
  }
  catch(error){
    console.error(error);
  }
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI("oeu");
  return data?.posts
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url
      }
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
      date
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
  `
  )
  return data
}
