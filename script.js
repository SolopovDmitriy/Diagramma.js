(function(){
    window.addEventListener('load', function (){
        const choice = prompt('Введите год')
        const yearIndex = choice === 2018 ? 0 : 1
        const span = document.getElementById('year')
        span.innerHTML = choice

        var drawArrow = function (ctx, x, y,  lenght, dir, w, h, color){
ctx.beginPath();
ctx.moveTo(x, y);
switch(dir){
    case 0:{
        ctx.lineTo(x, y - lenght);
        ctx.lineTo(x - h / 2, y - lenght + w);
        ctx.lineTo(x + h / 2, y - lenght + w);
        ctx.lineTo(x, y - lenght);
        break;
    }
    case 1:{
        // x = 100
        // y = 550
        // lenght = 650
        // w = 15
        // h = 5

        // ctx.lineTo(x + lenght, y);
        // ctx.lineTo(x + lenght - w, y - h / 2);
        // ctx.lineTo(x + lenght - w, y + h / 2);
        // ctx.lineTo(x + length, y);

        ctx.lineTo(x + lenght, y); // horizontal line
        ctx.lineTo(x + lenght - w, y - h / 2);
        ctx.lineTo(x + lenght - w, y + h / 2);
        ctx.lineTo(x + lenght, y);

break;
    }
    case 2:{
        break;
    }

    case 3:{
        break;
    }


}
ctx.strokeStyle = color;
ctx.fill();
ctx.stroke();
ctx.closePath();
        }

var canvas = this.document.querySelector('#myCanvas');
      if (canvas == null) return;

      var ctx = canvas.getContext('2d');
      var cX = 100;
      var cY = canvas.height - 50;
      drawArrow(ctx, cX, cY, canvas.width - 150 /* lenght */, 1 /* dir */, 6 /* w */, 4 /* h */, 'black');
      drawArrow(ctx, cX, cY, canvas.height - 150, 0, 20, 10, 'black')
    //   ctx.beginPath();
    //   ctx.arc(cX, cY, 3, 0, 2* Math.PI);
    //   ctx.rect(xS, yS, canvas.width - 50 - cX, 1);
    //   ctx.strokeStyle='black';
    //   ctx.fill();
    //   ctx.stroke();
    //   ctx.closePath();

    var step = 2000;
    var maxSalary = 0;
    const itemCount = dataSalary[yearIndex].salary.length

    // for (const country of dataSalary[yearIndex].salary) {
    //     if (country.count > maxSalary) {
    //         maxSalary = country.count
    //     }
    // }

    dataSalary[yearIndex].salary.forEach(function (country) {
        if (country.count > maxSalary) {
            maxSalary = country.count;
        }
        // itemCount++;
    });
    var countSteps = Math.ceil(maxSalary / step);
    var stepY = ((canvas.height - 150 - 35) / countSteps);
    const stepX = canvas.width / countSteps
    // console.log(countSteps)
    // console.log(stepY)
    // console.log(stepX);

    for (let i = 1; i < countSteps; i++) {
        ctx.beginPath()
        // cX = 100
        // cY = 550
        // stepY = 52
        // step = 2000

        const muliplier = stepY * i
        const y = cY /* 550 */ - muliplier /* 52 * 1, 2, 3... */

        ctx.moveTo(cX - 5 /* 95 */, y);
        ctx.lineTo(cX + 5, y);
        // text, x, y, maxWidth
        ctx.fillText(step * i, cX - 40, y + 3);
        ctx.stroke();
        ctx.closePath();
    }
    
    for (let i = 1; i < itemCount + 1; i++) {
        ctx.beginPath()
       
        const x = cX + stepX * i /* 100 + 100 * 1, 2, 3... */
        // 200, 300, 400, 500, 600

        ctx.moveTo(x, cY);

        ctx.fillStyle =
            i === 1 || i === 2 ? 'green' :
            i === 3 || i === 4 ? 'yellow' :
            'red'

        const fillHeight = -dataSalary[yearIndex].salary[i - 1].count / 38
        ctx.fillRect(x, cY, -50, fillHeight)
        
        // ctx.fillText(step * i, cX - 40, cY + 3 - stepY * i);
        // ctx.stroke()
        ctx.fillStyle = '#000'
        ctx.font = 'bold 13pt Courier'

        // ctx.moveTo(x, cY)
        // console.log(x)
        // console.log(-fillHeight)
        // ctx.moveTo(x - 50, -fillHeight)
        ctx.fillText(dataSalary[yearIndex].salary[i - 1].count, x - 50, fillHeight + 545, 50 /* max text width */)
        ctx.fillText(dataSalary[yearIndex].salary[i - 1].name, x - 50, cY + 15, 50)// страны прописывает

        ctx.closePath()
    }
});
})()
