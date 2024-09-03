Para realizar o teste, criei uma API para as primeiras 2 questões. Utilizei esse método para colocar em prática meu conhecimento de Node.Js, JavaScript e APIs. Seguindo um modelo de rotas e controllers.

## Endpoint: /fibonacci
Method: POST

Este endpoint verifica se um número pertence à sequência de Fibonacci.

### Request Body:
```
{
  "numero": "int ou string"
}
```

### Responses:
#### Status 400: Bad Request

```
{
  "error_code": "INVALID_DATA",
  "error_description": "O valor passado deve ser um número."
}`
```

Quando o valor fornecido no campo numero não é um número inteiro válido.

#### Status 200: OK

```
{
  "message": "O valor 2 pertence à sequência Fibonacci!"
}
```
Quando o valor informado pertence à sequência de Fibonacci.

```
{
  "message": "O valor 4 não pertence à sequência Fibonacci!"
}
```
Quando o valor informado não pertence à sequência de Fibonacci.

## Endpoint: /counta
Method: POST

Este endpoint verifica a presença da letra 'a' (maiúscula ou minúscula) em uma string e informa a quantidade de vezes que ela ocorre.

### Request Body:
```
{
  "texto": "string"
}
```

### Responses:
#### Status 400: Bad Request

```
{
  "error_code": "INVALID_DATA",
  "error_description": "O valor passado deve ser uma string."
}
```

Quando o valor fornecido no campo texto não é uma string válida.

#### Status 200: OK

```
{
  "message": "A letra 'a' aparece x vezes na string."
}
```
Quando a letra 'a' aparece vezes na string fornecida. Sendo 'x' a quantidade de vezes.

##  3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?


### Resposta: 77
Após todas as iterações, o valor final de SOMA é 77.

## 4) Descubra a lógica e complete o próximo elemento:
### Resposta:

### a) 1, 3, 5, 7, 9
Essa sequência é composta por números ímpares consecutivos. O próximo número ímpar depois de 7 é 9.

### b) 2, 4, 8, 16, 32, 64, 128
Essa sequência é uma progressão geométrica onde cada termo é o dobro do anterior. O próximo termo após 64 será 64×2 = 128.

### c) 0, 1, 4, 9, 16, 25, 36, 49
Essa sequência é composta pelos quadrados dos números inteiros e o próximo será 7^2 = 49.

### d) 4, 16, 36, 64, 100
Essa sequência é composta pelos quadrados dos números pares e o próximo será 10^2 = 100.

### e) 1, 1, 2, 3, 5, 8, 13
Essa sequência é a sequência de Fibonacci, onde cada número é a soma dos dois anteriores e o próximo será 5+8 = 13.

### f) 2,10, 12, 16, 17, 18, 19, 200
Todos os números começam com a letra D, portanto o próximo número ao começar com essa letra é Duzentos.

## 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  


Vamos chamar os interruptores de A, B e C.

Primeira ida à sala das lâmpadas:

Ligaria o interruptor A e o interruptor B.
Deixaria o interruptor A ligado por alguns minutos (cerca de 5 minutos) e, depois de desligaria, ligaria o interruptor B.
Manteria o interruptor C desligado o tempo todo.
Em seguida iria até a sala das lâmpadas.

A lâmpada que estiver acesa está conectada ao interruptor B, que deixei ligado.
A lâmpada que está quente, mas apagada, está conectada ao interruptor A, pois esteve ligada por algum tempo antes de ser desligada.
A lâmpada que está fria e apagada está conectada ao interruptor C, que nunca foi ligado.
