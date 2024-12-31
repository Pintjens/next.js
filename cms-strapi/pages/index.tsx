import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { fetchPosts } from '@/lib/api'
import Head from 'next/head'


export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0]
  console.log(allPosts);
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <p>TEst</p>
            // <HeroPost
            //   title={heroPost.title}
            //   coverImage={heroPost.coverImage}
            //   date={heroPost.date}
            //   author={heroPost.author}
            //   slug={heroPost.slug}
            //   excerpt={heroPost.excerpt}
            // />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await fetchPosts()) || []
  return {
    props: { allPosts, preview },
  }
}
