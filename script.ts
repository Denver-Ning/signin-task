async function signInTouDingMaoHuo() {
  const cookie = 'session=MTcxMDA4MDU1NnxEWDhFQVFMX2dBQUJFQUVRQUFEX29QLUFBQVVHYzNSeWFXNW5EQTBBQzI5aGRYUm9YM04wWVhSbEJuTjBjbWx1Wnd3T0FBeEVOekF3WkZaU1FrUkRRV1VHYzNSeWFXNW5EQVFBQW1sa0EybHVkQVFFQVA0QnRBWnpkSEpwYm1jTUNnQUlkWE5sY201aGJXVUdjM1J5YVc1bkRBd0FDbWRwZEdoMVlsOHlNVGdHYzNSeWFXNW5EQVlBQkhKdmJHVURhVzUwQkFJQUFnWnpkSEpwYm1jTUNBQUdjM1JoZEhWekEybHVkQVFDQUFJPXxxp3qy7XJz3JTZJWVn7X0gjIK2Gbv1CPvtrOAhuAjJKg=='
  const url = 'https://burn.hair/api/user/check_in'
  const headers = {
    'Content-Type': 'application/json',
    'Cookie': cookie,
  }
  const response = await fetch(url,{
    method: 'GET',
    headers: headers,
  }).then(response => {
    return response.json()
  })
  console.log(response.message)
}

signInTouDingMaoHuo()