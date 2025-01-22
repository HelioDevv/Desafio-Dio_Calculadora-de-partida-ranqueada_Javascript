# 🎖️🤺Sistema de Classificação de Heróis - Níves e Rank🤺🎖️

Este projeto é um sistema simples que classifica um herói baseado no saldo de vitórias e derrotas. Ele utiliza funções para calcular o saldo e determinar o nível do herói com base em critérios predefinidos.

---

## Estrutura do Projeto

### Variáveis
- **saldoVitoria**: Armazena o saldo calculado pela função `calcularRank()`.
- **nomeHeroi**: Nome do herói que está sendo classificado.

---

### Funções
1. **calcularRank(win, lose)**
    - Calcula o saldo de vitórias e derrotas.
    - **Parâmetros**
        - `win`: Número de vitórias.
        - `lose`: Número de derrotas.
    - **Retorno:** A diferença entre vitórias e derrotas.
    - **Exemplo de Uso:**
      ```JavaScript
      let saldo = calcularRank(98, 8);
      // saldo = 90
      ```


2. **classificarNivel(saldo)**
    - Determina o nível do heró com base no saldo.
    - **Parâmetros**
        - `saldo`: Saldo de vitórias e derrotas.
    - **Níveis possíveis:**
        - **Saldo <= 0:** `"Zero"`.
        - **Saldo = 10:** `"Ferro"`.
        - **Saldo entre 11 e 20:** `"Bronze"`
        - **Saldo entre 21 e 50:** `"Prata"`
        - **Saldo entre 51 e 80:** `"Ouro"`
        - **Saldo entre 81 e 90:** `"Diamante"`
        - **Saldo entre 91 e 100:** `"Lendário"`
        - **Saldo >= 101:** `"Imortal"`
    - **Exemplo de Uso:**
    ```Javascript
    let nivel = classificarNivel(90);
    // nivel = "Diamante"
    ```

### Lógica Principal
1. Calcula o saldo de vitórias:
   ```javascript
   let saldoVitoria = calcularRank(98, 8); 
   // saldo = 90
   ```
2. Determina o nível do herói com base no saldo:
    ````JavaScript
    let nivel = classificarNivel(saldoVitoria);
    ````
3. Exibe uma mensagem personalizada dependendo do nível:
    - Se o nível for "zero", exibe:
    ````yaml
    Você ainda não tem classificação, Monkey D. Luffy
    ````
    - Caso contrário exibe:
    ````yaml
    Parabéns Monkey D. Luffy! Você chegou ao nível de: Diamante!!

    Seu saldo de vitórias é de: 90
    ````
---

### Código Completo

````Javascript
let saldoVitoria = calcularRank(98, 8);

let nomeHeroi = "Monkey D. Luffy";

function calcularRank(win, lose){
    return win - lose;
}

function classificarNivel(saldo){
    if(saldo <= 0) return "zero";
    if(saldo === 10) return "Ferro";
    if(saldo >= 11 && saldo <= 20) return "Bronze";
    if(saldo >= 21 && saldo <= 50) return "Prata";
    if(saldo >= 51 && saldo <= 80) return "Ouro";
    if(saldo >= 81 && saldo <= 90) return "Diamante";
    if(saldo >= 91 && saldo <= 100) return "Lendário";
    if(saldo >= 101) return "Imortal";
}

let nivel = classificarNivel(saldoVitoria);

if(nivel === "zero"){
    console.log("");
    console.log(`Você ainda não tem classificação, ${nomeHeroi}`);
}else{
    console.log("");
    console.log(`Parabéns ${nomeHeroi}! Você chegou ao nível de: ${nivel}!!`);
    console.log("");
    console.log(`Seu saldo de vitórias é de: ${saldoVitoria}`)
}
````
### Conceitos Aplicados
- Funções: 
    - Para encapsular lógicas específicas (`calcularRank`, `classificarNivel`).

- Interpolação de Strings: 
    - Uso de template litels (``) para criar mensagens dinâmicas.

- Condicionais: 
    - Estruturas `if` para determinar o comprotamento com base nos valores.

- Modularidade: 
    - Divisão das lógicas em funções reutilizáveis para facillitar a manutenção e leitura do códito.

---

### Como Personalizar
- Alterar o nome do herói:
    - Modifique o valor da variável `nomeHeroi`.
- Definir novos critérios de classificação: 
    - Edite os intervalos na função `classificarNivel`.

---

## Requisitos e Compatibilidade

- **Requisitos mínimos**:
    - Node.js para executar o código localmente ou navegadores modernos com suporte a ES6+
- **Compatibilidade**:
    - Este código é compatível com qualquer ambiente JavaScript que suporte classes (introduzidas no ES6)

## Licença

Este projeto é de código aberto, com o intuito de praticar a linguagem `Javascript` e pode ser usado e modificado livremente.
