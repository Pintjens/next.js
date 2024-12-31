import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import PostBody from '@/components/post-body'
import MoreStories from '@/components/more-stories'
import { Header } from '@/components/header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import PostTitle from '@/components/post-title'
import { fetchGlobals, fetchPosts} from '@/lib/api'
import Head from 'next/head'
import { log } from 'console'

export default function Post({ post, morePosts, preview, metaData: globalData }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview} globalData={globalData}>
      <Container>
        <Header h1="Roosenhart" imageUrl={globalData.logo.url}/>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with 
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  
  const data = await fetchPosts()
  //const content = await markdownToHtml(data?.posts[0]?.content || '')
  const globalData = await fetchGlobals();

  return {
    props: {
      preview,
      post: {
        ...data[0],
        //content,
      },
      morePosts: data,
      metaData: {
        title: globalData.defaultSeo.metaTitle,
        description: globalData.defaultSeo.metaDescription,
        logo: globalData.logo,
        icons: {
          icon: globalData.favicon.url,
        },
      }
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await fetchPosts()
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}
