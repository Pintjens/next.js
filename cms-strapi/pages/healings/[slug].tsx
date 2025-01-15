import { fetchHealing, fetchHealings } from "@/lib/api";


  export default function Page({healing}) {
    
    return(
      <>
        <h1>Detail page for {healing.name}</h1>
        <p>Under construction</p>
      </>
    )
  }
  
  export async function getStaticProps({ preview = null, params }) {

    const healing = await fetchHealing(params.slug);

    return {
      props: { healing, preview},
    }
  }
  
  export async function getStaticPaths() {
    const allHealings = (await fetchHealings()) || []

    let paths = allHealings.map( healing => {
      return(
       {params: {slug: healing.slug}}
      )
    })

    return {
      paths: paths,
      fallback: false // or 'true' or 'blocking'
    };
  }
  