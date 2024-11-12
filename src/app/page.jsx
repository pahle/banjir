import { CallToAction } from '@/components/CallToAction'
import { Dampak } from '@/components/Dampak'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pencegahan } from '@/components/Pencegahan'
import { Penyebab } from '@/components/Penyebab'
import { Jenis } from '@/components/Jenis'
import { Testimonials } from '@/components/Testimonials'
import { cookies } from 'next/headers'

export default function Home() {
  const cookiesStore = cookies()
  const isLogin = cookiesStore.get('session') ? true : false
  return (
    <>
      <Header isLogin={isLogin} />
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
