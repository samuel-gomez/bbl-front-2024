module.exports = {
  data: [
    {
      code: `.parent {
  /* parent styles */
  & .child1 {
    /* child1 styles */
  }
  .child2 {
    /* child2 styles */
  }
  &.second-class {
    /* second-class styles */
  }
}`,
      notes: [],
    },
    {
      code: `
.parent .child1{
  /* child1 styles */
}
.parent .child2 {
  /* child2 styles */
}
.parent.second-class {
  /* second-class styles */
}
`,
      notes: [],
    },
    {
      code: `.parent {
  /* parent styles */
  > .directchild {
    /* directchild styles */
  }
  + .sibling {
    /* sibling styles */
  }
}`,
      notes: [],
    },
    {
      code: `
.parent > .directchild {
  /* directchild styles */
}
.parent + .sibling {
  /* sibling styles */
}
`,
      notes: [],
    },
    {
      code: `.parent-pseudo {
  background: red;  
  &:hover, &:focus {
    background: blue;
  }  
  &:is(p, em, i) {
    background: blue;
  }
  &::after, &::before {
    content: "✅️";
  }
  ::after { 
    content: "❌️";
  }  
}`,
      notes: [],
    },
    {
      code: `.parent-pseudo {
  background: red;
}
.parent-pseudo:hover, .parent-pseudo:focus, .parent-pseudo:is(p, em, i) {
  background: #00f;
}
.parent-pseudo:after, .parent-pseudo:before {
  content: "✅️";
}
.parent-pseudo :after {
  content: "❌️";
}`,
      notes: [],
    },
    {
      code: `.component {
  background: red;
  .ancestor & {
    background: orange;
  }
}`,
      notes: [],
    },
    {
      code: `.component {
  background: red;
}

.ancestor .component {
  background: orange;
}`,
      notes: [],
    },
    {
      code: `/* ❌️ */
.block{
  background: green;
  &__element {
    background: blue;
      &--modifier{
        background: red;
      }
  }
}`,
      notes: [],
    },
    {
      code: `
/* ❌️ */
.block {
  background: green;
}

__element.block {
  background: #00f;
}

--modifier:is(__element.block) {
  background: red;
}`,
      notes: [],
    },
  ],
};
