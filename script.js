let list = [];
function addToList()
{
    let nameValue = document.getElementById('name').value;
    list.push(nameValue);
    document.getElementById("list").innerHTML = '<li>' +list.map(i =>i).join('<br>')+ '</li>';
    document.getElementById('name').value = '';
    return false;
}

function shuffle(list){
    let currentIndex = list.length;
    let randomIndex;

    while (currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]];
    }

    return list;
}

function tirage(list)
{
    //Détermination du nombre de groupes
    let nbGroupes;
    if(list.length % 2 == 0) {
        nbGroupes = list.length/2;
    } else {
        nbGroupes = Math.floor(list.length / 2) + 1;
    }

    //Mélange de la liste
    let shuffleList = shuffle(list);

    //Assignation
    let i=1;
    while(i<=nbGroupes){
        document.getElementById("tirage").innerHTML +=
            '<h3> Groupe ' + i + ' :</h3>' +
            '<p>' + shuffleList[0] + ' et ' + shuffleList[1] + '</p>';
        shuffleList.splice(0,2);
        i++;
    }

}