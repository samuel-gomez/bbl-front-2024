module.exports = {
  data: [
    {
      code: `selecteur:has(selecteur)`,
      notes: [],
    },
    {
      code: `.card {
  /* style de base */
}
.card:has(img) {
  /* style de surcharge */
}`,
      notes: [],
    },
    {
      code: `.card:has(h2 + img + p + p) {
  grid-template-areas: 
    "img img"
    "h2 h2"
    "p1 p2"
}
.card:has(h2 + img + img + p + p) {
  grid-template-areas: 
    "h2 h2"
    "img1 img2"
    "p1 p2"
}`,
      notes: [],
    },
    {
      code: `.card:has(img):has(h2) {
  /* style */
}`,
      notes: [],
    },
    {
      code: `.card:has(img, h2) {
  /* style */
}`,
      notes: [],
    },
    {
      code: `body:has(input.myCheckBoxTheme:checked) footer {
  /* style */
}`,
      notes: [],
    },
    {
      code: `h2 + p {  
}`,
      notes: [],
    },
    {
      code: `h2:has(+ p) {
}`,
      notes: [],
    },
    {
      code: `h2 ~ p {
}`,
      notes: [],
    },
    {
      code: `h2:has(~ p) {
}`,
      notes: [],
    },
    {
      code: `.from ~ :has(~ .to) {
}`,
      notes: [],
    },
    {
      code: `ul:has(> *:nth-child(5n)) {
}`,
      notes: [],
    },
    {
      code: `&:has(a[href$=".wave"]) {
  --theme-color: purple;
  --theme-icon: "🔈";
  --theme-file: " Audio";
}
&:has(a[href$=".jpg"]) {
  --theme-color: sienna;
  --theme-icon: "🏞";
  --theme-file: " Image";
}
&:has(a[href$=".pdf"]) {
  --theme-color: darkred;
  --theme-icon: "PDF";
  --theme-file: " PDF";
}
&:has(a[href$=".docx"]) {
  --theme-color: blue;
  --theme-icon: "DOCX";
  --theme-file: " DOCX";
}
&:has(a[href$=".xslx"]) {
  --theme-color: darkgreen;
  --theme-icon: "XLSX";
  --theme-file: " XLSX";
}`,
      notes: [],
    },
  ],
};
