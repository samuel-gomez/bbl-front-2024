module.exports = {
  data: [
    {
      code: `section {
  counter-increment: section-name;
}`,
      notes: [],
    },
    {
      code: `section::before {
        content: counter(section-name);
      }`,
      notes: [],
    },
    {
      code: `section {
        counter-reset: section-name;
      }`,
      notes: [],
    },
  ],
};
