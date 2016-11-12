export default function ucfirst(str) {
  //  if (fullnameSplit.length > 3 || fullname === '' || fullname.search('[0-9\._\/]') != -1) {
  //{
  //const re = new RegExp('([^\s]+)\s*([^\s.])?[^\s.]*(?:\s|\.)?([^\s.])?[^\s.]*');
  const buff = str[0].toUpperCase() + str.slice(1);
  return buff;
}
