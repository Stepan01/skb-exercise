export default function regforuname(username) {
  const re = new RegExp('@?(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?(a-zA-Z0-9]*)', 'i');
  const uname = username.match(re);
  return uname;
}
