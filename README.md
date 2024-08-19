# Vagas e Candidaturas API 

## Rotas de Usuário 

### Registro de usuário POST /users/register

Padrão de corpo

```json
{
	"name": "Lorem Ipsun",
	"email": "loremipsum@gmail.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 10,
	"name": "Lorem Ipsum",
	"email": "loremipsum@gmail.com"
}
```
Possíveis erros 
409 - Conflito, email já cadastrado
422 - quando faltar nome ou email no corpo da requisição
500 - erro interno, pode ser causado caso seja enviada uma requisição sem o "password" ou por algum outro conflito


### Login de usuário POST /users/login

Padrão de corpo

```json
{
	"email": "loremipsum@gmail.com",
	"password": "@12patinhos"
}
```

Padrão de resposta (STATUS 200)

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzI0MDg2NzA5fQ.4E8Xqn7dbenavfqs66-wc7_wZ329cm6dYVOkf1LNV_Y",
	"user": {
		"id": 10,
		"name": "Lorem Ipsum",
		"email": "loremipsum@gmail.com"
	}
}
```

Possíveis erros 
422 - quando faltar nome ou email no corpo da requisição
500 - erro interno, pode ser causado caso seja enviada uma requisição sem o "password"



### Pesquisa de usuários GET /users

Padrão de corpo

```json
{
}
```

Padrão de resposta (STATUS 200)

```json
[
    {
	    "id": 10,
	    "name": "Lorem Ipsum",
	    "email": "loremipsum@gmail.com" 
    },   
    {
	    "id": 11,
	    "name": "Lorem Ipsum",
	    "email": "loremipsum@gmail.com" 
    }   
]
```

## Rotas de Oportunidades 


### Criar oportunidades POST /opportunities

Padrão de corpo 

```json
{
    "title": "Lorem Ipsum",
    "description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 8,
	"title": "Desenvolverdor Front-end",
	"description": "Lorem ipsum",
	"userId": 10
}
```

Possíveis erros 
422 - quando faltar titulo ou email no corpo da requisição



### Procurar oportunidades GET /opportunities
Pega oportunidades propostas por todos os usuários

Padrão de corpo 

```json
{
}
```

Padrão de resposta (STATUS 200)

```json
[
	{
		"id": 1,
		"title": "Desenvolverdor Full-Stack",
		"description": "Lorem ipsum",
		"userId": 9
	},
	{
		"id": 2,
		"title": "Desenvolverdor Front-end",
		"description": "Lorem ipsum",
		"userId": 10
	},
]
```


### Procurar oportunidades GET /opportunities/user
Pega oportunidades propostas pelo usuário logado 

Padrão de corpo 

```json
{
}
```

Padrão de resposta (STATUS 200)

```json
[
	{
		"id": 1,
		"title": "Desenvolverdor Full-Stack",
		"description": "Lorem ipsum",
		"userId": 10
	},
	{
		"id": 2,
		"title": "Desenvolverdor Front-end",
		"description": "Lorem ipsum",
		"userId": 10
	},
]
```
Possíveis erros 
401 - tentar fazer a requisição sem um token de usuário


### Procurar oportunidades GET /opportunities/:id
Pega uma oportunidade proposta pelo usuário logado 

Padrão de corpo 

```json
{
}
```

Padrão de resposta (STATUS 200)

```json
{
	"id": 1,
	"title": "Desenvolverdor Full-Stack",		"description": "Lorem ipsum",
	"userId": 10
}
```
Possíveis erros 
401 - tentar fazer a requisição sem um token de usuário


### Atualizar oportunidades PATCH /opportunities/:id
Atualiza uma oportunidade proposta pelo usuário logado 

Padrão de corpo (title e description são opcionais)

```json
{
    "title": "Full-Stack developer",
	"description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 200)

```json
{
	"id": 1,
	"title": "Full-Stack developer",
    "description": "Lorem ipsum",
	"userId": 10
}
```

Possíveis erros 
401 - tentar fazer a requisição sem um token de usuário ou com um usuário que não é dono da oportunidade
404 - quando não encontrar a oportunidade a ser atualizada 



### Delete oportunidades DELETE /opportunities/:id 

Padrão de corpo 
```json
{
    "title": "Full-Stack developer",
	"description": "Lorem ipsum"
}
```

Padrão de resposta (STATUS 204)

```json
{
	"id": 1,
	"title": "Full-Stack developer",
    "description": "Lorem ipsum",
	"userId": 10
}
```

Possíveis erros 
401 - tentar fazer a requisição sem um token de usuário ou com um usuário que não é dono da oportunidade
404 - quando não encontrar a oportunidade a ser deletada 


## Rotas de aplicação 

### Fazer uma aplicação POST /opportunities/:id/applications

Padrão de corpo 
```json
{
	"name": "Lorem ipsum",
	"email": "loremipsum@gmail.com",
	"linkedin": "https://www.linkedin.com/in/lorem-ipsum/"
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 2,
    "name": "Lorem ipsum",
	"email": "loremipsum@gmail.com",
	"linkedin": "https://www.linkedin.com/in/lorem-ipsum/",
	"opportunityId": 6
}
```
Possíveis erros 
404 - quando não encontrar a oportunidade 



### Pesquisar uma aplicação do usuário GET /opportunities/:id/applications

Padrão de corpo 
```json
{
}
```

Padrão de resposta (STATUS 201)

```json
{
	"id": 2,
    "name": "Lorem ipsum",
	"email": "loremipsum@gmail.com",
	"linkedin": "https://www.linkedin.com/in/lorem-ipsum/",
	"opportunityId": 6
}
```
Possíveis erros 
401 - tentar fazer a requisição sem um token de usuário ou com um usuário que não é dono da oportunidade
404 - quando não encontrar a oportunidade a ser atualizada 
