# Gouveia Studios — Site Institucional

Site institucional da **Gouveia Studios**, agência de soluções digitais no Rio de Janeiro. Desenvolvido em HTML5, CSS3 e JavaScript puro (sem frameworks ou build tools), pronto para publicação em qualquer hospedagem estática, incluindo GitHub Pages.

🔗 **Site publicado:** _adicione aqui o link do GitHub Pages depois de publicar_

---

## Estrutura do projeto

```
gouveia-studios/
├── index.html            → Home
├── quem-somos.html        → Quem Somos
├── servicos.html          → Serviços (visão geral)
├── social-media.html      → Social Media (serviço principal)
├── tecnologia.html        → Tecnologia & Manutenção
├── trafego.html           → Gestão de Tráfego Pago
├── fotografia.html        → Portfólio de Fotografia
├── videomaker.html        → Portfólio de Vídeos
├── portfolio.html         → Portfólio geral (todas as categorias)
├── contato.html           → Contato / formulário
├── css/
│   └── style.css          → Design system completo (cores, tipografia, componentes)
├── js/
│   └── script.js          → Navbar, animações, filtros, lightbox, formulário
└── assets/
    ├── images/            → Fotos do site (substituir os placeholders)
    ├── videos/             → Vídeos (thumbnails/arquivos)
    ├── icons/              → Ícones customizados
    ├── logos/              → Logo da marca (logo.png)
    └── fonts/              → Fontes locais, se necessário
```

Todas as páginas compartilham o mesmo `css/style.css` e `js/script.js` — qualquer ajuste visual ou de comportamento feito neles se reflete no site inteiro.

---

## Como visualizar localmente

Não é necessário nenhum servidor especial. Duas opções:

1. **Abrir direto:** dê duplo clique em `index.html` e ele abre no navegador.
2. **Servidor local (recomendado):** evita problemas de caminho relativo em alguns navegadores.
   ```bash
   # Python 3
   python3 -m http.server 8000
   # depois acesse http://localhost:8000
   ```

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `gouveia-studios`).
2. Suba **todo o conteúdo desta pasta** para a raiz do repositório — `index.html`, `css/`, `js/` e `assets/` devem ficar direto na raiz, não dentro de uma subpasta.
   - Pelo navegador: arraste as pastas inteiras para a área de upload (o botão "choose your files" não sobe pastas, só arquivos soltos).
   - Ou via Git:
     ```bash
     git init
     git add .
     git commit -m "Primeira versão do site"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/gouveia-studios.git
     git push -u origin main
     ```
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
5. Aguarde 1–3 minutos. O link fica disponível no topo dessa mesma página, algo como:
   `https://seu-usuario.github.io/gouveia-studios/`

---

## Antes de publicar oficialmente

- [ ] Trocar as imagens placeholder (Unsplash) em `assets/images/` pelas fotos reais da Gouveia Studios
- [ ] Atualizar o número de WhatsApp (`5521999999999`) em todas as páginas — aparece no botão flutuante, na navbar, no rodapé e no formulário de contato
- [ ] Atualizar o e-mail de contato (`contato@gouveiastudios.com.br`)
- [ ] Ajustar o endereço/mapa na página de Contato, se quiser um ponto específico em vez do Rio de Janeiro genérico
- [ ] Revisar os textos de portfólio e depoimentos, substituindo por casos reais quando disponíveis

---

## Domínio próprio (opcional)

Para usar um domínio como `gouveiastudios.com.br` em vez do link padrão do GitHub Pages:

1. Crie um arquivo `CNAME` na raiz do repositório contendo apenas o domínio, por exemplo:
   ```
   gouveiastudios.com.br
   ```
2. No provedor de DNS do domínio, crie um registro `CNAME` apontando para `seu-usuario.github.io`.

---

## Stack

- HTML5 semântico
- CSS3 (custom properties, Grid, Flexbox, glassmorphism)
- JavaScript ES6+ vanilla (sem dependências)
- Tipografia: Space Grotesk, Manrope e JetBrains Mono (Google Fonts)

---

**Gouveia Studios** — Tecnologia, imagem e tráfego pago em um único parceiro. Rio de Janeiro, RJ.
