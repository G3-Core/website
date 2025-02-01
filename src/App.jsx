import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AppProvider } from './contexts/AppContext'
import ThemeLanguageToggle from './components/ThemeLanguageToggle'

function App() {
  return (
    <AppProvider>
      <div className="font-poppins dark:bg-dark dark:text-dark-text-primary">
        <Header />
        <div className="fixed top-4 right-4 z-50">
          <ThemeLanguageToggle />
        </div>
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
