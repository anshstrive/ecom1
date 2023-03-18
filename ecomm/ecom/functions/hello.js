// api is at domain/.netlify/functions/fileName(hello)

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: "Hello World"
    }
}