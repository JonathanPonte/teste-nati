<h3>Teste de desenvolvedor NATI</h3>
<p>Este sistema permite seus usuários gerênciar matrizes curriculares.</p>
Links para os repositorios individuais: <br/>
<b>Backend:</b> https://github.com/davimelovasc/teste-unifor <br/>
<b>Frontend:</b> https://github.com/davimelovasc/teste-unifor-front <br/>

<hr/>

<h4>Tecnologias, linguagens e frameworks utilizados </h4>
<ul>
    <li>Java 11</li>
    <li>Spring boot 2.0.2</li>
    <li>Mysql 5.7</li>
    <li>React JS 16.11</li>
    <li>Bootstrap 4</li>
    <li>Docker</li>
</ul>
<hr/>

<h4>Suposições levadas em conta durante o desenvolvimento</h4>
<ul>
    <li>Uma disciplina pode ser usado por diversos cursos e semestres.</li>
    <li>Foi utilizado um relacionamento de muitos para muitos entre semestres e disciplinas (unidirecional), já que não é necessário as disciplinas conhecerem seus semestres nesse escopo.</li>
    <li>Ao deletar um curso, irá deletar também todos os semestres que pertecem a ele, portanto,
    todas as grades daquele curso também serão excluidas.</li>
    <li>A unica autenticação presente no sistema é via email</li>
</ul>
<hr/>

<h4>Modelagem do banco de dados</h4>
<img src="teste_db.png" width="500">

<h4>Processo para rodar a aplicação utilizando Docker</h4>

Clone o repositório:
```
git clone https://github.com/davimelovasc/teste-nati
```
entre na pasta do projeto e execute o comando para prepara a aplicação:
```
docker-compose build
```
e para rodar a aplicação, levante os containers com:
```
docker-compose up
```
em alguns minutos a aplicação estará rodando no endereço: http://127.0.0.1:9090/
<br/>
OBS1: O usuário administrador que ja vem cadastrado: admin@admin.com
<br/>

