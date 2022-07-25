import startGallery from './js/galleryInfiniteScroll';

const formEl = document.querySelector('form');

const loginUser = () => {
  console.log('Login Request');
  return Promise.resolve({ token: 'qwe', email: 'user@mail.com' });
};

class User {
  #token = null;
  constructor(userData) {
    this.email = userData.email;
    this.#token = userData.token;
    this.setTokenToLS();
  }

  setTokenToLS(token) {
    localStorage.setItem('token', JSON.stringify(this.#token));
  }
}

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const userData = await loginUser();
    const user = new User(userData);
    console.log('user :>> ', user);
    if (userData.token) {
      startGallery();
    }
  } catch (error) {
    console.log('error :>> ', error);
  }
});
