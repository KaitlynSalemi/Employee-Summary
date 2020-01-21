function generateEngineer(response){
    const $html = 
    `<div class="col s12 m6 l4">
        <div class="card bg-light mb-3"   style="max-width: 18rem;">
            <div class="card-header">${ response.name }</div>
            <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${ response.email } </li>
                    <li class="list-group-item">id: ${ response.id } </li>
                    <li class="list-group-item">GitHub: ${ response.github } </li>
                </ul>
            </div>
        </div>
    </div>`
return $html;
}

module.exports = generateEngineer;