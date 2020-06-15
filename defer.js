/*@shinsenter/defer.js*/
!function(e,o,t,n,i,d){function f(e,t){d?n(e,t||32):i.push(e,t)}function c(e,t,n,i){return t&&o.getElementById(t)||(i=o.createElement(e||'SCRIPT'),t&&(i.id=t),n&&(i.onload=n),o.head.appendChild(i)),i||{}}d=/p/.test(o.readyState),e.addEventListener('on'+t in e?t:'load',function(){for(d=1;i[0];)f(i.shift(),i.shift())}),f._=c,e.defer=f,e.deferscript=function(e,t,n,i){f(function(){c('',t,i).src=e},n)}}(this,document,'pageshow',setTimeout,[]);
/*

<script type="text/javascript">
    // This will defer showing an alert message after 2 seconds
    defer(function() {
        alert("This message is shown after 2 seconds after the 'load' event.");
    }, 2000);
 
    // Append a HTML content to the <body> tag using jQuery
    defer(function () {
        $('body').html('<p>Your awesome content</p>');
    }, 500);
</script> 

*/
/*

<script type="text/javascript">
    // Alternative way to lazy load Google Tag Manager script
    deferscript('//www.googletagmanager.com/gtag/js?id=UA-34520609-2', 'google-tag', 500, function() {
        // Run extra code right after the script has been loaded
        (window.dataLayer = window.dataLayer || []).push('config', 'UA-34520609-2');
    });
</script>

*/
