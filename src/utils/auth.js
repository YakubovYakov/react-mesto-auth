export const BASE_URL = "https://auth.nomoreparties.co";

const checkResponce = (res) => 
	res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} `)

	export const register = ({email, password}) => {
		return fetch(`${BASE_URL}/signup`, {
			method: "POST",
			headers: {
				//'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password }),
		}).then((res) => checkResponce(res))
	};

	export const login = (password, email) => {
		return fetch(`${BASE_URL}/signin`, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({password, email})
		}).then((res) => checkResponce(res))
	};

// export const login = ({email, password}) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((res) => checkResponce(res))
// };

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "appliccation/json",
      "Content-Type": "appliccation/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
