module.exports = {
  data: [
    {
      code: `:root{
  --main-bg-color: pink;
}`,
      notes: [],
    },
    {
      code: `:root {
  --main-bg-color: hsla(0, 100%, 50%, 0.5);
}

.box {
  background-color: var(--main-bg-color);
}`,
      notes: [],
    },
    {
      code: `:root {
  --all-padding: 10px 20px 30px 40px;
  --boolean: false;
  --math: sqrt(pow(var(--all-padding), 2) + pow(var(--all-padding), 2));
  --string: "Hello, World!";
  --url: url("https://www.example.com");
  --color: #ff0000;
  --length: 100px;
  --number: 42;
  --percentage: 50%;
  --angle: 45deg;
  --time: 2s;
  --resolution: 96dpi;
  --frequency: 1Hz;
  --font: Arial, sans-serif;
  --gradient: linear-gradient(45deg, black, #222);
  --image: url("image.jpg");
  --position: center;
  --shape: circle;
  --transform: rotate(45deg);
}`,
      notes: [],
    },
    {
      code: `:root {
  --brand: blue;
  --brand-hightlight: color-mix(var(--brand) white 50%);
  --brand-shadow: color-mix(var(--brand) black 50%);
  --brand-gradient: linear-gradient(45deg, var(--brand-hightlight), var(--brand-shadow));
}

@media (prefers-color-scheme: dark) {
  :root {
    --brand: lightblou; /* typo 😱 */
  }
}`,

      notes: [],
    },
    {
      code: `:root {
  --main-bg-color: hsla(0, 100%, 50%, 0.5);
}

.box {
  --main-bg-color: hsla(0, 50%, 50%, 0.5);
  background-color: var(--main-bg-color);
}`,
      notes: [],
    },
    {
      code: `.alert {
  --state-color: white;
  --emoji: "C'est ok 😀";
  border: var(--state-color) 1px solid;
  background-image: linear-gradient(45deg, black, #222);
  padding: 1rem 4rem;
  border-radius: 20px;
  font-size: 2rem;
  text-align: center;
  box-shadow: 0 0 25px 5px hsla(0deg 0% 0% / 100%);
  display: flex;
  .message {
    font-size: 1rem;
    color: var(--state-color);
    &::before {
      content: var(--emoji);
    }
  }
}`,
      notes: [],
    },
    {
      code: `.alert--success {
  --state-color: green;
  --emoji: "Succès 😎";
  border: var(--state-color) 1px solid;
  .message {
    color: var(--state-color);
    &::before {
      content: var(--emoji);
    }
  }`,
      notes: [],
    },
    {
      code: `@property --brand {
  syntax: '<color>';
  inherits: false;
  initial-value: blue;
}`,
      notes: [
        [
          {
            content: `On déclare une custom property avec @property et son nom (--*)`,
            line: 0,
          },
        ],
        [
          {
            content: `On définit le type de valeur attendue avec la propriété syntax`,
            line: 1,
          },
        ],
        [
          {
            content: `On définit si la custom property hérite de la valeur de son parent avec la propriété inherits`,
            line: 2,
          },
        ],
        [
          {
            content: `On définit la valeur initiale de la custom property avec la propriété initial-value`,
            line: 3,
          },
        ],
      ],
    },
    {
      code: `@property --brand {}`,
      notes: [],
    },
    {
      code: `:root {
  --main-bg-color: red;
  --main-color: blue;
}

.box { 
  background-color: var(--main-bg-color, blue);
  color: var(--main-color, var(--main-bg-color, blue));
}`,
      notes: [],
    },
    {
      code: `@property --brand {
  syntax: '<color>';
  inherits: false;
  initial-value: blue;
}
:root {
  --brand-hightlight: color-mix(var(--brand) white 50%);
  --brand-shadow: color-mix(var(--brand) black 50%);
  --brand-gradient: linear-gradient(45deg, var(--brand-hightlight), var(--brand-shadow));
}

@media (prefers-color-scheme: dark) {
  :root {
    --brand: lightblou; /* typo 😱 */
  }
}`,

      notes: [],
    },
    {
      code: `window.CSS.registerProperty({
  name: '--primary-secondary',
  syntax: '<color>',
  initialValue: 'blue',
  inherits: false,  
});`,
      notes: [],
    },
    {
      code: `// obtenir une variable à partir d'un style en ligne (dans un élément html)
element.style.getPropertyValue("--ma-variable");

// obtenir une variable par ailleurs
getComputedStyle(element).getPropertyValue("--ma-variable");

// définir une variable dans un style en ligne
element.style.setProperty("--ma-variable", varJS + 4);`,
      notes: [],
    },
  ],
};
