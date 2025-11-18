if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.log('sw registered', reg)
    }).catch(err => console.error('sw reg failed', err))
  })
}
