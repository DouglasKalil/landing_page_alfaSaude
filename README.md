# Alfa Saúde — Landing Page Atualizada

Este pacote contém a versão atual da landing page institucional da Alfa Saúde, incluindo o código-fonte, a logo oficial e todas as imagens utilizadas pela página.

## Como executar localmente

No terminal, entre na pasta do projeto e instale as dependências:

```bash
cd AlfaSaude-Landing-Atualizada
pnpm install
pnpm dev
```

Em seguida, abra o endereço apresentado no terminal, normalmente `http://localhost:3000`.

Caso não tenha o PNPM instalado, também é possível utilizar NPM:

```bash
npm install
npm run dev
```

Para criar uma versão de produção, execute:

```bash
pnpm build
```

## Estrutura relevante

| Caminho | Conteúdo |
|---|---|
| `client/src/` | Componentes, estilos e estrutura da landing page. |
| `client/public/assets/` | Logo, imagens institucionais e logos dos parceiros credenciados. |
| `client/src/components/alfasaude/` | Seções editáveis da página, incluindo hero, serviços, FAQ, contatos e rodapé. |
| `package.json` | Scripts e dependências do projeto. |

> As imagens foram incluídas localmente e as referências do código foram preparadas para usar `/assets/`, permitindo que a página funcione fora do ambiente original.
