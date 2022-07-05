'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */

//? Створіть функцію loadScript(url), яка буде створювать і вставлять скрипт на сторінку

// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const script = document.createElement('script');
//   script.src = scriptUrl;

//   document.body.append(script);

//   script.addEventListener('load', () => {
//     onSuccess(script.src);
//   });

//   script.addEventListener('error', () => {
//     onError(script.src);
//   });
// };

const handleSuccess = scriptUrl => {
  console.log(`${scriptUrl} - script download`);
};

const handleError = scriptUrl => {
  console.log(`${scriptUrl} - script error`);
};

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   handleSuccess,
//   handleError
// );
// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//   handleSuccess,
//   handleError
// );
// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//   handleSuccess,
//   handleError
// );

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   scriptUrl => {
//     console.log(`${scriptUrl} - script download`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       scriptUrl => {
//         console.log(`${scriptUrl} - script download`);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           scriptUrl => {
//             console.log(`${scriptUrl} - script download`);
//           },
//           scriptUrl => {
//             console.log(`${scriptUrl} - script error`);
//           }
//         );
//       },
//       scriptUrl => {
//         console.log(`${scriptUrl} - script error`);
//       }
//     );
//   },
//   scriptUrl => {
//     console.log(`${scriptUrl} - script error`);
//   }
// );

//? Рішення через проміси
const loadScript = url => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    document.body.append(script);

    script.addEventListener('load', () => {
      resolve(script.src);
    });

    script.addEventListener('error', () => {
      reject(script.src);
    });
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(scriptUrl => {
    handleSuccess(scriptUrl);

    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    );
  })
  .then(scriptUrl => {
    handleSuccess(scriptUrl);

    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
    );
  })
  .then(scriptUrl => {
    handleSuccess(scriptUrl);
  })
  .catch(err => {
    handleError(err);
  });

//? Передайте колбек, який буде викликатись після виконання завантаження скрипта

//? Обробка помилок

//? Загрузка декількох скриптів

//? АдскАя піраміда колбеків
