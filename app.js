//elementos html
let btns = document.querySelectorAll('.btn');
let numeroDigitado = document.getElementsByName('numeroDigitado');
let seuVoto = document.querySelector('.seu-voto');
let nome = document.querySelector('#nome');
let partido = document.querySelector('#partido');
let foto = document.querySelector('#foto');
let instrucoes = document.querySelector('#instrucoes');
let cargo_politico = document.querySelector('#cargo-politico');

let btnCorrige = document.querySelector("#btnCorrige");
let btnVerde = document.querySelector("#btnVerde");
let btnBranco = document.querySelector("#btnBranco");

//variaveis
let situacao = 'manter';
let NumberInserido = [];
let DataVereadores = [
    {
        numero: 11111,
        nome: "Ronaldo fenomeno",
        partido: 'partidao',
        foto: "assests/a.jpeg"
    },
    {
        numero: 22222,
        nome: "botagofofofof",
        partido: 'dos corações partidos',
        foto: 'assests/b.jpeg'
    },
    {
        numero: 33333,
        nome: "cabeça damibha pica",
        partido: 'cabaçooo',
        foto: 'assests/c.jpeg'
    },
]
let DataPrefeito = [{
    numero: 11,
    nome: 'mannja rola',
    viceNome: 'manja rola2',
    partido: 'roludos',
    foto1: '',
    foto2: '',
}, {
    numero: 22,
    nome: 'trouxa',
    viceNome: 'trouxa2',
    partido: 'tudo lindo e maravilhoso',
    foto1: '',
    foto2: ''
}, {
    numero: 33,
    nome: 'manucelia',
    viceNome: 'maruleila',
    partido: 'x',
    foto1: '',
    foto2: ''
}
];
let instrucoesTXT = `Aperte a tecla \n CONFIRMA para CONFIRMAR este voto \n CORRIGE para REINICIAR este voto.`;
let creatH1 = document.createElement('h1');

//eder, pensa sobre se vc pode colocar duas funções na função digitar e nessas duas funções dar retorno com base na situação, if(situação == null){rodar codigo do prefeito} else if(situação == 'proximo')

function digitar(numero) {
    if (NumberInserido.length <= 4 && situacao == 'manter') {
        NumberInserido.push(parseInt(btns[numero].value))

        NumberInserido.forEach((e, i, a) => {
            numeroDigitado[i].innerHTML = e;
        });

        let NumberCompleto = '';

        NumberInserido.forEach(e => {
            NumberCompleto += e;
        });
        DataVereadores.forEach(e => {
            if (NumberCompleto == e.numero) {

                let creatImg = document.createElement('img');
                creatImg.src = e.foto;
                creatImg.style.width = '100%'

                partido.innerHTML = "Partido: " + e.partido;

                nome.innerHTML = "Nome: " + e.nome;

                instrucoes.innerHTML = instrucoesTXT;
                foto.appendChild(creatImg);

                instrucoes.style.display = 'inline-block';
                seuVoto.style.display = 'inline-block';
                partido.style.display = 'block';
                nome.style.display = 'block';
                foto.style.display = 'inline-block';

                creatH1.style.display = 'none'

            } else if (NumberCompleto != e.numero && NumberCompleto.length >= 5) {
                creatH1.style.display = 'block'

                creatH1.innerHTML = 'Voto nulo';

                document.querySelector('#left').style.display = 'inline-block';
                seuVoto.style.display = 'inline-block';

                creatH1.style.fontWeight = 'bold';
                creatH1.style.textAlign = 'center';
                creatH1.style.marginTop = '20px';

                document.querySelector('.digitados').appendChild(creatH1);

            }
        });

        //usando confirmar
        if (NumberCompleto.length == 5) {
            situacao = 'proximo'
            console.log('passando pro proxino')
        } else {
            situacao = 'manter';
        }


    } else if (situacao == 'proximo' && NumberInserido.length <= 2) {
        NumberInserido.push(parseInt(btns[numero].value))

        NumberInserido.forEach((e, i, a) => {
            numeroDigitado[i].innerHTML = e;
        });

        let NumberCompleto = '';

        NumberInserido.forEach(e => {
            NumberCompleto += e;
        });
        DataPrefeito.forEach(e => {
            if (NumberCompleto == e.numero) {

                let creatImg1 = document.createElement('img');
                let creatImg2 = document.createElement('img');

                creatImg1.src = e.foto1;
                creatImg2.src = e.foto1;

                creatImg1.style.width = '100%';
                creatImg2.style.width = '100%';

                partido.innerHTML = "Partido: " + e.partido;

                nome.innerHTML = "Nome: " + e.nome;

                instrucoes.innerHTML = instrucoesTXT;
                foto.appendChild(creatImg1);
                foto.appendChild(creatImg2);

                instrucoes.style.display = 'inline-block';
                seuVoto.style.display = 'inline-block';
                partido.style.display = 'block';
                nome.style.display = 'block';
                foto.style.display = 'inline-block';

                creatH1.style.display = 'none'

            } else if (NumberCompleto != e.numero && NumberCompleto.length >= 2) {
                creatH1.style.display = 'block'

                creatH1.innerHTML = 'Voto nulo';

                document.querySelector('#left').style.display = 'inline-block';
                seuVoto.style.display = 'inline-block';

                creatH1.style.fontWeight = 'bold';
                creatH1.style.textAlign = 'center';
                creatH1.style.marginTop = '20px';

                document.querySelector('.digitados').appendChild(creatH1);

            }
        });

        //usando confirmar
        if (NumberCompleto.length == 2 && situacao == 'proximo') {
            situacao = 'fim';
            console.log('passado pro final')
        } 
    }
    
}

function apagar() {

    if(situacao == 'fim'){
        situacao = 'proxima';
        console.log(situacao)
    }

    document.querySelector('#left').style.display = 'inline-block';
    numeroDigitado.forEach(e => {
        e.style.display = 'inline-block';
        e.innerHTML = '';
    });

    if(situacao == 'proximo'){
        situacao = 'proximo';
        numeroDigitado[4].style.display = 'none';
        numeroDigitado[3].style.display = 'none';
        numeroDigitado[2].style.display = 'none';
        cargo_politico.innerHTML = '';
    }

    seuVoto.style.display = 'none';
    nome.innerHTML = ''
    partido.innerHTML = ''
    foto.innerHTML = ''
    instrucoes.innerHTML = '';
    creatH1.innerHTML = '';

    NumberInserido.splice(0, NumberInserido.length);
}

function emBranco() {
    apagar();

    numeroDigitado.forEach(e => {
        e.style.display = 'none';
    });

    document.querySelector('#left').style.display = 'inline-block';
    seuVoto.style.display = 'inline-block';

    creatH1.style.fontWeight = 'bold';
    creatH1.style.textAlign = 'center';
    creatH1.style.display = 'block';

    creatH1.textContent = 'VOTO EM BRANCO';
    document.querySelector('.digitados').appendChild(creatH1);
    console.log(situacao)
}

function confirmar() {

    switch (situacao) {
        case 'proximo':
            apagar();

            numeroDigitado[4].style.display = 'none';
            numeroDigitado[3].style.display = 'none';
            numeroDigitado[2].style.display = 'none';

            cargo_politico.innerHTML = 'prefeito';
            break;

        case 'fim':
            apagar();

            document.querySelector('#left').innerHTML = '';
            creatH1.innerHTML = 'Fim';

            creatH1.style.textAlign = 'center';
            document.querySelector('#left').appendChild(creatH1);

            btnBranco.removeEventListener('click', emBranco)
            btnCorrige.removeEventListener('click', apagar)

            break;

        case 'manter':
            return
            break;

        default:
            break;
    }
    console.log(situacao)
}



btnCorrige.addEventListener('click', apagar);
btnVerde.addEventListener('click', confirmar);
btnBranco.addEventListener('click', emBranco);