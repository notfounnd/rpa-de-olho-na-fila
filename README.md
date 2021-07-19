# RPA - De Olho Na Fila

Projeto RPA para acompanhamento gráfico dos status de fila coletados por meio do site [De Olho Na Fila](https://deolhonafila.prefeitura.sp.gov.br).

### Pré-requisitos

- [Python 3](https://www.python.org/downloads)
- [Firefox](https://www.mozilla.org/pt-BR/firefox/new) (recomendado)

### Instalação

Instalação das dependências:

```bash
cd ~/.../rpa-de-olho-na-fila/robot-rpa
> pip install -r requirements.txt
```

Execução do RPA:
```bash
cd ~/.../rpa-de-olho-na-fila/robot-rpa
> robot -d ./log/perform_data rpa\
```

Execução por tag:
```bash
cd ~/.../rpa-de-olho-na-fila/robot-rpa
> robot -d ./log/perform_data -i perform rpa\
> robot -d ./log/perform_data -i chart rpa\
```

### Report de Execução

Utilizado os comandos sugeridos, um report de execução é gerado a cada nova extração:

```bash
cd ~/.../rpa-de-olho-na-fila/robot-rpa/log/perform_data/report.html
```

### Gráfico:

Para poder visualizar o gráfico, é necessário configurar no Firefox a permissão para que o navegador possa efetuar a leitura do arquivo JSON que preenche os dados.

- Abrir o Firefox
- Digitar ```about:config``` na barra de endereço
- Procurar por ```security.fileuri.strict_origin_policy```
- Configurar a opção para o valor ```false```

Após extração dos dados, podemos verificar o gráfico de dados em formato HTML:

```bash
cd ~/.../rpa-de-olho-na-fila/robot-rpa/web/index.html
```

