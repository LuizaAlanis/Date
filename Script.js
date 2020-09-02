function start(){
    var dia = parseInt(document.getElementById('dia').value); //input do dia
    var mes = parseInt(document.getElementById('mes').value); //input do mes
    var ano = parseInt(document.getElementById('ano').value); //input do ano

    if(isNaN(document.getElementById('dia').value)){
        window.alert("Digite apenas números");
        document.getElementById('dia').value="";
        document.getElementById('dia').focus(); 
    }else{ 
        if ((parseInt(document.getElementById('dia').value) < 1) || (parseInt(document.getElementById('dia').value)> 31)){
            window.alert("Digite apenas dias válidos!");
            document.getElementById("dia").value=""; 
            document.getElementById("dia").focus();
        }
    }

    var hoje = new Date(); //instancia do elemento date
    var diaAt = hoje.getDate(); //dia atual
    var mesAt = hoje.getMonth()+1; //mes atual
    var anoAt = hoje.getFullYear(); //ano atual

    hoje.setDate(dia);
    if(dia==31) hoje.setMonth(mes-3);
    else hoje.setMonth(mes-1);
    hoje.setFullYear(ano);

    var idade = anoAt - ano;
    if (mes > mesAt)
        idade -= 1;
    else if (dia > diaAt)
        idade -= 1;
    document.getElementById('idade').value = idade;

    var nome_semana = new Array();
    nome_semana[0]="Domingo";
    nome_semana[1]="Segunda";
    nome_semana[2]="Terça";
    nome_semana[3]="Quarta";
    nome_semana[4]="Quinta";
    nome_semana[5]="Sexta";
    nome_semana[6]="Sábado";
    document.getElementById('semana').value = nome_semana[hoje.getDay()];

    var nome_mes = new Array();
    nome_mes[0]="Janeiro";
    nome_mes[1]="Fevereiro";
    nome_mes[2]="Março";
    nome_mes[3]="Abril";
    nome_mes[4]="Maio";
    nome_mes[5]="Junho";
    nome_mes[6]="Julho";
    nome_mes[7]="Agosto";
    nome_mes[8]="Setembro";
    nome_mes[9]="Outubro";
    nome_mes[10]="Novembro";
    nome_mes[11]="Dezembro";
    document.getElementById('extenso').value = nome_mes[mes-1];

    if (( dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)){
        document.getElementById('signo').value = "Aquário";  
      }
      else if(( dia >= 19 && mes == 2 || dia <= 20 && mes == 3)){
       document.getElementById('signo').value = "Peixes";
      }
      else if(( dia >= 21 && mes == 3 )||( dia <= 20 && mes== 4)){
       document.getElementById('signo').value = "Aries";
      }
      else if(( dia >= 21 && mes == 4 )|| (dia <= 20 && mes== 5)){
       document.getElementById('signo').value = "Touro";
      }
      else if(( dia >= 21 && mes == 5 || dia <= 20 && mes== 6)){
       document.getElementById('signo').value = "Gemeos";
      }
      else if(( dia >= 21 && mes == 6)|| (dia <= 22 && mes== 7)){
       document.getElementById('signo').value = "Cancer";
      }
      else if(( dia >= 23 && mes == 7)|| (dia <= 22 && mes== 8)){
       document.getElementById('signo').value = "Leão";
      }
      else if(( dia >= 23 && mes == 8)|| (dia <= 22 && mes== 9)){
       document.getElementById('signo').value = "Virgem";
      }
      else if( (dia >= 23 && mes == 9) || (dia <= 22 && mes== 10)){
       document.getElementById('signo').value = "Libra";
      }
      else if(( dia >= 23 && mes == 10 )|| (dia <= 21 && mes== 11)){
       document.getElementById('signo').value = "Escorpião";
      }
      else if(( dia >= 22 && mes == 11 )||( dia <= 21 && mes== 12)){
       document.getElementById('signo').value = "Sagitário";
      }
      else if(( dia >= 22 && mes == 12)|| (dia <= 20 && mes== 1)){
       document.getElementById('signo').value = "Capricórnio";
      }
}
function foco(){
    document.getElementById('dia').value = "";
    document.getElementById('mes').value = "";
    document.getElementById('ano').value = "";
    document.getElementById('extenso').value = "";
    document.getElementById('semana').value = "";
    document.getElementById('signo').value = "";
    document.getElementById('idade').value = "";
    document.getElementById("dia").focus();
}