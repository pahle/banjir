import { CallToAction } from '@/components/CallToAction'
import { Dampak } from '@/components/Dampak'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pencegahan } from '@/components/Pencegahan'
import { Penyebab } from '@/components/Penyebab'
import { Jenis } from '@/components/Jenis'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Penyebab /> {/* Penyebab */}
        <Jenis /> {/* Jenis */}
        {/* <CallToAction /> */}
        <Dampak /> {/* Dampak */}
        {/* <Testimonials /> */}
        <Pencegahan /> {/* Pencegahan */}
      </main>
      <Footer />
    </>
  )
}
