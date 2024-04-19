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
  ],
};
