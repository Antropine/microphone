function Prices({ items }) {
  return (
    <section id="prices">
      <h2>Цены</h2>
      {items.length === 0 ? (
        <p>Услуги пока не добавлены.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <h3>{item.name}</h3>
              {item.description && <p>{item.description}</p>}
              <p>{new Intl.NumberFormat('ru-RU').format(item.price)} ₽ {item.unit}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Prices
