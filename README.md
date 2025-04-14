
# Extractor-Audio

Uma biblioteca simples desenvolvida em NodeJS para estudos. Ela contém uma única função (por enquanto), que vai receber dois parâmetros, um  "arquivo.mp4" e um "nome_arquivo.mp3". Que basicamente é a entrada de um video e a saida irá ser o nome de sua preferência para o áudio que vai ser extraído do mesmo.


## Instalação

Instale extractor-audio com npm

```bash
  cd meu-projeto
  npm i extractor-audio
```
    
## Exemplo de uso:

```javascript
const extractMP3 = require('extractor-audio'); //chamando a função

extractMP3('videoplayback.mp4', 'audio.mp3'); //arquivo mp4, nome do audio extraido
```

