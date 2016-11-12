export default function canonize(fullname) {
//  if (fullnameSplit.length > 3 || fullname === '' || fullname.search('[0-9\._\/]') != -1) {
//{
  //const re = new RegExp('([^\s]+)\s*([^\s.])?[^\s.]*(?:\s|\.)?([^\s.])?[^\s.]*');
  const re = new RegExp(' +');
//}
  const username = fullname.split(re);
  return username;

}
