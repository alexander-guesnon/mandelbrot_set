const app = document.getElementById('app')
const canvas = document.createElement('canvas')
const [height, width] = [200,300]
const ID = 'image'
canvas.id = ID
canvas.width = width
canvas.height = height

const ctx = canvas.getContext('2d')
const data = ctx.createImageData(width,height)
for(let i = 0; i < data.data.length; i++){
 if( (i + 1) % 4 === 0 && i != 0){
    data.data[i]=255
  }
}

ctx.putImageData(data,0,0)
//console.log(data)
app.appendChild(canvas)
