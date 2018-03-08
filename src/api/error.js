export function is404 (status) {
  if (parseInt(status) === 404) {
    this.$router.push('/login')
    return false
  }
}
