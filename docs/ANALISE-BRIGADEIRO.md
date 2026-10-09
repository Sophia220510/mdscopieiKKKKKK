# Reprodução escolar — O Brigadeiro Perfeito

Referência: <https://obrigadeiroperfeito.com.br/>. Inspeção em 8 de outubro de 2026.

Os números da comparação visual abaixo se referem à primeira reprodução, antes da adaptação da personagem. A versão atual usa Rafael, um confeiteiro fictício criado por IA, fotos e capas novas, os 19 prints originais de avaliações e uma seção de criatividade no lugar do vídeo original. Veja [Rafael](RAFAEL.md).

## Estrutura analisada

A página pública é uma landing page longa, sem menu nem links de navegação para outras páginas do próprio domínio. Todos os sete botões comerciais apontam para o mesmo checkout externo da Kiwify. Esse checkout é um serviço separado; a réplica abre uma demonstração escolar local ao clicar nesses botões.

| Seção | Elementos e comportamento |
| --- | --- |
| `hero` | Fundo vinho, logotipo, imagens de brigadeiros, título com destaque amarelo, subtítulo e três benefícios. |
| `depoimentos` | Título, ornamento, carrossel de 19 imagens, indicadores e botão. |
| `para-quem` | Fundo com bordas decoradas, quatro cartões de benefícios e botão. |
| `sabores` | Carrossel de 14 imagens, indicadores e botão. |
| `criatividade` | Foto do Rafael, texto sobre sabores criativos, botão e carrossel de 12 imagens com setas. |
| `conteudo` | Lista de 10 conteúdos e imagem do guia. |
| `oferta` | Texto, valores de 8x R$5,38 e R$37,00 à vista e botão. |
| `garantia` | Selo e texto da garantia. |
| `autor` | Cartão de atualizações, botão, apresentação de Rafael e retrato criado por IA. |
| `duvidas` | Seis perguntas que expandem e recolhem individualmente. |
| `chamada-final` | Última chamada e botão. |
| `rodape` | Créditos originais. |

## Visual e responsividade

Foram preservadas a estrutura pública gerada pelo Elementor e suas regras CSS, incluindo fontes Sora e Montserrat, fundos, sombras, espaçamentos, curvas e tamanhos de texto. Foram armazenados 176 arquivos de imagens e fontes em `public/replica/assets/`, sem falhas de download.

No computador, os carrosséis mostram três imagens. No celular, mostram uma, com arraste e os mesmos controles do original. Os carrosséis avançam automaticamente a cada cinco segundos, pausam ao passar o cursor e interrompem o avanço automático depois de uma interação.

Comparação em navegador Chrome com áreas visíveis de 1440 × 1000 e 390 × 844: as 13 seções apresentaram as mesmas alturas da referência em ambas as larguras. A página tem aproximadamente 10.652 px no computador e 11.373 px no celular. Isso verifica a geometria nessas duas larguras; não equivale a uma garantia de igualdade de todos os pixels em todos os navegadores.

A comparação das capturas completas encontrou 339 pixels diferentes no computador (0,00183%) e 30 no celular (0,00017%). Na primeira tela do celular, foram zero. Medição com Pixelmatch, limiar 0,1 e tratamento padrão de antialiasing; carrosséis pausados no primeiro slide para comparar o mesmo estado. Esses resultados descrevem as capturas verificadas, não o comportamento de serviços externos nem todas as larguras possíveis.

Validação concluída: compilação de produção, TypeScript e lint dos arquivos TypeScript alterados passaram. Os testes em navegador passaram para abertura e fechamento de pergunta por clique e teclado, abertura e fechamento da demonstração de compra e avanço do carrossel por seta. A verificação da réplica não encontrou erros de JavaScript, respostas HTTP com erro ou imagens quebradas.

## Implementação e próximos testes

- `src/data/brigadeiro-sections.json`: conteúdo dividido por seção; mantém as classes usadas nos estilos originais.
- `src/components/BrigadeiroPage.tsx`: carrosséis, perguntas expansíveis, animações de entrada e demonstração de compra.
- `public/replica/original.css` e `inline.css`: estilos de referência com imagens e fontes apontando para arquivos locais.
- `src/styles.css`: estilos adicionais da demonstração de compra.

Para executar: `npm install` e `npm run dev`. Para gerar a versão de produção: `npm run build`.

Os arquivos preservados da referência pertencem aos respectivos titulares; as imagens novas de Rafael foram geradas por IA para o exercício escolar. Os prints de avaliações foram preservados sem alterações. O vídeo original foi removido. O projeto identifica o caráter escolar nos metadados, no rodapé e na demonstração de compra, e desativa a indexação. Os scripts comerciais de rastreamento do original não foram incluídos.

O original contém diferenças de valores entre a oferta e uma resposta das perguntas frequentes, além de números de alunos e créditos de anos anteriores. Esses elementos foram mantidos para preservar a referência antes dos testes de alterações.

As capturas e scripts de inspeção ficam na pasta local `.reference/`, ignorada pelo Git. A estrutura e os arquivos necessários para executar a réplica estão no código e em `public/replica/`.
