# Projeto React com Backend Spring Boot e Spring Security

Este é um projeto que combina um frontend React com um backend Spring Boot, utilizando o Spring Security para autenticação com JWT (JSON Web Token).

---

## Pré-requisitos

Certifique-se de ter as seguintes tecnologias instaladas em sua máquina antes de começar:

- Java Development Kit (JDK) 21 ([Download JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html))
- Node.js (versão compatível com React 18)
- npm (gerenciador de pacotes do Node.js)
- Maven ([Download Maven](https://maven.apache.org/))

## Configuração do Backend (Spring Boot)

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório `backend` do projeto.
3. Configure suas credenciais de banco de dados no arquivo `application.properties`.
4. Execute o comando `mvn spring-boot:run` para iniciar o servidor Spring Boot.
5. O backend estará disponível em `http://localhost:8080`.

## Configuração do Frontend (React)

1. Navegue até o diretório `frontend` do projeto.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Após a conclusão da instalação, execute `npm start` para iniciar o servidor de desenvolvimento do React.
4. O frontend estará disponível em `http://localhost:3000`.

## Configuração da Autenticação JWT

- O Spring Security está configurado para autenticação com JWT. Certifique-se de configurar corretamente o frontend para enviar o token JWT no cabeçalho de autorização para as solicitações ao backend.

## Estrutura do Projeto

- `backend/`: Contém o código-fonte do backend Spring Boot.
- `frontend/`: Contém o código-fonte do frontend React.
- `README.md`: Este arquivo de instruções.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua modificação (`git checkout -b feature/nova-feature`).
3. Faça commit de suas alterações (`git commit -am 'Adicionando nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato através do email: rgsa@outlook.com.br


