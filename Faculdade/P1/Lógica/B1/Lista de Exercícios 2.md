1. (Rosen 1.2.13) Utilize tabelas verdade para verificar a lei de absorção.
    
    (a) p∨(p∧q)≡p
    

|   p   |   q   | (p∧q) | p∨(p∧q) | p∨(p∧q)≡p |
| :---: | :---: | :---: | :-----: | :-------: |
| **v** | **v** | **v** |  **v**  |   **v**   |
| **v** | **f** | **f** |  **v**  |   **v**   |
| **f** | **v** | **f** |  **f**  |   **v**   |
| **f** | **f** | **f** |  **f**  |   **v**   |

	(b) p∧(p∨q)≡p
	 

|  p  |  q  | (p∨q) | p∧(p∨q) | p∧(p∨q)≡p<br> |
| :-: | :-: | :---: | :-----: | :-----------: |
|  **v**  |  **v**  |   **v**   |    **v**    |       **v**       |
|  **v**  |  **f**  |   **v**   |    **v**    |       **v**       |
|  **f**  |  **v**  |   **v**   |    **f**    |       **v**       |
|  **f**  |  **f**  |   **f**   |    **f**    |       **v**       |

    
2. Demonstre as seguintes questões através da manipulação de conectivos lógicos. (Ou seja, não utilize tabelas da verdade, mas sim os axiomas de equivalência.)
    
    (a) (Rosen 1.2.20) ¬(p⊕q) e p↔q são logicamente equivalentes.
	
	 p ↔ q ≡ (p → q) ∧ (q → p) - Equivalência Bicondicionais
	 p ↔ q ≡ (¬p ∨ q) ∧ ( ¬q ∨ p) - Equivalência Condicionais
	 ¬(p ↔ q )≡ ¬((¬p ∨ q) ∧ ( ¬q ∨ p)) ≡ (p ∧ ¬q) ∨ ( q ∧ ¬p) ≡ p ⊕ q - Lei de Morgan
	 Ou seja,  
	 ¬(p ↔ q ) ≡ p ⊕ q
	 ¬(p ⊕ q) ≡ ¬(¬(p ↔ q )) ≡ (p ↔ q )
	 Entao,
	 p ↔ q ≡  ¬(p ⊕ q)
	  
    (b) (Rosen 1.2.25) (p→r)∨(q→r) e (p∧q)→r são logicamente equivalentes.
		(p→r)∨(q→r) ≡ (¬p ∨ r) ∨ (¬q ∨ r) ≡ (p∧q)→r
		
3. (Rosen 1.2.31) Mostre que (p→q)→r e p→(q→r) não são logicamente equivalentes.

| p   | q   | r   | (p→q) | (q→r) | (p→q)→r | p→(q→r) |
| --- | --- | --- | ----- | ----- | ------- | ------- |
| v   | v   | v   | v     | v     | v       | v       |
| v   | v   | f   | v     | f     | f       | f       |
| v   | f   | v   | f     | v     | f       | v       |
| v   | f   | f   | f     | v     | f       | v       |
| f   | v   | v   | v     | v     | v       | v       |
| f   | v   | f   | v     | f     | f       | v       |
| f   | f   | v   | v     | v     | v       | v       |
| f   | f   | f   | v     | v     | f       | v       |
(p→q)→r e p→(q→r) não são logicamente equivalentes. Pois ((p→q)→r) ⟺ (p→(q→r)) não uma tautologia

4. (Rosen 1.2.29) Mostre que (p→q)∧(q→r)→(p→r) é uma tautologia. (**Obs:** Considere usar o método de manipulação de conectivos lógicos e o método de tabela da verdade. Qual foi o mais fácil neste caso?)

	Usando a equivalência condicional: p → q ≡ ¬p ∨ q
	p → q ≡ ¬p ∨ q
	q → r ≡ ¬q ∨ r
	p → r ≡ ¬p ∨ r
	substituindo fica:
	(¬p ∨ q)∧(¬q ∨ r)→(¬p ∨ r)
	usando a mesma equivalência condicional:
	¬((¬p ∨ q)∧(¬q ∨ r)) ∨ r
	Lei de morgan:
	¬(¬p ∨ q)∨¬(¬q ∨ r)∨ r ≡ ( p ∧ ¬q) ∨( q ∨ ¬r) ∨ r
	Portanto ( p ∧ ¬q) ∨( q ∨ ¬r) ∨ r é uma tautologia, pois, nao importa o valor de "r" a expressão sempre será verdadeira.

	Agora por tabela de verdade:
	
    (p→q)∧(q→r)→(p→r)

| p   | q   | r   | (p→q) | (q→r) | (p→r) | (p→q)∧(q→r) | (p→q)∧(q→r)→(p→r) |
| --- | --- | --- | ----- | ----- | ----- | ----------- | ----------------- |
| v   | v   | v   | v     | v     | v     | v           | v                 |
| v   | v   | f   | v     | f     | f     | f           | v                 |
| v   | f   | v   | f     | v     | v     | f           | v                 |
| v   | f   | f   | f     | v     | f     | f           | v                 |
| f   | v   | v   | v     | v     | v     | v           | v                 |
| f   | v   | f   | v     | f     | v     | v           | v                 |
| f   | f   | v   | v     | v     | v     | v           | v                 |
| f   | f   | f   | v     | v     | v     | v           | v                 |
Por tabela ta vdd tbm temos o msm resultado. sendo esta expressão uma tautologia.
Qual foi o mais fácil neste caso?
	O mais fácil de provar a tautologia foi a tabela da verdade, já que, por ser um método que quebra a expressão em partes, facilita e simplifica a verificação do valor. Porem, caso o numero de variáveis aumentasse (4 ou mais), já ficaria muito trabalhoso resolver por este método.

5. (Rosen 1.2.60) Quais das proposições compostas abaixo são satisfazíveis?
    
    (a) (p∨q∨¬r)∧(p∨¬q∨¬s)∧(p∨¬r∨¬s)∧(¬p∨¬q∨¬s)∧(p∨q∨¬s)
    p = v
	q = f
	r = v ou f
	s = v ou f
    (b) (¬p∨¬q∨r)∧(¬p∨q∨¬s)∧(p∨¬q∨¬s)∧(¬p∨¬r∨¬s)∧(p∨q∨¬r)∧(p∨¬r∨¬s)
    r = v
    q = v
    p = v
    s =f 
    As duas proposições compostas são satisfazíveis pois há pelo menos uma atribuição de valores de verdade que torna cada uma verdadeiro no todo.
# Lista de exercícios feitos em sala