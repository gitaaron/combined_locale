require.config({
    config:{
        i18n:{
            locale:"fr-fr"
        }
    }
});

require(['i18n!nls/strings'], function(i18n) {
    var elem = document.getElementById('test_message');
    elem.innerHTML = i18n.test;
});
