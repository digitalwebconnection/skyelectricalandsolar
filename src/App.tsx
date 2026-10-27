import { useEffect } from 'react'
import { Layout } from './components/layout'
import { HomePage } from './pages'
import { WebsiteLoader, SmoothScrollProvider } from './components/common'
import { siteConfig } from './config/site'

export function App() {
  useEffect(() => {
    // Ensure document title matches Sky Electrical & Solar in browser tab
    document.title = siteConfig.title

    // Ensure meta description tag
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', siteConfig.description)

    // Force live browser tab favicon update
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement
    if (favicon) {
      favicon.href = `/favicon.svg?v=${Date.now()}`
    }
  }, [])

  return (
    <SmoothScrollProvider>
      {/* 3D Gyroscope Orbital Preloader with Typing Animation */}
      <WebsiteLoader minDuration={1800} />
      
      <Layout>
        <HomePage />
      </Layout>
    </SmoothScrollProvider>
  )
}

export default App
