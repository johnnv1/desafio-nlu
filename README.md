# Bluegame: Desafio Chatbot
Como o tempo passa rápido... Já estamos no terceiro desafio. Leia atentamente as instruções abaixo e boa sorte!

## Passo a Passo

1. Vocé precisará de uma conta na IBM Cloud. Caso ainda não tenha, corra e crie logo a sua clicando [aqui][sign_up]. É necessário ter uma conta aqui no GitHUb.

2. Baixe e instale a ferramenta [Cloud-foundry CLI][cloud_foundry], caso ainda não tenha feito.

3. Faça um fork (Opção no canto superior à direita, para copiar este projeto para a sua conta GitHub) deste projeto e clone (o fork que você acabou de criar) para sua máquina.

4. Crie o serviço Natural Language Understanding (Free) em sua conta clicando [aqui][nlu-link]. Permaneça na página para qual foi direcionado após a criação do serviço.

5. Clique em `Service credentials`, agora clique em `New Credential` (o botão azul que fica do lado direito da página). Após aparecer a modal de criação (modal com título Add new credential), apenas clique em `Add`.

6. Uma vez criada a credencial, clique na action `View credentials`. Copie o JSON gerado para um arquivo temporário, logo iremos usá-lo.

7. Siga os passos apresentados neste [vídeo][video-link]. Ao finalizar copie e cole o valor do `model id` para o arquivo temporário que criamos no passo `6`.

8. Crie um arquivo chamado `.env` no diretório root do repo clonado, usando o arquivo `env.sample` como template, usando o comando:

  ```none
  cp env.sample .env
  ```

O arquivo `.env` deve conter, em um primeiro momento, o seguinte conteúdo:

  ```none
    NLU_USERNAME=
    NLU_PASSWORD=
    MODEL_ID=
  ```

9. Lembra do arquivo temporário, agora iremos usá-lo. Copie o valor `username`, `password` e o `model id` para as respectivas variáveis `NLU_USERNAME`, `NLU_PASSWORD`, e `MODEL_ID` no arquivo `.env`.
Agora o arquivo `.env` deverá estar assim:

  ```none
    NLU_USERNAME=<VALOR USERNAME COPIADO SEM ÁSPAS>
    NLU_PASSWORD=<VALOR PASSWORD COPIADO SEM ÁSPAS>
    MODEL_ID=<VALOR MODEL ID COPIADO SEM ÁSPAS>
  ```

10. Estamos quase lá. Agora edite o arquivo `manifest.yml` e mude `<sua-id>` para que seja a mesma id que você recebeu no assunto em seu email de comfirmação de inscrição. Esse passo é muito importante para posterior validação de seu desafio.
  ```yaml
  ---
applications:
    - name: <sua-id>-conversation
      path: .
      memory: 256M
      instances: 1
      buildpack: sdk-for-nodejs
      route: mybluemix.net
      command: npm start
      disk_quota: 1024M
  ```

11. A partir de agora você precisa instalar (caso ainda não tenha) o NodeJS e o geranciador de pacotes NPM. Siga as instruções disponíveis em https://docs.npmjs.com/getting-started/installing-node. Detalhe muito importante, você precisa pelo menos da versão 8.9.4 do node.

12. Com tudo instalado. Execute o seguinte comando, na pasta do projeto, para instalar as dependências do projeto:

  ```none
  npm install
  ```

13. Para executar a aplicação localmente execute o comando:

  ```none
  npm run dev
  ```
14. Acesse o endereço [http://localhost:8080](http://localhsot:8080).

15. Para testar sua applicação, copie o conteúdo do aquivo `cpbr11_wks.txt`, cole no textarea apresentado no aplicação e envie o texto. É esperado que a seguinte saída, caso não seja mesa verique os passos acima antes de enviar:
```none
Funcionário(s) IBM: Eu; Sergio Gama
Funcionário(s) Shopping Iguatemi: tia; prima
Funcionário(s) Petrobras: mãe
Funcionário(s) Bradesco: Carlos
Funcionário(s) Usiminas: tio
Funcionário(s) Claro: João
Funcionário(s) Volkswagem: pai
Funcionário(s) Itaú: amigo
Funcionário(s) Banco do Brasil: Eu
Funcionário(s) Campus Party: Carlos
Funcionário(s) Audi: pai
Funcionário(s) Ferrari: Pedro
```


16. Precisamos agora logar na IBM Cloud, para isto execute o seguinte comando.
```none
cf api https://api.ng.bluemix.net
cf login
```

17. Após feito o login, execute o seguinte comando para fazer o deploy de sua aplicação.
```sh
    npm run build && cf push
```
18. Veja que legal, você consiguiu terminar o desafio, agora acesse a página do [bluegame][page-link] no facebook e diga para o bot: `acabei`.

[sign_up]: https://console.ng.bluemix.net/registration/
[page-link]: https://www.facebook.com/ibmbluegame/
[dashboard-link]: https://console.bluemix.net/dashboard/apps
[nlu-link]: https://console.bluemix.net/catalog/services/natural-language-understanding
[cloud_foundry]: https://github.com/cloudfoundry/cli
[video-link]: https://youtu.be/oDdI1za8neY