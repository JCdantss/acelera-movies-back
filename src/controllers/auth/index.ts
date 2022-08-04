export const login = (request, response) => {
  const { username, password } = request.body

  // buscar o usuario no banco pelo username ou email
  // const user = await userRepository.findOne({ login: username }) <= nao é necessario!
  // verificar se a password é igual a do usuario encontrado
  // if (user.password === password) { ... }

  if (username === "admin" && password === "12345") {
    return response.json({
      auth: true,
      token: "abc.xxx.zzz",
      message: "autenticado com sucesso!",
    })
  }
  return response.json({ auth: false, message: "usuario nao autenticado!" })
}
