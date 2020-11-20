/*
 jquery-confirm
 Entire Project is written by :- Boniface Pereira 
 Refernce URL :- http://craftpip.github.io/jquery-confirm/
 To centralize jquery confirm Utility library is written by :- Saineshwar Bageri
 */

function alertDanger(n, t) { $.alert({ title: n, content: t, type: "red", typeAnimated: !0 }) } function alertSuccess(n, t) { $.alert({ title: n, content: t, type: "green", typeAnimated: !0 }) } function alertInformation(n, t) { $.alert({ title: n, content: t, type: "blue", typeAnimated: !0 }) } function alertWarning(n, t) { $.alert({ title: n, content: t, type: "orange", typeAnimated: !0 }) } function confirmationSuccessWithCustomMessage(n, t, o, e) { $.confirm({ title: n, type: "green", content: t, buttons: { confirm: function () { $.alert(o) }, cancel: function () { $.alert(e) } } }) } function confirmationDangerWithCustomMessage(n, t, o, e) { $.confirm({ title: n, type: "red", content: t, buttons: { confirm: function () { $.alert(o) }, cancel: function () { $.alert(e) } } }) } function confirmationInformationWithCustomMessage(n, t, o, e) { $.confirm({ title: n, type: "blue", content: t, buttons: { confirm: function () { $.alert(o) }, cancel: function () { $.alert(e) } } }) } function confirmationWarningWithCustomMessage(n, t, o, e) { $.confirm({ title: n, type: "orange", closeIcon: !0, closeIconClass: "fa fa-close", typeAnimated: !0, content: t, buttons: { confirm: function () { $.alert(o) }, cancel: function () { $.alert(e) } } }) } function confirmationSuccess(n, t) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "green", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { $.alert("Confirmed!") }, cancel: function () { $.alert("Canceled!") } } }) } function confirmationDanger(n, t) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "red", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { $.alert("Confirmed!") }, cancel: function () { $.alert("Canceled!") } } }) } function confirmationWarning(n, t) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "orange", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { $.alert("Confirmed!") }, cancel: function () { $.alert("Canceled!") } } }) } function confirmationInformation(n, t) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "blue", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { $.alert("Confirmed!") }, cancel: function () { $.alert("Canceled!") } } }) } function confirmationSuccessRedirection(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "green", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { location.href = o }, cancel: function () { } } }) } function confirmationDangerRedirection(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "red", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { location.href = o }, cancel: function () { } } }) } function confirmationWarningRedirection(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "orange", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { location.href = o }, cancel: function () { } } }) } function confirmationInformationRedirection(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "blue", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { confirm: function () { location.href = o }, cancel: function () { } } }) } function confirmationSuccessRedirectionNoCancel(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !1, type: "green", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { ok: function () { location.href = o } } }) } function confirmationDangerRedirectionNoCancel(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "red", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { ok: function () { location.href = o } } }) } function confirmationWarningRedirectionNoCancel(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "orange", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { ok: function () { location.href = o } } }) } function confirmationInformationRedirectionNoCancel(n, t, o) { $.confirm({ title: n, content: "<b>" + t + "</b>", closeIcon: !0, type: "blue", closeIconClass: "fa fa-close", typeAnimated: !0, buttons: { ok: function () { location.href = o } } }) } function AutoCloseSuccess(n, t, o, e) { $.confirm({ title: n, content: t, autoClose: "cancel|" + o, type: "green", buttons: { cancel: function () { location.href = e } } }) } function AutoCloseDanger(n, t, o, e) { $.confirm({ title: n, content: t, autoClose: "cancel|" + o, type: "red", buttons: { cancel: function () { location.href = e } } }) } function AutoCloseWarning(n, t, o, e) { $.confirm({ title: n, content: t, autoClose: "cancel|" + o, type: "orange", buttons: { cancel: function () { location.href = e } } }) } function AutoCloseInformation(n, t, o, e) { $.confirm({ title: n, content: t, autoClose: "cancel|" + o, type: "blue", buttons: { cancel: function () { location.href = e } } }) }