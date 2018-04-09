export default store => next => action => {
    //code goes here
    console.log('Logger Middleware:', action);
    return next(action);
}


//ES5

// export default function(store) {
//     return function(next) {
//         return function(action) {
//             code
//         }
//     }
// }
