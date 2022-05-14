const addSharp = <E>(el: E) => `#${el}`;

export const getTagList = <A>(arr: A[]) => arr.map(addSharp).join('\t'.repeat(1000000))
