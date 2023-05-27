function verificar () {
   var data = new Date
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length==0||Number (fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente')
   }
   else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number (fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex [0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            // criança
            img.setAttribute('src', 'bebeH.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute ('src', 'jovemH.jpg')
        } else if (idade< 50){
            //adulto
            img.setAttribute ('src', 'adultoH.jpg')
        } else{
            //idoso
            img.setAttribute ('src', 'velhoH.jpg')
            
        }
        
     } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            // criança
            img.setAttribute('src', 'bebeM.jpg')
        } else if ( idade < 21){
            //jovem
            img.setAttribute('src', 'jovemM.jpg')
        } else if (idade< 50){
            //adulto
            img.setAttribute('src','adultaM.jpg')
        } else{
            //idoso
            img.setAttribute('src', 'velhaM.jpg')
        }
    }    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }





}



