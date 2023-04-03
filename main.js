$ (document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const inputNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>')
        $(`<h3><a href="#">${inputNovaTarefa}</h3>`).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('')
        $('a').click(function() {
            $(this).closest('a').css('text-decoration', 'line-through');
        })
    })
})