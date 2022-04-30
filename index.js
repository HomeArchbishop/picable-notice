$.getJSON('./version/latest.json', json => {
  document.querySelectorAll('.version-slot').forEach(dom => {
    dom.innerHTML = 'v' + json.latest
  })
})
