module.exports = {
  data: [
    {
      code: `<header>
  <img src="logo.svg" alt="Logo" />
  <form>
      <label for="search">Search</label>
      <input type="search" placeholder="Search" />
  </form>
</header>`,
      notes: [],
    },
    {
      code: `header {
  display: flex;
}
input {
  flex-grow: 1;
}`,
      notes: [
        [
          {
            content: `Ce code ne peut pas fonctionner car input n'est pas un enfant direct de header`,
            line: 0,
          },
        ],
      ],
    },
    {
      code: `header {
  display: flex;
}
form {
  display: contents;
}
input {
  flex-grow: 1;
}`,
      notes: [],
    },
  ],
};
