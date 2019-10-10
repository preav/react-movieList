export default function Sort(arr, path) {
  const sortBy = path.path;
  console.log(sortBy);
  if (path.order === "asc") {
    return arr.sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
    );
  } else if (path.order === "desc") {
    return arr.sort((a, b) =>
      a[sortBy] > b[sortBy] ? -1 : b[sortBy] > a[sortBy] ? 1 : 0
    );
  }
}
