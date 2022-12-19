import { $, apiUrl, endp } from '../api/getResponse'

const clip = $('.btn-clipboard')
const iconClip = $('.clip-n')
const iconClipCheck = $('.clip-check')

clip.addEventListener('click', () => {
   

  updateClipboard(`${apiUrl}${endp.value}`)

  iconClip.classList.add('hidden')
  iconClipCheck.classList.remove('hidden')
  
  setTimeout(() => {
    iconClip.classList.remove('hidden')
    iconClipCheck.classList.add('hidden')
  }, 500)

  

})

const updateClipboard = (newClip) => {
  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });
}