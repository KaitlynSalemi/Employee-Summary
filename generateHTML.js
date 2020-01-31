function generateHTML(response){
    const $html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <!-- local -->
        <link rel="stylesheet" href="./templets/style.css">
        <title>Employee Summary</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col s12 m6 l4">
                    <div class="card bg-light mb-3" style="max-width: 18rem;">
                        <div class="card-header">${ response.name }</div>
                        <div class="card-body">
                            <h5 class="card-title">Manager</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Email: ${ response.email } </li>
                                <li class="list-group-item">id: ${ response.id } </li>
                                <li class="list-group-item">Office Number: ${ response.officeNumber } </li>
                            </ul>
                        </div>
                    </div>
                </div>`
    return $html;

}

module.exports = generateHTML;