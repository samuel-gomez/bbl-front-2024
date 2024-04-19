module.exports = {
  data: [
    {
      code: `@supports (<supports-condition>) {
  /* If the condition is true, use the CSS in this block. */
}`,
      notes: [],
    },
    {
      code: `@supports not (<supports-condition>) {
  /* If the condition is false, use the CSS in this block. */
}`,
      notes: [],
    },
  ],
};
