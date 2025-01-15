import { fetchWorkshops } from "@/lib/api";
import Link from "next/link";


  export default function WorkshopOverview({ allWorkshops }) {

    return (
      <>
        <h1>Workshops</h1>
        <section id="workshops-overview">
        {allWorkshops.map(workshop => {
          return(
            <Link href={`/workshops/${workshop.slug}`} className="hover:underline">
              {workshop.name}

            </Link>
          )
        })}
        </section>
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
  
  