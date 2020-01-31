import {AppModel, baseUrl} from '../app/app.model';

// export const environment: AppModel = {
//     api: {
//         url: `${baseUrl}/my/api/path`
//     },
//     production: false
// };
export const environment: AppModel = {
    api: {
        url: `${baseUrl}`
    },
    production: false
};

//{
//  "/backend/api": {
//    "target": "https://tasktest.free.beeceptor.com",
//    "changeOrigin": true,
//    "pathRewrite": {
//      "^/backend/api": "/"
//    }
//  }
//}
