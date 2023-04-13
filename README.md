<h1>README</h1>
<p>Este banco de dados foi criado utilizando PostgreSQL. Para que você possa usá-lo, é necessário editar o construtor de cliente em src/database/index.js com seus próprios dados de configuração do banco de dados.</p>

<p>Para executar a aplicação é necessário um terminal rodando o banco de dados com
node src/database/index.js e outro rodando a aplicação `node src/index.js` <br>
Caso o terminal fique parado com um caracter a ser digitado quando o banco de dados for iniciado quer dizer que ele esta funcionando</p>

<p>Para criar o esquema do banco de dados, rode o script SQL localizado em src/database/schema.sql. Lembre-se de criar primeiro o banco de dados e, em seguida, as tabelas.</p>

<p>Para executar o código, você precisa baixar as bibliotecas necessárias. Para isso, utilize o seguinte comando:</p>

`npm i express express-async-errors pg` <br>

As rotas GET em /users e /posts estão disponíveis para uso. A rota /users retorna todos os usuários cadastrados no banco de dados, enquanto a rota /posts retorna todos os posts.
