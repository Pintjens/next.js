import { fetchWorkshops } from "@/lib/api";
import Link from "next/link";


  export default function WorkshopOverview({ allWorkshops }) {

    return (
      <>
        <h1>Workshops</h1>

        <h2>Under costruction, check back later</h2>
        {allWorkshops.map(workshop => {
          return(
            <Link href={`/workshops/${workshop.slug}`} className="hover:underline">
              {workshop.name}

            </Link>
          )
        })}
      </>
    )
  }
  
  export async function getStaticProps({ preview = null }) {
    const allWorkshops = (await fetchWorkshops()) || []
    console.log(allWorkshops);
    
    return {
      props: { allWorkshops: allWorkshops, preview},
    }
  }
  
  