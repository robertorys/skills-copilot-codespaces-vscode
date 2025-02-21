function skillsMember() {
    var skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'Java'
    ];

    var skillsList = document.getElementById('skills-list');

    for (var i = 0; i < skills.length; i++) {
        var skillItem = document.createElement('li');
        skillItem.textContent = skills[i];
        skillsList.appendChild(skillItem);
    }
}