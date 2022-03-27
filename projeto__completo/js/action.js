let formulario = new URLSearchParams(location.search);


formulario.forEach(function(valor, key) {
    console.log(valor, key);
    if (typeof valor !== 'undefined') {
        if (key == 'name') {
            document.getElementById('texto__nome').innerHTML = valor.toUpperCase();
        }
        if (key == 'nacionalidade') {
            document.getElementById('linha__perfil').innerHTML = valor;

        }
        if (key == 'estado__civil') {
            let campo = document.getElementById('linha__perfil').innerText;
            let valor__campo = `${campo}, ${valor}`;
            document.getElementById('linha__perfil').innerHTML = valor__campo;
        }
        if (key == 'data') {
            let campo = document.getElementById('linha__perfil').innerText;
            // pegando a data atual
            var dataAtual = new Date();
            var dia = dataAtual.getDate();
            var mes = (dataAtual.getMonth() + 1);
            var ano = dataAtual.getFullYear();
            // trabalhando com a data fornecida pelo usuario
            let data = valor.split('-');
            let dia__usuario = data[2];
            let mes__usuario = data[1];
            let ano__usuario = data[0];

            if (mes > mes__usuario || mes == mes__usuario && dia > dia__usuario) {
                let idade = ano - ano__usuario;
                let valor__campo = `${campo}, ${idade} anos`;
                document.getElementById('linha__perfil').innerHTML = valor__campo;

            } else {
                let idade = (ano - ano__usuario) - 1;
                let valor__campo = `${campo}, ${idade} anos`;
                document.getElementById('linha__perfil').innerHTML = valor__campo;
            }
        }
        if (key == 'cidade') {
            document.getElementById('linha__endereco').innerHTML = valor;
            console.log(valor);
        }
        if (key == 'bairro') {
            let campo = document.getElementById('linha__endereco').innerText;
            let valor__campo = `${valor} – ${campo}`;
            document.getElementById('linha__endereco').innerHTML = valor__campo;
        }
        if (key == 'uf') {
            let campo = document.getElementById('linha__endereco').innerText;
            let valor__campo = `${campo} - ${valor}`;
            document.getElementById('linha__endereco').innerHTML = valor__campo;
        }
        if (key == 'telefone') {
            let tel = valor.split('');
            document.getElementById('linha__telefone').innerHTML = `Cel. (${tel[0]}${tel[1]}) ${tel[2]} ${tel[3]}${tel[4]}${tel[5]}${tel[6]} - ${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
        }
        if (key == 'email') {
            document.getElementById('linha__email').innerHTML += `E-mail: ${valor}`;
        }
        if (key == 'resumo') {
            document.getElementById('linha__resumo').innerHTML = valor;
        }


        if (key == 'escola__nome') {
            document.getElementById('linha__forma').innerHTML = valor;
        }
        if (key == 'nome__curso') {
            let form = document.getElementById('linha__forma').innerHTML;
            let valor__campo = `<span class="bold">${valor}</span>, ${form}`;
            document.getElementById('linha__forma').innerHTML = valor__campo;
        }
        if (key == 'situação__formacao__1') {
            let form = document.getElementById('linha__forma').innerHTML;
            let valor__campo = `${form} — ${valor}`;
            document.getElementById('linha__forma').innerHTML = valor__campo;
        }


        if (key == 'escola__nome__2') {
            document.getElementById('linha__forma2').innerHTML = valor;
        }
        if (key == 'nome__curso__2') {
            let form = document.getElementById('linha__forma2').innerHTML;
            let valor__campo = `<span class="bold">${valor}</span>, ${form}`;
            document.getElementById('linha__forma2').innerHTML = valor__campo;
        }
        if (key == 'situação__formacao__2') {
            let form = document.getElementById('linha__forma2').innerHTML;
            let valor__campo = `${form} — ${valor}`;
            document.getElementById('linha__forma2').innerHTML = valor__campo;
        }
        // uu pra evitar formação vazio
        if (key == 'nome__curso__2') {
            if (valor == '') {
                document.getElementById('linha__forma2').innerHTML = '';
            }
        }


        // curso 1
        if (key == 'local__curso1') {
            document.getElementById('linha__curso').innerHTML = valor;
        }
        if (key == 'nome__curso1') {
            let form = document.getElementById('linha__curso').innerHTML;
            let valor__campo = `<span class="bold">${valor}</span>, ${form}`;
            document.getElementById('linha__curso').innerHTML = valor__campo;
        }
        if (key == 'situação__curso__1') {
            let form = document.getElementById('linha__curso').innerHTML;
            let valor__campo = `${form} — ${valor}`;
            document.getElementById('linha__curso').innerHTML = valor__campo;
        }

        // uu pra evitar curso 1 vazio
        if (key == 'nome__curso1') {
            if (valor == '') {
                document.getElementById('linha__curso').innerHTML = '';
            }
        }
        // curso 2
        if (key == 'local__curso2') {
            document.getElementById('linha__curso2').innerHTML = valor;
        }
        if (key == 'nome__curso2') {
            let form = document.getElementById('linha__curso2').innerHTML;
            let valor__campo = `<span class="bold">${valor}</span>, ${form}`;
            document.getElementById('linha__curso2').innerHTML = valor__campo;
        }
        if (key == 'situação__curso__2') {
            let form = document.getElementById('linha__curso2').innerHTML;
            let valor__campo = `${form} — ${valor}`;
            document.getElementById('linha__curso2').innerHTML = valor__campo;
        }
        // uu pra evitar curso 1 vazio
        if (key == 'nome__curso2') {
            if (valor == '') {
                document.getElementById('linha__curso2').innerHTML = '';
            }
        }

        // curso 3
        if (key == 'local__curso3') {
            document.getElementById('linha__curso3').innerHTML = valor;
        }
        if (key == 'nome__curso3') {
            let form = document.getElementById('linha__curso3').innerHTML;
            let valor__campo = `<span class="bold">${valor}</span>, ${form}`;
            document.getElementById('linha__curso3').innerHTML = valor__campo;
        }
        if (key == 'situação__curso__3') {
            let form = document.getElementById('linha__curso3').innerHTML;
            let valor__campo = `${form} — ${valor}`;
            document.getElementById('linha__curso3').innerHTML = valor__campo;
        }
        // uu pra evitar curso 1 vazio
        if (key == 'nome__curso3') {
            if (valor == '') {
                document.getElementById('linha__curso3').innerHTML = '';
            }
        }
        if (key == 'objetivo') {
            document.getElementById('linha__objetivo').innerHTML = valor;
        }

        // empresa 1
        if (key == 'name_empresa__1') {
            document.getElementById('linha__historico').innerHTML = valor;
        }
        if (key == 'cargo_empresa__1') {
            let form = document.getElementById('linha__historico').innerHTML;
            let valor__campo = `<span class="bold">● ${form}</span><span class="italico"> — ${valor}</span>`;
            document.getElementById('linha__historico').innerHTML = valor__campo;
        }
        if (key == 'inicio_empresa__1') {
            let form = document.getElementById('linha__historico').innerHTML;
            let valor__campo = `${form} de ${valor}`;
            document.getElementById('linha__historico').innerHTML = valor__campo;
        }
        if (key == 'saida_empresa__1') {
            let form = document.getElementById('linha__historico').innerHTML;
            let valor__campo = `${form} a ${valor}`;
            document.getElementById('linha__historico').innerHTML = valor__campo;
        }
        if (key == 'resumo__empresa1') {
            document.getElementById('linha__historico__descricao').innerHTML = valor;
        }
        // uu pra evitar  empresa 1 vazia
        if (key == 'saida_empresa__1') {
            if (valor == '') {
                document.getElementById('linha__historico').innerHTML = '';
                document.getElementById('linha__historico__descricao').innerHTML = '';
            }
        }



        // empresa 2
        if (key == 'name_empresa__2') {
            document.getElementById('linha__historico2').innerHTML = valor;
        }
        if (key == 'cargo_empresa__2') {
            let form = document.getElementById('linha__historico2').innerHTML;
            let valor__campo = `<span class="bold">● ${form}</span><span class="italico"> — ${valor}</span>`;
            document.getElementById('linha__historico2').innerHTML = valor__campo;
        }
        if (key == 'inicio_empresa__2') {
            let form = document.getElementById('linha__historico2').innerHTML;
            let valor__campo = `${form} de ${valor}`;
            document.getElementById('linha__historico2').innerHTML = valor__campo;
        }
        if (key == 'saida_empresa__2') {
            let form = document.getElementById('linha__historico2').innerHTML;
            let valor__campo = `${form} a ${valor}`;
            document.getElementById('linha__historico2').innerHTML = valor__campo;
        }
        if (key == 'resumo__empresa2') {
            document.getElementById('linha__historico__descricao2').innerHTML = valor;
        }
        // uu pra evitar  empresa 2 vazia
        if (key == 'saida_empresa__2') {
            if (valor == '') {
                document.getElementById('linha__historico2').innerHTML = '';
                document.getElementById('linha__historico__descricao2').innerHTML = '';
            }
        }

        // empresa 3
        if (key == 'name_empresa__3') {
            document.getElementById('linha__historico3').innerHTML = valor;
        }
        if (key == 'cargo_empresa__3') {
            let form = document.getElementById('linha__historico3').innerHTML;
            let valor__campo = `<span class="bold">● ${form}</span><span class="italico"> — ${valor}</span>`;
            document.getElementById('linha__historico3').innerHTML = valor__campo;
        }
        if (key == 'inicio_empresa__3') {
            let form = document.getElementById('linha__historico3').innerHTML;
            let valor__campo = `${form} de ${valor}`;
            document.getElementById('linha__historico3').innerHTML = valor__campo;
        }
        if (key == 'saida_empresa__3') {
            let form = document.getElementById('linha__historico3').innerHTML;
            let valor__campo = `${form} a ${valor}`;
            document.getElementById('linha__historico3').innerHTML = valor__campo;
        }
        if (key == 'resumo__empresa3') {
            document.getElementById('linha__historico__descricao3').innerHTML = valor;
        }
        // uu pra evitar  empresa 3 vazia
        if (key == 'saida_empresa__3') {
            if (valor == '') {
                document.getElementById('linha__historico3').innerHTML = '';
                document.getElementById('linha__historico__descricao3').innerHTML = '';
            }
        }
        if (key == 'outros__conhecimentos') {
            document.getElementById('linha__outros').innerHTML = valor;
        }

    }
});

let exp1 = document.getElementById('linha__historico').innerHTML;
let exp2 = document.getElementById('linha__historico2').innerHTML;
let exp3 = document.getElementById('linha__historico3').innerHTML;

if (exp1 == '' && exp2 == '' && exp3 == '') {
    document.getElementById('linha__historico3').innerHTML = 'Primeiro Emprego';
}
let resum = document.getElementById('linha__resumo').innerHTML;
if (resum == '') {
    document.getElementById('titulo__resumo__cv').innerHTML = '';
}