const apiUrl = 'https://the-infinity-train-api.deno.dev/api'

import JSONFormatter from 'json-formatter-js'

const $ = (q) => document.querySelector(q)
const form = $('.form-send-api')
const endp = $('.input-api')
const div = $('.response')

const getResponseInfinityTrain = async (endpoint) => {
  if ( endpoint === 'init' ){
    const resp = await fetch(`${apiUrl}/test`)
    const data = await resp.text()
    console.log(data)
    return data
  }

  const resp = await fetch(`${apiUrl}${endpoint}`)
  const text = await resp.json()
  return text
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  if ( div.firstChild ){
    div.removeChild(div.firstChild)
  }
  
  const json = await getResponseInfinityTrain(endp.value)
  
  const formatter = new JSONFormatter(json, 3,{
    theme: 'white'
  });
  div.appendChild(formatter.render());
})

const initialData = await getResponseInfinityTrain('init') 
const formatter = new JSONFormatter(initialData, 3,{
  theme: 'white'
});
div.appendChild(formatter.render());