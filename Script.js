var date = new Date();

var dia = date.getDate();
var mes = date.getMonth();
var ano = date.getFullYear();
var semana = date.getDay();

/*
    switch(mes){
        case 1 :
            mes = "Janeiro"; break;
        case 2 :
            mes = "Fevereiro"; break;
        case 3 :
            mes = "Março"; break;
        case 4 :
            mes = "Abril"; break;
        case 5 :
            mes = "Maio"; break;
        case 6 :
            mes = "Junho"; break;
        case 7 :
            mes = "Julho"; break;
        case 8 :
            mes = "Agosto"; break;
        case 9 :
            mes = "Setembro"; break;
        case 10 :
            mes = "Outubro"; break;
        case 11 :
            mes = "Novembro"; break;
        default :
            mes = "Dezembro"; break;
    }
*/

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

var nome_semana = new Array();
nome_semana[0]="Domingo";
nome_semana[1]="Segunda";
nome_semana[2]="Terça";
nome_semana[3]="Quarta";
nome_semana[4]="Quinta";
nome_semana[5]="Sexta";
nome_semana[6]="Sábado";

window.document.write("hoje é dia "+dia+" do mês "+nome_mes[mes]+" dia da semana, "+nome_semana[semana]+" do ano "+ano);

