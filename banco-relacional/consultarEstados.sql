select * from estados

select 
    sigla, 
    nome as 'Nome do estado' 
from estados
where regiao = 'Sudeste'

select nome, 
    regiao,
    populacao
from estados
where populacao >= 10
order by populacao desc --comando desc coloca de maneira decrescente a ordenacao