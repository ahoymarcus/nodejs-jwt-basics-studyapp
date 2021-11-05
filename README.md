# JWT Basics Studyapp - Freecodecamp.org


Estudo de backend Node-JS com o projeto **Freecodecamp**, para criar uma aplicação de estudo para treinar o padrão de autenticação JSON Web Token (JWT), uma importante parte dentro do desenvolvimento de aplicações web quanto ao quesito de segurança.[^1]


<br />




Novamente, este projeto trás a mesma implementação modular para a aplicação vistas anteriormente na série de projetos estudados, ou seja, separando módulo para rota, para controladores para as rotas, e embora neste projeto não seja implementado banco de dados, foi deixado separado o módulo para a conexão com o banco de dados MongoDB.


<br />

Aqui nós também reaproveitamos os módulos customizados para tratamento de erro criados no projeto **Task Manager**. Assim, os configuramos no middleware do Express-JS para tratar exceções **404** e **500** de servidor.

<br />

Finalmente, culminando o projeto com a integração com o Frontend, criado pelo professor Smilga e que é servido pelo servidor através do middleware Static do Express-JS.



<br />

[Freecodecamp.org](https://www.freecodecamp.org/learn/back-end-development-and-apis/)



<br />


Dependências:

- Dotenv
- Express JS
- Express-async-errors
- Http-status-codes
- Jsonwebtoken
- Mongoose
- Nodemon


<br />

### Retornando uma query básica de todos os dados existentes:              
![Imagem de uma query básica de todos os dados existentes](/public/images/)



<br />

### Passando dinamicamente um query para procura de produtos a partir da propriedade **name** de um produto:                
![Imagem de uma query para procura de produtos a partir da propriedade **name** de um produto](/public/images/)




<br />

### Agora, passando dinamicamente um query que retorna dados da API selecionando apenas os campos **name** e **price** e ordenando **name** de forma descendente e **price** de forma ascendente:                
![Imagem de uma query para retorno de dados com ordenamento e seleção de campos específicos](/public/images/)





<br />

### Finalmente, permitindo a passagem de operadores de comparação para realizar queries com os campos numéricos da API de produtos:                
![Imagem da passagem de operadores de comparação para realizar queries com os campos numéricos da API de produtos](/public/images/)



<br />




<br />
<br />

[^1] John Smilga - Freecodecamp.org.






