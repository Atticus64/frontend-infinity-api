const apiUrl = 'https://the-infinity-train-api.deno.dev/api'
import Prism from 'prismjs'

const $ = (q) => document.querySelector(q)
const prism = $('.prism-container')
const form = $('.form-send-api')
const endp = $('.input-api')

const main = () => {
  let html_with_highlight = Prism.highlight(prism.innerText , Prism.languages.js, 'json'); 
  prism.innerHTML = html_with_highlight;
}

const getResponseInfinityTrain = async (endpoint) => {

  const resp = await fetch(`${apiUrl}${endpoint}?pretty`)
  let text = await resp.text()
  if (!text.includes('\n')) text = JSON.stringify(JSON.parse(text), null, 2)
  return text
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  prism.firstChild.innerHTML = ""
  
  const json = await getResponseInfinityTrain(endp.value)
  
  let html_with_highlight = Prism.highlight(json , Prism.languages.js, 'json'); 
  prism.innerHTML = html_with_highlight;

})

main()

export {
  $,
  apiUrl,
  endp,
  getResponseInfinityTrain
}