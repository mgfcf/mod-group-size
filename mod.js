function render_group_size() {
    document.getElementById("output_count").innerHTML = "";
    document.getElementById("output_group").innerHTML = "";
    document.getElementById("output_raw").innerHTML = "";
    document.getElementById("notice").innerHTML = "";

    var group = [];

    const g = Number(document.getElementById("g").value);
    const p = Number(document.getElementById("p").value);
    const ex = Number(document.getElementById("ex").value);
    var raw = "";
    for (var i = 0; i < ex; i++) {
        r = Math.pow(g, i) % p;
        if (r == Infinity || isNaN(r)) {
            continue;
        }

        if (!group.includes(r)) {
            group.push(Number(r));
            raw += `Exp ${i} - Res ${r}\n`;
        }
    }

    group.sort(function (a, b) {
        return a - b;
    });
    console.log(group);

    document.getElementById("output_count").innerHTML = group.length;
    document.getElementById("output_group").innerHTML = group;
    document.getElementById("output_raw").innerHTML = raw;

    var notice = "";
    if (group.length == p) {
        notice = "Guter Generator! Kann alle Keys generieren.";
    } else {
        notice =
            "!! Es werden nicht alle möglichen Keys generiert. Es fehlen " +
            (p - group.length);
    }
    document.getElementById("notice").innerHTML = notice;

    return group;
}
