
# Extractor-Audio-Video

Uma biblioteca simples desenvolvida em NodeJS para estudos. Ela contém uma duas funções, uma que vai receber dois parâmetros, um  "arquivo.mp4" e um "nome_arquivo.mp3". Que basicamente é a entrada de um video e a saida irá ser o nome de sua preferência para o áudio que vai ser extraído do mesmo. A outra também receberá dois parâmetros, mas de "url" e "nome_video.mp4". A função nova consiste em basicamente extrair videos do youtube.


## Instalação

Instale extractor-audio com npm

```bash
  cd meu-projeto
  npm i extractor-audio-video
```
    
## Exemplo de uso:

```javascript
const extractMP3 = require('extractor-audio-video'); //chamando a função
const downloadMP4 = require('extractor-audio-video');

extractMP3('videoplayback.mp4', 'audio.mp3'); //arquivo mp4, nome do audio extraido
downloadMP4('link_video_youtube', 'video.mp4') //link do vídeo do youtube, nome do video extraido
```

# Feito por:
zx-0b111 e Jorge_Batata
