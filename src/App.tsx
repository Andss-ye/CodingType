import HomePage from './pages/Home.tsx'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <HomePage></HomePage>
      <Analytics/>
    </>
  )
}

export default App;
 