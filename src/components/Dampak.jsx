import Image from 'next/image'

import { Container } from '@/components/Container'
import dampak1 from '@/images/screenshots/dampak1.jpg'
import dampak2 from '@/images/screenshots/dampak2.jpg'
import dampak3 from '@/images/screenshots/dampak3.jpg'
import dampak4 from '@/images/screenshots/dampak4.jpg'
import dampak5 from '@/images/screenshots/dampak5.jpg'
import dampak6 from '@/images/screenshots/flood.jpg'
import dampak7 from '@/images/screenshots/puddle.jpg'

const faqs = [
  [
    {
      question: 'Korban Jiwa dan Luka-luka',
      answer: 'Banjir dapat mengakibatkan korban jiwa dan luka-luka serius.',
    },
    {
      question: 'Kerusakan Properti',
      answer: 'Rumah, bisnis, dan infrastruktur bisa hancur atau rusak parah.',
    },
  ],
  [
    {
      question: 'Kerugian Ekonomi',
      answer:
        'Banjir bisa menyebabkan kerugian ekonomi besar akibat kerusakan dan gangguan aktivitas ekonomi.',
    },
    {
      question: 'Kerugian Lingkungan',
      answer: 'Banjir dapat merusak ekosistem sungai dan daerah pesisir.',
    },
  ],
  [
    {
      question: 'Krisis Air Bersih',
      answer: 'Air minum yang tercemar dapat menyebabkan krisis air bersih.',
    },
  ],
]

const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        image: dampak1,
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        image: dampak2,
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        image: dampak3,
      },
    },
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        image: dampak6,
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        image: dampak5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        image: dampak4,
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        image: dampak7,
      },
    },
  ],
]

export function Dampak() {
  return (
    <section
      id="dampak"
      className="relative overflow-hidden py-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Dampak Banjir
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl border-2 bg-white shadow-xl shadow-slate-900/10">
                      <div className="overflow-hidden rounded-xl bg-slate-50">
                        <Image
                          className="w-full object-cover"
                          src={testimonial.author.image}
                          alt=""
                          width={0}
                          height={0}
                          unoptimized
                        />
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
