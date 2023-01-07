$(document).ready(function(){
    $('#box2').hide()
    $('#box').click(function(){
        $('#box').hide(1000, function(){
            $('#box2').show()
        })
    })

    // $('#fade-in-btn').click(function(){
    //     $('.box').fadeToggle(1000)
    // })

    $('#fade-in-btn').click(function(){
        $('.box').animate({
            marginLeft: '10px'
        },1000,function(){
            $(this).remove()
        })
    })

    $('#box').append('<p>Hello World!</p')
    $('#box').prepend('<p>Sebelum testing</p')

    $('#box').after('<br>')
    $('#box').before('<p>Sebelum div #box</p>')

    $('#box2').click(function(){
        $('#box2').css({backgroundColor: 'black'}).slideUp(1000)
    })

    $('#text').attr({id: 'text2', type: 'password'})

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos"
    }).done(function(data){
        $('#todo-list').append(
            data.map(d => (
                `<p>${d.title} - ${d.completed ? "Done" : "Ongoing"}</p>`
            ))
        )
    }).fail(function(e){
        console.log(e)
    })
})
