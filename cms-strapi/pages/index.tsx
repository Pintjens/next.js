
import MoreStories from '@/components/more-stories'
import Intro from '@/components/intro'
import { fetchHealings } from '@/lib/api'
import Head from 'next/head'


export default function Index({ allHealings }) {
  return (
    <>
        {allHealings.map(healing => {
          return(
            <p> name {healing.name}</p>
          )
        })}
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allHealings = (await fetchHealings()) || []
  console.log(allHealings);
  
  return {
    props: { allHealings, preview},
  }
}

