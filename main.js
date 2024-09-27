$(document).ready(function(){
    $('#botao-abrir-form').click(function(){
        $('form').slideDown();
    });

    $('#botao-fechar-form').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa-nova').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        const botaoLimpar = $('<button type="button" class="botao-limpar-tarefa">Limpar tarefa</button>');
        
        novoItem.append(botaoLimpar);
        
        $('ul').append(novoItem);
        
        $('#nome-tarefa-nova').val('');

        botaoLimpar.click(function() {
            novoItem.remove();
        });

        novoItem.click(function() {
            $(this).toggleClass('finalizada');
        });
    });
});
