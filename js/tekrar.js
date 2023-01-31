let notlar = [
    {
        baslik: "Alışveriş Listesi",
        icerik: "1.Süt \n2.Ekmek",
    },
    {
        baslik: "İş Notlarım",
        icerik: "1.Makale Oku. \n2.Mailleri kontrol et.",
    },
    {
        baslik: "Güzel Sözler",
        icerik: "1.Vakit nakittir. \n2.Kendin ol.",
    }

];



let seciliNot = null;

function listele() {
    $("#lstNotlar").html("");
    for (const i in notlar) {
        const not = notlar[i];
        let a = $("<a/>")
            .attr("href", "#")
            .addClass("list-group-item")
            .addClass("list-group-item-action")
            .text(not.baslik);
        a.click(e => ac(not));
        a[0].not = not;
        $("#lstNotlar").append(a);
    }
}

function ac(not) {
    seciliNot = not;
    $("#lstNotlar>a").each((indeks, a) => {
        if (a.not == seciliNot)
            $(a).addClass("active");
        else
            $(a).removeClass("active");
    })
    $("#txtBaslik").val(seciliNot.baslik);
    $("#txtIcerik").val(seciliNot.icerik);

}

function kaydet(event) {
    event.preventDefault();
    if (seciliNot) {
        seciliNot.baslik = $("#txtBaslik").val();
        seciliNot.icerik = $("#txtIcerik").val();
        listele();
        ac(seciliNot);

    }
    else {
        let yeniNot = {
            baslik: $("#txtBaslik").val(),
            icerik: $("#txtIcerik").val()
        };
        notlar.push(yeniNot);
        listele();
        ac(yeniNot);
    }
}

function sil() {
    $("#txtBaslik").val("");
    $("#txtIcerik").val("");

    let indeks = notlar.indexOf(seciliNot);
    notlar.splice(indeks, 1);
    seciliNot = null;
    listele();
}

function yeni() {
    seciliNot = null;
    $("#lstNotlar>a").removeClass("active");
    $("#txtBaslik").val("").focus();
    $("#txtIcerik").val("");
}



$("#btnYeni").click(yeni);
$("#btnSil").click(sil);
$("#frmNot").submit(kaydet);

listele();