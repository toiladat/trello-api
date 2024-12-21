import express from 'express'
const app =express()

const hostname ='localhost'
const port = 8017

app.get('/', (req, res) => {
  res.send('ok')
})
app.listen(port,hostname, () =>{
  console.log(`port is running: http://${hostname}:${port}`);
})