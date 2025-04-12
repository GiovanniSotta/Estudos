
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
|palavra-chave/tipo C#|Intervalo|Tamanho|Tipo .NET|
|---|---|---|---|
|`sbyte`|-128 a 127|Inteiro de 8 bits com sinal|[System.SByte](https://learn.microsoft.com/pt-br/dotnet/api/system.sbyte)|
|`byte`|0 a 255|Inteiro de 8 bits sem sinal|[System.Byte](https://learn.microsoft.com/pt-br/dotnet/api/system.byte)|
|`short`|-32.768 a 32.767|Inteiro de 16 bits com sinal|[System.Int16](https://learn.microsoft.com/pt-br/dotnet/api/system.int16)|
|`ushort`|0 a 65.535|Inteiro de 16 bits sem sinal|[System.UInt16](https://learn.microsoft.com/pt-br/dotnet/api/system.uint16)|
|`int`|-2.147.483.648 a 2.147.483.647|Inteiro assinado de 32 bits|[System.Int32](https://learn.microsoft.com/pt-br/dotnet/api/system.int32)|
|`uint`|0 a 4.294.967.295|Inteiro de 32 bits sem sinal|[System.UInt32](https://learn.microsoft.com/pt-br/dotnet/api/system.uint32)|
|`long`|-9.223.372.036.854.775.808 a 9.223.372.036.854.775.807|Inteiro assinado de 64 bits|[System.Int64](https://learn.microsoft.com/pt-br/dotnet/api/system.int64)|
|`ulong`|0 a 18.446.744.073.709.551.615|Inteiro de 64 bits sem sinal|[System.UInt64](https://learn.microsoft.com/pt-br/dotnet/api/system.uint64)|
|`nint`|Depende da plataforma (computada em runtime)|Inteiro de 32 bits ou de 64 bits com sinal|[System.IntPtr](https://learn.microsoft.com/pt-br/dotnet/api/system.intptr)|
|`nuint`|Depende da plataforma (computada em runtime)|Inteiro de 32 bits ou de 64 bits sem sinal|[System.UI](https://learn.microsoft.com/pt-br/dotnet/api/system.uintptr)|
### Tipos de ponto flutuantes:

| palavra-chave/tipo C# | Intervalo aproximado             | Precisão         | Tamanho  | Tipo .NET                                                                     |
| --------------------- | -------------------------------- | ---------------- | -------- | ----------------------------------------------------------------------------- |
| `float`               | ±1,5 x 10−45 para ±3,4 x 1038    | ~6 a 9 dígitos   | 4 bytes  | [System.Single](https://learn.microsoft.com/pt-br/dotnet/api/system.single)   |
| `double`              | ±5.0 × 10−324 to ±1.7 × 10308    | ~15 a 17 dígitos | 8 bytes  | [System.Double](https://learn.microsoft.com/pt-br/dotnet/api/system.double)   |
| `decimal`             | ±1,0 x 10-28 para ±7,9228 x 1028 | 28 a 29 dígitos  | 16 bytes | [System.Decimal](https://learn.microsoft.com/pt-br/dotnet/api/system.decimal) |
### Tipos de enumerção

Conforme a própria documentação da Microsoft, tipos de enumeração são um tipo de valor definido por constantes nomeadas com tipo de valor inteiro.
Para definir um tipo de enumeração utiliza-se a palavra enum.
Exemplo:
enum Estacoes_do_Ano {
	Primavera,
	Verão,
	Outono,
	Inverno
	}

### Tipos de estrutura

O tipo de estrutura permite criar tipos de dados que são formados por outros tipos primitivos. É utilizado paraencapsular dados. Para criar um tipo de estrutura, utiliza-se a palavra struct.
"A famosa Lista"
exemplo:
public struct Ficha_do_cliente
	{
	string nome;
	string endereco;
	double salario;
	}
Ficha_do_cliente cliente



### IMPORTANTE:

	-Linguagens orientadas a tipo ou “tipadas” exigem obrigatoriamente a definição do tipo de dados a ser utilizado.
	-Como vamos utilizar C#, é importante conhecer os tipos de dados utilizados por esta linguagem.
	-Não se pode “misturar” os tipos: se uma informação é inteira, deve-se utilizar um tipo inteiro que atenda a faixa numérica desta informação; se uma informação é de ponto flutuante, não se pode utilizar um inteiro ou um byte
	-Cadeia de caracteres não permitem operações aritméticas; se você precisa fazer uma operação aritmética, primeiro deverá utilizar uma variável de tipo inteiro ou ponto flutuante e depois converter para cadeia de caracteres.