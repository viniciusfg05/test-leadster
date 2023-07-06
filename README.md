# Decisões do projeto
  - **Eslint:** Gosto de utilizar o eslint para padronizar o projeto com as regras do modulo `@rocketseat/eslint-config/react`, desta forma, independente da forma da escrita, à uma auto format.
  - **Tailwindcss:** Decide usar o tailwindcss para estilização do projeto pela facilidade de customização e alta compatibilidade com Next 13
  - **Prettier-plugin-tailwindcss:** Devido a decisão de utilização do tailwindcss, decidi usar este modulo para uma padronização das classes de estilização, desta forma as classe fica por ondem alfabética.
  - **@radix-ui/react-dialog:** Para construção do modal, decide usar o Dialog do radix-ui, pela facilidade de implementação e acessibilidade.

  Para criar o Hover no components de video, foi necessário criar um "::after" para criar o background transparente, tentei chegar o mais proximo da cor do layout.
  Para criar o ícone de Play no components de video, crie uma "::before" que tem como conteúdo um .png.


# Organização do código
  O código foi dividido em vários componentes e sub-componentes, garantindo que cada componente tem seu devido escopo, e como efeito colateral, facilidade em dar manutenção no projeto.
  Por se tratar de uma landing page, decidi criar um pasta "components" que tem todos os components necessário para o construção da interface.
  Os components que senti a necessidade de ter um sub-componentes, foi criando uma nova pasta de "components", de modo que cada código tenha seu escopo

# Funcionalidades
  - Modal
  - Paginação
  - Rotas para cada navegação
  - Responsividade

# Como roda o projeto

  - npm install
  - npm run dev
