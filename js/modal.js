function modal() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
            keyboard: false
        }
    })


/*$(document).ready(function() {

    //Monitorar todos os cliques em cida do elemento <a> do nosso documento HTML
    $('a').click(function(e) {
        e.preventDefault()

        //Criar uma vairável local que receba o atributo href do link

        let url = $(this).attr('id')

        $('.modal-title').empty()
        $('.modal-body').empty()

        alert(url)

        //Verificar qual conteúfo carregar

        switch (url) {
            //Se for a pag sobre mim
            case 'prof1':
                $('.modal-title').append('Professor 1 ')
                $('.modal-body').append(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi corrupti eveniet ut quae nobis officiis non accusantium, ducimus aliquid delectus iste, cumque minima atque obcaecati magnam, deleniti doloremque rerum.`)
                $('#modal-info').modal('show')
                break
                //Se for a pag trabalhos
            case 'prof2':
                $('.modal-title').append('Professor 2 ')
                $('.modal-body').append(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi corrupti eveniet ut quae nobis officiis non accusantium, ducimus aliquid delectus iste, cumque minima atque obcaecati magnam, deleniti doloremque rerum.`)
                $('#modal-info').modal('show')
                break
                //Se for a pag parceiros
            case 'prof3':
                $('.modal-title').append('Professor 3 ')
                $('.modal-body').append(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi corrupti eveniet ut quae nobis officiis non accusantium, ducimus aliquid delectus iste, cumque minima atque obcaecati magnam, deleniti doloremque rerum.`)
                $('#modal-info').modal('show')
                break
        }
    })

})*/