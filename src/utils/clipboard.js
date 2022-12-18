import { $, apiUrl, endp } from '../api/getResponse'

const clip = $('.btn-clipboard')
const iconImg = $('.icon-clip')

clip.addEventListener('click', () => {
   
  iconImg.src = './icons/clipboard-check.svg'

  updateClipboard(`${apiUrl}${endp.value}`)

  setTimeout(() => {
    iconImg.src = './icons/clipboard.svg'
  }, 1000)

  

})

const updateClipboard = (newClip) => {
  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });
}