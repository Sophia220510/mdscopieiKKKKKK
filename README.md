# O Brigadeiro Perfeito — reprodução escolar

Adaptação da página <https://obrigadeiroperfeito.com.br/> para um exercício escolar de desenvolvimento web. Inclui as 13 seções, imagens e fontes locais, carrosséis responsivos e perguntas expansíveis. A personagem Larissa e suas quatro imagens foram criadas por IA; as mensagens do carrossel são demonstrativas.

Os botões de compra abrem uma demonstração local identificada como projeto escolar. Não há processamento de pagamentos.

## Executar

Requer Node.js 22.12 ou superior e npm.

```sh
git clone https://github.com/Sophia220510/mdscopieiKKKKKK.git
cd mdscopieiKKKKKK
npm ci
npm run dev
```

Para gerar a versão de produção, execute `npm run build`.

## Publicar na Vercel

Importe este repositório com a branch `main`. O arquivo `vercel.json` configura o framework TanStack Start, a instalação com `npm ci` e a compilação com `npm run build`. O preset Vercel do Nitro gera os arquivos estáticos e a função de servidor em `.vercel/output/`.

## Arquivos principais

- `src/data/brigadeiro-sections.json`: conteúdo das seções.
- `src/components/BrigadeiroPage.tsx`: interações da página.
- `public/replica/`: estilos, imagens e fontes da referência.
- [Análise e validação](docs/ANALISE-BRIGADEIRO.md): estrutura, comparação visual e testes realizados.

A adaptação tem finalidade escolar. Os elementos da referência pertencem aos respectivos titulares. Veja os arquivos e os prompts da personagem em [Larissa](docs/LARISSA.md).
