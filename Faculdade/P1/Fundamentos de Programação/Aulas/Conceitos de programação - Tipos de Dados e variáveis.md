
# Conceitos de programação
## O que é um programa?
	-Um programa é um conjunto de intruções dadas ao computador, para que ele execute uma tarefa ou determinado resultado;

## Instruções dadas ao computador:

	-Instruções de entrada/saida
	-Intruções aritméticas e lógicas
	-Instruções de controle
	-Intruções de repetição

### Instruções de entrada/Saída:

São instruções que permitem a entrada ou saída de dados. Normalmente são divididas em: Instruções de Leitura e Escrita;
	
	Instruções de Leitura:
		-Instruções para entrada de dados no programa através de algum dispositivo. De um mode geral, estas iustruções "lêem" as informações ou os dados para um variável ou espaço em memória. Ex de leituras: Teclado, Arquivo, portas (como as USB) ou Mouse.

	-Intruções de Escrita:
		-instruções para escrever dados ou informação em algum dispositivo. Ex: Monitor, impessora, camera, dispositivo de comuinicação.
	
### Instruções aritméticas e lógicas:

Trabalham com operações aritméticas e lógicas básicas, como, por exemplo, respectivamente, soma e subtração, "E" ou "ou" lógicos.

### Instruções de controle:

Fluxo é o nome dado ao conjunto de determinadas instruções. Fluxo pode ser tanto, as instruções de todo o programa, como de só uma parte dele.

E, as instruções de controle são as que determinam como será esse fluxo de dados.

São as instruções:
	-para o início ou fim de fluxo ou de programas
	-para execução condicional ou seja, executa um fluxo dependendo do resultado de alguma outra instrução.

### Instruções de repetição:

São instruções que executam outras instruções ou um fluxo de instruções de modo repetitivo, e se cessa quando atingi uma determinada condição.

## Variável:

**DEFINIÇÃO IMPORTANTE**: variável é um local na memória do computador que seu conteúdo é alterado durante a execução de um programa.

# Tipo de Dados:

Dependem da linguagem de programação escolhida

## Tipos de dados em C# (CSharp)

## Classificados em:
	-Tipos numéricos inteiro
	-Tipos numéricos de ponto flutuante
	-Tipos de enumeração
	-Tipos de estrutura

### Tipos de inteiros:
![[Pasted image 20250406182852.png]]
### Tipos de ponto flutuantes:

![[chrome_gkzhoXRVgr.png]]

### IMPORTANTE:

	-Linguagens orientadas a tipo ou “tipadas” exigem obrigatoriamente a definição do tipo de dados a ser utilizado.
	-Como vamos utilizar C#, é importante conhecer os tipos de dados utilizados por esta linguagem.
	-Não se pode “misturar” os tipos: se uma informação é inteira, deve-se utilizar um tipo inteiro que atenda a faixa numérica desta informação; se uma informação é de ponto flutuante, não se pode utilizar um inteiro ou um byte
	-Cadeia de caracteres não permitem operações aritméticas; se você precisa fazer uma operação aritmética, primeiro deverá utilizar uma variável de tipo inteiro ou ponto flutuante e depois converter para cadeia de caracteres.