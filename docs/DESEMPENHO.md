# Desempenho no celular

Teste realizado em 9 de outubro de 2026 no endereço de produção `https://mdscopiei-kkkkkk.vercel.app/`.

## Condições

Chrome em modo celular, área visível de 390 × 844, cache desativado, download limitado a 1,6 Mbps, upload a 750 Kbps, latência configurada de 150 ms e CPU quatro vezes mais lenta. As medições são testes de laboratório, não dados coletados de celulares reais. O tempo pode variar conforme aparelho, rede e distância do servidor.

Na versão anterior, a primeira pintura de conteúdo ocorreu em 10,7 segundos nessa configuração. A auditoria Lighthouse móvel separada marcou 68/100, com aproximadamente 14 MB de recursos e LCP simulado de 39 segundos. Os dois testes usam métodos diferentes; os tempos não devem ser misturados na comparação.

## Alterações

- Os 45 slides usam carregamento adiado nativo; o pré-carregamento de todas as imagens pelo Swiper foi desativado.
- Os três arquivos gerados do confeiteiro passaram de 4.656.232 bytes de PNG para 158.608 bytes nas versões WebP entregues ao navegador, redução de 96,6%.
- Os fundos da primeira tela passaram de 572 KB para 74 KB no computador e de 493 KB para 45 KB no celular.
- As 12 fotografias de doces na seção de criatividade passaram de 10,3 MB para 1,9 MB.
- O fundo correspondente à largura da tela e a fonte Sora recebem prioridade de carregamento.
- Imagens sem medidas explícitas receberam largura e altura para reservar espaço durante o carregamento.
- Imagens otimizadas têm hash no nome; o cache de imagens estáticas dura um ano. Os estilos continuam sujeitos à atualização normal.

Os PNGs originais gerados e todos os prints das alunas foram preservados. A compressão produz versões de entrega menores, sem trocar a pessoa, as mensagens ou os doces.

## Validação

Compilação, TypeScript e renderização do servidor passaram. Navegador em 1440 × 1000 e 390 × 844: 12 seções, três carrosséis com 19/14/12 slides, carregamento das imagens durante a navegação, FAQ e sete links de compra sem erros. Os prints usam exatamente os mesmos arquivos anteriores. Não houve rolagem horizontal.

Relatórios completos e capturas de laboratório ficam na pasta local `.reference/`, ignorada pelo Git. A medição final publicada será registrada após o deploy.
