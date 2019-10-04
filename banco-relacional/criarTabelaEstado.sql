-- Criando a tabela estado!
-- NOT NULL torna o campo obrigatório
-- Não vai aceitar duplicidade por conta do UNIQUE
-- Definição da chave primária
create table estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,    
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM ('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),                          
    UNIQUE KEY (nome),                         
    UNIQUE KEY (sigla)
);