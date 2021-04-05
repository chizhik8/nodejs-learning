// module.exports = {
//     email: /[A-z]/g,
//     phone: /[1-9]{12}/g
// }


module.exports = {
    email: {
        reg: /[A-z]/g,
        requiredMsg: "У ведьмака должна быть почта, чтобы принимать заказы!",
        errorMsg: "У ведьмака должна быть нормальная почта!"
    },
    phone: /[1-9]{12}/g
}
