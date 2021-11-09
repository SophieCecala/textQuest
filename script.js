let t = +prompt(`There are three tracks in front of you. Which will you take?
1 - path to the dark forest
2- path to a bright meadow
3- path to the mysterious door in the trunk of a centuries-old oak`);

switch (t) {
    case 1:
        alert(a = +prompt(`There are three apples i front of you. To go further, you need to choose one and eat it, which one will you choose?
    1 - bright red, ripe in appearance
    2 - green, crispy in appearance
    3 - with a worm inside :D`));
        switch (a) {
            case 1 :
                alert('The apple was poisoned, you di not complete the quest. Good luck next time!');
                break;
            case 2 :
                alert('The apple turned out to be ordinary, you walked further along the path and went out into the city. Congratulations!');
                break;
            case 3 :
                alert('The apple was rotten, your tummy ached, you did not complete the quest. Good luck next time!');
                break;
            default :
                alert('Unfortunately, you cannot choose that option. Reload the page to start the quest again');
        }
    case 2:
        b = +prompt(`you have three options. What will you choose?
    1 - a path that merges with a path to the dark forest
    2 - go to the person who is looking at the sy and ask for the way to the city
    3 - walk further across the field and hope something is hiding behind the horizon`);
        switch (b) {
            case 1 :
                alert(a = +prompt(`There are three apples i front of you. To go further, you need to choose one and eat it, which one will you choose?
    1 - bright red, ripe in appearance
    2 - green, crispy in appearance
    3 - with a worm inside :D`));
                switch (a) {
                    case 1 :
                        alert('The apple was poisoned, you di not complete the quest. Good luck next time!');
                        break;
                    case 2 :
                        alert('The apple turned out to be ordinary, you walked further along the path and went out into the city. Congratulations!');
                        break;
                    case 3 :
                        alert('The apple was rotten, your tummy ached, you did not complete the quest. Good luck next time!');
                        break;
                    default :
                        alert('Unfortunately, you cannot choose that option. Reload the page to start the quest again');
                }
                break;
            case 2 :
                alert('the man turned out to be a statue, you should now choose another path',
                    a = +prompt(`There are three apples i front of you. To go further, you need to choose one and eat it, which one will you choose?
    1 - bright red, ripe in appearance
    2 - green, crispy in appearance
    3 - with a worm inside :D`));
                switch (a) {
                    case 1 :
                        alert('The apple was poisoned, you di not complete the quest. Good luck next time!');
                        break;
                    case 2 :
                        alert('The apple turned out to be ordinary, you walked further along the path and went out into the city. Congratulations!');
                        break;
                    case 3 :
                        alert('The apple was rotten, your tummy ached, you did not complete the quest. Good luck next time!');
                        break;
                    default :
                        alert('Unfortunately, you cannot choose that option. Reload the page to start the quest again');
                }
                break;
            case 3 :
                alert(b = +prompt(` you will walk further across the field and hope something is hiding behind the horizon`));
                switch (b) {
                    case 1 :
                        alert('the field turned into a swamp but you noticed too late, you did not complete the quest. Good luck next time');
                        break;
                    default :
                        alert('Unfortunately, you cannot choose that option. Reload the page to start the quest again');
                }
        }
    case 3:
        alert(c = alert('you chose the mysterious door in the trunk of a centures-old oak'));
        switch (c) {
            case 1 :
                alert('The door through the tree was not scary at all, and you immediately got into the city. Congratulations!');
                break;
            default :
                alert('Unfortunately, you cannot choose that option. Reload the page to start the quest again');
        }
}