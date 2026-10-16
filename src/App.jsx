import { useEffect, useState } from 'react'
import Prices from './components/Prices.jsx'
import News from './components/News.jsx'
import Gallery from './components/Gallery.jsx'
import Contacts from './components/Contacts.jsx'

async function loadJson(path) {
  const response = await fetch(path, { cache: 'no-store' })
  if (!response.ok) throw new Error(`Не удалось загрузить ${path}`)
  return response.json()
}

function App() {
  const [content, setContent] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      loadJson('/content/prices.json'),
      loadJson('/content/news.json'),
      loadJson('/content/gallery.json'),
      loadJson('/content/contacts.json'),
    ])
      .then(([prices, news, gallery, contacts]) => {
        setContent({ prices: prices.items, news: news.items, gallery: gallery.items, contacts })
      })
      .catch(() => setError(true))
  }, [])

  return (
    <main>
      {error && <p role="alert">Не удалось загрузить данные. Обновите страницу.</p>}
      {!content && !error && <p role="status">Загружаем информацию…</p>}
      {content && (
        <>
          <Prices items={content.prices} />
          <News items={content.news} />
          <Gallery items={content.gallery} />
          <Contacts details={content.contacts} />
        </>
      )}
    </main>
  )
}

export default App
