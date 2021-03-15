$(function () {
    // state variables
    let skills, skill;


    // cached element references

    const $button = $('button');
    const $ul = $('ul');
    const $input = $('input');


    // event listeners
    $button.on('click', handleAddSkill);
    $ul.on('click', '.delete', handleDelete);


    // functions
    init();

    function init() {
        skills = [];
        render();
    }

    function handleAddSkill() {
        skill = $input.val();
        if (skill) {
            skills.push(skill);
            $input.val('');
            render();
        } else return;
    }

    function handleDelete() {
        const $skill = $(this).closest('li');
        $skill.fadeOut(150, function() {
            const idx = skills.indexOf($skill.text().replace('X', ''));
            skills.splice(idx, 1);
            render();
        });
    }

    function render() {
        if (!skills.length) $ul.css('margin-bottom', '30px');
        else $ul.css('margin-bottom', '30px');
        $ul.html(skills.map(skill => $(`<li><span class="delete">X</span>${skill}</li>`)));
    }
});