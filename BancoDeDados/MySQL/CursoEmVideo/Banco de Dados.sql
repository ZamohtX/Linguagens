/*Cria Banco de Dados*/
create database cadastro
	/*Definindo utf8 como charset padrão para o BD*/
default character set utf8 
default collate utf8_general_ci;


/*Cria a Tabela*/
create table pessoas (
		/*Campo ID -> campo será obrigatorio e o valor será auto incrementado */
	id int not null auto_increment,
		/*Campo Nome -> varchar(numeroMaximoDeCaracteres) e o campo será obrigatório*/
	nome varchar(30) not null,
		/*Campo Nascimento -> vai receber uma data */ 
    nascimento date,
		/*Campo Sexo -> enum('ValorAceito1','ValorAceito2') vai fazer o campo aceitar somente um desses dois valores*/
    sexo enum('M','F'),
		/*Campo Peso -> decimal(numeroTotalDeCasasDecimais, casasDepoisDaVirgula) vai formatar o valor recebido da maneira especificada */
    peso decimal(5,2),
		/*Campo Altura -> decimal(numeroTotalDeCasasDecimais, casasDepoisDaVirgula) vai formatar o valor recebido da maneira especificada */
    altura decimal(3,2),
		/*Campo Nome -> varchar(numeroMaximoDeCaracteres) e define um valor padrão para o Campo, caso não receba nenhum valor */
    nacionalidade varchar(20) default 'Brasil',
    /* Define uma chave como Primaria, ou seja, o valor dela não poderá se repetir no banco, evitando assim cadastrarmos dois objetos iguais */
    primary key(id)
	/* Define o charset padrão da tabela */
) default charset = utf8;



/* Inserindo os dados dos Campos na Tabela */
	/* Forma Original */
insert into pessoas
(nome, nascimento, sexo, peso, altura, nacionalidade)
values
('Thomaz', '2004-04-12','M', '99.5', '1.76', 'Brasil');
	/* Forma Simplificada*/
insert into pessoas values
(default, 'Lilian', '2006-07-28', 'F', '60', '1.65', default);

	/* Inserindo Dados em Massa */
insert into pessoas 
(id, nome, nascimento, sexo, peso, altura, nacionalidade)
values
( default, 'William', '2004-04-08','M', '80','1.7', default),
( default, 'Wenndel', '2004-04-10','M', '90','1.74', default),
( default, 'Belo', '2004-03-12','M', '80','1.7', default);


/* Adiciona Coluna a Tabela*/
	/* Adiciona a Coluna no final da Tabela */
alter table pessoas
add column profissao varchar(10);
	/* Escolhe a posição da Coluna na Tabela*/
alter table pessoas
add column profissao varchar(10) after nome;
	/* Adiciona a Coluna no começo da Tabela*/
alter table pessoas
add column profissao varchar(10) first;


/* Modifica o nome da Coluna e as Constrangeris*/
alter table pessoas
change column profissao prof varchar(30);

/* Modifica uma Caracteristica da Coluna*/
alter table pessoas
modify column profissao varchar(20) not null default '';

/* Deleta uma Coluna da Tabela */
alter table pessoas
drop column profissao;



/* Apaga a tabela */
drop table gafanhotos;

/* Apaga a tabela caso ela exista */
drop table if exists alunos;


/* Cria Tabela somente se ela não existir */
create table if not exists cursos (
	nome varchar(30) not null unique, 
    descricao text,
    carga int unsigned,
    totaulas int unsigned,
    ano year default '2024'
) default charset=utf8;

/* Adicionando a coluna prinary key */
alter table cursos
add column idcurso int first;
alter table cursos
add primary key(idcurso);
describe cursos;
select * from cursos;

/* Renomeia a Tabela */
alter table pessoas
rename to multidão;

/* Incluir Novos Registros */
insert into cursos values
('1', 'Python', 'Curso de Python', '40', '37', '2020'),
('2', 'JavaScript', 'Curso de JavaScript', '40', '37', '2020'),
('3', 'Jarva', 'Curso de Java', '40', '37', '2020'),
('4', 'PGP', 'Curso de PHP', '40', '37', '2015');

/* Deletando uma Linha */
delete from cursos
where idcurso = '2'; 

/* Deletando Todas as Linhas */
truncate table cursos;

/* Sobrescrever os dados de um campo */
	/*Atualiza o valor com set e fala where para identificar o local onde será alterado*/
update cursos
set nome = 'Java'
where idcurso = '3';
	/* Manipula varios valores da linha */
update cursos
set nome = 'PHP', ano ='2024'
where idcurso = '4';
	/* Limita a alteração para uma quantidade de linhas determinada*/
update cursos
set carga = '100', ano = '2024'
where idcurso = '1';

select * from cursos;

/* Descreve a tabela */
describe pessoas;

/* Mostra todos os dados cadastrados na Tabela*/
select * from multidão;



/* Comando Select */
select * from multidão;
	/* Seleciona os dados por determinada ordem*/
select * from multidão
order by nome desc;
	/* Filtra as Colunas */
select nome, nascimento, peso from multidão
order by peso, nome;
	/* Filtra as linhas */
select nome, id, peso from multidão
where peso = '96'
order by nome;

	/* Filtrando por Condição */
select nome, nascimento, peso from multidão
where peso <= '80'
order by nome;

select nome, nascimento, peso from multidão
where peso between 50 and 90
order by nome, peso;

select nome, nascimento, peso from multidão
where nome in ('Thomaz','Lilian', 'William')
order by peso desc, nome desc;

select nome, nascimento, peso, altura from multidão
where peso > 60 and altura < 1.76
order by altura;

select nome, nascimento, peso, altura from multidão
where peso > 60 or altura < 1.76
order by altura;

/* Filtra campos a partir de caracteres em comum*/
select * from multidão
where nome like 'L%';
 
select * from multidão
where nome like '%a';

select * from multidão
where nome like '%a%';

select * from multidão
where nome not like '%a%';

select * from multidão
where nome like 't%a_';

/* Distinguindo Registros*/
select distinct nacionalidade from multidão
order by nacionalidade;

/* Funções de Agregação */
	/* count -> vai contar */
select count(*) from multidão;
select count(*) from multidão where peso > 60;
	/* max -> mostra o maior valor */
select max(peso) from multidão;
select max(altura) from multidão where sexo = 'M';
	/* min -> mostra o menor valor */
select min(peso) from multidão; 
select min(altura) from multidão where sexo = 'F';
	/* sum -> soma todos os valores */
select sum(peso) from multidão;
select sum(peso) from multidão where sexo = 'M';
	/* avg -> media dos valores */
select avg(peso) from multidão;
select avg(peso) from multidão where sexo = 'M';


/* Selecionando por intervalo de data */
select * from multidão where nascimento between '2004-04-05' and '2004-04-15' order by nascimento;


/* Agrupando Registros */
select nacionalidade, count(*) from multidão 
group by nacionalidade 
order by nacionalidade;

select nacionalidade, count(*) from multidão
where peso > 60
group by nacionalidade 
order by nacionalidade;

select nacionalidade, count(nome) from multidão
where peso >= 60
group by nacionalidade
having count(nome) >= 2
order by count(nome) desc;

	/* Agrupamento responsivo com select*/
select peso, count(*) from multidão
where altura > 1.6
group by peso
having peso > (select avg(peso) from multidão);


select * from multidão;

select nacionalidade, count(*) from multidão
where nacionalidade != 'Brasil'
group by nacionalidade
having count(*) >= 3;


select altura, count(*) from multidão
where peso > 60
group by altura
having altura > (select avg(altura) from multidão);



/* Relações entre entidades */
										/* Relacionamento um para muitos */
                                        
	/* Adicionando o atributo que será a chave estrangeira*/
alter table multidão
add column cursopreferido int;

	/* Coloca o valor da chave primaria da entidade cursos como chave estrangeira na entidade principal*/
alter table multidão
add foreign key (cursopreferido)
references cursos(idcurso);

	/* Adicionando valor na chave estrangeira das intâncias da entidade */
update multidão set cursopreferido = '6' where id = '1';

	/* Unindo as relações das entidades em apenas uma tabela com inner join    OBS: inner join: Instâncias que não tem relações não serão exibidos */
select pessoa.nome, pessoa.cursopreferido, curso.nome, curso.ano 
from multidão as pessoa inner join cursos as curso
on curso.idcurso = pessoa.cursopreferido
order by curso.nome;

	/* Unindo as relações das entidades em apenas uma tabela com outer join    OBS: outer join: Instâncias que não tem relações serão exibidos também */
select pessoa.nome, pessoa.cursopreferido, curso.nome, curso.ano
from multidão as pessoa right outer join cursos as curso /* right ou left vai definir a tabela a ter preferência*/
on curso.idcurso = pessoa.cursopreferido;


										/* Relacionamento muitos para muitos */

	/* Criando a Entidade intermediaria entre as duas entidades originais, transformando o relacionamento de muitos para muitos em dois relacionamentos de um para muitos */
create table gafanhoto_assiste_curso (
	id int not null auto_increment,
    data date,
    idgafanhoto int,
    idcurso int,
    primary key (id),
    foreign key (idgafanhoto) references multidão(id),
    foreign key (idcurso) references cursos(idcurso)
) default charset = utf8;

	/* Inserindo os registros */
insert into gafanhoto_assiste_curso values
(default, '2014-03-01', '1', '2');

	/* Fazendo a junção com join das 3 entidades */
select  pessoa.nome, curso.nome, assiste.idcurso from multidão as pessoa /* Faz um join da entidade 1 com a entidade intermediariia e depois faz outro join da entidade 3 com o resultado do join anterior*/
inner join gafanhoto_assiste_curso as assiste
on pessoa.id = assiste.idgafanhoto
join cursos as curso
on assiste.idcurso = curso.idcurso
order by pessoa.nome desc;









