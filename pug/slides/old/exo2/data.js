module.exports = {
  files: {
    index: [`export { default } from './People';`],
    constants: [
      `export const TITLE_BAR = 'Liste des gens';
export const TITLE = 'Tableau des gens';
export const ROUTE_URL_PEOPLE = 'people';`,
      `export const TITLE_BAR = 'Liste des gens';
export const TITLE = 'Tableau des gens';
export const ROUTE_URL_PEOPLE = 'people';
export const SERVICE_NAME = 'people';
export const ENDPOINT = 'people';

export const TABLE_HEADERS_PEOPLE = [
  { label: 'Prénom', id: 'firstname', key: 'firstname' },
  { label: 'Nom', id: 'lastname', key: 'lastname' },
  { label: 'Date de naissance', id: 'birthDate', key: 'birthDate' },
  { label: 'Photo', id: 'photo', key: 'photo' },
];`,
    ],
    people: [
      `import { TITLE_BAR, TITLE } from './constants';
      
const People = () => (
  <p>Ma page people</p>
);
      
export default People;`,
      `import Layout, { type TLayoutPage } from 'Layout';
import { TITLE_BAR, TITLE } from './constants';

export type TPeople = TLayoutPage;

const People = ({ titleBar = TITLE_BAR, title = TITLE }: TPeople) => (
  <Layout propsTitle={{ title: titleBar, backHome: true }}>
    <h1 className="af-title--content">{title}</h1>
    <p>Ma page people</p>
  </Layout>
);

export default People;`,
      `export const usePeople = () => {
  const { data, isFetching, error, refetch } = useQuery([ENDPOINT], {
    select: ({ responseBody }: TPeopleDataResponse) => ({
      anomaly: setAnomalyEmptyItems(responseBody),
      [SERVICE_NAME]: computeInfos(responseBody),
    }),
  });

  return {
    ...data,
    anomaly: (error || data?.anomaly) as Tanomaly | null,
    isLoading: isFetching,
    refetch,
  };
};
export type TReturnUsePeople = ReturnType<typeof usePeople>;`,
      `export const computeInfos = (data: TPeopleData[]) =>
data?.map(({ _id, firstname, lastname, birthDate, photo }) => ({
  key: _id,
  cols: {
    ...setDisplay({ firstname }),
    ...setDisplay({ lastname }),
    ...setDisplay({ birthDate: setDate({ date: birthDate }) }),
    ...setDisplay({ photo }),
  },
}));`,
      `const PeopleContainer = () => {
  const { anomaly, isLoading, people, refetch } = usePeople();
  return <People people={people} loaderMode={setLoaderMode({ isLoading })} refetch={refetch} anomaly={anomaly} />;
};

export default PeopleContainer;`,
      `export type TPeople = TLayoutPage &
  Pick<TReturnUsePeople, 'people' | 'anomaly' | 'refetch'> & {
    loaderMode: TLoaderContainer['mode'];
    headers?: typeof TABLE_HEADERS_PEOPLE;
  };

const People = ({ titleBar = TITLE_BAR, title = TITLE, people, headers = TABLE_HEADERS_PEOPLE, refetch, loaderMode, anomaly }: TPeople) => (
  <Layout propsTitle={{ title: titleBar, backHome: true }}>
    <h1 className="af-title--content">{title}</h1>
    <Loader mode={loaderMode}>
      <Resilience anomaly={anomaly} refetch={refetch as React.MouseEventHandler<HTMLButtonElement>}>
        <Table items={people} headers={headers} aria-label={${`\``}\${title}${`\``}} />
      </Resilience>
    </Loader>
  </Layout>
);`,
      `export type TPeopleData = Record<string, string>;
      
export type TPeopleDataResponse = {
  responseBody: TPeopleData[];
};`,
    ],
    constantsRoute: [
      `import { ROUTE_URL_UNAUTHORIZE as UNAUTHORIZE } from 'pages/Unauthorize/constants';
import { ROUTE_URL_PEOPLE as PEOPLE } from 'pages/People/constants';

const ROUTE_URLS = {
  HOME,
  PEOPLE,
  ...
};

export default ROUTE_URLS;`,
    ],
    route: [
      `const PageNotFound = lazy(() => import('pages/NotFound'));
const PagePeople = lazy(() => import('pages/People'));
...
    <Routes>
      <Route element={<RouteSecureCmpt />}>
        <Route index path={ROUTE_URLS.HOME} element={<Home />} />
      </Route>
      <Route index path={ROUTE_URLS.PEOPLE} element={<PagePeople />} />
...
      `,
    ],
    constantsMenu: [
      `import ROUTE_URL from 'App/Routes/constants';

  export const CLASS_BODY_MENU_OPEN = 'af-menu-open';
  
  const MENU_ITEMS = [
    {
      label: 'Accueil',
      url: ROUTE_URL.HOME,
    },
    {
      label: 'People',
      url: ${`\``}/\${ROUTE_URL.PEOPLE}${`\``},
    },
  ];
  
  export default MENU_ITEMS;
  `,
    ],
    featurePeople: [
      `Feature: Page People
      En tant que profil autorisé, je souhaite pouvoir afficher la page People
    
      @RG1
      Scenario Outline: Affichage de la page People
        Given Je suis un utilisateur connu et connecté avec le profil "<profil>"
        When J'accède à la page People
        Then un titre "Tableau des gens" est visible
    
        Examples:
          | profil |
          | Admin  |
          | User   |
      `,
      `Given Je suis un utilisateur connu et connecté avec le profil "<profil>"
And la page reçoit les données suivantes
  | _id | firstname | lastname | birthDate           | photo                                        |
  | 1   | Samuel    | Gomez    | 1983-10-20T00:00:00 | https://randomuser.me/portraits/men/34.jpg   |
  | 2   | John      | Doe      | 1978-10-20T00:00:00 | https://randomuser.me/portraits/men/34.jpg   |
  | 3   | Guillaume | Chervet  | 1985-10-20T00:00:00 | https://randomuser.me/portraits/men/34.jpg   |
  | 4   | Sophie    | Danneels | 1992-10-20T00:00:00 | https://randomuser.me/portraits/women/85.jpg |
When J'accède à la page People
Then un titre "Tableau des gens" est visible
And la page contient un tableau répertoriant la liste des gens
And le tableau présente des entêtes de colonnes dans l’ordre suivant : "Nom", "Prénom", "Date de naissance", "Photo"
And le tableau contient 4 lignes avec 4 colonnes dans l'ordre suivant :
  | firstname | lastname | birthdate  | photo                                        |
  | Samuel    | Gomez    | 20/10/1983 | https://randomuser.me/portraits/men/34.jpg   |
  | John      | Doe      | 20/10/1978 | https://randomuser.me/portraits/men/34.jpg   |
  | Guillaume | Chervet  | 20/10/1985 | https://randomuser.me/portraits/men/34.jpg   |
  | Sophie    | Danneels | 20/10/1992 | https://randomuser.me/portraits/women/85.jpg |    
      `,
    ],
    testPeople: [
      `import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, screen, configure } from 'shared/testsUtils/customRender';
import { JeSuisUnUtilisateurConnuEtConnecteAvecleProfil, UnTitreEstVisible } 
  from 'shared/testsUtils/sharedScenarios';
import People from '..';      
const feature = loadFeature('features/People/People.feature');      
configure({ defaultHidden: true });

const feature = loadFeature('features/People/People.feature');

defineFeature(feature, test => {
  test('Affichage de la page People', ({ given, and, when, then }) => {});
});
      `,
      `defineFeature(feature, test => {
  test('Affichage de la page People', ({ given, when, then }) => {
    given(/^Je suis un utilisateur connu et connecté avec le profil (.*)$/, arg0 => {});
    when("J'accède à la page People", () => {});
    then(/^un titre "(.*)" est visible$/, arg0 => {});
  });
});
      `,
      `defineFeature(feature, test => {
  let role: string;

  test('Affichage de la page People', ({ given, when, then }) => {
    JeSuisUnUtilisateurConnuEtConnecteAvecleProfil(given, (roleMock: string) => {
      role = roleMock;
    });
    when("J'accède à la page People", async () => {
      render(<People />, {}, { role });
      expect(await screen.findByText('Samuel Gomez')).toBeInTheDocument();
    });
    UnTitreEstVisible(then);
  });
});`,
      `test('Affichage de la page People', ({ given, when, then, and }) => {
  JeSuisUnUtilisateurConnuEtConnecteAvecleProfil(given, (roleMock: string) => {
    role = roleMock;
  });
  and('la page reçoit les données suivantes', table => {});
  when("J'accède à la page People", async () => {
    render(<People />, {}, { role });
    expect(await screen.findByText('Samuel Gomez')).toBeInTheDocument();
  });
  UnTitreEstVisible(then);
  and('la page contient un tableau répertoriant la liste des gens', () => {});
  and(/^le tableau présente des entêtes de colonnes dans l’ordre suivant : "(.*)", "(.*)", "(.*)", "(.*)"$/, (arg0, arg1, arg2, arg3) => {});
  and(/^le tableau contient (\\d+) lignes avec (\\d+) colonnes dans l'ordre suivant :$/, (arg0, arg1, table) => {});
});`,
      `...
  and('la page reçoit les données suivantes', responseBody => {
    serverUseGet<TPeopleData[]>({ route: 'people', responseBody });
  });
  ...
  LaPageContientUnTableau(and, 'la page contient un tableau répertoriant la liste des gens', tableAriaLabel);
  LeTableauPresenteDesEntetesDeColonnesDansLOrdreSuivant(
    and,
    /^le tableau présente des entêtes de colonnes dans l’ordre suivant : "(.*)", "(.*)", "(.*)", "(.*)"$/,
    tableAriaLabel,
  );
  LeTableauContientLesLignesCorrespondantAuxDonneesRecues(
    and,
    /^le tableau contient (\d+) lignes avec (\d+) colonnes dans l'ordre suivant :$/,
    tableAriaLabel,
  );`,
    ],
    unitTestPeople: [
      `import { customRenderHook, waitFor } from 'shared/testsUtils';
import { computeInfos, usePeople } from '../People';`,
      `const peopleMock = [
  {
    _id: '99999',
    firstname: 'Samuel',
    lastname: 'Gomez',
    birthDate: '1985-10-20T13:44:20.540000',
    photo: 'maphoto.jpg',
  },
];`,
      `const expectedData = [
  {
    cols: {
      birthDate: {
        label: '20/10/1985',
      },
      firstname: {
        label: 'Samuel',
      },
      lastname: {
        label: 'Gomez',
      },
      photo: {
        label: 'maphoto.jpg',
      },
    },
    key: '99999',
  },
];`,
      `const expectedEmptyAnomaly = {
  label: 'Info : Aucune donnée trouvée',
  type: 'info',
  iconName: 'exclamation-sign',
};`,
      `describe('computeInfos', () => {
  it('Should computed people when computeInfos have been called with people', () => {
    const computedPeople = computeInfos(peopleMock);
    expect(computedPeople).toMatchObject(expectedData);
  });

  it('Should empty array when computeInfos have been called with empty people', () => {
    const computedPeople = computeInfos([]);
    expect(computedPeople).toEqual([]);
  });
});`,
      `describe('usePeople', () => {
  it.each${`\``}
    queryData                       | people          | isLoading | anomaly
    \${{ responseBody: [] }}         | \${[]}           | \${false}  | \${expectedEmptyAnomaly}
    \${{ responseBody: peopleMock }} | \${expectedData} | \${false}  | \${null}
  ${`\``}(
    'Should return isLoading: $isLoading, anomaly: $anomaly, people: $people when usePeople is rendered with queryData: $queryData',
    async ({ queryData, anomaly, isLoading, people }) => {
      const { result } = customRenderHook({ queryData })(() => usePeople(), {});

      await waitFor(() =>
        expect(result.current).toMatchObject({
          anomaly,
          isLoading,
          people,
          refetch: result.current.refetch,
        }),
      );
    },
  );
});`,
    ],
  },
  notes: {
    constants: [
      {
        line: 4,
        content: "on créé une constante pour le nom du service",
      },
      {
        line: 5,
        content: "on créé une constante pour le endpoint",
      },
      {
        line: 7,
        content:
          "on créé une constante qui contiendra les infos du header pour le tableau",
      },
    ],
    layout: [
      {
        line: 1,
        content: "on importe le Composant Layout",
      },
      {
        line: 2,
        content: "on importe les constantes",
      },
      {
        line: 4,
        content: "On définit le type du Composant People",
      },
      {
        line: 6,
        content: "On met à jour les props du Composant People",
      },
      {
        line: 7,
        content: "Composant Layout avec les propriétés propsTitle",
      },
      {
        line: 8,
        content: "On ajoute un titre ",
      },
    ],
    routesConstants: [
      {
        line: 2,
        content: "on importe la route depuis le Composant People",
      },
      {
        line: 6,
        content: "On réexporte pour centraliser les routes",
      },
    ],
    routes: [
      {
        line: 2,
        content: "on importe le Composant People",
      },
      {
        line: 8,
        content: "On ajoute la route dans le Router",
      },
    ],
    constantsMenu: [
      {
        line: 12,
        content: "On ajoute le lien dans le menu",
        isFragment: false,
      },
    ],
    testPeople: [
      {
        line: 1,
        content: "On importe Jest Cucumber",
      },
      {
        line: 2,
        content: "On importe Testing Library via le customRender",
      },
      {
        line: 3,
        content: "On importe les scénarios type dont on a besoin",
      },
      {
        line: 7,
        content: "On affiche les éléments cachés pour les tests",
      },
      {
        line: 9,
        content: "On importe le fichier People.feature",
      },
      {
        line: 12,
        content: "On pose le test à vide",
      },
    ],
    testPeople2: [
      {
        line: 5,
        content: "On mocke le role depuis les valeurs du scénario",
      },
      {
        line: 9,
        content: "On rend la page avec le rôle défini",
      },
      {
        line: 10,
        content: "On vérifie le nom de l'utilisateur",
      },
    ],
    featurePeople: [
      {
        line: 2,
        content: "On mocke les données reçues",
      },
      {
        line: 10,
        content: "On vérifie la présence du tableau",
      },
      {
        line: 11,
        content: "On vérifie les entêtes",
      },
      {
        line: 12,
        content: "On vérifie le contenu",
      },
    ],
    testPeople3: [
      {
        line: 2,
        content:
          "La méthode <i>serverUseGet</i> permet de passer les données provenant du gherkin comme réponse renvoyée sur un endpoint d'API (cf fichier msw.ts)",
      },
      {
        line: 7,
        content:
          "Ensuite, on remplace les scénarios générés par les scénarios type",
      },
    ],
    usePeople: [
      [
        {
          line: 1,
          content:
            "On créé un hook custom pour effectuer l'appel avec React Query",
        },
      ],
      [
        {
          line: 2,
          content:
            "On passe la route au useQuery, il nous retourne les données, l'état du fetch, l'état de l'erreur, et une méthode refetch",
        },
      ],
      [
        {
          line: 2,
          content:
            "En second paramètre, sur la propriété select, on peut passer une fonction qui s'exécutera après avoir reçu les données pour effectuer des traitements",
        },
      ],
      [
        {
          line: 4,
          content:
            "ici, on renvoie un objet contenant l'anomalie en cas de réponse à vide et les données formatées en cas de données non vides",
        },
      ],
      [
        {
          line: 3,
          content:
            "<i>setAnomalyEmptyItems</i> est une fonction utilitaire qui va renvoyer un objet dans l'anomalie qui affichera une alert",
        },
      ],
      [
        {
          line: 4,
          content:
            "<i>computeInfos</i> est une fonction que l'on va créer pour respecter le format de données attendu par le tableau",
        },
      ],
      [
        {
          line: 9,
          content: "Enfin, on retourne les valeurs utiles à la vue",
        },
      ],
    ],
    peopleContainer: [
      [
        {
          line: 1,
          content: "On déclare un nouveau composant",
        },
      ],
      [
        {
          line: 2,
          content: "On récupère les données via notre hook custom",
        },
      ],
      [
        {
          line: 3,
          content: "On les passe à la vue",
        },
      ],
      [
        {
          line: 6,
          content: "On modifie l'export par défaut",
        },
      ],
    ],
    computeInfos: [
      [
        {
          line: 1,
          content: "On récupère les données",
        },
      ],
      [
        {
          line: 2,
          content: "On boucle sur les données",
        },
      ],
      [
        {
          line: 3,
          content: "Pour chaque item, on renvoie les données formatées",
        },
      ],
      [
        {
          line: 5,
          content:
            "La méthode <em>setDisplay</em> formate les données pour chaque cellule du tableau",
        },
      ],
    ],
    people: [
      [
        {
          line: 1,
          content: "On modifie le type de People",
        },
      ],
      [
        {
          line: 7,
          content: "On modifie les props d'entrée",
        },
      ],
      [
        {
          line: 10,
          content:
            "On ajoute le Loader qui affichera un <br/>loader en fonction de l'état de chargement",
        },
      ],
      [
        {
          line: 11,
          content:
            "On ajoute le composant Resilience <br/>qui affichera un fallback en cas d'anomalie",
        },
      ],
      [
        {
          line: 12,
          content:
            "On ajoute le composant Table <br/>qui affichera le tableau si tout est ok",
        },
      ],
    ],
    unitTestPeople: [
      [
        {
          line: 1,
          content: "On importe waitFor et customRenderHook.",
        },
      ],
      [
        {
          line: 1,
          content:
            "<em>customRenderHook</em> permet de modifier les données renvoyée par React Query",
        },
      ],
      [
        {
          line: 2,
          content: "Cas avec des données",
        },
      ],
      [
        {
          line: 7,
          content: "Cas données vides",
        },
      ],
      [
        {
          line: 5,
          content: "Cas avec des données",
        },
      ],
      [
        {
          line: 4,
          content: "Cas données vides",
        },
      ],
      [
        {
          line: 9,
          content:
            "On rend notre hook en passant le mock que doit renvoyer React Query",
        },
      ],
    ],
  },
};
