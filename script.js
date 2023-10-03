function func(small) {
    'use strict';

    const full = document.getElementById('imagebox');
    full.src = small.src;
}



















function show_hide_password(target) {
    'use strict';

    var input = document.getElementById('password-input');

    if (input.getAttribute('type') === 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}
