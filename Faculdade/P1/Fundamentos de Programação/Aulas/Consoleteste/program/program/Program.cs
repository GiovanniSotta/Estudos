using System.Transactions;

string nome;
int quant;
double valor;

Console.WriteLine("Cadastro de Produtos");
Console.WriteLine("------------------------------------------------------");
Console.Write("Nome do produto: ");
nome = Console.ReadLine();
do {
    if (string.IsNullOrWhiteSpace(nome) || Double.TryParse(nome, out _)) {
        Console.Write("Digite um nome válido!: ");
        nome = Console.ReadLine();
    }
    else { break; }
}while (true);
Console.Write("Quantidade do produto: ");
quant = Convert.ToInt32(Console.ReadLine());
Console.Write("Valor unitário do produto: ");
valor = Convert.ToDouble(Console.ReadLine());
Console.WriteLine("------------------------------------------------------");

Console.WriteLine("O Produto"+ nome +" foi registrado com sucesso!");
Console.WriteLine("Valor unitário: "+ valor);
Console.WriteLine("Quantidade em estoque: "+ quant);
Console.WriteLine("Multiplicação teste: "+ (2 * valor));