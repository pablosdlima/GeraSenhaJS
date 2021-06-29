import geraSenha from "./geradores"; //import do default

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const gerarSenha = document.querySelector('.gerar-senha');
const chkSimbolos = document.querySelector('.chk-simbolos')

export default () => {
   gerarSenha.addEventListener('click', function() {
        senhaGerada.innerHTML = gera();
   });
};

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha;
}