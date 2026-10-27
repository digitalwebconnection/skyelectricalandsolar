import { Layout } from './components/layout'
import { HomePage } from './pages'
import { WebsiteLoader, SmoothScrollProvider } from './components/common'

export function App() {
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
