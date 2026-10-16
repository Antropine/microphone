function formatDate(value) {
  const date = new Date(`${value.slice(0, 10)}T00:00:00`)
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(date)
}

function News({ items }) {
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="news">
      <h2>Новости</h2>
      {sortedItems.length === 0 ? (
        <p>Новостей пока нет.</p>
      ) : (
        sortedItems.map((item, index) => (
          <article key={`${item.title}-${index}`}>
            <h3>{item.title}</h3>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <p>{item.body}</p>
            {(item.images ?? []).map((photo, photoIndex) => (
              <figure key={`${photo.image}-${photoIndex}`}>
                <img src={photo.image} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </article>
        ))
      )}
    </section>
  )
}

export default News
