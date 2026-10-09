# Pixel Meta

Pixel instalado: `1579260150039081`, conforme o código fornecido pelo usuário. O script oficial é carregado de forma assíncrona, com inicialização única na página e evento `PageView`. O fallback `noscript` usa o mesmo ID e evento.

## Auditoria

Antes da alteração, a navegação pelo site publicado não apresentou requisições a terceiros: foram observadas 36 requisições ao próprio site ao abrir, rolar a página e interagir com o FAQ. Os globais `fbq`, `gtag`, `dataLayer` e `clarity` estavam ausentes.

A inspeção do código ativo e dos arquivos compilados não identificou outro pixel, Google Analytics, Tag Manager, Clarity, Hotjar ou integração com API de Conversões. A referência a Hotjar no CSS é apenas o nome de um ícone Font Awesome, sem script ou coleta.

Foi removido o hook de reporte de erros do Lovable e seus três arquivos do template. O tratamento local de falhas do servidor foi mantido. A configuração de build e a conexão do projeto ao Lovable permanecem funcionais.

O site não implementa API de Conversões nem dispara `Purchase` ou `InitiateCheckout`. Os botões continuam levando ao checkout Kiwify informado; a configuração de rastreamento do checkout externo é administrada nesse serviço.

## Verificação no site publicado — 09/10/2026

Na navegação real por Chrome, em computador e emulação de celular, o SDK registrou um único pixel, `1579260150039081`, com uma chamada de `PageView`. Foram observadas requisições desse evento à Meta e ao gateway descrito abaixo. O fallback sem JavaScript foi verificado com o mesmo ID e `PageView`.

A configuração entregue pela própria Meta para esse pixel contém o plugin `OpenBridge` e o endpoint `https://mpc-prod-28-1053047382554.us-central1.run.app/`. Foi observado um POST `/events`, com `event_name: PageView` e `fb.pixel_id: 1579260150039081`, respondendo HTTP 200. Essa integração vem da conta/configuração do próprio pixel; não foi adicionada uma API de Conversões ao servidor deste projeto. Portanto, a ausência de API no código não significa que o gateway externo da conta esteja desativado. Para retirar essa associação, é necessário administrar a configuração do pixel/gateway na Meta, à qual esta sessão não tem acesso.

## Verificação de checkout e compra — 09/10/2026

Foi seguido um botão de compra do site até `https://pay.kiwify.com.br/rL2kTRo`, em computador e emulação de celular, sem preencher dados pessoais, gerar pagamentos ou concluir uma venda.

- O checkout carregou corretamente, com valor base de R$ 37,00.
- A resposta pública de configuração da Kiwify apresentou `facebook_pixels: null`, `pixels: []`, `checkout_pixel_html: null` e `approved_pixel_html: null`.
- O pixel `1579260150039081` não apareceu inicializado no checkout. Não foi observado `InitiateCheckout` para ele.
- O clique no botão da página de vendas gerou o evento automático `SubscribedButtonClick` do SDK Meta. Esse evento não é `InitiateCheckout`.
- Foi observado no checkout o pixel `475913216709140`, com evento `pageView`, além de scripts próprios da plataforma (Google Analytics, Datadog e Cloudflare). Esses recursos pertencem ao checkout externo e não podem ser removidos editando este repositório. A documentação da Kiwify informa que a plataforma utiliza um pixel próprio.
- `Purchase` não foi validado de ponta a ponta, pois não foi realizada uma compra aprovada. A configuração pública consultada também não contém o pixel do vendedor necessário para essa integração.

Para configurar os dois eventos, na conta Kiwify abra **Produtos → produto deste checkout → Configurações → Pixels de conversão**, adicione o ID `1579260150039081`, selecione o domínio adequado e salve. Segundo a [documentação oficial da Kiwify](https://ajuda.kiwify.com.br/pt-br/article/como-configurar-o-pixel-do-facebook-1rb2xtr/), a integração envia `InitiateCheckout` quando o visitante acessa o checkout e `Purchase` quando a compra é aprovada no cartão ou Pix. O produto deve ser configurado nessa conta; instalar o script na página de vendas não configura automaticamente o checkout.

Depois de salvar, valide a visita ao checkout em **Testar eventos** na Meta. Para validar `Purchase`, acompanhe uma compra aprovada e confira ID, valor e moeda no evento. Não foi criado um disparo de `Purchase` por clique ou visita, pois esses comportamentos não confirmam pagamento.

## Arquivos

- `src/lib/meta-pixel.ts`: ID e código oficial de inicialização.
- `src/routes/__root.tsx`: script na página e fallback sem JavaScript.

Os registros de auditoria e verificação ficam na pasta local `.reference/`, ignorada pelo Git.
