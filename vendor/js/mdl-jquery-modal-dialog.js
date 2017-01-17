function showLoading() {
    $(".loading-container").remove(), $('<div id="orrsLoader" class="loading-container"><div><div class="mdl-spinner mdl-js-spinner is-active"></div></div></div>').appendTo("body"), componentHandler.upgradeElements($(".mdl-spinner").get()), setTimeout(function() {
        $("#orrsLoader").css({
            opacity: 1
        })
    }, 1)
}

function hideLoading() {
    $("#orrsLoader").css({
        opacity: 0
    }), setTimeout(function() {
        $("#orrsLoader").remove()
    }, 400)
}

function showDialog(a) {
    a = $.extend({
        id: "orrsDiag",
        title: null,
        text: null,
        neutral: !1,
        negative: !1,
        positive: !1,
        cancelable: !0,
        contentStyle: null,
        onLoaded: !1,
        hideOther: !0
    }, a), a.hideOther && ($(".dialog-container").remove(), $(document).unbind("keyup.dialog")), $('<div id="' + a.id + '" class="dialog-container"><div class="mdl-card mdl-shadow--16dp" id="' + a.id + '_content"></div></div>').appendTo("body");
    var b = $("#" + a.id),
        c = b.find(".mdl-card");
    if (null != a.contentStyle && c.css(a.contentStyle), null != a.title && $("<h5>" + a.title + "</h5>").appendTo(c), null != a.text && $("<p>" + a.text + "</p>").appendTo(c), a.neutral || a.negative || a.positive) {
        var d = $('<div class="mdl-card__actions dialog-button-bar"></div>');
        if (a.neutral) {
            a.neutral = $.extend({
                id: "neutral",
                title: "Neutral",
                onClick: null
            }, a.neutral);
            var e = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" id="' + a.neutral.id + '">' + a.neutral.title + "</button>");
            e.click(function(c) {
                c.preventDefault(), null != a.neutral.onClick && a.neutral.onClick(c) || hideDialog(b)
            }), e.appendTo(d)
        }
        if (a.negative) {
            a.negative = $.extend({
                id: "negative",
                title: "Cancel",
                onClick: null
            }, a.negative);
            var f = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" id="' + a.negative.id + '">' + a.negative.title + "</button>");
            f.click(function(c) {
                c.preventDefault(), null != a.negative.onClick && a.negative.onClick(c) || hideDialog(b)
            }), f.appendTo(d)
        }
        if (a.positive) {
            a.positive = $.extend({
                id: "positive",
                title: "OK",
                onClick: null
            }, a.positive);
            var g = $('<button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="' + a.positive.id + '">' + a.positive.title + "</button>");
            g.click(function(c) {
                c.preventDefault(), null != a.positive.onClick && a.positive.onClick(c) || hideDialog(b)
            }), g.appendTo(d)
        }
        d.appendTo(c)
    }
    componentHandler.upgradeDom(), a.cancelable && (b.click(function() {
        hideDialog(b)
    }), $(document).bind("keyup.dialog", function(a) {
        27 == a.which && hideDialog(b)
    }), c.click(function(a) {
        a.stopPropagation()
    })), setTimeout(function() {
        b.css({
            opacity: 1
        }), a.onLoaded && a.onLoaded()
    }, 1)
}

function hideDialog(a) {
    $(document).unbind("keyup.dialog"), a.css({
        opacity: 0
    }), setTimeout(function() {
        a.remove()
    }, 400)
}