function showAboutDialog() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var html = "<div class=\"scrollable\">" + text + "</div>"
    showDialog({
        id: 'about-dialog-id',
        title: 'About',
        text: html,
        positive: {
            id: 'ok-button',
            title: 'Close',
            onClick: function() {}
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        },
        onLoaded: function() {}
    });
}

function showPrivacyTermsDialog() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var html = "<div class=\"scrollable\">" + text + "</div>"
    showDialog({
        id: 'privacy-dialog-id',
        title: 'Privacy & Terms',
        text: html,
        positive: {
            id: 'ok-button',
            title: 'Close',
            onClick: function() {}
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        },
        onLoaded: function() {}
    });
}

function isMobile(){
    var match = navigator.userAgent.match(/iPhone|Android/i);
    return (match == "Android" || match == "iPhone");
}

function showShareDialog() {
    var mobile = isMobile();

    var text = "<div>" +
            "<img id=\"blogger\" src=\"img/64-blogger.png\">" +
            "<img id=\"wordpress\" src=\"img/64-wordpress.png\">" +
            "<img id=\"googleplus\" src=\"img/64-googleplus.png\">" +
            "<img id=\"linkedin\" src=\"img/64-linkedin.png\">" +
            "<img id=\"facebook\" src=\"img/64-facebook.png\">" +
            "<img id=\"vkontakte\" src=\"img/64-vkontakte.png\">" +
            "<img id=\"twitter\" src=\"img/64-twitter.png\">" +
            "<img id=\"digg\" src=\"img/64-digg.png\">" +
            "<img id=\"delicious\" src=\"img/64-delicious.png\">" +
            "<img id=\"reddit\" src=\"img/64-reddit.png\">" +
            "<img id=\"evernote\" src=\"img/64-evernote.png\">" +
            "<img id=\"tumblr\" src=\"img/64-tumblr.png\">" +
            "<img id=\"pinterest\" src=\"img/64-pinterest.png\">" +
            "<img id=\"skype\" src=\"img/64-skype.png\">";

    //email, flickr, dropbox, instagram
    if (mobile == true) {
        text += "<img id=\"viber\" src=\"img/64-viber.png\">";
        text += "<img id=\"whatsapp\" src=\"img/64-whatsapp.png\">";
    }
    text += "<img id=\"telegram\" src=\"img/64-telegram.png\">";
    text += "<br><br></div>";

    showDialog({
        id: 'share-dialog-id',
        title: 'Share Us',
        text: text,
        cancelable: true,
        contentStyle: {
            'max-width': '450px'
        },
        positive: {
            id: 'ok-button',
            title: 'Close',
            onClick: function() {}
        },
        onLoaded: function() {

            var description = "Advanced%20Reflexing,%20Injection,%20Loading,%20Privileges%20Escalation%20and%20more%20...";
            var tittle = "LeakVM%3A%20Research%20%26%20Pentesting%20for%20Android, Run%20security%20tests%20instantly";
            var image = "https%3A//github.com/JhetoX/LeakVM/raw/master/LeakVM.jpg";
            var url = "https%3A//jhetox.github.io/LeakVM/";

            if (mobile == true) {
                $('#whatsapp').click(function(){
                    window.open("whatsapp://send?text="+ url, 'Share', 'width=400, height=300');
                });
                $('#viber').click(function(){
                    window.open("viber://forward?text="+ url, 'Share', 'width=400, height=300');
                });
            }

            $('#delicious').click(function(){
                window.open("https://del.icio.us/save?url="+url+"&title="+tittle, 'Share', 'width=600, height=700');
            });
            $('#wordpress').click(function(){
                window.open("http://wordpress.com/press-this.php?u="+url+"&t="+tittle+"&s="+description+"&i="+image, 'Share', 'width=600, height=350');
            });
            $('#digg').click(function(){
                window.open("http://digg.com/submit?url="+url+"&title="+tittle, 'Share', 'width=600, height=350');
            });
            $('#blogger').click(function(){
                window.open("https://www.blogger.com/blog-this.g?u="+url+"&n="+tittle+"&t="+description, 'Share', 'width=600, height=350');
            });
            $('#tumblr').click(function(){
                window.open("https://www.tumblr.com/widgets/share/tool?canonicalUrl="+url+"&title="+tittle+"&caption="+description, 'Share', 'width=600, height=600');
            });
            $('#reddit').click(function(){
                window.open("https://reddit.com/submit?url="+url+"&title="+tittle, 'Share', 'width=600, height=600');
            });
            $('#evernote').click(function(){
                window.open("https://www.evernote.com/clip.action?url="+url+"&title="+tittle, 'Share', 'width=600, height=350');
            });
            $('#vkontakte').click(function(){
                window.open("http://vk.com/share.php?url="+url, 'Share', 'width=600, height=350');
            });
            $('#facebook').click(function(){
                window.open("https://www.facebook.com/sharer/sharer.php?u="+url, 'Share', 'width=600, height=350');
            });
            $('#linkedin').click(function(){
                window.open("https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+tittle+"&summary="+description+"&source=", 'Share', 'width=600, height=350');
            });
            $('#twitter').click(function(){
                //https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}
                window.open("https://twitter.com/home?status="+ tittle + "%20" + url, 'Share', 'width=600, height=350');
            });
            $('#pinterest').click(function(){
                window.open("https://pinterest.com/pin/create/button/?url="+url+"&media="+image+"&description="+tittle+",%20"+description, 'Share', 'width=600, height=350');
            });
            $('#googleplus').click(function(){
                window.open("https://plus.google.com/share?url="+url, 'Share', 'width=600, height=350');
            });
            $('#skype').click(function(){
                window.open("https://web.skype.com/share?url="+url+"&source=", 'Share', 'width=600, height=600');
            });
            $('#telegram').click(function(){
                window.open("https://telegram.me/share/url?url="+url, 'Share', 'width=600, height=600');
            });
        }
    });
}

function showContactDialog() {
    var text = "Please send us your inquiry:<br>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"email\" id=\"email1\">" +
        "<label class=\"mdl-textfield__label\" for=\"email1\">Email ...</label>" +
        "</div>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" id=\"subject1\">" +
        "<label class=\"mdl-textfield__label\" for=\"subject1\">Subject...</label>" +
        "</div>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<textarea class=\"mdl-textfield__input\" rows=\"3\" type=\"text\" id=\"message1\"></textarea>" +
        "<label class=\"mdl-textfield__label\" for=\"message1\">Message...</label>" +
        "</div>";

    var subjectOk = false, emailOk = false;

    showDialog({
        id: 'contact-dialog-id',
        title: 'Contact',
        text: text,
        negative: {
            id: 'cancel-button',
            title: 'Cancel'
        },
        positive: {
            id: 'ok-button',
            title: 'Send',
            onClick: function() {
                var subject = $("#subject1").val();
                var message = $("#message1").val();
                var email = $("#email1").val();
                if(email !== undefined && email.length >0 && email !== undefined && email.length >0){
                    onContact(email, subject, message, function(success, message) {
                        showInfoDialog("Contact", message);
                    });
                }
                //console.log("email: '" + email + "' subject: '" + subject + "' message: '" + message + "'");
            }
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        },
        onLoaded: function() {
            $("#ok-button").prop('disabled', true);

            $('#email1').on("input", function() {
                var value = this.value;
                emailOk = ((value !== undefined && value.length >0 && validEmail(value)) === true);
                if(subjectOk && emailOk) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });

            $('#subject1').on("input", function() {
                var value = this.value;
                subjectOk = (value !== undefined && value.length >0);
                if(subjectOk && emailOk) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });
        }
    });
}

function showLoginDialog(){
    var text = "Please enter you email address to continue:<br>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"email\" id=\"email1\">" +
        "<label class=\"mdl-textfield__label\" for=\"email1\">Email ...</label>" +
        "</div>";

    showDialog({
        id: 'login-dialog-id',
        title: 'Login',
        text: text,
        negative: {
            id: 'cancel-button',
            title: 'Cancel'
        },
        positive: {
            id: 'ok-button',
            title: 'Send',
            onClick: function() {
                var email = $("#email1").val().trim();
                if(email !== undefined && email.length >0){
                    email = encodeURIComponent(email);
                    console.log("'email: '" + email + "'");
                    onLogin(email, function(success, message){
                        showInfoDialog("Login", message);
                    });
                }
            }
        },
        onLoaded: function() {
            $("#ok-button").prop('disabled', true);

            $('#email1').on("input", function() {
                var value = this.value;
                if((value !== undefined && value.length >0 && validEmail(value)) === true) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        }
    });
}

function showRegisterDialog() {
    var text = "Please fill the following fields to continue:<br>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" id=\"name1\">" +
        "<label class=\"mdl-textfield__label\" for=\"name1\">Name ...</label>" +
        "</div>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"email\" id=\"email1\">" +
        "<label class=\"mdl-textfield__label\" for=\"email1\">Email ...</label>" +
        "</div>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" id=\"company1\">" +
        "<label class=\"mdl-textfield__label\" for=\"company1\">Company...</label>" +
        "</div>" +
        "<label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"checkbox1\">" +
        "<input type=\"checkbox\" id=\"checkbox1\" class=\"mdl-checkbox__input\">" +
        "<span class=\"mdl-checkbox__label\">I agree with the terms and conditions of the <a class=\"mdl-color-text--grey-500\" target=\"_blank\" href=\"policy.html\">LeakVM License Agreement.</a></span>" +
        "</label>";

    var checkedOK = false, nameOk = false, emailOk = false;

    showDialog({
        id: 'register-dialog-id',
        title: 'Get LeakVM',
        text: text,
        negative: {
            id: 'cancel-button',
            title: 'Cancel'
        },
        positive: {
            id: 'ok-button',
            title: 'Register',
            onClick: function() {
                var checkbox = $("#checkbox1").is(':checked');
                if(checkbox === true) {
                    var company = $("#company1").val().trim();
                    var email = $("#email1").val().trim();
                    var name = $("#name1").val().trim();
                    if(email !== undefined && email.length >0 && name !== undefined && name.length >0){
                        company = encodeURIComponent(company);
                        email = encodeURIComponent(email);
                        name = encodeURIComponent(name);
                        onRegister(name, email, company, function(success, message){
                            showInfoDialog("Get LeakVM", message);
                        });
                    }
                    console.log("name: '" + name + "' email: '" + email + "' company: '" + company + "'");
                }
            }
        },
        onLoaded: function() {
            $("#ok-button").prop('disabled', true);

            $("#checkbox1").click(function(){
                checkedOK = $("#checkbox1").is(':checked');
                if(checkedOK === true && nameOk === true && emailOk === true) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });

            $('#email1').on("input", function() {
                var value = this.value;
                emailOk = (value !== undefined && value.length >0 && validEmail(value));
                if(checkedOK === true && nameOk === true && emailOk === true) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });

            $('#name1').on("input", function() {
                var value = this.value;
                nameOk = (value !== undefined && value.length >0);
                if(checkedOK === true && nameOk === true && emailOk === true) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        }
    });
}

function showInfoDialog(title, text){
    showDialog({
        id: 'information-dialog-id',
        title: title,
        text: text,
        positive: {
            id: 'ok-button',
            title: 'Close'
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        }
    });
}

function showAskDialog(title, text, callback){
    showDialog({
        id: 'information-dialog-id',
        title: title,
        text: text,
        positive: {
            id: 'ok-button',
            title: 'Close'
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        },
        negative: {
            id: 'cancel-button',
            title: 'No'
        },
        positive: {
            id: 'ok-button',
            title: 'Yes',
            onClick: function() {
                if(callback !== undefined && callback !== null) callback.call();
            }
        }
    });
}

function showDeleteItDialog(id, package, signature, key){
    var text = "Do yout like delete '"+package+"' ?";
    showAskDialog("Delete", text, function(){
       onRemoveApplication(package, signature, key, function(success, message){
           if(success === true) $("#"+id).remove();
           else{
               showInfoDialog("Delete", message);
           }
       });
    });
}

function showAddApplicationDialog(){
    var text = "Please fill the following fields:<br>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" id=\"package1\">" +
        "<label class=\"mdl-textfield__label\" for=\"package1\">Package ...</label>" +
        "</div>" +
        "<div class=\"mdl-textfield mdl-js-textfield\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" id=\"signature1\">" +
        "<label class=\"mdl-textfield__label\" for=\"signature1\">Signature...</label>" +
        "</div>";

    var packageOk = false, signatureOk = false;

    showDialog({
        id: 'add-dialog-id',
        title: 'Add',
        text: text,
        negative: {
            id: 'cancel-button',
            title: 'Cancel'
        },
        positive: {
            id: 'ok-button',
            title: 'Add',
            onClick: function() {
                var signature = $("#signature1").val();
                var package = $("#package1").val();
                if(package !== undefined && package.length >0 && signature !== undefined && signature.length >0
                        && validPackage(package) && validSignature(signature)){
                    onAddApplication(package, signature, function(success, message, data) {
                        if(success === true){
                            index_app++;
                            var htmlToAdd = createApplicationItem("app_item_"+index_app, data);
                            $(".apps-list-three").append(htmlToAdd);
                        }
                        else {
                            showInfoDialog("Add", message);
                        }
                    });
                }
                //console.log("email: '" + email + "' subject: '" + subject + "' message: '" + message + "'");
            }
        },
        cancelable: true,
        contentStyle: {
            'max-width': '500px'
        },
        onLoaded: function() {
            $("#ok-button").prop('disabled', true);

            $('#signature1').on("input", function() {
                var value = this.value;
                signatureOk = (value !== undefined && value.length >0 && validSignature(value));
                if(signatureOk && packageOk) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });

            $('#package1').on("input", function() {
                var value = this.value;
                packageOk = (value !== undefined && value.length >0 && validPackage(value));
                if(signatureOk && packageOk) $("#ok-button").prop('disabled', false);
                else $("#ok-button").prop('disabled', true);
            });
        }
    });
}

function createApplicationItem(id, data){
    var signature = data.signature;
    var package = data.package;
    var key = data.key;
    return "<li id=\""+id+"\" class=\"mdl-list__item row-app mdl-list__item--three-line\">"+
              "<span class=\"mdl-list__item-primary-content\">"+
                "<img src=\"img/adnroid.png\" class=\"material-icons mdl-list__item-avatar demo-avatar\">"+
                "<span>"+package+"</span>"+
                "<span class=\"mdl-list__item-text-body  mdl-list__item\">"+
                  "<b>Signature:&nbsp;</b>"+signature+"<br>"+
                  "<b>Key:&nbsp;</b>"+key+"<br>"+
                "</span>"+
              "</span>"+
              "<span class=\"mdl-list__item-secondary-content\">"+
                "<i class=\"i--colored material-icons\" onclick=\"showDeleteItDialog(\'"+id+"\',\'"+package+"\',\'"+signature+"\',\'"+key+"\')\">delete</i>"+
              "</span>"+
            "</li> ";
}

function createDeviceItem(id, data){
    return "<div class=\"index-card-wide mdl-card mdl-cell mdl-cell--2-col-desktop mdl-cell--4-col-phone index-device-card\">"+
                        "<div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">&nbsp;Device&nbsp;"+id+"&nbsp;</h2></div>"+
                        "<div class=\"mdl-card__supporting-text\">"+
                            "<span class=\"mdl-typography--font-light mdl-typography--subhead\">"+
                                "<b>Manufacturer:&nbsp;</b>"+data.manufacturer+"<br>"+
                                "<b>Architecture:&nbsp;</b>"+data.architecture+"&nbsp;bits<br>"+
                                "<b>Brand:&nbsp;</b>"+data.brand+"<br>"+
                                "<b>Board:&nbsp;</b>"+data.board+"<br>"+
                                "<b>Hardware:&nbsp;</b>"+data.hardware+"<br>"+
                                "<b>Model:&nbsp;</b>"+data.model+"<br>"+
                                "<b>Kernel:&nbsp;</b>"+data.kernel+"<br>"+
                                "<b>Language:&nbsp;</b>"+data.language+"<br>"+
                                "<b>Country:&nbsp;</b>"+data.country+"<br>"+
                                "<b>VM:&nbsp;</b>"+data.vm+"<br>"+
                                "<b>JNI:&nbsp;</b>"+data.jni+"<br>"+
                                "<b>SDK:&nbsp;</b>"+data.sdk+"<br>"+
                            "</span>"+
                        "</div>"+
                    "</div>";
}

function validEmail(v) {
    var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return (v.match(r) == null) ? false : true;
}

function validPackage(v){
    var pattern = /^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)+[0-9a-zA-Z_]$/i;
    return pattern.test(v);
}

function validSignature(v){
    var vv = v.replace(":", "");
    var pattern = /[0-9A-Fa-f]{64}$/i;
    return pattern.test(vv);
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) return clipboardData.setData("Text", text);
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function getParam( name ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) return null;
  else return results[1];
}

function redirectTo(page) {
    window.location.href = page;
}

function setUserName(user) {
    $("#username").html("<br>" + user);
}

function updateServiceValues(id, spent, days){
  $( "input[name='item_number']" ).text(id);

  var spentHtml = $("#spent").html();
  $("#spent").html(spent+spentHtml);

  var daysHtml = $("#days").html();
  $("#days").html(days+daysHtml);
}

function getBaseAPI(){
    return "https://jhetoxekricom.ipage.com/leakvm/api/";
}

function onReady(redirect, callback) {
    $.ajax({
        type: 'GET',
        url: getBaseAPI() + 'web/session/requestCheckSession.php',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onReady success:", data);
            if (data.responseCode == 1) {
                setUserName(data.user);
                if(callback !== undefined && callback !== null) callback.call();
            }
            else if(redirect === true) redirectTo("index.html");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onReady error:", textStatus);
            if(redirect === true) redirectTo("index.html");
        }
    });
}

function onService(callback) {
    $.ajax({
        type: 'GET',
        url: getBaseAPI() + 'web/service/requestServiceInfo.php',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onService success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage, data.data);
                else callback.call(undefined, false, data.responseMessage, null);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onService error:", textStatus);
            if(callback !== undefined && callback !== null) callback.call(undefined, false, textStatus, null);
        }
    });
}

function onLogout(callback){
    $.ajax({
        type: 'GET',
        url: getBaseAPI() + 'web/session/requestLogout.php',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onLogout success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage);
                else callback.call(undefined, false, data.responseMessage);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onLogout error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.");
            }
        }
    });
}

function onLogin(email, callback){
    $.ajax({
        type: 'POST',
        url: getBaseAPI() + 'web/session/requestUserToken.php',
        crossDomain: true,
        dataType: 'json',
        data: {
            'email': email
        },
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onLogin success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage);
                else callback.call(undefined, false, data.responseMessage);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onLogin error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.");
            }
        }
    });
}

function onRegister(name, email, company, callback){
    $.ajax({
        type: 'POST',
        url: getBaseAPI() + 'web/session/requestCreateUser.php',
        crossDomain: true,
        dataType: 'json',
        data: {
            'company': company,
            'email': email,
            'name': name
        },
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onRegister success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage);
                else callback.call(undefined, false, data.responseMessage);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onRegister error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.");
            }
        }
    });
}

function onContact(email, subject, message, callback) {
    $.ajax({
        type: 'POST',
        url: getBaseAPI() + 'web/contact/requestContact.php',
        crossDomain: true,
        dataType: 'json',
        data: {
            'email': email,
            'message': message,
            'subject': subject
        },
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onContact success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage);
                else callback.call(undefined, false, data.responseMessage);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onContact error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.");
            }
        }
    });
}

function onListApplications(callback){
    $.ajax({
        type: 'GET',
        url: getBaseAPI() + 'web/application/requestListApplications.php',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onListApplications success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage, data.data);
                else callback.call(undefined, false, data.responseMessage, null);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onListApplications error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.", null);
            }
        }
    });
}

function onAddApplication(package, signature, callback){
    var application = {
        package: package,
        signature: signature
    };
    application = {
        application: application
    };

    $.ajax({
        type: 'POST',
        url: getBaseAPI() + 'web/application/requestAddApplication.php',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(application),
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onAddApplication success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) {
                    var app = {package: data.data.package, signature: data.data.signature, key: data.data.key};
                    callback.call(undefined, true, data.responseMessage, app);
                }
                else callback.call(undefined, false, data.responseMessage, null);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onAddApplication error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.", null);
            }
        }
    });
}

function onRemoveApplication(package, signature, key, callback) {
    var application = {
        key: key,
        package: package,
        signature: signature
    };
    application = {
        application: application
    };

    $.ajax({
        type: 'POST',
        url: getBaseAPI() + 'web/application/requestRemoveApplication.php',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(application),
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onRemoveApplication success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) {
                    callback.call(undefined, true, data.responseMessage);
                }
                else callback.call(undefined, false, data.responseMessage);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onRemoveApplication error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.");
            }
        }
    });
}

function onListDevices(callback){
    $.ajax({
        type: 'GET',
        url: getBaseAPI() + 'web/device/requestListDevices.php',
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            console.log("onListDevices success:", data);
            if(callback !== undefined && callback !== null){
                if (data.responseCode == 1) callback.call(undefined, true, data.responseMessage, data.data);
                else callback.call(undefined, false, data.responseMessage, null);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("onListDevices error:", textStatus);
            if(callback !== undefined && callback !== null){
                callback.call(undefined, false, "Sorry, the Server has an internal error, try again.", null);
            }
        }
    });
}
