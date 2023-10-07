
# **API de Transcrição de Imagem**

Essa é uma API desenvolvida para realizar a transcrição de texto contido em imagens. Ela utiliza a biblioteca de reconhecimento óptico de caracteres (OCR) para extrair o texto de uma imagem e fornecer o resultado em formato de texto.

## **Instalação**

Para utilizar essa API, siga as etapas abaixo:

1. Clone o repositório para o seu ambiente local:
    
    ```bash
    
    git clone https://github.com/matefs/api-transcricao-imagem.git
    
    ```
    
2. Navegue até o diretório do projeto:
    
    ```bash
    cd api-transcricao-imagem
    cd BACKEND-API-TESSERACT/
    ```
    
3. Instale as dependências do projeto usando o gerenciador de pacotes de sua preferência (npm ou yarn):
    
    ```bash
    npm install
    ```
    
4. Execute a API localmente:
    
    ```bash
    node index.js
    ```
    
    A API estará disponível em **`http://localhost:4000`**.
    

## **Uso**

A API possui um único endpoint:

### **`POST /transcricao`**

Realiza a transcrição de uma imagem fornecida como entrada.

### Parâmetros

| Nome | Tipo | Descrição |
| --- | --- | --- |
| imagem | Arquivo | Imagem contendo o texto a ser transcrito (formatos suportados: JPEG, PNG) |

### Exemplo de Requisição

```js
// o base64 deve ser sem o "data:image/png;base64,"
const imageBase64 = `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`;

fetch('http://localhost:4000/transcrever', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ image: imageBase64 })
})
.then(response => response.json())
.then(data => {
  console.log(data.text);
})
.catch(error => {
  console.error(error);
});
```

### Exemplo de Resposta

```bash
  "Texto transcrito da imagem..."
```

## **Contribuição**

Contribuições são bem-vindas! Se você encontrar algum problema, tiver uma sugestão ou desejar adicionar um novo recurso, sinta-se à vontade para abrir uma "issue" ou enviar uma "pull request".

Certifique-se de seguir as diretrizes de contribuição do projeto.

## **Licença**

Este projeto não tem licença.
