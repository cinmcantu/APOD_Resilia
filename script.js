document.addEventListener("DOMContentLoaded", function(){
    const data = $('#data')
    const btn = $('#pesquisar')

    carregaApi("")

    $('form').submit(false)

    btn.on('click', function(){
        carregaApi( data.val() )
    })
})

function carregaApi( data ){
    $.ajax({
        'url': 'https://api.nasa.gov/planetary/apod',
        'data': {
            'api_key': 'DEMO_KEY',
            'date': data,
        },
        'success': function( response ){
            botaInformacao(response)
        },
    })
 /*    botaInformacao(objTeste) */
}

function botaInformacao( obj ){
    var elemInfo = $('#informacao')
    var elemImg = $('#fotoNasa')
    var elemData = $('#mostraData')
    var elemImgLeg = $('#imgCopyright')
    var elemTitulo = $('#titulo')

    elemData.text(obj.date.split("-").reverse().join("/"))
    elemImg.attr('src', obj.url)
    elemInfo.text(obj.explanation)
    elemImgLeg.html(`Copyright da imagem: ${obj.copyright}`)
    elemTitulo.text(obj.title)
}

var objTeste = {
    'date' : '2020-12-13',
    'url' : 'https://apod.nasa.gov/apod/image/2012/GemindsXinglong_Steed_960.jpg',
    'explanation' : "Flying at an altitude of 5 meters (just over 16 feet), on April 25 the Ingenuity helicopter snapped this sharp image. On its second flight above the surface of Mars, its color camera was looking back toward Ingenuity's current base at Wright Brothers Field and Octavia E. Butler Landing marked by the tracks of the Perseverance rover at the top of the frame. Perseverance itself looks on from the upper left corner about 85 meters away. Tips of Ingenuity's landing legs just peek over the left and right edges of the camera's field of view. Its record setting fourth flight completed on April 30, Ingenuity collected images of a potential new landing zone before returning to Wright Brothers Field. Ingenuity's fifth flight would be one-way though as the Mars aircraft moves on to the new airfield, anticipating a new phase of operational demonstration flights.",
    'copyright' : 'Cinthia Eu Mesma',
    'title': 'Uma Imagem da hora',
}