
import { fetchHealings } from "@/lib/api";
import { log } from "console";
import Link from "next/link";


  export default function HealingOverview({ allHealings }) {
    console.log(`lenghth : ` + allHealings.length);
    
    return (
      <>
        {allHealings.map(healing => {
          return(
            <Link href={`/healings/${healing.slug}`} className="hover:underline">
              {healing.name}
            </Link>
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
  
  