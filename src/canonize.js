export default function canonize(fullname) {
  const re = new RegExp(' +');
  const buff = fullname.trim().toLowerCase();
  const username = buff.split(re);
  return username;

}
