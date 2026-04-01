import Head from 'next/head'
import CinemaUI from '../components/CinemaUI'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Cinema Lip-Sync</title>
        {/* Load PayPal Script */}
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&currency=USD"></script>
      </Head>

      <main>
        <CinemaUI />
      </main>
    </div>
  )
}
