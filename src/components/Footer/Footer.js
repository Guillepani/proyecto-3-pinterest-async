export const Footer = () => {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.textContent = `© ${new Date().getFullYear()} Pinterest Async by Guillem Paniagua for RockTheCode Bootcamp`
  return footer
}
