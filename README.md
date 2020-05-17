# ChatGroup

Site desenvolvido utilizando:
>**Front-end:** ReactJs, Socket.io-client\
**Back-end:** NodeJs, Express, Mongoose, Socket.io\
**Banco de dados:** MongoDB


## Meu objetivo com isso
Aprender como funciona um sistema em tempo real. 

## Como funciona?
O modo de autenticação do **ChatGroup** foi feito de maneira simples buscando apenas se nome de usuário e senha estavam presente no banco de dados. Os grupos são visiveis para todos os usuários autenticados, e cada usuário tem a oportunidade de criar seu grupo e qualquer um pode participar. Após o usuário fazer login o Front-end envia uma requisição pro Back-end buscando os grupos criados para exibir na lista, cada mensagem que um usuário envia, todos recebem por meio do sistema de webSockets, quando alguém envia uma mensagem o Front-end "avisa" o Back-end que por sua vez "avisa" todos os                                   usuários conectados.



## Autor
[Bruno Batalha](https://bruno-batalha.firebaseapp.com/)
