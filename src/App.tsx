import { Timeline } from './components/sections/Timeline'
import { Shakti } from './components/sections/Shakti'
import { WhyWeExist } from './components/sections/WhyWeExist'
import { KnowledgeCenter } from './components/sections/KnowledgeCenter'

import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Seo } from './components/Seo'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Process } from './components/sections/Process'
import { Testimonials } from './components/sections/Testimonials'

import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
function App() {
  // useScrollMotion()

  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
{/* <AboutSRaja /> */}
<Timeline />
<WhyWeExist />
<Shakti />
<KnowledgeCenter />
<FAQ />
<Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
