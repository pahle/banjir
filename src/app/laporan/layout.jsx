import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Container } from '@/components/Container'

export default function Laporan({ children }) {
  if (!cookies().get('session')) {
    redirect('/login')
  }
  const cookiesStore = cookies()
  const isLogin = cookiesStore.get('session') ? true : false
  return (
    <>
      <Header isLogin={isLogin} />
      <main className="min-h-[55vh]">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
