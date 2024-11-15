export default defineEventHandler((event) => {
  console.log(`New ${event.method} request: ${event.path}`)
})
