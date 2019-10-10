export default function arrayGenerate(pagesCount) {
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return pages;
}
