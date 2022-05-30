! function(t, e) {
    -1 != navigator.appVersion.indexOf("MSIE") && alert("You're using a pretty old browser, some parts of the website might not work properly."), Date.now || (Date.now = function() {
        return (+new Date).getTime()
    });
    var i = Date.now();

    function n(t, e, i) {
        return `#${("00"+(~~t).toString(16)).slice(-2)}${("00"+(~~e).toString(16)).slice(-2)}${("00"+(~~i).toString(16)).slice(-2)}`
    }

    function s(t) {
        var e = function(t) {
            if (4 === t.length) return {
                r: parseInt(t[1] + t[1], 16),
                g: parseInt(t[2] + t[2], 16),
                b: parseInt(t[3] + t[3], 16)
            };
            if (7 === t.length) return {
                r: parseInt(t[1] + t[2], 16),
                g: parseInt(t[3] + t[4], 16),
                b: parseInt(t[5] + t[6], 16)
            };
            throw new Error(`invalid color ${t}`)
        }(t);
        return n(.9 * e.r, .9 * e.g, .9 * e.b)
    }

    function a(t) {
        for (var e in t) delete t[e]
    }
    Array.prototype.peek = function() {
        return this[this.length - 1]
    }, Array.prototype.remove = function(t) {
        var e = this.indexOf(t);
        return -1 !== e && this.splice(e, 1), -1 !== e
    };
    var o = new DataView(new ArrayBuffer(8));

    function r(t) {
        return this._e = t, this.reset(), this
    }

    function h(t, e, i) {
        this._e = i, t && this.repurpose(t, e)
    }
    r.prototype = {
        writer: !0,
        reset: function(t) {
            this._b = [], this._o = 0
        },
        setUint8: function(t) {
            return t >= 0 && t < 256 && this._b.push(t), this
        },
        setInt8: function(t) {
            return t >= -128 && t < 128 && this._b.push(t), this
        },
        setUint16: function(t) {
            return o.setUint16(0, t, this._e), this._move(2), this
        },
        setInt16: function(t) {
            return o.setInt16(0, t, this._e), this._move(2), this
        },
        setUint32: function(t) {
            return o.setUint32(0, t, this._e), this._move(4), this
        },
        setInt32: function(t) {
            return o.setInt32(0, t, this._e), this._move(4), this
        },
        setFloat32: function(t) {
            return o.setFloat32(0, t, this._e), this._move(4), this
        },
        setFloat64: function(t) {
            return o.setFloat64(0, t, this._e), this._move(8), this
        },
        _move: function(t) {
            for (var e = 0; e < t; e++) this._b.push(o.getUint8(e))
        },
        setStringUTF8: function(t) {
            for (var e = unescape(encodeURIComponent(t)), i = 0, n = e.length; i < n; i++) this._b.push(e.charCodeAt(i));
            return this._b.push(0), this
        },
        build: function() {
            return new Uint8Array(this._b)
        }
    }, h.prototype = {
        reader: !0,
        repurpose: function(t, e) {
            this.view = t, this._o = e || 0
        },
        getUint8: function() {
            return this.view.getUint8(this._o++, this._e)
        },
        getInt8: function() {
            return this.view.getInt8(this._o++, this._e)
        },
        getUint16: function() {
            return this.view.getUint16((this._o += 2) - 2, this._e)
        },
        getInt16: function() {
            return this.view.getInt16((this._o += 2) - 2, this._e)
        },
        getUint32: function() {
            return this.view.getUint32((this._o += 4) - 4, this._e)
        },
        getInt32: function() {
            return this.view.getInt32((this._o += 4) - 4, this._e)
        },
        getFloat32: function() {
            return this.view.getFloat32((this._o += 4) - 4, this._e)
        },
        getFloat64: function() {
            return this.view.getFloat64((this._o += 8) - 8, this._e)
        },
        getStringUTF8: function() {
            for (var t, e = ""; 0 !== (t = this.view.getUint8(this._o++));) e += String.fromCharCode(t);
            return decodeURIComponent(escape(e))
        }
    };
    var l, c, u = {
            verbosity: 4,
            error: function(t) {
                u.verbosity <= 0 || console.error(t)
            },
            warn: function(t) {
                u.verbosity <= 1 || console.warn(t)
            },
            info: function(t) {
                u.verbosity <= 2 || console.info(t)
            },
            debug: function(t) {
                u.verbosity <= 3 || console.debug(t)
            }
        },
        d = null,
        f = JSON.parse((l = "./assets/js/GameConfiguration.json", (c = new XMLHttpRequest).open("GET", l, !1), c.send(null), c.responseText)),
        g = "https:" == t.location.protocol,
        m = 2 * Math.PI,
        p = new Uint8Array([254, 6, 0, 0, 0]),
        w = new Uint8Array([255, 1, 0, 0, 0]),
        v = {
            1: new Uint8Array([1]),
            14: new Uint8Array([14]),
            15: new Uint8Array([15]),
            17: new Uint8Array([17]),
            21: new Uint8Array([21]),
            18: new Uint8Array([18]),
            19: new Uint8Array([19]),
            22: new Uint8Array([22]),
            23: new Uint8Array([23]),
            24: new Uint8Array([24]),
            254: new Uint8Array([254])
        };

    function b() {
        N && (u.debug("ws cleanup trigger"), N.onopen = null, N.onmessage = null, N.close(), N = null)
    }

    function y(t) {
        N && (u.debug("ws init on existing conn"), b()), e("#connecting").show(), N = new WebSocket(`ws${g?"s":""}://${d=t}`), console.log(N), N.binaryType = "arraybuffer", N.onopen = x, N.onmessage = T, N.onerror = k, N.onclose = S
    }

    function x() {
        O = 1e3, e("#connecting").hide(), U(p), U(w), e("#level-blocker").fadeOut(300), e("#shop-blocker").fadeOut(300), u.debug(`ws connected, using https: ${g}`)
    }

    function k(t) {
        u.warn(t)
    }

    function S(t) {
        u.debug(`ws disconnected ${t.code} '${t.reason}'`), b(), I(), e("#level-blocker").fadeIn(300), e("#shop-blocker").fadeIn(300), setTimeout(function() {
            N && 1 === N.readyState || y(d)
        }, O *= 1.5)
    }

    function U(t) {
        N && 1 === N.readyState && (t.build ? N.send(t.build()) : N.send(t))
    }

    function T(t) {
        D = Date.now();
        var e = new h(new DataView(t.data), 0, !0);
        switch (e.getUint8()) {
            case 16:
                var i, s, a, o, r, l, c, d, f, g;
                p = e.getUint16();
                for (var m = 0; m < p; m++) i = e.getUint32(), s = e.getUint32(), F.byId.hasOwnProperty(i) && F.byId.hasOwnProperty(s) && F.byId[s].destroy(i);
                for (; 0 !== (a = e.getUint32());) o = e.getInt32(), r = e.getInt32(), l = e.getUint16(), d = !!(8 & (w = e.getUint8())), f = !!(4 & w), y = !!(2 & w) ? n(e.getUint8(), e.getUint8(), e.getUint8()) : null, g = f ? e.getStringUTF8() : null, x = d ? e.getStringUTF8() : null, F.byId.hasOwnProperty(a) ? ((c = F.byId[a]).update(D), c.updated = D, c.ox = c.x, c.oy = c.y, c.os = c.s, c.nx = o, c.ny = r, c.ns = l) : (c = new Ut(a, o, r, l, x, y, g, w), F.byId[a] = c, F.list.push(c));
                for (p = e.getUint16(), m = 0; m < p; m++) s = e.getUint32(), F.byId.hasOwnProperty(s) && !F.byId[s].destroyed && F.byId[s].destroy(null);
                break;
            case 17:
                nt = e.getFloat32(), st = e.getFloat32(), at = e.getFloat32();
                break;
            case 18:
                for (var m in F.byId) F.byId[m].destroy(null);
            case 20:
                F.mine = [];
                break;
            case 21:
                u.warn("got packer 0x15 (draw line) which is unsupported");
                break;
            case 32:
                F.mine.push(e.getUint32());
                break;
            case 48:
                C.items = [], C.type = "text";
                var p = e.getUint32();
                for (m = 0; m < p; ++m) C.items.push(e.getStringUTF8());
                bt();
                break;
            case 49:
                C.items = [], C.type = "ffa";
                p = e.getUint32();
                for (m = 0; m < p; ++m) C.items.push({
                    me: !!e.getUint32(),
                    name: e.getStringUTF8() || "An unnamed cell"
                });
                bt();
                break;
            case 50:
                C.items = [], C.type = "pie";
                p = e.getUint32();
                for (m = 0; m < p; ++m) C.items.push(e.getFloat32());
                bt();
                break;
            case 64:
                if (A.left = e.getFloat64(), A.top = e.getFloat64(), A.right = e.getFloat64(), A.bottom = e.getFloat64(), A.width = A.right - A.left, A.height = A.bottom - A.top, A.centerX = (A.left + A.right) / 2, A.centerY = (A.top + A.bottom) / 2, 33 === t.data.byteLength) break;
                if (J || (J = !0, Z = nt = A.centerX, tt = st = A.centerY, et = at = 1), e.getUint32(), !/MultiOgar|OgarII/.test(e.getStringUTF8()) || _.pingLoopId) break;
                _.pingLoopId = setInterval(function() {
                    U(v[254]), _.pingLoopStamp = Date.now()
                }, 2e3);
                break;
            case 99:
                var w = e.getUint8(),
                    y = n(e.getUint8(), e.getUint8(), e.getUint8()),
                    x = e.getStringUTF8().trim(),
                    k = /\{([\w]+)\}/.exec(x);
                k && (x = x.replace(k[0], "").trim());
                var S = e.getStringUTF8(),
                    T = !!(128 & w),
                    I = !!(64 & w),
                    N = !!(32 & w);
                T && "SERVER" !== x && (x = "[SERVER] " + x), I && (x = "[ADMIN] " + x), N && (x = "[MOD] " + x);
                var O = Math.max(3e3, 1e3 + 150 * S.length);
                M.waitUntil = D - M.waitUntil > 1e3 ? D + O : M.waitUntil + O, M.messages.push({
                    server: T,
                    admin: I,
                    mod: N,
                    color: y,
                    name: x,
                    message: S,
                    time: D
                }), pt();
                break;
            case 254:
                _.info = JSON.parse(e.getStringUTF8()), wt();
                break;
            case 255:
                console.log("hi there :3");
                break;
            default:
                b()
        }
    }

    function I() {
        a(F), a(A), a(C), a(M), a(_), M.messages = [], C.items = [], F.mine = [], F.byId = {}, F.list = [], Z = tt = nt = st = 0, et = at = 1, J = !1
    }
    var F = Object.create({
            mine: [],
            byId: {},
            list: []
        }),
        A = Object.create({
            left: -2e3,
            right: 2e3,
            top: -2e3,
            bottom: 2e3,
            width: 4e3,
            height: 4e3,
            centerX: -1,
            centerY: -1
        }),
        C = Object.create({
            type: NaN,
            items: null,
            canvas: document.createElement("canvas"),
            teams: ["#F33", "#3F3", "#33F"]
        }),
        M = Object.create({
            messages: [],
            waitUntil: 0,
            canvas: document.createElement("canvas"),
            visible: !1
        }),
        _ = Object.create({
            framesPerSecond: 0,
            latency: NaN,
            supports: null,
            info: null,
            pingLoopId: NaN,
            pingLoopStamp: null,
            canvas: document.createElement("canvas"),
            visible: !1,
            score: NaN,
            maxScore: 0
        }),
        N = null,
        O = (d = null, 1e3),
        D = Date.now(),
        $ = Date.now(),
        P = !1,
        B = null,
        E = null,
        W = {},
        L = {},
        z = {},
        H = {},
        G = {},
        R = {},
        q = {},
        Y = !1,
        V = !1,
        X = null,
        J = !1,
        Q = null,
        K = null,
        Z = 0,
        tt = 0,
        et = 1,
        it = 1,
        nt = 0,
        st = 0,
        at = 1,
        ot = 1,
        rt = NaN,
        ht = NaN,
        lt = 1,
        ct = {
            mobile: "createTouch" in document,
            showMass: !1,
            showNames: !0,
            showLeaderboard: !0,
            showChat: !0,
            showGrid: !0,
            showTextOutline: !0,
            showColor: !0,
            showSkins: !0,
            showHats: !0,
            showMinimap: !0,
            showGrid: !0,
            showBorder: !1,
            darkTheme: !1,
            allowGETipSet: !1
        },
        ut = {
            space: !1,
            w: !1,
            e: !1,
            r: !1,
            t: !1,
            p: !1,
            q: !1,
            esc: !1
        };

    function dt() {
        Y = !1, e("#overlays").hide()
    }

    function ft() {
        Y = !0, e("#overlays").fadeIn(300)
    }

    function gt(t) {
        t.scale(et, et)
    }

    function mt(t) {
        t.scale(it, it)
    }

    function pt() {
        if (0 === M.messages.length && ct.showChat) return M.visible = !1;
        M.visible = !0;
        for (var t = M.canvas, e = t.getContext("2d"), i = M.messages.slice(-15), n = [], s = 0, a = i.length; s < a; s++) n.push([{
            text: i[s].name,
            color: i[s].color
        }, {
            text: " " + i[s].message,
            color: ct.darkTheme ? "#FFF" : "#000"
        }]);
        var o = 0,
            r = 20 * a + 2;
        for (s = 0; s < a; s++) {
            for (var h = 0, l = n[s], c = 0; c < l.length; c++) e.font = "18px Ubuntu", l[c].width = e.measureText(l[c].text).width, h += l[c].width;
            o = Math.max(h, o)
        }
        t.width = o, t.height = r;
        for (s = 0; s < a; s++) {
            o = 0;
            for (l = n[s], c = 0; c < l.length; c++) e.font = "18px Ubuntu", e.fillStyle = l[c].color, e.fillText(l[c].text, o, 20 * (1 + s)), o += l[c].width
        }
    }

    function wt() {
        if (!_.info) return _.visible = !1;
        _.visible = !0;
        var t = _.canvas,
            e = t.getContext("2d");
        e.font = "14px Ubuntu";
        for (var i = [`${_.info.playersTotal} / ${_.info.playersLimit} players`, `${_.info.playersAlive} playing`, `${_.info.playersSpect} spectating`, `${_.info.minion} minion`, `${_.info.playerID} playerID`, `${(2.5*_.info.update).toFixed(1)}% load @ ${vt(_.info.uptime)}`], n = 0, s = 0; s < i.length; s++) n = Math.max(n, 2 + e.measureText(i[s]).width + 2);
        t.width = n, t.height = 16 * i.length, e.font = "14px Ubuntu", e.fillStyle = ct.darkTheme ? "#AAA" : "#555", e.textBaseline = "top";
        for (s = 0; s < i.length; s++) e.fillText(i[s], 2, 0 + 16 * s)
    }

    function vt(t) {
        var e = ~~((t = ~~t) / 60);
        if (e < 1) return "<1 min";
        var i = ~~(e / 60);
        if (i < 1) return e + "min";
        var n = ~~(i / 24);
        return n < 1 ? i + "h" : n + "d"
    }

    function bt() {
        if (NaN === C.type) return C.visible = !1;
        if (!ct.showNames || 0 === C.items.length) return C.visible = !1;
        C.visible = !0;
        var t = C.canvas,
            e = t.getContext("2d"),
            i = C.items.length;
        if (t.width = 200, t.height = "pie" !== C.type ? 60 + 24 * i : 240, e.globalAlpha = .4, e.fillStyle = "#000", e.fillRect(0, 0, 200, t.height), e.globalAlpha = 1, e.fillStyle = "#FFF", e.font = "30px Ubuntu", e.fillText("Leaderboard", 100 - e.measureText("Leaderboard").width / 2, 40), "pie" === C.type)
            for (var n = 0, s = 0; s < i; s++) e.fillStyle = C.teams[s], e.beginPath(), e.moveTo(100, 140), e.arc(100, 140, 80, n, n += C.items[s] * m, !1), e.closePath(), e.fill();
        else {
            var a, o, r = !1;
            e.font = "20px Ubuntu";
            for (s = 0; s < i; s++) {
                "text" === C.type ? a = C.items[s] : (a = C.items[s].name, r = C.items[s].me);
                var h = /\{([\w]+)\}/.exec(a);
                h && (a = a.replace(h[0], "").trim()), e.fillStyle = IslbColor(a) ? getlbColor(a, e) : r ? "#FAA" : "#FFF", "ffa" === C.type && (a = s + 1 + ". " + (a || "An unnamed cell"));
                var l = (o = e.measureText(a).width) > 200 ? 2 : 100 - .5 * o;
                e.fillText(a, l, 70 + 24 * s)
            }
        }
    }

    function yt() {
        $ = Date.now();
        for (var e, i = F.list.slice(0).sort(xt), n = 0, s = i.length; n < s; n++) i[n].update($);
        ! function() {
            for (var t = [], e = 0; e < F.mine.length; e++) F.byId.hasOwnProperty(F.mine[e]) && t.push(F.byId[F.mine[e]]);
            if (t.length > 0) {
                for (var i = 0, n = 0, s = 0, a = 0, e = 0, o = t.length; e < o; e++) {
                    var r = t[e];
                    a += ~~(r.ns * r.ns / 100), i += r.x, n += r.y, s += r.s
                }
                nt = i / o, st = n / o, at = Math.pow(Math.min(64 / s, 1), .4), Z += (nt - Z) / 2, tt += (st - tt) / 2, _.score = a, _.maxScore = Math.max(_.maxScore, a)
            } else _.score = NaN, _.maxScore = 0, Z += (nt - Z) / 20, tt += (st - tt) / 20;
            it = 1 / (et += (at * ot * lt - et) / 9)
        }(), E.save(), E.fillStyle = ct.darkTheme ? "#111" : "#F2FBFF", E.fillRect(0, 0, B.width, B.height), ct.showGrid && function() {
            var t;
            for (E.save(), E.lineWidth = 1, E.strokeStyle = ct.darkTheme ? "#AAA" : "#000", E.globalAlpha = .2, cW = B.width / et, cH = B.height / et, startLeft = (-Z + cW / 2) % 50, startTop = (-tt + cH / 2) % 50, gt(E), E.beginPath(), t = startLeft; t < cW; t += 50) E.moveTo(t, 0), E.lineTo(t, cH);
            for (t = startTop; t < cH; t += 50) E.moveTo(0, t), E.lineTo(cW, t);
            E.closePath(), E.stroke(), E.restore()
        }(), (e = E).translate(B.width / 2, B.height / 2), gt(e), e.translate(-Z, -tt);
        for (n = 0, s = i.length; n < s; n++) i[n].draw(E);
        ! function(t) {
            t.translate(Z, tt), mt(t), t.translate(-B.width / 2, -B.height / 2)
        }(E), E.scale(ot, ot);
        var a = 2;
        if (E.fillStyle = ct.darkTheme ? "#FFF" : "#000", E.textBaseline = "top", isNaN(_.score) || (E.font = "30px Ubuntu", E.fillText(`Score: ${_.score}`, 2, a), a += 30), E.font = "20px Ubuntu", _.visible && E.drawImage(_.canvas, 2, a), C.visible && E.drawImage(C.canvas, B.width / ot - 10 - C.canvas.width, 10), (M.visible || V) && (E.globalAlpha = V ? 1 : Math.max(1e3 - $ + M.waitUntil, 0) / 1e3, ct.showChat && E.drawImage(M.canvas, 10 / ot, (B.height - 55) / ot - M.canvas.height), E.globalAlpha = 1), function() {
                if (0 === A.centerX && 0 === A.centerY && ct.showMinimap) {
                    E.save();
                    var t = A.width / A.height * 200,
                        e = A.height / A.width * 200,
                        i = B.width / ot - t,
                        n = B.height / ot - e;
                    E.fillStyle = "#000", E.globalAlpha = .4, E.fillRect(i, n, t, e), E.globalAlpha = 1;
                    var s = ["ABCDE", "12345"],
                        a = t / 5,
                        o = e / 5,
                        r = Math.min(a, o) / 3;
                    E.fillStyle = ct.darkTheme ? "#666" : "#DDD", E.textBaseline = "middle", E.textAlign = "center", E.font = `${r}px Ubuntu`;
                    for (var h = 0; h < 5; h++)
                        for (var l = a / 2 + h * a, c = 0; c < 5; c++) {
                            var u = o / 2 + c * o;
                            E.fillText(`${s[0][h]}${s[1][c]}`, i + l, n + u)
                        }
                    var d = i + (Z + A.width / 2) / A.width * t,
                        f = n + (tt + A.height / 2) / A.height * e;
                    if (E.fillStyle = "#FAA", E.beginPath(), E.arc(d, f, 5, 0, m, !1), E.closePath(), E.fill(), K) {
                        var g = i + (Q + A.width / 2) / A.width * t,
                            p = n + (K + A.height / 2) / A.height * e;
                        E.fillStyle = ct.darkTheme ? "#DDD" : "#222", E.beginPath(), E.arc(g, p, 5, 0, m, !1), E.closePath(), E.fill()
                    }
                    for (var w = null, v = (h = 0, F.mine.length); h < v; h++)
                        if (F.byId.hasOwnProperty(F.mine[h])) {
                            w = F.byId[F.mine[h]];
                            break
                        } if (null !== w) {
                        E.fillStyle = ct.darkTheme ? "#DDD" : "#222";
                        var b = r;
                        E.font = `${b}px Ubuntu`, E.fillText(w.name, d, f - 7 - b / 2)
                    }
                    E.restore()
                }
            }(), E.restore(), P) {
            E.save(), E.font = "12px Ubuntu", E.textAlign = "center", E.textBaseline = "hanging", E.fillStyle = "#eea236";
            E.fillText("You are controlling a minion, press Q to switch back.", B.width / 2, 5), E.restore()
        }! function() {
            for (var t in Tt) {
                for (var e in Tt[t]) $ - Tt[t][e].accessTime >= 5e3 && delete Tt[t][e];
                Tt[t] === {} && delete Tt[t]
            }
            for (var t in It) $ - It[t].accessTime >= 5e3 && delete It[t]
        }(), t.requestAnimationFrame(yt)
    }

    function xt(t, e) {
        return t.s === e.s ? t.id - e.id : t.s - e.s
    }
    null !== t.localStorage && e(window).load(function() {
        e(".save").each(function() {
            var i = e(this).data("box-id"),
                n = t.localStorage.getItem("checkbox-" + i);
            n && "true" == n && 0 != i ? (e(this).prop("checked", "true"), e(this).trigger("change")) : 0 == i && null != n && e(this).val(n)
        }), e(".save").change(function() {
            var i = e(this).data("box-id"),
                n = 0 == i ? e(this).val() : e(this).prop("checked");
            t.localStorage.setItem("checkbox-" + i, n)
        })
    }), e.ajax({
        type: "POST",
        dataType: "json",
        url: "checkdir.php",
        data: {
            action: "getSkins"
        },
        success: function(t) {
            var e = Date.now();
            response = JSON.parse(t.names);
            for (var i = 0; i < response.length; i++) H[response[i]] = e;
            for (var i in H) H[i] !== e && delete H[i]
        }
    }), e.ajax({
        type: "POST",
        dataType: "json",
        url: "checkdir.php",
        data: {
            action: "getHats"
        },
        success: function(t) {
            var e = Date.now();
            response = JSON.parse(t.names);
            for (var i = 0; i < response.length; i++) R[response[i]] = e;
            for (var i in R) R[i] !== e && delete R[i]
        }
    });
    var kt = f.skins,
        St = f.leaderboard_colors;

    function Ut(t, e, i, n, s, a, o, r) {
        this.id = t, this.x = this.nx = this.ox = e, this.y = this.ny = this.oy = i, this.s = this.ns = this.os = n, o ? this.setColor(a, getSkinColor(o)) : this.setColor(a), this.setName(s), o && this.setSkin(o), this.jagged = 1 & r || 16 & r, this.ejected = !!(32 & r), this.born = D
    }
    getSkinColor = function(t) {
        if (null != W[t]) return W[t];
        var e = t,
            i = "";
        for (var n = 0; n < kt.length; n++)
            if (kt[n].productId == e) return i = kt[n].cellColor, W[t] = i, W[t]
    }, getVipSkinsFrames = function(t) {
        if (null != L[t]) return L[t];
        for (var e = t, i = 0; i < kt.length; i++)
            if ("vip" == kt[i].skinType && kt[i].productId == e) {
                for (L[t] = [], L[t].image = [], j = 0; j < kt[i].image.length; j++) L[t].image[j] = new Image, L[t].image[j].src = `./skins/${kt[i].productId}/${kt[i].image[j]}.png`;
                return L[t]
            }
    }, getlbColor = function(t, e) {
        if (null != z[t]) return z[t].LbColor;
        for (var i = t, n = e.createLinearGradient(0, 0, 150, 10), s = 0; s < St.length; s++)
            if (St[s].name == i) return z[t] = [], n.addColorStop(0, St[s].color1), n.addColorStop(1, St[s].color2), z[t].LbColor = n, z[t].LbColor
    }, IslbColor = function(t) {
        if (null != z[t]) return !0;
        for (var e = t, i = 0; i < St.length; i++)
            if (St[i].name == e) return !0
    }, Ut.prototype = {
        destroyed: !1,
        id: 0,
        diedBy: 0,
        ox: 0,
        x: 0,
        nx: 0,
        oy: 0,
        y: 0,
        ny: 0,
        os: 0,
        s: 0,
        ns: 0,
        nameSize: 0,
        drawNameSize: 0,
        color: "#FFF",
        sColor: "#E5E5E5",
        skin: null,
        hat: null,
        jagged: !1,
        born: null,
        updated: null,
        dead: null,
        destroy: function(t) {
            delete F.byId[this.id], F.mine.remove(this.id) && 0 === F.mine.length && (console.log(_.maxScore), ft(), Q = Z, K = tt), this.destroyed = !0, this.dead = D, t && !this.diedBy && (this.diedBy = t)
        },
        update: function(t) {
            var e = (t - this.updated) / 120;
            e = Math.max(Math.min(e, 1), 0), this.destroyed && Date.now() > this.dead + 200 ? F.list.remove(this) : this.diedBy && F.byId.hasOwnProperty(this.diedBy) && (this.nx = F.byId[this.diedBy].x, this.ny = F.byId[this.diedBy].y), this.x = this.ox + (this.nx - this.ox) * e, this.y = this.oy + (this.ny - this.oy) * e, this.s = this.os + (this.ns - this.os) * e, this.nameSize = 3 * ~~(~~Math.max(~~(.3 * this.ns), 24) / 3), this.drawNameSize = 3 * ~~(~~Math.max(~~(.3 * this.s), 24) / 3)
        },
        setName: function(t) {
            var e = /\{([\w\W]+)\}/.exec(t);
            null === this.skin && null !== e ? (this.name = t.replace(e[0], "").trim(), this.setSkin(e[1])) : this.name = t, this.setHats("poop")
        },
        setSkin: function(t) {
            this.skin = (t && "%" === t[0] ? t.slice(1) : t) || this.skin, null !== this.skin && H.hasOwnProperty(this.skin) && !G[this.skin] && (G[this.skin] = new Image, G[this.skin].src = `./skins/${this.skin}.png`)
        },
        setHats: function(t) {
            this.hats = t, null !== this.hats && R.hasOwnProperty(this.hats) && !q[this.hats] && (q[this.hats] = new Image, q[this.hats].src = `./assets/hats/${this.hats}.png`)
        },
        setColor: function(t, e) {
            t ? (this.skinColor = e || t, this.color = t, this.sColor = s(e || t)) : u.warn("got no color")
        },
        draw: function(t) {
            t.save(), this.drawShape(t), this.drawHat(t), this.drawText(t), t.restore()
        },
        drawShape: function(t) {
            if (t.fillStyle = ct.showColor && ct.showSkins ? this.skinColor : ct.showColor && !ct.showSkins ? this.color : Ut.prototype.color, t.strokeStyle = ct.showColor && ct.showSkins ? this.sColor : ct.showColor && !ct.showSkins ? s(this.color) : Ut.prototype.color, t.lineWidth = Math.max(~~(this.s / 50), 10), !this.ejected && 20 < this.s && (this.s -= t.lineWidth / 2 - 2), t.beginPath(), this.jagged) {
                t.globalAlpha = .6;
                var e = m / 120;
                t.moveTo(this.x, this.y + this.s + 3);
                for (var i = 1; i < 120; i++) {
                    var n = i * e,
                        a = this.s - 3 + 6 * (i % 2 == 0);
                    t.lineTo(this.x + a * Math.sin(n), this.y + a * Math.cos(n))
                }
                t.lineTo(this.x, this.y + this.s + 3)
            } else t.arc(this.x, this.y, this.s, 0, m, !1);
            if (t.closePath(), this.destroyed ? t.globalAlpha = Math.max(200 - Date.now() + this.dead, 0) / 100 : t.globalAlpha = Math.min(Date.now() - this.born, 200) / 100, !this.ejected && 20 < this.s && t.stroke(), t.fill(), ct.showSkins && this.skin) {
                var o = G[this.skin];
                if (o && o.complete && o.width && o.height) {
                    t.save(), t.clip(), mt(t);
                    var r = this.s * et;
                    t.drawImage(o, this.x * et - r, this.y * et - r, r *= 2, r), gt(t), t.restore()
                }
            }!this.ejected && 20 < this.s && (this.s += t.lineWidth / 2 - 2)
        },
        drawHat: function(t) {
            if (ct.showHats && this.s > 55 && this.hats && null !== this.name && "minion" !== this.name) {
                var e = q[this.hats];
                e && e.complete && e.width && e.height && (t.save(), t.globalAlpha = .9, t.drawImage(e, this.x - this.s, this.y - this.s - this.s, 2 * this.s, 2 * this.s), t.restore())
            }
        },
        drawText: function(t) {
            if (!(this.s < 55 || this.jagged || "minion" == this.name))
                if (!ct.showMass || -1 === F.mine.indexOf(this.id) && 0 !== F.mine.length) this.name && ct.showNames && _t(t, !1, this.x, this.y, this.nameSize, this.drawNameSize, this.name);
                else {
                    var e = (~~(this.s * this.s / 100)).toString();
                    if (this.name && ct.showNames) {
                        _t(t, !1, this.x, this.y, this.nameSize, this.drawNameSize, this.name);
                        var i = this.y + Math.max(this.s / 4.5, this.nameSize / 1.5);
                        _t(t, !0, this.x, i, this.nameSize / 2, this.drawNameSize / 2, e)
                    } else _t(t, !0, this.x, this.y, this.nameSize / 2, this.drawNameSize / 2, e)
                }
        }
    };
    var Tt = {},
        It = {};

    function Ft(t, e, i, n) {
        e.font = `${n}px Ubuntu`, e.lineWidth = ct.showTextOutline ? Math.max(~~(n / 10), 2) : 2, t.width = e.measureText(i).width + 2 * e.lineWidth, t.height = 4 * n, e.font = `${n}px Ubuntu`, e.lineWidth = ct.showTextOutline ? Math.max(~~(n / 10), 2) : 2, e.textBaseline = "middle", e.textAlign = "center", e.fillStyle = "#FFF", e.strokeStyle = "#000", e.translate(t.width / 2, 2 * n), 1 !== e.lineWidth && e.strokeText(i, 0, 0), e.fillText(i, 0, 0)
    }

    function At(t, e) {
        var i = document.createElement("canvas"),
            n = i.getContext("2d");
        return Ft(i, n, t, e), Tt[t] = Tt[t] || {}, Tt[t][e] = {
            width: i.width,
            height: i.height,
            canvas: i,
            value: t,
            size: e,
            accessTime: $
        }, Tt[t][e]
    }

    function Ct(t, e, i) {
        return t - i <= e && e <= t + i
    }

    function Mt(t) {
        for (var e = Object.keys(It), i = 0, n = e.length; i < n; i++)
            if (Ct(t, e[i], t / 4)) return It[e[i]];
        return function(t) {
            var e = {
                0: {},
                1: {},
                2: {},
                3: {},
                4: {},
                5: {},
                6: {},
                7: {},
                8: {},
                9: {}
            };
            for (var i in e) {
                var n = e[i].canvas = document.createElement("canvas"),
                    s = n.getContext("2d");
                Ft(n, s, i, t), e[i].canvas = n, e[i].width = n.width, e[i].height = n.height
            }
            return It[t] = {
                canvases: e,
                size: t,
                lineWidth: ct.showTextOutline ? Math.max(~~(t / 10), 2) : 2,
                accessTime: $
            }, It[t]
        }(t)
    }

    function _t(t, e, i, n, s, a, o) {
        if (t.save(), s > 500) return function(t, e, i, n, s) {
            t.font = `${s}px Ubuntu`, t.textBaseline = "middle", t.textAlign = "center", t.lineWidth = ct.showTextOutline ? Math.max(~~(s / 10), 2) : 2, t.fillStyle = "#FFF", t.strokeStyle = "#000", 1 !== t.lineWidth && t.strokeText(n, e, i), t.fillText(n, e, i), t.restore()
        }(t, i, n, o, a);
        if (t.imageSmoothingQuality = "high", e) {
            (d = Mt(s)).accessTime = $;
            for (var r = d.canvases, h = a / d.size, l = 0, c = 0; c < o.length; c++) l += r[o[c]].width - 2 * d.lineWidth;
            t.scale(h, h), i /= h, n /= h, i -= l / 2;
            for (c = 0; c < o.length; c++) {
                var u = r[o[c]];
                t.drawImage(u.canvas, i, n - u.height / 2), i += u.width - 2 * d.lineWidth
            }
        } else {
            var d;
            (d = function(t, e) {
                if (!Tt[t]) return At(t, e);
                for (var i = Object.keys(Tt[t]), n = 0, s = i.length; n < s; n++)
                    if (Ct(e, i[n], e / 4)) return Tt[t][i[n]];
                return At(t, e)
            }(o, s)).accessTime = $;
            var f = d.canvas;
            h = a / d.size;
            t.scale(h, h), i /= h, n /= h, t.drawImage(f, i - f.width / 2, n - f.height / 2)
        }
        t.restore()
    }
    t.setserver = function(t) {
        d !== t && y(t)
    }, t.hi = function(t) {
        console.log(t)
    }, t.setDarkTheme = function(t) {
        ct.darkTheme = t, wt()
    }, t.setShowMass = function(t) {
        ct.showMass = t
    }, t.setSkins = function(t) {
        ct.showSkins = t
    }, t.setColors = function(t) {
        ct.showColor = !t
    }, t.setNames = function(t) {
        ct.showNames = t, bt()
    }, t.setChatHide = function(t) {
        ct.showChat = !t, pt()
    }, t.setMinimap = function(t) {
        ct.showMinimap = !t
    }, t.setGird = function(t) {
        ct.showGrid = !t
    }, t.setHats = function(t) {
        ct.showHats = !t
    }, t.spectate = function(t) {
        U(v[1]), _.maxScore = 0, dt()
    }, t.play = function(t) {
        ! function(t) {
            skinname = e("#skin").val(), skinname && (t = skinname + t), u.debug("play trigger");
            var i = new r(!0);
            i.setUint8(0), i.setStringUTF8(t), U(i)
        }(t), dt(), setTimeout(function() {
            var t = JSON.stringify({
                    bots: [{
                        hasbots: "yes",
                        number: 20
                    }],
                    mass: [{
                        hasmass: "yes",
                        massstart: 100
                    }]
                }),
                e = new r(!0);
            e.setUint8(13), e.setStringUTF8(t), U(e)
        }, 1e3)
    }, t.openSkinsList = function() {
        "Skins" !== e("#inPageModalTitle").text() && e.get("include/gallery.php").then(function(t) {
            e("#inPageModalTitle").hide(), e("#pills-tab").show(), e("#inPageModalTitle").text("Skins"), e("#inPageModalBody").html(t)
        })
    }, t.setSkinToDB = function(t) {
        console.log(t), e("#skin").val("{" + t + "}"), e("#skinLabel").text(""), e(".skinUrl").attr("src", `./skins/${t}.png`)
    }, e(".modal").on("hide.bs.modal", function(t) {
        e("#overlays").removeClass("blurpanel")
    }), e(".modal").on("show.bs.modal", function(t) {
        e("#overlays").addClass("blurpanel")
    }), e("#customFile").change(function() {
        e(".custom-file-label").text(this.files[0].name)
    }), t.onload = function() {
        function e(t) {
            Y || (1 > (lt *= Math.pow(.9, t.wheelDelta / -120 || t.detail || 0)) && (lt = 1), lt > 4 / lt && (lt = 4 / lt))
        }
        if (B = document.getElementById("canvas"), E = B.getContext("2d"), X = document.getElementById("chat_textbox"), B.focus(), /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", e, !1) : document.body.onmousewheel = e, t.onkeydown = function(t) {
                switch (t.keyCode) {
                    case 13:
                        if (Y) break;
                        if (!ct.showChat) break;
                        if (V) {
                            X.blur();
                            var e = X.value;
                            e.length > 0 && (i = e, (n = new r).setUint8(99), n.setUint8(0), n.setStringUTF8(i), U(n)), X.value = ""
                        } else X.focus();
                        break;
                    case 32:
                        if (V || Y || ut.space) break;
                        U(v[17]), ut.space = !0;
                        break;
                    case 87:
                        if (V || Y) break;
                        U(v[21]), ut.w = !0;
                        break;
                    case 81:
                        if (V || Y || ut.q) break;
                        U(v[18]), ut.q = !0, Y || (P = !P);
                        break;
                    case 69:
                        if (V || Y || ut.e) break;
                        U(v[22]), ut.e = !0;
                        break;
                    case 82:
                        if (V || Y || ut.r) break;
                        U(v[23]), ut.r = !0;
                        break;
                    case 84:
                        if (V || Y || ut.t) break;
                        U(v[24]), ut.t = !0;
                        break;
                    case 80:
                        if (V || Y || ut.p) break;
                        U(v[25]), ut.p = !0;
                        break;
                    case 27:
                        if (ut.esc) break;
                        ut.esc = !0, Y ? dt() : ft()
                }
                var i, n
            }, t.onkeyup = function(t) {
                switch (t.keyCode) {
                    case 32:
                        ut.space = !1;
                        break;
                    case 87:
                        ut.w = !1;
                        break;
                    case 81:
                        ut.q && U(v[19]), ut.q = !1;
                        break;
                    case 69:
                        ut.e = !1;
                        break;
                    case 82:
                        ut.r = !1;
                        break;
                    case 84:
                        ut.t = !1;
                        break;
                    case 80:
                        ut.p = !1;
                        break;
                    case 27:
                        ut.esc = !1
                }
            }, X.onblur = function() {
                V = !1, pt()
            }, X.onfocus = function() {
                V = !0, pt()
            }, B.onmousemove = function(t) {
                rt = t.clientX, ht = t.clientY
            }, setInterval(function() {
                var t, e, i;
                t = (rt - B.width / 2) / et + Z, e = (ht - B.height / 2) / et + tt, (i = new r(!0)).setUint8(16), i.setUint32(t), i.setUint32(e), i._b.push(0, 0, 0, 0), U(i)
            }, 40), t.onresize = function() {
                var e = B.width = t.innerWidth,
                    i = B.height = t.innerHeight;
                ot = Math.sqrt(Math.min(i / 1080, e / 1920))
            }, t.onresize(), u.info(`init done in ${Date.now()-i}ms`), I(), ft(), ct.allowGETipSet && t.location.search) {
            var n = /ip=([\w\W]+):([0-9]+)/.exec(t.location.search.slice(1));
            n && y(`${n[1]}:${n[2]}`)
        }
        window.requestAnimationFrame(yt)
    }
}(window, window.jQuery);