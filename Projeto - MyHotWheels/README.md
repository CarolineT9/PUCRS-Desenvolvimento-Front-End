## Nome: `Caroline Tavares`

Para executar este projeto:

1. Entre pasta Projeto - MyHotWheels:
```
cd Projeto\ -\ MyHotWheels/
```

2. Rode npm install para instalar as dependências do projeto:


```
npm install
```

3. E em seguida, npm start, para iniciar a execução do projeto.

```
npm start
```


## Introdução
Ess projeto é uma aplicação web, desenvolvida com React, React Router e Boostrap, com objetivo de desenvolvimento de um CRUD (Create (criar), Read(ler), Update(atualizar) e Delete (deletar)). 


Este projeto está divido em 3 seções:
1 - Home - Seção de boas-vindas;
2 - Sobre - Seção com informações da aplicação web;
3 - Carro - Seção onde é possível cadastrar, editar e excluir carros.


## Componentes

Os componentes estão no diretório ./src/components e eles possuem as seguintes características:

### caminho: ./src/components/CarAdd

- ModalCarAdd:
Este componente é um modal utilizado para adicionar e editar informações sobre carros em uma lista de veículos. Este componente exibe um formulário com campos para o nome, marca, cor e ano de fabricação do carro.

Funcionalidades:
Adicionar Carro: Quando nenhum carro está selecionado para edição, o modal é utilizado para adicionar um novo carro à lista. Um novo ID é gerado automaticamente, baseado no tamanho atual da lista, e o novo carro é salvo no armazenamento local (localStorage).
Editar Carro: Se um carro existente for selecionado para edição, os campos do formulário são preenchidos com os dados atuais do carro, permitindo que o usuário faça as alterações necessárias. Ao salvar, os dados atualizados substituem as informações do carro existente na lista.
Validação: Antes de salvar, o componente verifica se todos os campos foram preenchidos.
Integração com LocalStorage: Os dados do carro são persistidos no localStorage, permitindo que a lista de carros seja mantida mesmo após o fechamento e reabertura da aplicação.
Efeitos de Transição: Utiliza classes do Bootstrap para exibir um efeito de fade ao abrir e fechar o modal, proporcionando uma experiência de usuário suave e visualmente agradável.

### caminho: ./src/components/CarList

O componente CarList exibe uma tabela que lista todos os carros cadastrados. Ele é responsável por renderizar os dados dos carros, possibilitar a remoção de carros e abrir um modal para adicionar ou editar carros.

Funcionalidades:
Listagem de Carros: Renderiza uma tabela que mostra a lista de carros cadastrados, com colunas para Nome, Marca, Cor e Ano de Fabricação.
Remover Carro: Inclui um ícone de lixeira em cada linha da tabela. Ao clicar no ícone, o carro correspondente é removido da lista. A remoção é persistida no localStorage, garantindo que a lista seja atualizada e a remoção seja refletida mesmo após recarregar a página.
Editar Carro: Inclui um ícone de lápis em cada linha da tabela. Ao clicar no ícone, o modal ModalCarAdd é aberto com os dados do carro selecionado, permitindo ao usuário editar as informações. O modal é preenchido com os dados atuais do carro, e as alterações são salvas no localStorage quando o usuário confirma a edição.
Abertura do Modal: Um botão para adicionar novos carros abre o modal ModalCarAdd em um estado limpo, permitindo ao usuário adicionar um novo carro à lista.
Persistência de Dados: Os dados dos carros são armazenados no localStorage e carregados na inicialização do componente. Isso garante que a lista de carros persista entre sessões do navegador.
Estrutura da Tabela:
Nome: Nome do carro.
Marca: Marca do carro.
Cor: Cor do carro.
Ano: Ano de fabricação do carro.
Ações: Botões para editar e remover o carro.

### caminho  ./src/components/NavBar
O componente NavBar é uma barra de navegação que fornece links para diferentes seções da aplicação. 
A navegação entre links se dá pela utilização do React Router Dom, que possibilita a transição entre as telas de Home, Sobre e Carros. 
Funcionalidades:
Links de Navegação: Inclui três links principais que permitem ao usuário navegar entre as diferentes seções da aplicação:
Home: Redireciona para a página inicial (/).
Sobre: Redireciona para a página de informações (/about).
Carros: Redireciona para a página de listagem de carros (/cars).



