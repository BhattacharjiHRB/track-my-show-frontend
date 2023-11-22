import EventCard from '@/components/cards/EventCard'
import ShowCard from '@/components/cards/ShowCard'
import BuyTicketCard from '@/components/cards/BuyTicketCard'
import ShowDateCard from '@/components/cards/ShowDateCard'
import PicCarousel from '@/components/shared/PicCarousel'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 p-24">
     <h1>TMS Components</h1>
     <EventCard />
     <ShowCard />
     <BuyTicketCard />
     <ShowDateCard />
     <PicCarousel />
     
    </main>
  )
}
