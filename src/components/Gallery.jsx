function Gallery({ items }) {
  return (
    <section id="gallery">
      <h2>Галерея</h2>
      {items.map((photo, index) => (
        <figure key={`${photo.image}-${index}`}>
          <img src={photo.image} alt={photo.alt} loading="lazy" />
          {photo.caption && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </section>
  )
}

export default Gallery
