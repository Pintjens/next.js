import { fetchWorkshop, fetchWorkshops } from "@/lib/api";


  export default function WorkshopDetailPage({workshop}) {
    
    return(
      <>
        <h1>Detail page for {workshop.name}</h1>
        <p>Under construction</p>
        <p>id: {workshop.id}</p>
      </>
    )
  }
  
  export async function getStaticProps({ preview = null, params }) {

    const workshop = await fetchWorkshop(params.slug);

    return {
      props: { workshop: workshop, preview},
    }
  }
  
  export async function getStaticPaths() {
    const allWorkshops = (await fetchWorkshops()) || []

    let paths = allWorkshops.map( workshop => {
      return(
       {params: {slug: workshop.slug}}
      )
    })

    return {
      paths: paths,
      fallback: false // or 'true' or 'blocking'
    };
  }
  