import { $, apiUrl, endp } from '../api/getResponse'

const clip = $('.btn-clipboard')

clip.addEventListener('click', () => {
   
  updateClipboard(`${apiUrl}${endp.value}`)

  clip.ariaLabel = "Copied"
  clip.classList.add('hint--success')
})

clip.addEventListener('mouseleave', () => {

  clip.ariaLabel = "Copy to clipboard"
  clip.classList.remove('hint--success')

})

const updateClipboard = (newClip) => {
  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });
}