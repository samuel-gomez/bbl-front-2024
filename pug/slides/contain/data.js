module.exports = {
  data: [
    {
      code: `div {
  contain: none; /* no containment on element */
  contain: layout; /* influences how element relates to other elements in the document */
  contain: paint; /* influences how element is painted to screen */
  contain: size; /* influences how element affects size calculations for the page */
  contain: style; /* is considered at-risk for removal from spec */

  contain: content; /* combines layout and paint */
  contain: strict; /* combines layout, paint, and size */
}`,
      notes: [],
    },
  ],
};
