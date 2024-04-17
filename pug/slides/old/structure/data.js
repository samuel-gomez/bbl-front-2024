module.exports = {
  tree: [
    {
      title: "App",
      content:
        "C'est le core du starter, on va y trouver les providers communs ainsi que les routes",
      children: [
        {
          title: "EnvironmentProvider",
          content:
            "Provider permettant de récupérer les variables d'environnement. Il récupère la configuration dans les fichiers du dossier /public.",
        },
        {
          title: "Authentication",
          content:
            "Composant permettant de désactiver l'OIDC. si l'OIDC est activé, il utilise l'OidcProvider",
        },
        {
          title: "UserProvider",
          content:
            "Provider permettant de récupérer les infos utilisateur de l'OIDC",
        },
        {
          title: "FetchProvider",
          content:
            "Provider permettant de customiser le fetch (fetchCustom) en fonction de l'environnment et des infos de connexion OIDC (bearer) pour toute l'application.",
        },
        {
          title: "QueryProvider",
          content:
            "Ce provider instancie React Query en se basant sur le fetchCustom.",
        },
        {
          title: "NotificationProvider",
          content:
            "Ce provider permet de déclencher des notifications dans l'application",
        },
        {
          title: "Routes",
          content:
            "Ce composant sert à gérer les routes de l'application. Celles-ci sont chargées en lazy afin d'optimiser le bundle des pages. ",
          children: [
            {
              title: "RouteSecure",
              content:
                "Ce composant permet de protéger une ou plusieurs routes par authentification. Il suffit de wrapper les routes souhaitées par ce composant. Il va véfifier dans le userContext si le role est autorisé à voir la page.",
            },
          ],
        },
      ],
    },
    {
      title: "Layout",
      content: `Ce composant permet d'obtenir un template de page commun et personnalisable. <br/>
      Des propriétés permettent de masquer certaines parties comme le Header ou le Footer.`,
      children: [
        {
          title: "A11yMenu",
          content:
            "Menu d'accès rapide, il est personnalisable depuis la page courante. (Accessibilité)",
        },
        {
          title: "Header",
          content:
            "Entete de l'application, il est basé sur les composants du Toolkit. Les infos utilisateurs sont récupérées depuis le contexte.",
        },
        {
          title: "Footer",
          content:
            "Footer de l'application, il est basé sur les composants du Toolkit. La version est récupérée depuis le package.json.",
        },
        {
          title: "Menu",
          content:
            "Menu de l'application, il est basé sur les composants Navbar du Toolkit. Utilisable au clavier.",
        },
        {
          title: "TitleBar",
          content:
            "Ce composant doit servir à situer l'utilisateur dans sa navigation (comme un fil d'ariane)",
        },
      ],
    },
    {
      title: "pages",
      content:
        "C'est dans ce dossier que l'on va mettre les composants de page. D'une manière générale, la structure des dossiers doit refléter la structure de votre page.",
      children: [
        { title: "Home", content: "Page d'accueil de l'application" },
        {
          title: "NotFound",
          content:
            "Page 404 introuvable, basée sur le composant ResiliencePage",
        },
        {
          title: "Unauthorize",
          content:
            "Page 403 non autorisée, basée sur le composant ResiliencePage",
        },
      ],
    },
    {
      title: "shared",
      content:
        "C'est dans ce dossier que l'on va mettre tout ce qui est commun au projet.",
      children: [
        {
          title: "components",
          content:
            "C'est dans ce dossier que l'on va mettre tous les composants partagés.",
          children: [
            {
              title: "Authorize",
              content:
                "Permet de rendre n'importe quel composant visible selon les profils autorisés.",
            },
            {
              title: "form",
              content:
                "Dossier contenant les champs de formulaire gérés par React Hook Form et basés sur les composants du Toolkit.",
            },
            {
              title: "Grid",
              content:
                "Composants permettant d'utiliser les grilles de Boostraps.",
            },
            {
              title: "HelpInfo",
              content:
                "Composant permettant d'ajouter un Tooltip sur n'importe quel composant.",
            },
            {
              title: "Icon",
              content:
                "Composant générique pour créer un svg avec un path. <em>(déprécié)</em>",
            },
            {
              title: "Loader",
              content:
                "Composant apportant des corrections sur celui du Toolkit<em>(amené à être réintégré au Toolkit)</em>",
            },
            {
              title: "ModalCommon",
              content:
                "Composant haut niveau basé sur le composant Modal du Toolkit.",
            },
            {
              title: "Resilience",
              content: `Composant wrapper qui peut être utilisé pour des appels asynchrones. <br/>
            L'idée est d'afficher automatiquement un message d'alert ou un autre composant de fallback selon les réponses de l'API (200,404,500,...)`,
            },
            {
              title: "ResiliencePage",
              content: `Composant template pour les pages comme les 404, 403, ...`,
            },
            {
              title: "Skeleton",
              content: `Composant loader au style skeleton qui permet d'indiquer à l'utilisateur qu'une partie de l'application se charge sans devoir mettre un loader sur toute la page.`,
            },
            {
              title: "SkeletonInputField",
              content: `Composant loader au style skeleton adapté aux champs de formulaire.`,
            },
            {
              title: "Table",
              content: `Composant de plus haut niveau basé sur le Table du Toolkit. Il propose de base, du tri, de la pagination et des tooltips sur les cellules.`,
            },
          ],
        },
        {
          title: "helpers",
          content: "Dossier contenant des fonctions utilitaire javascript",
        },
        {
          title: "hoc",
          content: "Dossier contenant des HOC",
        },
        {
          title: "scss",
          content:
            "Dossier contenant du style pour le projet (grilles bootstrap, reset, variables, custom, mixins, keyframes)",
        },
        {
          title: "testsUtils",
          content:
            "Dossier contenant des utilitaires pour les tests comme un renderCustom pour adapter les contextes selon ses besoins, les endpoints pour MSW ou des scénarios type.",
        },
      ],
    },
  ],
};
