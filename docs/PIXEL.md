# Pixel Meta

Pixel instalado: `1579260150039081`, conforme o código fornecido pelo usuário. O script oficial é carregado de forma assíncrona, com inicialização única na página e evento `PageView`. O fallback `noscript` usa o mesmo ID e evento.

## Auditoria

Antes da alteração, a navegação pelo site publicado não apresentou requisições a terceiros: foram observadas 36 requisições ao próprio site ao abrir, rolar a página e interagir com o FAQ. Os globais `fbq`, `gtag`, `dataLayer` e `clarity` estavam ausentes.

A inspeção do código ativo e dos arquivos compilados não identificou outro pixel, Google Analytics, Tag Manager, Clarity, Hotjar ou integração com API de Conversões. A referência a Hotjar no CSS é apenas o nome de um ícone Font Awesome, sem script ou coleta.

Foi removido o hook de reporte de erros do Lovable e seus três arquivos do template. O tratamento local de falhas do servidor foi mantido. A configuração de build e a conexão do projeto ao Lovable permanecem funcionais.

O site não implementa API de Conversões nem dispara `Purchase` ou `InitiateCheckout`. Os botões continuam levando ao checkout Kiwify informado; a configuração de rastreamento do checkout externo é administrada nesse serviço.

## Arquivos

- `src/lib/meta-pixel.ts`: ID e código oficial de inicialização.
- `src/routes/__root.tsx`: script na página e fallback sem JavaScript.

Os registros de auditoria e verificação ficam na pasta local `.reference/`, ignorada pelo Git.
