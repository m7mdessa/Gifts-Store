! function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.c3 = b()
}(this, function () {
    "use strict";

    function a(a, b) {
        var c = this;
        c.component = a, c.params = b || {}, c.d3 = a.d3, c.scale = c.d3.scale.linear(), c.range, c.orient = "bottom", c.innerTickSize = 6, c.outerTickSize = this.params.withOuterTick ? 6 : 0, c.tickPadding = 3, c.tickValues = null, c.tickFormat, c.tickArguments, c.tickOffset = 0, c.tickCulling = !0, c.tickCentered, c.tickTextCharSize, c.tickTextRotate = c.params.tickTextRotate, c.tickLength, c.axis = c.generateAxis()
    }

    function b(a) {
        var b = this.internal = new c(this);
        b.loadConfig(a), b.beforeInit(a), b.init(), b.afterInit(a),
            function a(b, c, d) {
                Object.keys(b).forEach(function (e) {
                    c[e] = b[e].bind(d), Object.keys(b[e]).length > 0 && a(b[e], c[e], d)
                })
            }(A, this, this)
    }

    function c(a) {
        var b = this;
        b.d3 = window.d3 ? window.d3 : "undefined" != typeof require ? require("d3") : void 0, b.api = a, b.config = b.getDefaultConfig(), b.data = {}, b.cache = {}, b.axes = {}
    }
    var d, e, f = {
        target: "c3-target",
        chart: "c3-chart",
        chartLine: "c3-chart-line",
        chartLines: "c3-chart-lines",
        chartBar: "c3-chart-bar",
        chartBars: "c3-chart-bars",
        chartText: "c3-chart-text",
        chartTexts: "c3-chart-texts",
        chartArc: "c3-chart-arc",
        chartArcs: "c3-chart-arcs",
        chartArcsTitle: "c3-chart-arcs-title",
        chartArcsBackground: "c3-chart-arcs-background",
        chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit",
        chartArcsGaugeMax: "c3-chart-arcs-gauge-max",
        chartArcsGaugeMin: "c3-chart-arcs-gauge-min",
        selectedCircle: "c3-selected-circle",
        selectedCircles: "c3-selected-circles",
        eventRect: "c3-event-rect",
        eventRects: "c3-event-rects",
        eventRectsSingle: "c3-event-rects-single",
        eventRectsMultiple: "c3-event-rects-multiple",
        zoomRect: "c3-zoom-rect",
        brush: "c3-brush",
        focused: "c3-focused",
        defocused: "c3-defocused",
        region: "c3-region",
        regions: "c3-regions",
        title: "c3-title",
        tooltipContainer: "c3-tooltip-container",
        tooltip: "c3-tooltip",
        tooltipName: "c3-tooltip-name",
        shape: "c3-shape",
        shapes: "c3-shapes",
        line: "c3-line",
        lines: "c3-lines",
        bar: "c3-bar",
        bars: "c3-bars",
        circle: "c3-circle",
        circles: "c3-circles",
        arc: "c3-arc",
        arcs: "c3-arcs",
        area: "c3-area",
        areas: "c3-areas",
        empty: "c3-empty",
        text: "c3-text",
        texts: "c3-texts",
        gaugeValue: "c3-gauge-value",
        grid: "c3-grid",
        gridLines: "c3-grid-lines",
        xgrid: "c3-xgrid",
        xgrids: "c3-xgrids",
        xgridLine: "c3-xgrid-line",
        xgridLines: "c3-xgrid-lines",
        xgridFocus: "c3-xgrid-focus",
        ygrid: "c3-ygrid",
        ygrids: "c3-ygrids",
        ygridLine: "c3-ygrid-line",
        ygridLines: "c3-ygrid-lines",
        axis: "c3-axis",
        axisX: "c3-axis-x",
        axisXLabel: "c3-axis-x-label",
        axisY: "c3-axis-y",
        axisYLabel: "c3-axis-y-label",
        axisY2: "c3-axis-y2",
        axisY2Label: "c3-axis-y2-label",
        legendBackground: "c3-legend-background",
        legendItem: "c3-legend-item",
        legendItemEvent: "c3-legend-item-event",
        legendItemTile: "c3-legend-item-tile",
        legendItemHidden: "c3-legend-item-hidden",
        legendItemFocused: "c3-legend-item-focused",
        dragarea: "c3-dragarea",
        EXPANDED: "_expanded_",
        SELECTED: "_selected_",
        INCLUDED: "_included_"
    },
        g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
            return typeof a
        } : function (a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        },
        h = function (a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        },
        i = function (a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        },
        j = function (a, b) {
            if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !b || "object" != typeof b && "function" != typeof b ? a : b
        },
        k = function (a) {
            return a || 0 === a
        },
        l = function (a) {
            return "function" == typeof a
        },
        m = function (a) {
            return Array.isArray(a)
        },
        n = function (a) {
            return "string" == typeof a
        },
        o = function (a) {
            return void 0 === a
        },
        p = function (a) {
            return void 0 !== a
        },
        q = function (a) {
            return 10 * Math.ceil(a / 10)
        },
        r = function (a) {
            return Math.ceil(a) + .5
        },
        s = function (a) {
            return a[1] - a[0]
        },
        t = function (a) {
            return void 0 === a || null === a || n(a) && 0 === a.length || "object" === (void 0 === a ? "undefined" : g(a)) && 0 === Object.keys(a).length
        },
        u = function (a) {
            return !B.isEmpty(a)
        },
        v = function (a, b, c) {
            return void 0 !== a[b] ? a[b] : c
        },
        w = function (a, b) {
            var c = !1;
            return Object.keys(a).forEach(function (d) {
                a[d] === b && (c = !0)
            }), c
        },
        x = function (a) {
            return "string" == typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;") : a
        },
        y = function (a) {
            var b = a.getBoundingClientRect(),
                c = [a.pathSegList.getItem(0), a.pathSegList.getItem(1)];
            return {
                x: c[0].x,
                y: Math.min(c[0].y, c[1].y),
                width: b.width,
                height: b.height
            }
        };
    (e = a.prototype).axisX = function (a, b, c) {
        a.attr("transform", function (a) {
            return "translate(" + Math.ceil(b(a) + c) + ", 0)"
        })
    }, e.axisY = function (a, b) {
        a.attr("transform", function (a) {
            return "translate(0," + Math.ceil(b(a)) + ")"
        })
    }, e.scaleExtent = function (a) {
        var b = a[0],
            c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }, e.generateTicks = function (a) {
        var b, c, d = this,
            e = [];
        if (a.ticks) return a.ticks.apply(a, d.tickArguments);
        for (c = a.domain(), b = Math.ceil(c[0]); b < c[1]; b++) e.push(b);
        return e.length > 0 && e[0] > 0 && e.unshift(e[0] - (e[1] - e[0])), e
    }, e.copyScale = function () {
        var a, b = this,
            c = b.scale.copy();
        return b.params.isCategory && (a = b.scale.domain(), c.domain([a[0], a[1] - 1])), c
    }, e.textFormatted = function (a) {
        var b = this,
            c = b.tickFormat ? b.tickFormat(a) : a;
        return void 0 !== c ? c : ""
    }, e.updateRange = function () {
        var a = this;
        return a.range = a.scale.rangeExtent ? a.scale.rangeExtent() : a.scaleExtent(a.scale.range()), a.range
    }, e.updateTickTextCharSize = function (a) {
        var b = this;
        if (b.tickTextCharSize) return b.tickTextCharSize;
        var c = {
            h: 11.5,
            w: 5.5
        };
        return a.select("text").text(function (a) {
            return b.textFormatted(a)
        }).each(function (a) {
            var d = this.getBoundingClientRect(),
                e = b.textFormatted(a),
                f = d.height,
                g = e ? d.width / e.length : void 0;
            f && g && (c.h = f, c.w = g)
        }).text(""), b.tickTextCharSize = c, c
    }, e.transitionise = function (a) {
        return this.params.withoutTransition ? a : this.d3.transition(a)
    }, e.isVertical = function () {
        return "left" === this.orient || "right" === this.orient
    }, e.tspanData = function (a, b, c, d) {
        var e = this,
            f = e.params.tickMultiline ? e.splitTickText(a, c, d) : [].concat(e.textFormatted(a));
        return f.map(function (a) {
            return {
                index: b,
                splitted: a,
                length: f.length
            }
        })
    }, e.splitTickText = function (a, b, c) {
        function d(a, b) {
            f = void 0;
            for (var c = 1; c < b.length; c++)
                if (" " === b.charAt(c) && (f = c), e = b.substr(0, c + 1), g = h.tickTextCharSize.w * e.length, j < g) return d(a.concat(b.substr(0, f || c)), b.slice(f ? f + 1 : c));
            return a.concat(b)
        }
        var e, f, g, h = this,
            i = h.textFormatted(a),
            j = h.params.tickWidth,
            k = [];
        return "[object Array]" === Object.prototype.toString.call(i) ? i : ((!j || j <= 0) && (j = h.isVertical() ? 95 : h.params.isCategory ? Math.ceil(c(b[1]) - c(b[0])) - 12 : 110), d(k, i + ""))
    }, e.updateTickLength = function () {
        var a = this;
        a.tickLength = Math.max(a.innerTickSize, 0) + a.tickPadding
    }, e.lineY2 = function (a) {
        var b = this,
            c = b.scale(a) + (b.tickCentered ? 0 : b.tickOffset);
        return b.range[0] < c && c < b.range[1] ? b.innerTickSize : 0
    }, e.textY = function () {
        var a = this,
            b = a.tickTextRotate;
        return b ? 11.5 - b / 15 * 2.5 * (b > 0 ? 1 : -1) : a.tickLength
    }, e.textTransform = function () {
        var a = this.tickTextRotate;
        return a ? "rotate(" + a + ")" : ""
    }, e.textTextAnchor = function () {
        var a = this.tickTextRotate;
        return a ? a > 0 ? "start" : "end" : "middle"
    }, e.tspanDx = function () {
        var a = this.tickTextRotate;
        return a ? 8 * Math.sin(Math.PI * (a / 180)) : 0
    }, e.tspanDy = function (a, b) {
        var c = this,
            d = c.tickTextCharSize.h;
        return 0 === b && (d = c.isVertical() ? -((a.length - 1) * (c.tickTextCharSize.h / 2) - 3) : ".71em"), d
    }, e.generateAxis = function () {
        function a(e) {
            e.each(function () {
                var e, f, g, h = a.g = c.select(this),
                    i = this.__chart__ || b.scale,
                    j = this.__chart__ = b.copyScale(),
                    k = b.tickValues ? b.tickValues : b.generateTicks(j),
                    l = h.selectAll(".tick").data(k, j),
                    m = l.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                    n = l.exit().remove(),
                    o = b.transitionise(l).style("opacity", 1);
                d.isCategory ? (b.tickOffset = Math.ceil((j(1) - j(0)) / 2), f = b.tickCentered ? 0 : b.tickOffset, g = b.tickCentered ? b.tickOffset : 0) : b.tickOffset = f = 0, m.append("line"), m.append("text"), b.updateRange(), b.updateTickLength(), b.updateTickTextCharSize(h.select(".tick"));
                var p = o.select("line"),
                    q = o.select("text"),
                    r = l.select("text").selectAll("tspan").data(function (a, c) {
                        return b.tspanData(a, c, k, j)
                    });
                r.enter().append("tspan"), r.exit().remove(), r.text(function (a) {
                    return a.splitted
                });
                var s = h.selectAll(".domain").data([0]),
                    t = (s.enter().append("path").attr("class", "domain"), b.transitionise(s));
                switch (b.orient) {
                    case "bottom":
                        e = b.axisX, p.attr("x1", f).attr("x2", f).attr("y2", function (a, c) {
                            return b.lineY2(a, c)
                        }), q.attr("x", 0).attr("y", function (a, c) {
                            return b.textY(a, c)
                        }).attr("transform", function (a, c) {
                            return b.textTransform(a, c)
                        }).style("text-anchor", function (a, c) {
                            return b.textTextAnchor(a, c)
                        }), r.attr("x", 0).attr("dy", function (a, c) {
                            return b.tspanDy(a, c)
                        }).attr("dx", function (a, c) {
                            return b.tspanDx(a, c)
                        }), t.attr("d", "M" + b.range[0] + "," + b.outerTickSize + "V0H" + b.range[1] + "V" + b.outerTickSize);
                        break;
                    case "top":
                        e = b.axisX, p.attr("x2", 0).attr("y2", -b.innerTickSize), q.attr("x", 0).attr("y", -b.tickLength).style("text-anchor", "middle"), r.attr("x", 0).attr("dy", "0em"), t.attr("d", "M" + b.range[0] + "," + -b.outerTickSize + "V0H" + b.range[1] + "V" + -b.outerTickSize);
                        break;
                    case "left":
                        e = b.axisY, p.attr("x2", -b.innerTickSize).attr("y1", g).attr("y2", g), q.attr("x", -b.tickLength).attr("y", b.tickOffset).style("text-anchor", "end"), r.attr("x", -b.tickLength).attr("dy", function (a, c) {
                            return b.tspanDy(a, c)
                        }), t.attr("d", "M" + -b.outerTickSize + "," + b.range[0] + "H0V" + b.range[1] + "H" + -b.outerTickSize);
                        break;
                    case "right":
                        e = b.axisY, p.attr("x2", b.innerTickSize).attr("y2", 0), q.attr("x", b.tickLength).attr("y", 0).style("text-anchor", "start"), r.attr("x", b.tickLength).attr("dy", function (a, c) {
                            return b.tspanDy(a, c)
                        }), t.attr("d", "M" + b.outerTickSize + "," + b.range[0] + "H0V" + b.range[1] + "H" + b.outerTickSize)
                }
                if (j.rangeBand) {
                    var u = j,
                        v = u.rangeBand() / 2;
                    i = j = function (a) {
                        return u(a) + v
                    }
                } else i.rangeBand ? i = j : n.call(e, j, b.tickOffset);
                m.call(e, i, b.tickOffset), o.call(e, j, b.tickOffset)
            })
        }
        var b = this,
            c = b.d3,
            d = b.params;
        return a.scale = function (c) {
            return arguments.length ? (b.scale = c, a) : b.scale
        }, a.orient = function (c) {
            return arguments.length ? (b.orient = c in {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            } ? c + "" : "bottom", a) : b.orient
        }, a.tickFormat = function (c) {
            return arguments.length ? (b.tickFormat = c, a) : b.tickFormat
        }, a.tickCentered = function (c) {
            return arguments.length ? (b.tickCentered = c, a) : b.tickCentered
        }, a.tickOffset = function () {
            return b.tickOffset
        }, a.tickInterval = function () {
            var c;
            return c = d.isCategory ? 2 * b.tickOffset : (a.g.select("path.domain").node().getTotalLength() - 2 * b.outerTickSize) / a.g.selectAll("line").size(), c === 1 / 0 ? 0 : c
        }, a.ticks = function () {
            return arguments.length ? (b.tickArguments = arguments, a) : b.tickArguments
        }, a.tickCulling = function (c) {
            return arguments.length ? (b.tickCulling = c, a) : b.tickCulling
        }, a.tickValues = function (c) {
            if ("function" == typeof c) b.tickValues = function () {
                return c(b.scale.domain())
            };
            else {
                if (!arguments.length) return b.tickValues;
                b.tickValues = c
            }
            return a
        }, a
    };
    var z = function (b) {
        function c(b) {
            h(this, c);
            var f = {
                fn: d,
                internal: {
                    fn: e
                }
            },
                g = j(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, b, "axis", f));
            return g.d3 = b.d3, g.internal = a, g
        }
        return i(c, b), c
    }(function (a, b, c) {
        this.owner = a, C.chart.internal[b] = c
    });
    (d = z.prototype).init = function () {
        var a = this.owner,
            b = a.config,
            c = a.main;
        a.axes.x = c.append("g").attr("class", f.axis + " " + f.axisX).attr("clip-path", a.clipPathForXAxis).attr("transform", a.getTranslate("x")).style("visibility", b.axis_x_show ? "visible" : "hidden"), a.axes.x.append("text").attr("class", f.axisXLabel).attr("transform", b.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), a.axes.y = c.append("g").attr("class", f.axis + " " + f.axisY).attr("clip-path", b.axis_y_inner ? "" : a.clipPathForYAxis).attr("transform", a.getTranslate("y")).style("visibility", b.axis_y_show ? "visible" : "hidden"), a.axes.y.append("text").attr("class", f.axisYLabel).attr("transform", b.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), a.axes.y2 = c.append("g").attr("class", f.axis + " " + f.axisY2).attr("transform", a.getTranslate("y2")).style("visibility", b.axis_y2_show ? "visible" : "hidden"), a.axes.y2.append("text").attr("class", f.axisY2Label).attr("transform", b.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this))
    }, d.getXAxis = function (a, b, c, d, e, f, g) {
        var h = this.owner,
            i = h.config,
            j = {
                isCategory: h.isCategorized(),
                withOuterTick: e,
                tickMultiline: i.axis_x_tick_multiline,
                tickWidth: i.axis_x_tick_width,
                tickTextRotate: g ? 0 : i.axis_x_tick_rotate,
                withoutTransition: f
            },
            k = new this.internal(this, j).axis.scale(a).orient(b);
        return h.isTimeSeries() && d && "function" != typeof d && (d = d.map(function (a) {
            return h.parseDate(a)
        })), k.tickFormat(c).tickValues(d), h.isCategorized() && (k.tickCentered(i.axis_x_tick_centered), t(i.axis_x_tick_culling) && (i.axis_x_tick_culling = !1)), k
    }, d.updateXAxisTickValues = function (a, b) {
        var c, d = this.owner,
            e = d.config;
        return (e.axis_x_tick_fit || e.axis_x_tick_count) && (c = this.generateTickValues(d.mapTargetsToUniqueXs(a), e.axis_x_tick_count, d.isTimeSeries())), b ? b.tickValues(c) : (d.xAxis.tickValues(c), d.subXAxis.tickValues(c)), c
    }, d.getYAxis = function (a, b, c, d, e, f, g) {
        var h = this.owner,
            i = h.config,
            j = {
                withOuterTick: e,
                withoutTransition: f,
                tickTextRotate: g ? 0 : i.axis_y_tick_rotate
            },
            k = new this.internal(this, j).axis.scale(a).orient(b).tickFormat(c);
        return h.isTimeSeriesY() ? k.ticks(h.d3.time[i.axis_y_tick_time_value], i.axis_y_tick_time_interval) : k.tickValues(d), k
    }, d.getId = function (a) {
        var b = this.owner.config;
        return a in b.data_axes ? b.data_axes[a] : "y"
    }, d.getXAxisTickFormat = function () {
        var a = this.owner,
            b = a.config,
            c = a.isTimeSeries() ? a.defaultAxisTimeFormat : a.isCategorized() ? a.categoryName : function (a) {
                return a < 0 ? a.toFixed(0) : a
            };
        return b.axis_x_tick_format && (l(b.axis_x_tick_format) ? c = b.axis_x_tick_format : a.isTimeSeries() && (c = function (c) {
            return c ? a.axisTimeFormat(b.axis_x_tick_format)(c) : ""
        })), l(c) ? function (b) {
            return c.call(a, b)
        } : c
    }, d.getTickValues = function (a, b) {
        return a || (b ? b.tickValues() : void 0)
    }, d.getXAxisTickValues = function () {
        return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis)
    }, d.getYAxisTickValues = function () {
        return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis)
    }, d.getY2AxisTickValues = function () {
        return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis)
    }, d.getLabelOptionByAxisId = function (a) {
        var b, c = this.owner.config;
        return "y" === a ? b = c.axis_y_label : "y2" === a ? b = c.axis_y2_label : "x" === a && (b = c.axis_x_label), b
    }, d.getLabelText = function (a) {
        var b = this.getLabelOptionByAxisId(a);
        return n(b) ? b : b ? b.text : null
    }, d.setLabelText = function (a, b) {
        var c = this.owner.config,
            d = this.getLabelOptionByAxisId(a);
        n(d) ? "y" === a ? c.axis_y_label = b : "y2" === a ? c.axis_y2_label = b : "x" === a && (c.axis_x_label = b) : d && (d.text = b)
    }, d.getLabelPosition = function (a, b) {
        var c = this.getLabelOptionByAxisId(a),
            d = c && "object" === (void 0 === c ? "undefined" : g(c)) && c.position ? c.position : b;
        return {
            isInner: d.indexOf("inner") >= 0,
            isOuter: d.indexOf("outer") >= 0,
            isLeft: d.indexOf("left") >= 0,
            isCenter: d.indexOf("center") >= 0,
            isRight: d.indexOf("right") >= 0,
            isTop: d.indexOf("top") >= 0,
            isMiddle: d.indexOf("middle") >= 0,
            isBottom: d.indexOf("bottom") >= 0
        }
    }, d.getXAxisLabelPosition = function () {
        return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right")
    }, d.getYAxisLabelPosition = function () {
        return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
    }, d.getY2AxisLabelPosition = function () {
        return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
    }, d.getLabelPositionById = function (a) {
        return "y2" === a ? this.getY2AxisLabelPosition() : "y" === a ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition()
    }, d.textForXAxisLabel = function () {
        return this.getLabelText("x")
    }, d.textForYAxisLabel = function () {
        return this.getLabelText("y")
    }, d.textForY2AxisLabel = function () {
        return this.getLabelText("y2")
    }, d.xForAxisLabel = function (a, b) {
        var c = this.owner;
        return a ? b.isLeft ? 0 : b.isCenter ? c.width / 2 : c.width : b.isBottom ? -c.height : b.isMiddle ? -c.height / 2 : 0
    }, d.dxForAxisLabel = function (a, b) {
        return a ? b.isLeft ? "0.5em" : b.isRight ? "-0.5em" : "0" : b.isTop ? "-0.5em" : b.isBottom ? "0.5em" : "0"
    }, d.textAnchorForAxisLabel = function (a, b) {
        return a ? b.isLeft ? "start" : b.isCenter ? "middle" : "end" : b.isBottom ? "start" : b.isMiddle ? "middle" : "end"
    }, d.xForXAxisLabel = function () {
        return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
    }, d.xForYAxisLabel = function () {
        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
    }, d.xForY2AxisLabel = function () {
        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
    }, d.dxForXAxisLabel = function () {
        return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
    }, d.dxForYAxisLabel = function () {
        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
    }, d.dxForY2AxisLabel = function () {
        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
    }, d.dyForXAxisLabel = function () {
        var a = this.owner.config,
            b = this.getXAxisLabelPosition();
        return a.axis_rotated ? b.isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : b.isInner ? "-0.5em" : a.axis_x_height ? a.axis_x_height - 10 : "3em"
    }, d.dyForYAxisLabel = function () {
        var a = this.owner,
            b = this.getYAxisLabelPosition();
        return a.config.axis_rotated ? b.isInner ? "-0.5em" : "3em" : b.isInner ? "1.2em" : -10 - (a.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10)
    }, d.dyForY2AxisLabel = function () {
        var a = this.owner,
            b = this.getY2AxisLabelPosition();
        return a.config.axis_rotated ? b.isInner ? "1.2em" : "-2.2em" : b.isInner ? "-0.5em" : 15 + (a.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15)
    }, d.textAnchorForXAxisLabel = function () {
        var a = this.owner;
        return this.textAnchorForAxisLabel(!a.config.axis_rotated, this.getXAxisLabelPosition())
    }, d.textAnchorForYAxisLabel = function () {
        var a = this.owner;
        return this.textAnchorForAxisLabel(a.config.axis_rotated, this.getYAxisLabelPosition())
    }, d.textAnchorForY2AxisLabel = function () {
        var a = this.owner;
        return this.textAnchorForAxisLabel(a.config.axis_rotated, this.getY2AxisLabelPosition())
    }, d.getMaxTickWidth = function (a, b) {
        var c, d, e, f, g = this.owner,
            h = g.config,
            i = 0;
        return b && g.currentMaxTickWidths[a] ? g.currentMaxTickWidths[a] : (g.svg && (c = g.filterTargetsToShow(g.data.targets), "y" === a ? (d = g.y.copy().domain(g.getYDomain(c, "y")), e = this.getYAxis(d, g.yOrient, h.axis_y_tick_format, g.yAxisTickValues, !1, !0, !0)) : "y2" === a ? (d = g.y2.copy().domain(g.getYDomain(c, "y2")), e = this.getYAxis(d, g.y2Orient, h.axis_y2_tick_format, g.y2AxisTickValues, !1, !0, !0)) : (d = g.x.copy().domain(g.getXDomain(c)), e = this.getXAxis(d, g.xOrient, g.xAxisTickFormat, g.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(c, e)), (f = g.d3.select("body").append("div").classed("c3", !0)).append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0).append("g").call(e).each(function () {
            g.d3.select(this).selectAll("text").each(function () {
                var a = this.getBoundingClientRect();
                i < a.width && (i = a.width)
            }), f.remove()
        })), g.currentMaxTickWidths[a] = i <= 0 ? g.currentMaxTickWidths[a] : i, g.currentMaxTickWidths[a])
    }, d.updateLabels = function (a) {
        var b = this.owner,
            c = b.main.select("." + f.axisX + " ." + f.axisXLabel),
            d = b.main.select("." + f.axisY + " ." + f.axisYLabel),
            e = b.main.select("." + f.axisY2 + " ." + f.axisY2Label);
        (a ? c.transition() : c).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (a ? d.transition() : d).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (a ? e.transition() : e).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))
    }, d.getPadding = function (a, b, c, d) {
        var e = "number" == typeof a ? a : a[b];
        return k(e) ? "ratio" === a.unit ? a[b] * d : this.convertPixelsToAxisPadding(e, d) : c
    }, d.convertPixelsToAxisPadding = function (a, b) {
        var c = this.owner;
        return b * (a / (c.config.axis_rotated ? c.width : c.height))
    }, d.generateTickValues = function (a, b, c) {
        var d, e, f, g, h, i, j, k = a;
        if (b)
            if (1 === (d = l(b) ? b() : b)) k = [a[0]];
            else if (2 === d) k = [a[0], a[a.length - 1]];
            else if (d > 2) {
                for (g = d - 2, e = a[0], h = ((f = a[a.length - 1]) - e) / (g + 1), k = [e], i = 0; i < g; i++) j = +e + h * (i + 1), k.push(c ? new Date(j) : j);
                k.push(f)
            }
        return c || (k = k.sort(function (a, b) {
            return a - b
        })), k
    }, d.generateTransitions = function (a) {
        var b = this.owner.axes;
        return {
            axisX: a ? b.x.transition().duration(a) : b.x,
            axisY: a ? b.y.transition().duration(a) : b.y,
            axisY2: a ? b.y2.transition().duration(a) : b.y2,
            axisSubX: a ? b.subx.transition().duration(a) : b.subx
        }
    }, d.redraw = function (a, b) {
        var c = this.owner;
        c.axes.x.style("opacity", b ? 0 : 1), c.axes.y.style("opacity", b ? 0 : 1), c.axes.y2.style("opacity", b ? 0 : 1), c.axes.subx.style("opacity", b ? 0 : 1), a.axisX.call(c.xAxis), a.axisY.call(c.yAxis), a.axisY2.call(c.y2Axis), a.axisSubX.call(c.subXAxis)
    };
    var A, B, C = {
        version: "0.4.18"
    };
    return C.generate = function (a) {
        return new b(a)
    }, C.chart = {
        fn: b.prototype,
        internal: {
            fn: c.prototype
        }
    }, A = C.chart.fn, B = C.chart.internal.fn, B.beforeInit = function () { }, B.afterInit = function () { }, B.init = function () {
        var a = this,
            b = a.config;
        if (a.initParams(), b.data_url) a.convertUrlToData(b.data_url, b.data_mimeType, b.data_headers, b.data_keys, a.initWithData);
        else if (b.data_json) a.initWithData(a.convertJsonToData(b.data_json, b.data_keys));
        else if (b.data_rows) a.initWithData(a.convertRowsToData(b.data_rows));
        else {
            if (!b.data_columns) throw Error("url or json or rows or columns is required.");
            a.initWithData(a.convertColumnsToData(b.data_columns))
        }
    }, B.initParams = function () {
        var a = this,
            b = a.d3,
            c = a.config;
        a.clipId = "c3-" + +new Date + "-clip", a.clipIdForXAxis = a.clipId + "-xaxis", a.clipIdForYAxis = a.clipId + "-yaxis", a.clipIdForGrid = a.clipId + "-grid", a.clipIdForSubchart = a.clipId + "-subchart", a.clipPath = a.getClipPath(a.clipId), a.clipPathForXAxis = a.getClipPath(a.clipIdForXAxis), a.clipPathForYAxis = a.getClipPath(a.clipIdForYAxis), a.clipPathForGrid = a.getClipPath(a.clipIdForGrid), a.clipPathForSubchart = a.getClipPath(a.clipIdForSubchart), a.dragStart = null, a.dragging = !1, a.flowing = !1, a.cancelClick = !1, a.mouseover = !1, a.transiting = !1, a.color = a.generateColor(), a.levelColor = a.generateLevelColor(), a.dataTimeFormat = c.data_xLocaltime ? b.time.format : b.time.format.utc, a.axisTimeFormat = c.axis_x_localtime ? b.time.format : b.time.format.utc, a.defaultAxisTimeFormat = a.axisTimeFormat.multi([
            [".%L", function (a) {
                return a.getMilliseconds()
            }],
            [":%S", function (a) {
                return a.getSeconds()
            }],
            ["%I:%M", function (a) {
                return a.getMinutes()
            }],
            ["%I %p", function (a) {
                return a.getHours()
            }],
            ["%-m/%-d", function (a) {
                return a.getDay() && 1 !== a.getDate()
            }],
            ["%-m/%-d", function (a) {
                return 1 !== a.getDate()
            }],
            ["%-m/%-d", function (a) {
                return a.getMonth()
            }],
            ["%Y/%-m/%-d", function () {
                return !0
            }]
        ]), a.hiddenTargetIds = [], a.hiddenLegendIds = [], a.focusedTargetIds = [], a.defocusedTargetIds = [], a.xOrient = c.axis_rotated ? "left" : "bottom", a.yOrient = c.axis_rotated ? c.axis_y_inner ? "top" : "bottom" : c.axis_y_inner ? "right" : "left", a.y2Orient = c.axis_rotated ? c.axis_y2_inner ? "bottom" : "top" : c.axis_y2_inner ? "left" : "right", a.subXOrient = c.axis_rotated ? "left" : "bottom", a.isLegendRight = "right" === c.legend_position, a.isLegendInset = "inset" === c.legend_position, a.isLegendTop = "top-left" === c.legend_inset_anchor || "top-right" === c.legend_inset_anchor, a.isLegendLeft = "top-left" === c.legend_inset_anchor || "bottom-left" === c.legend_inset_anchor, a.legendStep = 0, a.legendItemWidth = 0, a.legendItemHeight = 0, a.currentMaxTickWidths = {
            x: 0,
            y: 0,
            y2: 0
        }, a.rotated_padding_left = 30, a.rotated_padding_right = c.axis_rotated && !c.axis_x_show ? 0 : 30, a.rotated_padding_top = 5, a.withoutFadeIn = {}, a.intervalForObserveInserted = void 0, a.axes.subx = b.selectAll([])
    }, B.initChartElements = function () {
        this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText()
    }, B.initWithData = function (a) {
        var b, c, d = this,
            e = d.d3,
            g = d.config,
            h = !0;
        d.axis = new z(d), d.initPie && d.initPie(), d.initBrush && d.initBrush(), d.initZoom && d.initZoom(), g.bindto ? "function" == typeof g.bindto.node ? d.selectChart = g.bindto : d.selectChart = e.select(g.bindto) : d.selectChart = e.selectAll([]), d.selectChart.empty() && (d.selectChart = e.select(document.createElement("div")).style("opacity", 0), d.observeInserted(d.selectChart), h = !1), d.selectChart.html("").classed("c3", !0), d.data.xs = {}, d.data.targets = d.convertDataToTargets(a), g.data_filter && (d.data.targets = d.data.targets.filter(g.data_filter)), g.data_hide && d.addHiddenTargetIds(!0 === g.data_hide ? d.mapToIds(d.data.targets) : g.data_hide), g.legend_hide && d.addHiddenLegendIds(!0 === g.legend_hide ? d.mapToIds(d.data.targets) : g.legend_hide), d.hasType("gauge") && (g.legend_show = !1), d.updateSizes(), d.updateScales(), d.x.domain(e.extent(d.getXDomain(d.data.targets))), d.y.domain(d.getYDomain(d.data.targets, "y")), d.y2.domain(d.getYDomain(d.data.targets, "y2")), d.subX.domain(d.x.domain()), d.subY.domain(d.y.domain()), d.subY2.domain(d.y2.domain()), d.orgXDomain = d.x.domain(), d.brush && d.brush.scale(d.subX), g.zoom_enabled && d.zoom.scale(d.x), d.svg = d.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", function () {
            return g.onmouseover.call(d)
        }).on("mouseleave", function () {
            return g.onmouseout.call(d)
        }), d.config.svg_classname && d.svg.attr("class", d.config.svg_classname), b = d.svg.append("defs"), d.clipChart = d.appendClip(b, d.clipId), d.clipXAxis = d.appendClip(b, d.clipIdForXAxis), d.clipYAxis = d.appendClip(b, d.clipIdForYAxis), d.clipGrid = d.appendClip(b, d.clipIdForGrid), d.clipSubchart = d.appendClip(b, d.clipIdForSubchart), d.updateSvgSize(), c = d.main = d.svg.append("g").attr("transform", d.getTranslate("main")), d.initSubchart && d.initSubchart(), d.initTooltip && d.initTooltip(), d.initLegend && d.initLegend(), d.initTitle && d.initTitle(), c.append("text").attr("class", f.text + " " + f.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), d.initRegion(), d.initGrid(), c.append("g").attr("clip-path", d.clipPath).attr("class", f.chart), g.grid_lines_front && d.initGridLines(), d.initEventRect(), d.initChartElements(), c.insert("rect", g.zoom_privileged ? null : "g." + f.regions).attr("class", f.zoomRect).attr("width", d.width).attr("height", d.height).style("opacity", 0).on("dblclick.zoom", null), g.axis_x_extent && d.brush.extent(d.getDefaultExtent()), d.axis.init(), d.updateTargets(d.data.targets), h && (d.updateDimension(), d.config.oninit.call(d), d.redraw({
            withTransition: !1,
            withTransform: !0,
            withUpdateXDomain: !0,
            withUpdateOrgXDomain: !0,
            withTransitionForAxis: !1
        })), d.bindResize(), d.api.element = d.selectChart.node()
    }, B.smoothLines = function (a, b) {
        var c = this;
        "grid" === b && a.each(function () {
            var a = c.d3.select(this),
                b = a.attr("x1"),
                d = a.attr("x2"),
                e = a.attr("y1"),
                f = a.attr("y2");
            a.attr({
                x1: Math.ceil(b),
                x2: Math.ceil(d),
                y1: Math.ceil(e),
                y2: Math.ceil(f)
            })
        })
    }, B.updateSizes = function () {
        var a = this,
            b = a.config,
            c = a.legend ? a.getLegendHeight() : 0,
            d = a.legend ? a.getLegendWidth() : 0,
            e = a.isLegendRight || a.isLegendInset ? 0 : c,
            f = a.hasArcType(),
            g = b.axis_rotated || f ? 0 : a.getHorizontalAxisHeight("x"),
            h = b.subchart_show && !f ? b.subchart_size_height + g : 0;
        a.currentWidth = a.getCurrentWidth(), a.currentHeight = a.getCurrentHeight(), a.margin = b.axis_rotated ? {
            top: a.getHorizontalAxisHeight("y2") + a.getCurrentPaddingTop(),
            right: f ? 0 : a.getCurrentPaddingRight(),
            bottom: a.getHorizontalAxisHeight("y") + e + a.getCurrentPaddingBottom(),
            left: h + (f ? 0 : a.getCurrentPaddingLeft())
        } : {
            top: 4 + a.getCurrentPaddingTop(),
            right: f ? 0 : a.getCurrentPaddingRight(),
            bottom: g + h + e + a.getCurrentPaddingBottom(),
            left: f ? 0 : a.getCurrentPaddingLeft()
        }, a.margin2 = b.axis_rotated ? {
            top: a.margin.top,
            right: NaN,
            bottom: 20 + e,
            left: a.rotated_padding_left
        } : {
            top: a.currentHeight - h - e,
            right: NaN,
            bottom: g + e,
            left: a.margin.left
        }, a.margin3 = {
            top: 0,
            right: NaN,
            bottom: 0,
            left: 0
        }, a.updateSizeForLegend && a.updateSizeForLegend(c, d), a.width = a.currentWidth - a.margin.left - a.margin.right, a.height = a.currentHeight - a.margin.top - a.margin.bottom, a.width < 0 && (a.width = 0), a.height < 0 && (a.height = 0), a.width2 = b.axis_rotated ? a.margin.left - a.rotated_padding_left - a.rotated_padding_right : a.width, a.height2 = b.axis_rotated ? a.height : a.currentHeight - a.margin2.top - a.margin2.bottom, a.width2 < 0 && (a.width2 = 0), a.height2 < 0 && (a.height2 = 0), a.arcWidth = a.width - (a.isLegendRight ? d + 10 : 0), a.arcHeight = a.height - (a.isLegendRight ? 0 : 10), a.hasType("gauge") && !b.gauge_fullCircle && (a.arcHeight += a.height - a.getGaugeLabelHeight()), a.updateRadius && a.updateRadius(), a.isLegendRight && f && (a.margin3.left = a.arcWidth / 2 + 1.1 * a.radiusExpanded)
    }, B.updateTargets = function (a) {
        var b = this;
        b.updateTargetsForText(a), b.updateTargetsForBar(a), b.updateTargetsForLine(a), b.hasArcType() && b.updateTargetsForArc && b.updateTargetsForArc(a), b.updateTargetsForSubchart && b.updateTargetsForSubchart(a), b.showTargets()
    }, B.showTargets = function () {
        var a = this;
        a.svg.selectAll("." + f.target).filter(function (b) {
            return a.isTargetToShow(b.id)
        }).transition().duration(a.config.transition_duration).style("opacity", 1)
    }, B.redraw = function (a, b) {
        var c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, w, x, y, z, A, B, C, D, E, F, G, H = this,
            I = H.main,
            J = H.d3,
            K = H.config,
            L = H.getShapeIndices(H.isAreaType),
            M = H.getShapeIndices(H.isBarType),
            N = H.getShapeIndices(H.isLineType),
            O = H.hasArcType(),
            P = H.filterTargetsToShow(H.data.targets),
            Q = H.xv.bind(H);
        if (a = a || {}, c = v(a, "withY", !0), d = v(a, "withSubchart", !0), e = v(a, "withTransition", !0), i = v(a, "withTransform", !1), j = v(a, "withUpdateXDomain", !1), k = v(a, "withUpdateOrgXDomain", !1), l = v(a, "withTrimXDomain", !0), p = v(a, "withUpdateXAxis", j), m = v(a, "withLegend", !1), n = v(a, "withEventRect", !0), o = v(a, "withDimension", !0), g = v(a, "withTransitionForExit", e), h = v(a, "withTransitionForAxis", e), w = e ? K.transition_duration : 0, x = g ? w : 0, y = h ? w : 0, b = b || H.axis.generateTransitions(y), m && K.legend_show ? H.updateLegend(H.mapToIds(H.data.targets), a, b) : o && H.updateDimension(!0), H.isCategorized() && 0 === P.length && H.x.domain([0, H.axes.x.selectAll(".tick").size()]), P.length ? (H.updateXDomain(P, j, k, l), K.axis_x_tick_values || (B = H.axis.updateXAxisTickValues(P))) : (H.xAxis.tickValues([]), H.subXAxis.tickValues([])), K.zoom_rescale && !a.flow && (E = H.x.orgDomain()), H.y.domain(H.getYDomain(P, "y", E)), H.y2.domain(H.getYDomain(P, "y2", E)), !K.axis_y_tick_values && K.axis_y_tick_count && H.yAxis.tickValues(H.axis.generateTickValues(H.y.domain(), K.axis_y_tick_count)), !K.axis_y2_tick_values && K.axis_y2_tick_count && H.y2Axis.tickValues(H.axis.generateTickValues(H.y2.domain(), K.axis_y2_tick_count)), H.axis.redraw(b, O), H.axis.updateLabels(e), (j || p) && P.length)
            if (K.axis_x_tick_culling && B) {
                for (C = 1; C < B.length; C++)
                    if (B.length / C < K.axis_x_tick_culling_max) {
                        D = C;
                        break
                    } H.svg.selectAll("." + f.axisX + " .tick text").each(function (a) {
                        var b = B.indexOf(a);
                        b >= 0 && J.select(this).style("display", b % D ? "none" : "block")
                    })
            } else H.svg.selectAll("." + f.axisX + " .tick text").style("display", "block");
        q = H.generateDrawArea ? H.generateDrawArea(L, !1) : void 0, r = H.generateDrawBar ? H.generateDrawBar(M) : void 0, s = H.generateDrawLine ? H.generateDrawLine(N, !1) : void 0, t = H.generateXYForText(L, M, N, !0), u = H.generateXYForText(L, M, N, !1), c && (H.subY.domain(H.getYDomain(P, "y")), H.subY2.domain(H.getYDomain(P, "y2"))), H.updateXgridFocus(), I.select("text." + f.text + "." + f.empty).attr("x", H.width / 2).attr("y", H.height / 2).text(K.data_empty_label_text).transition().style("opacity", P.length ? 0 : 1), H.updateGrid(w), H.updateRegion(w), H.updateBar(x), H.updateLine(x), H.updateArea(x), H.updateCircle(), H.hasDataLabel() && H.updateText(x), H.redrawTitle && H.redrawTitle(), H.redrawArc && H.redrawArc(w, x, i), H.redrawSubchart && H.redrawSubchart(d, b, w, x, L, M, N), I.selectAll("." + f.selectedCircles).filter(H.isBarType.bind(H)).selectAll("circle").remove(), K.interaction_enabled && !a.flow && n && (H.redrawEventRect(), H.updateZoom && H.updateZoom()), H.updateCircleY(), F = (H.config.axis_rotated ? H.circleY : H.circleX).bind(H), G = (H.config.axis_rotated ? H.circleX : H.circleY).bind(H), a.flow && (A = H.generateFlow({
            targets: P,
            flow: a.flow,
            duration: a.flow.duration,
            drawBar: r,
            drawLine: s,
            drawArea: q,
            cx: F,
            cy: G,
            xv: Q,
            xForText: t,
            yForText: u
        })), (w || A) && H.isTabVisible() ? J.transition().duration(w).each(function () {
            var b = [];
            [H.redrawBar(r, !0), H.redrawLine(s, !0), H.redrawArea(q, !0), H.redrawCircle(F, G, !0), H.redrawText(t, u, a.flow, !0), H.redrawRegion(!0), H.redrawGrid(!0)].forEach(function (a) {
                a.forEach(function (a) {
                    b.push(a)
                })
            }), z = H.generateWait(), b.forEach(function (a) {
                z.add(a)
            })
        }).call(z, function () {
            A && A(), K.onrendered && K.onrendered.call(H)
        }) : (H.redrawBar(r), H.redrawLine(s), H.redrawArea(q), H.redrawCircle(F, G), H.redrawText(t, u, a.flow), H.redrawRegion(), H.redrawGrid(),
            K.onrendered && K.onrendered.call(H)), H.mapToIds(H.data.targets).forEach(function (a) {
                H.withoutFadeIn[a] = !0
            })
    }, B.updateAndRedraw = function (a) {
        var b, c = this,
            d = c.config;
        (a = a || {}).withTransition = v(a, "withTransition", !0), a.withTransform = v(a, "withTransform", !1), a.withLegend = v(a, "withLegend", !1), a.withUpdateXDomain = !0, a.withUpdateOrgXDomain = !0, a.withTransitionForExit = !1, a.withTransitionForTransform = v(a, "withTransitionForTransform", a.withTransition), c.updateSizes(), a.withLegend && d.legend_show || (b = c.axis.generateTransitions(a.withTransitionForAxis ? d.transition_duration : 0), c.updateScales(), c.updateSvgSize(), c.transformAll(a.withTransitionForTransform, b)), c.redraw(a, b)
    }, B.redrawWithoutRescale = function () {
        this.redraw({
            withY: !1,
            withSubchart: !1,
            withEventRect: !1,
            withTransitionForAxis: !1
        })
    }, B.isTimeSeries = function () {
        return "timeseries" === this.config.axis_x_type
    }, B.isCategorized = function () {
        return this.config.axis_x_type.indexOf("categor") >= 0
    }, B.isCustomX = function () {
        var a = this,
            b = a.config;
        return !a.isTimeSeries() && (b.data_x || u(b.data_xs))
    }, B.isTimeSeriesY = function () {
        return "timeseries" === this.config.axis_y_type
    }, B.getTranslate = function (a) {
        var b, c, d = this,
            e = d.config;
        return "main" === a ? (b = r(d.margin.left), c = r(d.margin.top)) : "context" === a ? (b = r(d.margin2.left), c = r(d.margin2.top)) : "legend" === a ? (b = d.margin3.left, c = d.margin3.top) : "x" === a ? (b = 0, c = e.axis_rotated ? 0 : d.height) : "y" === a ? (b = 0, c = e.axis_rotated ? d.height : 0) : "y2" === a ? (b = e.axis_rotated ? 0 : d.width, c = e.axis_rotated ? 1 : 0) : "subx" === a ? (b = 0, c = e.axis_rotated ? 0 : d.height2) : "arc" === a && (b = d.arcWidth / 2, c = d.arcHeight / 2), "translate(" + b + "," + c + ")"
    }, B.initialOpacity = function (a) {
        return null !== a.value && this.withoutFadeIn[a.id] ? 1 : 0
    }, B.initialOpacityForCircle = function (a) {
        return null !== a.value && this.withoutFadeIn[a.id] ? this.opacityForCircle(a) : 0
    }, B.opacityForCircle = function (a) {
        var b = (l(this.config.point_show) ? this.config.point_show(a) : this.config.point_show) ? 1 : 0;
        return k(a.value) ? this.isScatterType(a) ? .5 : b : 0
    }, B.opacityForText = function () {
        return this.hasDataLabel() ? 1 : 0
    }, B.xx = function (a) {
        return a ? this.x(a.x) : null
    }, B.xv = function (a) {
        var b = this,
            c = a.value;
        return b.isTimeSeries() ? c = b.parseDate(a.value) : b.isCategorized() && "string" == typeof a.value && (c = b.config.axis_x_categories.indexOf(a.value)), Math.ceil(b.x(c))
    }, B.yv = function (a) {
        var b = this,
            c = a.axis && "y2" === a.axis ? b.y2 : b.y;
        return Math.ceil(c(a.value))
    }, B.subxx = function (a) {
        return a ? this.subX(a.x) : null
    }, B.transformMain = function (a, b) {
        var c, d, e, g = this;
        b && b.axisX ? c = b.axisX : (c = g.main.select("." + f.axisX), a && (c = c.transition())), b && b.axisY ? d = b.axisY : (d = g.main.select("." + f.axisY), a && (d = d.transition())), b && b.axisY2 ? e = b.axisY2 : (e = g.main.select("." + f.axisY2), a && (e = e.transition())), (a ? g.main.transition() : g.main).attr("transform", g.getTranslate("main")), c.attr("transform", g.getTranslate("x")), d.attr("transform", g.getTranslate("y")), e.attr("transform", g.getTranslate("y2")), g.main.select("." + f.chartArcs).attr("transform", g.getTranslate("arc"))
    }, B.transformAll = function (a, b) {
        var c = this;
        c.transformMain(a, b), c.config.subchart_show && c.transformContext(a, b), c.legend && c.transformLegend(a)
    }, B.updateSvgSize = function () {
        var a = this,
            b = a.svg.select(".c3-brush .background");
        a.svg.attr("width", a.currentWidth).attr("height", a.currentHeight), a.svg.selectAll(["#" + a.clipId, "#" + a.clipIdForGrid]).select("rect").attr("width", a.width).attr("height", a.height), a.svg.select("#" + a.clipIdForXAxis).select("rect").attr("x", a.getXAxisClipX.bind(a)).attr("y", a.getXAxisClipY.bind(a)).attr("width", a.getXAxisClipWidth.bind(a)).attr("height", a.getXAxisClipHeight.bind(a)), a.svg.select("#" + a.clipIdForYAxis).select("rect").attr("x", a.getYAxisClipX.bind(a)).attr("y", a.getYAxisClipY.bind(a)).attr("width", a.getYAxisClipWidth.bind(a)).attr("height", a.getYAxisClipHeight.bind(a)), a.svg.select("#" + a.clipIdForSubchart).select("rect").attr("width", a.width).attr("height", b.size() ? b.attr("height") : 0), a.svg.select("." + f.zoomRect).attr("width", a.width).attr("height", a.height), a.selectChart.style("max-height", a.currentHeight + "px")
    }, B.updateDimension = function (a) {
        var b = this;
        a || (b.config.axis_rotated ? (b.axes.x.call(b.xAxis), b.axes.subx.call(b.subXAxis)) : (b.axes.y.call(b.yAxis), b.axes.y2.call(b.y2Axis))), b.updateSizes(), b.updateScales(), b.updateSvgSize(), b.transformAll(!1)
    }, B.observeInserted = function (a) {
        var b, c = this;
        "undefined" != typeof MutationObserver ? (b = new MutationObserver(function (d) {
            d.forEach(function (d) {
                "childList" === d.type && d.previousSibling && (b.disconnect(), c.intervalForObserveInserted = window.setInterval(function () {
                    a.node().parentNode && (window.clearInterval(c.intervalForObserveInserted), c.updateDimension(), c.brush && c.brush.update(), c.config.oninit.call(c), c.redraw({
                        withTransform: !0,
                        withUpdateXDomain: !0,
                        withUpdateOrgXDomain: !0,
                        withTransition: !1,
                        withTransitionForTransform: !1,
                        withLegend: !0
                    }), a.transition().style("opacity", 1))
                }, 10))
            })
        })).observe(a.node(), {
            attributes: !0,
            childList: !0,
            characterData: !0
        }) : window.console.error("MutationObserver not defined.")
    }, B.bindResize = function () {
        var a = this,
            b = a.config;
        if (a.resizeFunction = a.generateResize(), a.resizeFunction.add(function () {
            b.onresize.call(a)
        }), b.resize_auto && a.resizeFunction.add(function () {
            void 0 !== a.resizeTimeout && window.clearTimeout(a.resizeTimeout), a.resizeTimeout = window.setTimeout(function () {
                delete a.resizeTimeout, a.api.flush()
            }, 100)
        }), a.resizeFunction.add(function () {
            b.onresized.call(a)
        }), window.attachEvent) window.attachEvent("onresize", a.resizeFunction);
        else if (window.addEventListener) window.addEventListener("resize", a.resizeFunction, !1);
        else {
            var c = window.onresize;
            c ? c.add && c.remove || (c = a.generateResize()).add(window.onresize) : c = a.generateResize(), c.add(a.resizeFunction), window.onresize = c
        }
    }, B.generateResize = function () {
        function a() {
            b.forEach(function (a) {
                a()
            })
        }
        var b = [];
        return a.add = function (a) {
            b.push(a)
        }, a.remove = function (a) {
            for (var c = 0; c < b.length; c++)
                if (b[c] === a) {
                    b.splice(c, 1);
                    break
                }
        }, a
    }, B.endall = function (a, b) {
        var c = 0;
        a.each(function () {
            ++c
        }).each("end", function () {
            --c || b.apply(this, arguments)
        })
    }, B.generateWait = function () {
        var a = [],
            b = function (b, c) {
                var d = setInterval(function () {
                    var b = 0;
                    a.forEach(function (a) {
                        if (a.empty()) b += 1;
                        else try {
                            a.transition()
                        } catch (a) {
                            b += 1
                        }
                    }), b === a.length && (clearInterval(d), c && c())
                }, 10)
            };
        return b.add = function (b) {
            a.push(b)
        }, b
    }, B.parseDate = function (a) {
        var b, c = this;
        return a instanceof Date ? b = a : "string" == typeof a ? b = c.dataTimeFormat(c.config.data_xFormat).parse(a) : "object" === (void 0 === a ? "undefined" : g(a)) ? b = new Date(+a) : "number" != typeof a || isNaN(a) || (b = new Date(+a)), b && !isNaN(+b) || window.console.error("Failed to parse x '" + a + "' to Date object"), b
    }, B.isTabVisible = function () {
        var a;
        return void 0 !== document.hidden ? a = "hidden" : void 0 !== document.mozHidden ? a = "mozHidden" : void 0 !== document.msHidden ? a = "msHidden" : void 0 !== document.webkitHidden && (a = "webkitHidden"), !document[a]
    }, B.isValue = k, B.isFunction = l, B.isString = n, B.isUndefined = o, B.isDefined = p, B.ceil10 = q, B.asHalfPixel = r, B.diffDomain = s, B.isEmpty = t, B.notEmpty = u, B.notEmpty = u, B.getOption = v, B.hasValue = w, B.sanitise = x, B.getPathBox = y, B.CLASS = f, Function.prototype.bind || (Function.prototype.bind = function (a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function () { },
            e = function () {
                return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    }), "SVGPathSeg" in window || (window.SVGPathSeg = function (a, b, c) {
        this.pathSegType = a, this.pathSegTypeAsLetter = b, this._owningPathSegList = c
    }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function () {
        this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
    }, window.SVGPathSegClosePath = function (a) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", a)
    }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function () {
        return "[object SVGPathSegClosePath]"
    }, window.SVGPathSegClosePath.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter
    }, window.SVGPathSegClosePath.prototype.clone = function () {
        return new window.SVGPathSegClosePath(void 0)
    }, window.SVGPathSegMovetoAbs = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", a), this._x = b, this._y = c
    }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function () {
        return "[object SVGPathSegMovetoAbs]"
    }, window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegMovetoAbs.prototype.clone = function () {
        return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegMovetoRel = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", a), this._x = b, this._y = c
    }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function () {
        return "[object SVGPathSegMovetoRel]"
    }, window.SVGPathSegMovetoRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegMovetoRel.prototype.clone = function () {
        return new window.SVGPathSegMovetoRel(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoAbs = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", a), this._x = b, this._y = c
    }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoAbs]"
    }, window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegLinetoAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoRel = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", a), this._x = b, this._y = c
    }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoRel]"
    }, window.SVGPathSegLinetoRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegLinetoRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoRel(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoCubicAbs = function (a, b, c, d, e, f, g) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e, this._x2 = f, this._y2 = g
    }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicAbs]"
    }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
        get: function () {
            return this._x1
        },
        set: function (a) {
            this._x1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
        get: function () {
            return this._y1
        },
        set: function (a) {
            this._y1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
        get: function () {
            return this._x2
        },
        set: function (a) {
            this._x2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
        get: function () {
            return this._y2
        },
        set: function (a) {
            this._y2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoCubicRel = function (a, b, c, d, e, f, g) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e, this._x2 = f, this._y2 = g
    }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicRel]"
    }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
        get: function () {
            return this._x1
        },
        set: function (a) {
            this._x1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
        get: function () {
            return this._y1
        },
        set: function (a) {
            this._y1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
        get: function () {
            return this._x2
        },
        set: function (a) {
            this._x2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
        get: function () {
            return this._y2
        },
        set: function (a) {
            this._y2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticAbs = function (a, b, c, d, e) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticAbs]"
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
        get: function () {
            return this._x1
        },
        set: function (a) {
            this._x1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
        get: function () {
            return this._y1
        },
        set: function (a) {
            this._y1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticRel = function (a, b, c, d, e) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e
    }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticRel]"
    }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
        get: function () {
            return this._x1
        },
        set: function (a) {
            this._x1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
        get: function () {
            return this._y1
        },
        set: function (a) {
            this._y1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegArcAbs = function (a, b, c, d, e, f, g, h) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", a), this._x = b, this._y = c, this._r1 = d, this._r2 = e, this._angle = f, this._largeArcFlag = g, this._sweepFlag = h
    }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function () {
        return "[object SVGPathSegArcAbs]"
    }, window.SVGPathSegArcAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
    }, window.SVGPathSegArcAbs.prototype.clone = function () {
        return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
    }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
        get: function () {
            return this._r1
        },
        set: function (a) {
            this._r1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
        get: function () {
            return this._r2
        },
        set: function (a) {
            this._r2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
        get: function () {
            return this._angle
        },
        set: function (a) {
            this._angle = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
        get: function () {
            return this._largeArcFlag
        },
        set: function (a) {
            this._largeArcFlag = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
        get: function () {
            return this._sweepFlag
        },
        set: function (a) {
            this._sweepFlag = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegArcRel = function (a, b, c, d, e, f, g, h) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", a), this._x = b, this._y = c, this._r1 = d, this._r2 = e, this._angle = f, this._largeArcFlag = g, this._sweepFlag = h
    }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function () {
        return "[object SVGPathSegArcRel]"
    }, window.SVGPathSegArcRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
    }, window.SVGPathSegArcRel.prototype.clone = function () {
        return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
    }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
        get: function () {
            return this._r1
        },
        set: function (a) {
            this._r1 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
        get: function () {
            return this._r2
        },
        set: function (a) {
            this._r2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
        get: function () {
            return this._angle
        },
        set: function (a) {
            this._angle = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
        get: function () {
            return this._largeArcFlag
        },
        set: function (a) {
            this._largeArcFlag = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
        get: function () {
            return this._sweepFlag
        },
        set: function (a) {
            this._sweepFlag = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoHorizontalAbs = function (a, b) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", a), this._x = b
    }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalAbs]"
    }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x
    }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x)
    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoHorizontalRel = function (a, b) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", a), this._x = b
    }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoHorizontalRel]"
    }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x
    }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x)
    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoVerticalAbs = function (a, b) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", a), this._y = b
    }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalAbs]"
    }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._y
    }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegLinetoVerticalRel = function (a, b) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", a), this._y = b
    }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
        return "[object SVGPathSegLinetoVerticalRel]"
    }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._y
    }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
        return new window.SVGPathSegLinetoVerticalRel(void 0, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoCubicSmoothAbs = function (a, b, c, d, e) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", a), this._x = b, this._y = c, this._x2 = d, this._y2 = e
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothAbs]"
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
        get: function () {
            return this._x2
        },
        set: function (a) {
            this._x2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
        get: function () {
            return this._y2
        },
        set: function (a) {
            this._y2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoCubicSmoothRel = function (a, b, c, d, e) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", a), this._x = b, this._y = c, this._x2 = d, this._y2 = e
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoCubicSmoothRel]"
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
        get: function () {
            return this._x2
        },
        set: function (a) {
            this._x2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
        get: function () {
            return this._y2
        },
        set: function (a) {
            this._y2 = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", a), this._x = b, this._y = c
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticSmoothRel = function (a, b, c) {
        window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", a), this._x = b, this._y = c
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
        return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
        return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
        return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
        get: function () {
            return this._x
        },
        set: function (a) {
            this._x = a, this._segmentChanged()
        },
        enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
        get: function () {
            return this._y
        },
        set: function (a) {
            this._y = a, this._segmentChanged()
        },
        enumerable: !0
    }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
        return new window.SVGPathSegClosePath(void 0)
    }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (a, b) {
        return new window.SVGPathSegMovetoAbs(void 0, a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (a, b) {
        return new window.SVGPathSegMovetoRel(void 0, a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (a, b) {
        return new window.SVGPathSegLinetoAbs(void 0, a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (a, b) {
        return new window.SVGPathSegLinetoRel(void 0, a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (a, b, c, d, e, f) {
        return new window.SVGPathSegCurvetoCubicAbs(void 0, a, b, c, d, e, f)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (a, b, c, d, e, f) {
        return new window.SVGPathSegCurvetoCubicRel(void 0, a, b, c, d, e, f)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (a, b, c, d) {
        return new window.SVGPathSegCurvetoQuadraticAbs(void 0, a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (a, b, c, d) {
        return new window.SVGPathSegCurvetoQuadraticRel(void 0, a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (a, b, c, d, e, f, g) {
        return new window.SVGPathSegArcAbs(void 0, a, b, c, d, e, f, g)
    },
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function (a, b, c, d, e, f, g) {
            return new window.SVGPathSegArcRel(void 0, a, b, c, d, e, f, g)
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (a) {
            return new window.SVGPathSegLinetoHorizontalAbs(void 0, a)
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (a) {
            return new window.SVGPathSegLinetoHorizontalRel(void 0, a)
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (a) {
            return new window.SVGPathSegLinetoVerticalAbs(void 0, a)
        }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (a) {
            return new window.SVGPathSegLinetoVerticalRel(void 0, a)
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (a, b, c, d) {
            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, a, b, c, d)
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (a, b, c, d) {
            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, a, b, c, d)
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (a, b) {
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, a, b)
        }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (a, b) {
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, a, b)
        }, "getPathSegAtLength" in window.SVGPathElement.prototype || (window.SVGPathElement.prototype.getPathSegAtLength = function (a) {
            if (void 0 === a || !isFinite(a)) throw "Invalid arguments.";
            var b = document.createElementNS("http://www.w3.org/2000/svg", "path");
            b.setAttribute("d", this.getAttribute("d"));
            var c = b.pathSegList.numberOfItems - 1;
            if (c <= 0) return 0;
            do {
                if (b.pathSegList.removeItem(c), a > b.getTotalLength()) break;
                c--
            } while (c > 0);
            return c
        })), "SVGPathSegList" in window || (window.SVGPathSegList = function (a) {
            this._pathElement = a, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
                attributes: !0,
                attributeFilter: ["d"]
            }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function () {
                return this._checkPathSynchronizedToList(), this._list.length
            },
            enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function () {
                return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
            get: function () {
                return this.pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
            get: function () {
                return this.pathSegList
            },
            enumerable: !0
        }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
            get: function () {
                return this.pathSegList
            },
            enumerable: !0
        }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
        }, window.SVGPathSegList.prototype._updateListFromPathMutations = function (a) {
            if (this._pathElement) {
                var b = !1;
                a.forEach(function (a) {
                    "d" == a.attributeName && (b = !0)
                }), b && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
            }
        }, window.SVGPathSegList.prototype._writeListToPath = function () {
            this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
        }, window.SVGPathSegList.prototype.segmentChanged = function (a) {
            this._writeListToPath()
        }, window.SVGPathSegList.prototype.clear = function () {
            this._checkPathSynchronizedToList(), this._list.forEach(function (a) {
                a._owningPathSegList = null
            }), this._list = [], this._writeListToPath()
        }, window.SVGPathSegList.prototype.initialize = function (a) {
            return this._checkPathSynchronizedToList(), this._list = [a], a._owningPathSegList = this, this._writeListToPath(), a
        }, window.SVGPathSegList.prototype._checkValidIndex = function (a) {
            if (isNaN(a) || a < 0 || a >= this.numberOfItems) throw "INDEX_SIZE_ERR"
        }, window.SVGPathSegList.prototype.getItem = function (a) {
            return this._checkPathSynchronizedToList(), this._checkValidIndex(a), this._list[a]
        }, window.SVGPathSegList.prototype.insertItemBefore = function (a, b) {
            return this._checkPathSynchronizedToList(), b > this.numberOfItems && (b = this.numberOfItems), a._owningPathSegList && (a = a.clone()), this._list.splice(b, 0, a), a._owningPathSegList = this, this._writeListToPath(), a
        }, window.SVGPathSegList.prototype.replaceItem = function (a, b) {
            return this._checkPathSynchronizedToList(), a._owningPathSegList && (a = a.clone()), this._checkValidIndex(b), this._list[b] = a, a._owningPathSegList = this, this._writeListToPath(), a
        }, window.SVGPathSegList.prototype.removeItem = function (a) {
            this._checkPathSynchronizedToList(), this._checkValidIndex(a);
            var b = this._list[a];
            return this._list.splice(a, 1), this._writeListToPath(), b
        }, window.SVGPathSegList.prototype.appendItem = function (a) {
            return this._checkPathSynchronizedToList(), a._owningPathSegList && (a = a.clone()), this._list.push(a), a._owningPathSegList = this, this._writeListToPath(), a
        }, window.SVGPathSegList._pathSegArrayAsString = function (a) {
            var b = "",
                c = !0;
            return a.forEach(function (a) {
                c ? (c = !1, b += a._asPathString()) : b += " " + a._asPathString()
            }), b
        }, window.SVGPathSegList.prototype._parsePath = function (a) {
            if (!a || 0 == a.length) return [];
            var b = this,
                c = function () {
                    this.pathSegList = []
                };
            c.prototype.appendSegment = function (a) {
                this.pathSegList.push(a)
            };
            var d = function (a) {
                this._string = a, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
            };
            d.prototype._isCurrentSpace = function () {
                var a = this._string[this._currentIndex];
                return a <= " " && (" " == a || "\n" == a || "\t" == a || "\r" == a || "\f" == a)
            }, d.prototype._skipOptionalSpaces = function () {
                for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
                return this._currentIndex < this._endIndex
            }, d.prototype._skipOptionalSpacesOrDelimiter = function () {
                return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
            }, d.prototype.hasMoreData = function () {
                return this._currentIndex < this._endIndex
            }, d.prototype.peekSegmentType = function () {
                var a = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(a)
            }, d.prototype._pathSegTypeFromChar = function (a) {
                switch (a) {
                    case "Z":
                    case "z":
                        return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                    case "M":
                        return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                    case "m":
                        return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                    case "L":
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    case "l":
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    case "C":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                    case "c":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                    case "Q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                    case "q":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                    case "A":
                        return window.SVGPathSeg.PATHSEG_ARC_ABS;
                    case "a":
                        return window.SVGPathSeg.PATHSEG_ARC_REL;
                    case "H":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                    case "h":
                        return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                    case "V":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                    case "v":
                        return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                    case "S":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                    case "s":
                        return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                    case "T":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                    case "t":
                        return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                    default:
                        return window.SVGPathSeg.PATHSEG_UNKNOWN
                }
            }, d.prototype._nextCommandHelper = function (a, b) {
                return ("+" == a || "-" == a || "." == a || a >= "0" && a <= "9") && b != window.SVGPathSeg.PATHSEG_CLOSEPATH ? b == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : b == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : b : window.SVGPathSeg.PATHSEG_UNKNOWN
            }, d.prototype.initialCommandIsMoveTo = function () {
                if (!this.hasMoreData()) return !0;
                var a = this.peekSegmentType();
                return a == window.SVGPathSeg.PATHSEG_MOVETO_ABS || a == window.SVGPathSeg.PATHSEG_MOVETO_REL
            }, d.prototype._parseNumber = function () {
                var a = 0,
                    b = 0,
                    c = 1,
                    d = 0,
                    e = 1,
                    f = 1,
                    g = this._currentIndex;
                if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, e = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
                    for (var h = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
                    if (this._currentIndex != h)
                        for (var i = this._currentIndex - 1, j = 1; i >= h;) b += j * (this._string.charAt(i--) - "0"), j *= 10;
                    if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                        if (++this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) c *= 10, d += (this._string.charAt(this._currentIndex) - "0") / c, this._currentIndex += 1
                    }
                    if (this._currentIndex != g && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
                        if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, f = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
                        for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) a *= 10, a += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
                    }
                    var k = b + d;
                    if (k *= e, a && (k *= Math.pow(10, f * a)), g != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), k
                }
            }, d.prototype._parseArcFlag = function () {
                if (!(this._currentIndex >= this._endIndex)) {
                    var a = !1,
                        b = this._string.charAt(this._currentIndex++);
                    if ("0" == b) a = !1;
                    else {
                        if ("1" != b) return;
                        a = !0
                    }
                    return this._skipOptionalSpacesOrDelimiter(), a
                }
            }, d.prototype.parseSegment = function () {
                var a = this._string[this._currentIndex],
                    c = this._pathSegTypeFromChar(a);
                if (c == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                    if ((c = this._nextCommandHelper(a, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
                } else this._currentIndex++;
                switch (this._previousCommand = c, c) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                        return new window.SVGPathSegMovetoRel(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                        return new window.SVGPathSegMovetoAbs(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                        return new window.SVGPathSegLinetoRel(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                        return new window.SVGPathSegLinetoAbs(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        return new window.SVGPathSegLinetoHorizontalRel(b, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        return new window.SVGPathSegLinetoHorizontalAbs(b, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        return new window.SVGPathSegLinetoVerticalRel(b, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        return new window.SVGPathSegLinetoVerticalAbs(b, this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(b);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                        return d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicRel(b, d.x, d.y, d.x1, d.y1, d.x2, d.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                        return d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicAbs(b, d.x, d.y, d.x1, d.y1, d.x2, d.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                        return d = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicSmoothRel(b, d.x, d.y, d.x2, d.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                        return d = {
                            x2: this._parseNumber(),
                            y2: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoCubicSmoothAbs(b, d.x, d.y, d.x2, d.y2);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                        return d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoQuadraticRel(b, d.x, d.y, d.x1, d.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                        return d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegCurvetoQuadraticAbs(b, d.x, d.y, d.x1, d.y1);
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        return new window.SVGPathSegCurvetoQuadraticSmoothRel(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        return new window.SVGPathSegCurvetoQuadraticSmoothAbs(b, this._parseNumber(), this._parseNumber());
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                        return d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        }, new window.SVGPathSegArcRel(b, d.x, d.y, d.x1, d.y1, d.arcAngle, d.arcLarge, d.arcSweep);
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                        var d = {
                            x1: this._parseNumber(),
                            y1: this._parseNumber(),
                            arcAngle: this._parseNumber(),
                            arcLarge: this._parseArcFlag(),
                            arcSweep: this._parseArcFlag(),
                            x: this._parseNumber(),
                            y: this._parseNumber()
                        };
                        return new window.SVGPathSegArcAbs(b, d.x, d.y, d.x1, d.y1, d.arcAngle, d.arcLarge, d.arcSweep);
                    default:
                        throw "Unknown path seg type."
                }
            };
            var e = new c,
                f = new d(a);
            if (!f.initialCommandIsMoveTo()) return [];
            for (; f.hasMoreData();) {
                var g = f.parseSegment();
                if (!g) return [];
                e.appendSegment(g)
            }
            return e.pathSegList
        }), A.axis = function () { }, A.axis.labels = function (a) {
            var b = this.internal;
            arguments.length && (Object.keys(a).forEach(function (c) {
                b.axis.setLabelText(c, a[c])
            }), b.axis.updateLabels())
        }, A.axis.max = function (a) {
            var b = this.internal,
                c = b.config;
            if (!arguments.length) return {
                x: c.axis_x_max,
                y: c.axis_y_max,
                y2: c.axis_y2_max
            };
            "object" === (void 0 === a ? "undefined" : g(a)) ? (k(a.x) && (c.axis_x_max = a.x), k(a.y) && (c.axis_y_max = a.y), k(a.y2) && (c.axis_y2_max = a.y2)) : c.axis_y_max = c.axis_y2_max = a, b.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })
        }, A.axis.min = function (a) {
            var b = this.internal,
                c = b.config;
            if (!arguments.length) return {
                x: c.axis_x_min,
                y: c.axis_y_min,
                y2: c.axis_y2_min
            };
            "object" === (void 0 === a ? "undefined" : g(a)) ? (k(a.x) && (c.axis_x_min = a.x), k(a.y) && (c.axis_y_min = a.y), k(a.y2) && (c.axis_y2_min = a.y2)) : c.axis_y_min = c.axis_y2_min = a, b.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })
        }, A.axis.range = function (a) {
            if (!arguments.length) return {
                max: this.axis.max(),
                min: this.axis.min()
            };
            void 0 !== a.max && this.axis.max(a.max), void 0 !== a.min && this.axis.min(a.min)
        }, A.category = function (a, b) {
            var c = this.internal,
                d = c.config;
            return arguments.length > 1 && (d.axis_x_categories[a] = b, c.redraw()), d.axis_x_categories[a]
        }, A.categories = function (a) {
            var b = this.internal,
                c = b.config;
            return arguments.length ? (c.axis_x_categories = a, b.redraw(), c.axis_x_categories) : c.axis_x_categories
        }, A.resize = function (a) {
            var b = this.internal.config;
            b.size_width = a ? a.width : null, b.size_height = a ? a.height : null, this.flush()
        }, A.flush = function () {
            this.internal.updateAndRedraw({
                withLegend: !0,
                withTransition: !1,
                withTransitionForTransform: !1
            })
        }, A.destroy = function () {
            var a = this.internal;
            if (window.clearInterval(a.intervalForObserveInserted), void 0 !== a.resizeTimeout && window.clearTimeout(a.resizeTimeout), window.detachEvent) window.detachEvent("onresize", a.resizeFunction);
            else if (window.removeEventListener) window.removeEventListener("resize", a.resizeFunction);
            else {
                var b = window.onresize;
                b && b.add && b.remove && b.remove(a.resizeFunction)
            }
            return a.selectChart.classed("c3", !1).html(""), Object.keys(a).forEach(function (b) {
                a[b] = null
            }), null
        }, A.color = function (a) {
            return this.internal.color(a)
        }, A.data = function (a) {
            var b = this.internal.data.targets;
            return void 0 === a ? b : b.filter(function (b) {
                return [].concat(a).indexOf(b.id) >= 0
            })
        }, A.data.shown = function (a) {
            return this.internal.filterTargetsToShow(this.data(a))
        }, A.data.values = function (a) {
            var b, c = null;
            return a && (c = (b = this.data(a))[0] ? b[0].values.map(function (a) {
                return a.value
            }) : null), c
        }, A.data.names = function (a) {
            return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", a)
        }, A.data.colors = function (a) {
            return this.internal.updateDataAttributes("colors", a)
        }, A.data.axes = function (a) {
            return this.internal.updateDataAttributes("axes", a)
        }, A.flow = function (a) {
            var b, c, d, e, f, g, h, i = this.internal,
                j = [],
                l = i.getMaxDataCount(),
                m = 0,
                n = 0;
            if (a.json) c = i.convertJsonToData(a.json, a.keys);
            else if (a.rows) c = i.convertRowsToData(a.rows);
            else {
                if (!a.columns) return;
                c = i.convertColumnsToData(a.columns)
            }
            b = i.convertDataToTargets(c, !0), i.data.targets.forEach(function (a) {
                var c, d, e = !1;
                for (c = 0; c < b.length; c++)
                    if (a.id === b[c].id) {
                        for (e = !0, a.values[a.values.length - 1] && (n = a.values[a.values.length - 1].index + 1), m = b[c].values.length, d = 0; d < m; d++) b[c].values[d].index = n + d, i.isTimeSeries() || (b[c].values[d].x = n + d);
                        a.values = a.values.concat(b[c].values), b.splice(c, 1);
                        break
                    } e || j.push(a.id)
            }), i.data.targets.forEach(function (a) {
                var b, c;
                for (b = 0; b < j.length; b++)
                    if (a.id === j[b])
                        for (n = a.values[a.values.length - 1].index + 1, c = 0; c < m; c++) a.values.push({
                            id: a.id,
                            index: n + c,
                            x: i.isTimeSeries() ? i.getOtherTargetX(n + c) : n + c,
                            value: null
                        })
            }), i.data.targets.length && b.forEach(function (a) {
                var b, c = [];
                for (b = i.data.targets[0].values[0].index; b < n; b++) c.push({
                    id: a.id,
                    index: b,
                    x: i.isTimeSeries() ? i.getOtherTargetX(b) : b,
                    value: null
                });
                a.values.forEach(function (a) {
                    a.index += n, i.isTimeSeries() || (a.x += n)
                }), a.values = c.concat(a.values)
            }), i.data.targets = i.data.targets.concat(b), i.getMaxDataCount(), f = (e = i.data.targets[0]).values[0], void 0 !== a.to ? (m = 0, h = i.isTimeSeries() ? i.parseDate(a.to) : a.to, e.values.forEach(function (a) {
                a.x < h && m++
            })) : void 0 !== a.length && (m = a.length), l ? 1 === l && i.isTimeSeries() && (g = (e.values[e.values.length - 1].x - f.x) / 2, d = [new Date(+f.x - g), new Date(+f.x + g)], i.updateXDomain(null, !0, !0, !1, d)) : (g = i.isTimeSeries() ? e.values.length > 1 ? e.values[e.values.length - 1].x - f.x : f.x - i.getXDomain(i.data.targets)[0] : 1, d = [f.x - g, f.x], i.updateXDomain(null, !0, !0, !1, d)), i.updateTargets(i.data.targets), i.redraw({
                flow: {
                    index: f.index,
                    length: m,
                    duration: k(a.duration) ? a.duration : i.config.transition_duration,
                    done: a.done,
                    orgDataCount: l
                },
                withLegend: !0,
                withTransition: l > 1,
                withTrimXDomain: !1,
                withUpdateXAxis: !0
            })
        }, B.generateFlow = function (a) {
            var b = this,
                c = b.config,
                d = b.d3;
            return function () {
                var e, g, h, i = a.targets,
                    j = a.flow,
                    k = a.drawBar,
                    l = a.drawLine,
                    m = a.drawArea,
                    n = a.cx,
                    o = a.cy,
                    p = a.xv,
                    q = a.xForText,
                    r = a.yForText,
                    t = a.duration,
                    u = 1,
                    v = j.index,
                    w = j.length,
                    x = b.getValueOnIndex(b.data.targets[0].values, v),
                    y = b.getValueOnIndex(b.data.targets[0].values, v + w),
                    z = b.x.domain(),
                    A = j.duration || t,
                    B = j.done || function () { },
                    C = b.generateWait(),
                    D = b.xgrid || d.selectAll([]),
                    E = b.xgridLines || d.selectAll([]),
                    F = b.mainRegion || d.selectAll([]),
                    G = b.mainText || d.selectAll([]),
                    H = b.mainBar || d.selectAll([]),
                    I = b.mainLine || d.selectAll([]),
                    J = b.mainArea || d.selectAll([]),
                    K = b.mainCircle || d.selectAll([]);
                b.flowing = !0, b.data.targets.forEach(function (a) {
                    a.values.splice(0, w)
                }), h = b.updateXDomain(i, !0, !0), b.updateXGrid && b.updateXGrid(!0), j.orgDataCount ? e = 1 === j.orgDataCount || (x && x.x) === (y && y.x) ? b.x(z[0]) - b.x(h[0]) : b.isTimeSeries() ? b.x(z[0]) - b.x(h[0]) : b.x(x.x) - b.x(y.x) : 1 !== b.data.targets[0].values.length ? e = b.x(z[0]) - b.x(h[0]) : b.isTimeSeries() ? (x = b.getValueOnIndex(b.data.targets[0].values, 0), y = b.getValueOnIndex(b.data.targets[0].values, b.data.targets[0].values.length - 1), e = b.x(x.x) - b.x(y.x)) : e = s(h) / 2, u = s(z) / s(h), g = "translate(" + e + ",0) scale(" + u + ",1)", b.hideXGridFocus(), d.transition().ease("linear").duration(A).each(function () {
                    C.add(b.axes.x.transition().call(b.xAxis)), C.add(H.transition().attr("transform", g)), C.add(I.transition().attr("transform", g)), C.add(J.transition().attr("transform", g)), C.add(K.transition().attr("transform", g)), C.add(G.transition().attr("transform", g)), C.add(F.filter(b.isRegionOnX).transition().attr("transform", g)), C.add(D.transition().attr("transform", g)), C.add(E.transition().attr("transform", g))
                }).call(C, function () {
                    var a, d = [],
                        e = [],
                        g = [];
                    if (w) {
                        for (a = 0; a < w; a++) d.push("." + f.shape + "-" + (v + a)), e.push("." + f.text + "-" + (v + a)), g.push("." + f.eventRect + "-" + (v + a));
                        b.svg.selectAll("." + f.shapes).selectAll(d).remove(), b.svg.selectAll("." + f.texts).selectAll(e).remove(), b.svg.selectAll("." + f.eventRects).selectAll(g).remove(), b.svg.select("." + f.xgrid).remove()
                    }
                    D.attr("transform", null).attr(b.xgridAttr), E.attr("transform", null), E.select("line").attr("x1", c.axis_rotated ? 0 : p).attr("x2", c.axis_rotated ? b.width : p), E.select("text").attr("x", c.axis_rotated ? b.width : 0).attr("y", p), H.attr("transform", null).attr("d", k), I.attr("transform", null).attr("d", l), J.attr("transform", null).attr("d", m), K.attr("transform", null).attr("cx", n).attr("cy", o), G.attr("transform", null).attr("x", q).attr("y", r).style("fill-opacity", b.opacityForText.bind(b)), F.attr("transform", null), F.select("rect").filter(b.isRegionOnX).attr("x", b.regionX.bind(b)).attr("width", b.regionWidth.bind(b)), c.interaction_enabled && b.redrawEventRect(), B(), b.flowing = !1
                })
            }
        }, A.focus = function (a) {
            var b, c = this.internal;
            a = c.mapToTargetIds(a), b = c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow, c))), this.revert(), this.defocus(), b.classed(f.focused, !0).classed(f.defocused, !1), c.hasArcType() && c.expandArc(a), c.toggleFocusLegend(a, !0), c.focusedTargetIds = a, c.defocusedTargetIds = c.defocusedTargetIds.filter(function (b) {
                return a.indexOf(b) < 0
            })
        }, A.defocus = function (a) {
            var b = this.internal;
            a = b.mapToTargetIds(a), b.svg.selectAll(b.selectorTargets(a.filter(b.isTargetToShow, b))).classed(f.focused, !1).classed(f.defocused, !0), b.hasArcType() && b.unexpandArc(a), b.toggleFocusLegend(a, !1), b.focusedTargetIds = b.focusedTargetIds.filter(function (b) {
                return a.indexOf(b) < 0
            }), b.defocusedTargetIds = a
        }, A.revert = function (a) {
            var b = this.internal;
            a = b.mapToTargetIds(a), b.svg.selectAll(b.selectorTargets(a)).classed(f.focused, !1).classed(f.defocused, !1), b.hasArcType() && b.unexpandArc(a), b.config.legend_show && (b.showLegend(a.filter(b.isLegendToShow.bind(b))), b.legend.selectAll(b.selectorLegends(a)).filter(function () {
                return b.d3.select(this).classed(f.legendItemFocused)
            }).classed(f.legendItemFocused, !1)), b.focusedTargetIds = [], b.defocusedTargetIds = []
        }, A.xgrids = function (a) {
            var b = this.internal,
                c = b.config;
            return a ? (c.grid_x_lines = a, b.redrawWithoutRescale(), c.grid_x_lines) : c.grid_x_lines
        }, A.xgrids.add = function (a) {
            var b = this.internal;
            return this.xgrids(b.config.grid_x_lines.concat(a || []))
        }, A.xgrids.remove = function (a) {
            this.internal.removeGridLines(a, !0)
        }, A.ygrids = function (a) {
            var b = this.internal,
                c = b.config;
            return a ? (c.grid_y_lines = a, b.redrawWithoutRescale(), c.grid_y_lines) : c.grid_y_lines
        }, A.ygrids.add = function (a) {
            var b = this.internal;
            return this.ygrids(b.config.grid_y_lines.concat(a || []))
        }, A.ygrids.remove = function (a) {
            this.internal.removeGridLines(a, !1)
        }, A.groups = function (a) {
            var b = this.internal,
                c = b.config;
            return void 0 === a ? c.data_groups : (c.data_groups = a, b.redraw(), c.data_groups)
        }, A.legend = function () { }, A.legend.show = function (a) {
            var b = this.internal;
            b.showLegend(b.mapToTargetIds(a)), b.updateAndRedraw({
                withLegend: !0
            })
        }, A.legend.hide = function (a) {
            var b = this.internal;
            b.hideLegend(b.mapToTargetIds(a)), b.updateAndRedraw({
                withLegend: !0
            })
        }, A.load = function (a) {
            var b = this.internal,
                c = b.config;
            a.xs && b.addXs(a.xs), "names" in a && A.data.names.bind(this)(a.names), "classes" in a && Object.keys(a.classes).forEach(function (b) {
                c.data_classes[b] = a.classes[b]
            }), "categories" in a && b.isCategorized() && (c.axis_x_categories = a.categories), "axes" in a && Object.keys(a.axes).forEach(function (b) {
                c.data_axes[b] = a.axes[b]
            }), "colors" in a && Object.keys(a.colors).forEach(function (b) {
                c.data_colors[b] = a.colors[b]
            }), "cacheIds" in a && b.hasCaches(a.cacheIds) ? b.load(b.getCaches(a.cacheIds), a.done) : "unload" in a ? b.unload(b.mapToTargetIds("boolean" == typeof a.unload && a.unload ? null : a.unload), function () {
                b.loadFromArgs(a)
            }) : b.loadFromArgs(a)
        }, A.unload = function (a) {
            var b = this.internal;
            (a = a || {}) instanceof Array ? a = {
                ids: a
            } : "string" == typeof a && (a = {
                ids: [a]
            }), b.unload(b.mapToTargetIds(a.ids), function () {
                b.redraw({
                    withUpdateOrgXDomain: !0,
                    withUpdateXDomain: !0,
                    withLegend: !0
                }), a.done && a.done()
            })
        }, A.regions = function (a) {
            var b = this.internal,
                c = b.config;
            return a ? (c.regions = a, b.redrawWithoutRescale(), c.regions) : c.regions
        }, A.regions.add = function (a) {
            var b = this.internal,
                c = b.config;
            return a ? (c.regions = c.regions.concat(a), b.redrawWithoutRescale(), c.regions) : c.regions
        }, A.regions.remove = function (a) {
            var b, c, d, e = this.internal,
                g = e.config;
            return a = a || {}, b = e.getOption(a, "duration", g.transition_duration), c = e.getOption(a, "classes", [f.region]), d = e.main.select("." + f.regions).selectAll(c.map(function (a) {
                return "." + a
            })), (b ? d.transition().duration(b) : d).style("opacity", 0).remove(), g.regions = g.regions.filter(function (a) {
                var b = !1;
                return !a.class || (a.class.split(" ").forEach(function (a) {
                    c.indexOf(a) >= 0 && (b = !0)
                }), !b)
            }), g.regions
        }, A.selected = function (a) {
            var b = this.internal,
                c = b.d3;
            return c.merge(b.main.selectAll("." + f.shapes + b.getTargetSelectorSuffix(a)).selectAll("." + f.shape).filter(function () {
                return c.select(this).classed(f.SELECTED)
            }).map(function (a) {
                return a.map(function (a) {
                    var b = a.__data__;
                    return b.data ? b.data : b
                })
            }))
        }, A.select = function (a, b, c) {
            var d = this.internal,
                e = d.d3,
                g = d.config;
            g.data_selection_enabled && d.main.selectAll("." + f.shapes).selectAll("." + f.shape).each(function (h, i) {
                var j = e.select(this),
                    k = h.data ? h.data.id : h.id,
                    l = d.getToggle(this, h).bind(d),
                    m = g.data_selection_grouped || !a || a.indexOf(k) >= 0,
                    n = !b || b.indexOf(i) >= 0,
                    o = j.classed(f.SELECTED);
                j.classed(f.line) || j.classed(f.area) || (m && n ? g.data_selection_isselectable(h) && !o && l(!0, j.classed(f.SELECTED, !0), h, i) : void 0 !== c && c && o && l(!1, j.classed(f.SELECTED, !1), h, i))
            })
        }, A.unselect = function (a, b) {
            var c = this.internal,
                d = c.d3,
                e = c.config;
            e.data_selection_enabled && c.main.selectAll("." + f.shapes).selectAll("." + f.shape).each(function (g, h) {
                var i = d.select(this),
                    j = g.data ? g.data.id : g.id,
                    k = c.getToggle(this, g).bind(c),
                    l = e.data_selection_grouped || !a || a.indexOf(j) >= 0,
                    m = !b || b.indexOf(h) >= 0,
                    n = i.classed(f.SELECTED);
                i.classed(f.line) || i.classed(f.area) || l && m && e.data_selection_isselectable(g) && n && k(!1, i.classed(f.SELECTED, !1), g, h)
            })
        }, A.show = function (a, b) {
            var c, d = this.internal;
            a = d.mapToTargetIds(a), b = b || {}, d.removeHiddenTargetIds(a), (c = d.svg.selectAll(d.selectorTargets(a))).transition().style("opacity", 1, "important").call(d.endall, function () {
                c.style("opacity", null).style("opacity", 1)
            }), b.withLegend && d.showLegend(a), d.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            })
        }, A.hide = function (a, b) {
            var c, d = this.internal;
            a = d.mapToTargetIds(a), b = b || {}, d.addHiddenTargetIds(a), (c = d.svg.selectAll(d.selectorTargets(a))).transition().style("opacity", 0, "important").call(d.endall, function () {
                c.style("opacity", null).style("opacity", 0)
            }), b.withLegend && d.hideLegend(a), d.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            })
        }, A.toggle = function (a, b) {
            var c = this,
                d = this.internal;
            d.mapToTargetIds(a).forEach(function (a) {
                d.isTargetToShow(a) ? c.hide(a, b) : c.show(a, b)
            })
        }, A.tooltip = function () { }, A.tooltip.show = function (a) {
            var b, c, d = this.internal;
            a.mouse && (c = a.mouse), a.data ? d.isMultipleX() ? (c = [d.x(a.data.x), d.getYScale(a.data.id)(a.data.value)], b = null) : b = k(a.data.index) ? a.data.index : d.getIndexByX(a.data.x) : void 0 !== a.x ? b = d.getIndexByX(a.x) : void 0 !== a.index && (b = a.index), d.dispatchEvent("mouseover", b, c), d.dispatchEvent("mousemove", b, c), d.config.tooltip_onshow.call(d, a.data)
        }, A.tooltip.hide = function () {
            this.internal.dispatchEvent("mouseout", 0), this.internal.config.tooltip_onhide.call(this)
        }, A.transform = function (a, b) {
            var c = this.internal,
                d = ["pie", "donut"].indexOf(a) >= 0 ? {
                    withTransform: !0
                } : null;
            c.transformTo(b, a, d)
        }, B.transformTo = function (a, b, c) {
            var d = this,
                e = !d.hasArcType(),
                f = c || {
                    withTransitionForAxis: e
                };
            f.withTransitionForTransform = !1, d.transiting = !1, d.setTargetType(a, b), d.updateTargets(d.data.targets), d.updateAndRedraw(f)
        }, A.x = function (a) {
            var b = this.internal;
            return arguments.length && (b.updateTargetX(b.data.targets, a), b.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })), b.data.xs
        }, A.xs = function (a) {
            var b = this.internal;
            return arguments.length && (b.updateTargetXs(b.data.targets, a), b.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0
            })), b.data.xs
        }, A.zoom = function (a) {
            var b = this.internal;
            return a && (b.isTimeSeries() && (a = a.map(function (a) {
                return b.parseDate(a)
            })), b.brush.extent(a), b.redraw({
                withUpdateXDomain: !0,
                withY: b.config.zoom_rescale
            }), b.config.zoom_onzoom.call(this, b.x.orgDomain())), b.brush.extent()
        }, A.zoom.enable = function (a) {
            var b = this.internal;
            b.config.zoom_enabled = a, b.updateAndRedraw()
        }, A.unzoom = function () {
            var a = this.internal;
            a.brush.clear().update(), a.redraw({
                withUpdateXDomain: !0
            })
        }, A.zoom.max = function (a) {
            var b = this.internal,
                c = b.config,
                d = b.d3;
            if (0 !== a && !a) return c.zoom_x_max;
            c.zoom_x_max = d.max([b.orgXDomain[1], a])
        }, A.zoom.min = function (a) {
            var b = this.internal,
                c = b.config,
                d = b.d3;
            if (0 !== a && !a) return c.zoom_x_min;
            c.zoom_x_min = d.min([b.orgXDomain[0], a])
        }, A.zoom.range = function (a) {
            if (!arguments.length) return {
                max: this.domain.max(),
                min: this.domain.min()
            };
            void 0 !== a.max && this.domain.max(a.max), void 0 !== a.min && this.domain.min(a.min)
        }, B.initPie = function () {
            var a = this,
                b = a.d3;
            a.pie = b.layout.pie().value(function (a) {
                return a.values.reduce(function (a, b) {
                    return a + b.value
                }, 0)
            }), a.pie.sort(a.getOrderFunction() || null)
        }, B.updateRadius = function () {
            var a = this,
                b = a.config,
                c = b.gauge_width || b.donut_width;
            a.radiusExpanded = Math.min(a.arcWidth, a.arcHeight) / 2, a.radius = .95 * a.radiusExpanded, a.innerRadiusRatio = c ? (a.radius - c) / a.radius : .6, a.innerRadius = a.hasType("donut") || a.hasType("gauge") ? a.radius * a.innerRadiusRatio : 0
        }, B.updateArc = function () {
            var a = this;
            a.svgArc = a.getSvgArc(), a.svgArcExpanded = a.getSvgArcExpanded(), a.svgArcExpandedSub = a.getSvgArcExpanded(.98)
        }, B.updateAngle = function (a) {
            var b, c, d, e, f = this,
                g = f.config,
                h = !1,
                i = 0;
            return g ? (f.pie(f.filterTargetsToShow(f.data.targets)).forEach(function (b) {
                h || b.data.id !== a.data.id || (h = !0, (a = b).index = i), i++
            }), isNaN(a.startAngle) && (a.startAngle = 0), isNaN(a.endAngle) && (a.endAngle = a.startAngle), f.isGaugeType(a.data) && (b = g.gauge_min, c = g.gauge_max, d = Math.PI * (g.gauge_fullCircle ? 2 : 1) / (c - b), e = a.value < b ? 0 : a.value < c ? a.value - b : c - b, a.startAngle = g.gauge_startingAngle, a.endAngle = a.startAngle + d * e), h ? a : null) : null
        }, B.getSvgArc = function () {
            var a = this,
                b = a.d3.svg.arc().outerRadius(a.radius).innerRadius(a.innerRadius),
                c = function (c, d) {
                    var e;
                    return d ? b(c) : (e = a.updateAngle(c), e ? b(e) : "M 0 0")
                };
            return c.centroid = b.centroid, c
        }, B.getSvgArcExpanded = function (a) {
            var b = this,
                c = b.d3.svg.arc().outerRadius(b.radiusExpanded * (a || 1)).innerRadius(b.innerRadius);
            return function (a) {
                var d = b.updateAngle(a);
                return d ? c(d) : "M 0 0"
            }
        }, B.getArc = function (a, b, c) {
            return c || this.isArcType(a.data) ? this.svgArc(a, b) : "M 0 0"
        }, B.transformForArcLabel = function (a) {
            var b, c, d, e, f, g = this,
                h = g.config,
                i = g.updateAngle(a),
                j = "";
            return i && !g.hasType("gauge") && (b = this.svgArc.centroid(i), c = isNaN(b[0]) ? 0 : b[0], d = isNaN(b[1]) ? 0 : b[1], e = Math.sqrt(c * c + d * d),
                j = "translate(" + c * (f = g.hasType("donut") && h.donut_label_ratio ? l(h.donut_label_ratio) ? h.donut_label_ratio(a, g.radius, e) : h.donut_label_ratio : g.hasType("pie") && h.pie_label_ratio ? l(h.pie_label_ratio) ? h.pie_label_ratio(a, g.radius, e) : h.pie_label_ratio : g.radius && e ? (36 / g.radius > .375 ? 1.175 - 36 / g.radius : .8) * g.radius / e : 0) + "," + d * f + ")"), j
        }, B.getArcRatio = function (a) {
            var b = this,
                c = b.config,
                d = Math.PI * (b.hasType("gauge") && !c.gauge_fullCircle ? 1 : 2);
            return a ? (a.endAngle - a.startAngle) / d : null
        }, B.convertToArcData = function (a) {
            return this.addName({
                id: a.data.id,
                value: a.value,
                ratio: this.getArcRatio(a),
                index: a.index
            })
        }, B.textForArcLabel = function (a) {
            var b, c, d, e, f, g = this;
            return g.shouldShowArcLabel() ? (b = g.updateAngle(a), c = b ? b.value : null, d = g.getArcRatio(b), e = a.data.id, g.hasType("gauge") || g.meetsArcLabelThreshold(d) ? (f = g.getArcLabelFormat(), f ? f(c, d, e) : g.defaultArcValueFormat(c, d)) : "") : ""
        }, B.textForGaugeMinMax = function (a, b) {
            var c = this.getGaugeLabelExtents();
            return c ? c(a, b) : a
        }, B.expandArc = function (a) {
            var b, c = this;
            c.transiting ? b = window.setInterval(function () {
                c.transiting || (window.clearInterval(b), c.legend.selectAll(".c3-legend-item-focused").size() > 0 && c.expandArc(a))
            }, 10) : (a = c.mapToTargetIds(a), c.svg.selectAll(c.selectorTargets(a, "." + f.chartArc)).each(function (a) {
                c.shouldExpand(a.data.id) && c.d3.select(this).selectAll("path").transition().duration(c.expandDuration(a.data.id)).attr("d", c.svgArcExpanded).transition().duration(2 * c.expandDuration(a.data.id)).attr("d", c.svgArcExpandedSub).each(function (a) {
                    c.isDonutType(a.data)
                })
            }))
        }, B.unexpandArc = function (a) {
            var b = this;
            b.transiting || (a = b.mapToTargetIds(a), b.svg.selectAll(b.selectorTargets(a, "." + f.chartArc)).selectAll("path").transition().duration(function (a) {
                return b.expandDuration(a.data.id)
            }).attr("d", b.svgArc), b.svg.selectAll("." + f.arc))
        }, B.expandDuration = function (a) {
            var b = this,
                c = b.config;
            return b.isDonutType(a) ? c.donut_expand_duration : b.isGaugeType(a) ? c.gauge_expand_duration : b.isPieType(a) ? c.pie_expand_duration : 50
        }, B.shouldExpand = function (a) {
            var b = this,
                c = b.config;
            return b.isDonutType(a) && c.donut_expand || b.isGaugeType(a) && c.gauge_expand || b.isPieType(a) && c.pie_expand
        }, B.shouldShowArcLabel = function () {
            var a = this,
                b = a.config,
                c = !0;
            return a.hasType("donut") ? c = b.donut_label_show : a.hasType("pie") && (c = b.pie_label_show), c
        }, B.meetsArcLabelThreshold = function (a) {
            var b = this,
                c = b.config;
            return a >= (b.hasType("donut") ? c.donut_label_threshold : c.pie_label_threshold)
        }, B.getArcLabelFormat = function () {
            var a = this,
                b = a.config,
                c = b.pie_label_format;
            return a.hasType("gauge") ? c = b.gauge_label_format : a.hasType("donut") && (c = b.donut_label_format), c
        }, B.getGaugeLabelExtents = function () {
            return this.config.gauge_label_extents
        }, B.getArcTitle = function () {
            var a = this;
            return a.hasType("donut") ? a.config.donut_title : ""
        }, B.updateTargetsForArc = function (a) {
            var b, c = this,
                d = c.main,
                e = c.classChartArc.bind(c),
                g = c.classArcs.bind(c),
                h = c.classFocus.bind(c);
            (b = d.select("." + f.chartArcs).selectAll("." + f.chartArc).data(c.pie(a)).attr("class", function (a) {
                return e(a) + h(a.data)
            }).enter().append("g").attr("class", e)).append("g").attr("class", g), b.append("text").attr("dy", c.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none")
        }, B.initArc = function () {
            var a = this;
            a.arcs = a.main.select("." + f.chart).append("g").attr("class", f.chartArcs).attr("transform", a.getTranslate("arc")), a.arcs.append("text").attr("class", f.chartArcsTitle).style("text-anchor", "middle").text(a.getArcTitle())
        }, B.redrawArc = function (a, b, c) {
            var d, e = this,
                g = e.d3,
                h = e.config,
                i = e.main;
            (d = i.selectAll("." + f.arcs).selectAll("." + f.arc).data(e.arcData.bind(e))).enter().append("path").attr("class", e.classArc.bind(e)).style("fill", function (a) {
                return e.color(a.data)
            }).style("cursor", function (a) {
                return h.interaction_enabled && h.data_selection_isselectable(a) ? "pointer" : null
            }).each(function (a) {
                e.isGaugeType(a.data) && (a.startAngle = a.endAngle = h.gauge_startingAngle), this._current = a
            }), d.attr("transform", function (a) {
                return !e.isGaugeType(a.data) && c ? "scale(0)" : ""
            }).on("mouseover", h.interaction_enabled ? function (a) {
                var b, c;
                e.transiting || (b = e.updateAngle(a)) && (c = e.convertToArcData(b), e.expandArc(b.data.id), e.api.focus(b.data.id), e.toggleFocusLegend(b.data.id, !0), e.config.data_onmouseover(c, this))
            } : null).on("mousemove", h.interaction_enabled ? function (a) {
                var b, c = e.updateAngle(a);
                c && (b = [e.convertToArcData(c)], e.showTooltip(b, this))
            } : null).on("mouseout", h.interaction_enabled ? function (a) {
                var b, c;
                e.transiting || (b = e.updateAngle(a)) && (c = e.convertToArcData(b), e.unexpandArc(b.data.id), e.api.revert(), e.revertLegend(), e.hideTooltip(), e.config.data_onmouseout(c, this))
            } : null).on("click", h.interaction_enabled ? function (a, b) {
                var c, d = e.updateAngle(a);
                d && (c = e.convertToArcData(d), e.toggleShape && e.toggleShape(this, c, b), e.config.data_onclick.call(e.api, c, this))
            } : null).each(function () {
                e.transiting = !0
            }).transition().duration(a).attrTween("d", function (a) {
                var b, c = e.updateAngle(a);
                return c ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), b = g.interpolate(this._current, c), this._current = b(0), function (c) {
                    var d = b(c);
                    return d.data = a.data, e.getArc(d, !0)
                }) : function () {
                    return "M 0 0"
                }
            }).attr("transform", c ? "scale(1)" : "").style("fill", function (a) {
                return e.levelColor ? e.levelColor(a.data.values[0].value) : e.color(a.data.id)
            }).call(e.endall, function () {
                e.transiting = !1
            }), d.exit().transition().duration(b).style("opacity", 0).remove(), i.selectAll("." + f.chartArc).select("text").style("opacity", 0).attr("class", function (a) {
                return e.isGaugeType(a.data) ? f.gaugeValue : ""
            }).text(e.textForArcLabel.bind(e)).attr("transform", e.transformForArcLabel.bind(e)).style("font-size", function (a) {
                return e.isGaugeType(a.data) ? Math.round(e.radius / 5) + "px" : ""
            }).transition().duration(a).style("opacity", function (a) {
                return e.isTargetToShow(a.data.id) && e.isArcType(a.data) ? 1 : 0
            }), i.select("." + f.chartArcsTitle).style("opacity", e.hasType("donut") || e.hasType("gauge") ? 1 : 0), e.hasType("gauge") && (e.arcs.select("." + f.chartArcsBackground).attr("d", function () {
                var a = {
                    data: [{
                        value: h.gauge_max
                    }],
                    startAngle: h.gauge_startingAngle,
                    endAngle: -1 * h.gauge_startingAngle
                };
                return e.getArc(a, !0, !0)
            }), e.arcs.select("." + f.chartArcsGaugeUnit).attr("dy", ".75em").text(h.gauge_label_show ? h.gauge_units : ""), e.arcs.select("." + f.chartArcsGaugeMin).attr("dx", -1 * (e.innerRadius + (e.radius - e.innerRadius) / (h.gauge_fullCircle ? 1 : 2)) + "px").attr("dy", "1.2em").text(h.gauge_label_show ? e.textForGaugeMinMax(h.gauge_min, !1) : ""), e.arcs.select("." + f.chartArcsGaugeMax).attr("dx", e.innerRadius + (e.radius - e.innerRadius) / (h.gauge_fullCircle ? 1 : 2) + "px").attr("dy", "1.2em").text(h.gauge_label_show ? e.textForGaugeMinMax(h.gauge_max, !0) : ""))
        }, B.initGauge = function () {
            var a = this.arcs;
            this.hasType("gauge") && (a.append("path").attr("class", f.chartArcsBackground), a.append("text").attr("class", f.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), a.append("text").attr("class", f.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), a.append("text").attr("class", f.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"))
        }, B.getGaugeLabelHeight = function () {
            return this.config.gauge_label_show ? 20 : 0
        }, B.hasCaches = function (a) {
            for (var b = 0; b < a.length; b++)
                if (!(a[b] in this.cache)) return !1;
            return !0
        }, B.addCache = function (a, b) {
            this.cache[a] = this.cloneTarget(b)
        }, B.getCaches = function (a) {
            var b, c = [];
            for (b = 0; b < a.length; b++) a[b] in this.cache && c.push(this.cloneTarget(this.cache[a[b]]));
            return c
        }, B.categoryName = function (a) {
            var b = this.config;
            return a < b.axis_x_categories.length ? b.axis_x_categories[a] : a
        }, B.generateClass = function (a, b) {
            return " " + a + " " + a + this.getTargetSelectorSuffix(b)
        }, B.classText = function (a) {
            return this.generateClass(f.text, a.index)
        }, B.classTexts = function (a) {
            return this.generateClass(f.texts, a.id)
        }, B.classShape = function (a) {
            return this.generateClass(f.shape, a.index)
        }, B.classShapes = function (a) {
            return this.generateClass(f.shapes, a.id)
        }, B.classLine = function (a) {
            return this.classShape(a) + this.generateClass(f.line, a.id)
        }, B.classLines = function (a) {
            return this.classShapes(a) + this.generateClass(f.lines, a.id)
        }, B.classCircle = function (a) {
            return this.classShape(a) + this.generateClass(f.circle, a.index)
        }, B.classCircles = function (a) {
            return this.classShapes(a) + this.generateClass(f.circles, a.id)
        }, B.classBar = function (a) {
            return this.classShape(a) + this.generateClass(f.bar, a.index)
        }, B.classBars = function (a) {
            return this.classShapes(a) + this.generateClass(f.bars, a.id)
        }, B.classArc = function (a) {
            return this.classShape(a.data) + this.generateClass(f.arc, a.data.id)
        }, B.classArcs = function (a) {
            return this.classShapes(a.data) + this.generateClass(f.arcs, a.data.id)
        }, B.classArea = function (a) {
            return this.classShape(a) + this.generateClass(f.area, a.id)
        }, B.classAreas = function (a) {
            return this.classShapes(a) + this.generateClass(f.areas, a.id)
        }, B.classRegion = function (a, b) {
            return this.generateClass(f.region, b) + " " + ("class" in a ? a.class : "")
        }, B.classEvent = function (a) {
            return this.generateClass(f.eventRect, a.index)
        }, B.classTarget = function (a) {
            var b = this,
                c = b.config.data_classes[a],
                d = "";
            return c && (d = " " + f.target + "-" + c), b.generateClass(f.target, a) + d
        }, B.classFocus = function (a) {
            return this.classFocused(a) + this.classDefocused(a)
        }, B.classFocused = function (a) {
            return " " + (this.focusedTargetIds.indexOf(a.id) >= 0 ? f.focused : "")
        }, B.classDefocused = function (a) {
            return " " + (this.defocusedTargetIds.indexOf(a.id) >= 0 ? f.defocused : "")
        }, B.classChartText = function (a) {
            return f.chartText + this.classTarget(a.id)
        }, B.classChartLine = function (a) {
            return f.chartLine + this.classTarget(a.id)
        }, B.classChartBar = function (a) {
            return f.chartBar + this.classTarget(a.id)
        }, B.classChartArc = function (a) {
            return f.chartArc + this.classTarget(a.data.id)
        }, B.getTargetSelectorSuffix = function (a) {
            return a || 0 === a ? ("-" + a).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : ""
        }, B.selectorTarget = function (a, b) {
            return (b || "") + "." + f.target + this.getTargetSelectorSuffix(a)
        }, B.selectorTargets = function (a, b) {
            var c = this;
            return a = a || [], a.length ? a.map(function (a) {
                return c.selectorTarget(a, b)
            }) : null
        }, B.selectorLegend = function (a) {
            return "." + f.legendItem + this.getTargetSelectorSuffix(a)
        }, B.selectorLegends = function (a) {
            var b = this;
            return a && a.length ? a.map(function (a) {
                return b.selectorLegend(a)
            }) : null
        }, B.getClipPath = function (a) {
            return "url(" + (window.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0 ? "" : document.URL.split("#")[0]) + "#" + a + ")"
        }, B.appendClip = function (a, b) {
            return a.append("clipPath").attr("id", b).append("rect")
        }, B.getAxisClipX = function (a) {
            var b = Math.max(30, this.margin.left);
            return a ? -(1 + b) : -(b - 1)
        }, B.getAxisClipY = function (a) {
            return a ? -20 : -this.margin.top
        }, B.getXAxisClipX = function () {
            var a = this;
            return a.getAxisClipX(!a.config.axis_rotated)
        }, B.getXAxisClipY = function () {
            var a = this;
            return a.getAxisClipY(!a.config.axis_rotated)
        }, B.getYAxisClipX = function () {
            var a = this;
            return a.config.axis_y_inner ? -1 : a.getAxisClipX(a.config.axis_rotated)
        }, B.getYAxisClipY = function () {
            var a = this;
            return a.getAxisClipY(a.config.axis_rotated)
        }, B.getAxisClipWidth = function (a) {
            var b = this,
                c = Math.max(30, b.margin.left),
                d = Math.max(30, b.margin.right);
            return a ? b.width + 2 + c + d : b.margin.left + 20
        }, B.getAxisClipHeight = function (a) {
            return (a ? this.margin.bottom : this.margin.top + this.height) + 20
        }, B.getXAxisClipWidth = function () {
            var a = this;
            return a.getAxisClipWidth(!a.config.axis_rotated)
        }, B.getXAxisClipHeight = function () {
            var a = this;
            return a.getAxisClipHeight(!a.config.axis_rotated)
        }, B.getYAxisClipWidth = function () {
            var a = this;
            return a.getAxisClipWidth(a.config.axis_rotated) + (a.config.axis_y_inner ? 20 : 0)
        }, B.getYAxisClipHeight = function () {
            var a = this;
            return a.getAxisClipHeight(a.config.axis_rotated)
        }, B.generateColor = function () {
            var a = this,
                b = a.config,
                c = a.d3,
                d = b.data_colors,
                e = u(b.color_pattern) ? b.color_pattern : c.scale.category10().range(),
                f = b.data_color,
                g = [];
            return function (a) {
                var b, c = a.id || a.data && a.data.id || a;
                return d[c] instanceof Function ? b = d[c](a) : d[c] ? b = d[c] : (g.indexOf(c) < 0 && g.push(c), b = e[g.indexOf(c) % e.length], d[c] = b), f instanceof Function ? f(b, a) : b
            }
        }, B.generateLevelColor = function () {
            var a = this.config,
                b = a.color_pattern,
                c = a.color_threshold,
                d = "value" === c.unit,
                e = c.values && c.values.length ? c.values : [],
                f = c.max || 100;
            return u(a.color_threshold) ? function (a) {
                var c, g = b[b.length - 1];
                for (c = 0; c < e.length; c++)
                    if ((d ? a : 100 * a / f) < e[c]) {
                        g = b[c];
                        break
                    } return g
            } : null
        }, B.getDefaultConfig = function () {
            var a = {
                bindto: "#chart",
                svg_classname: void 0,
                size_width: void 0,
                size_height: void 0,
                padding_left: void 0,
                padding_right: void 0,
                padding_top: void 0,
                padding_bottom: void 0,
                resize_auto: !0,
                zoom_enabled: !1,
                zoom_extent: void 0,
                zoom_privileged: !1,
                zoom_rescale: !1,
                zoom_onzoom: function () { },
                zoom_onzoomstart: function () { },
                zoom_onzoomend: function () { },
                zoom_x_min: void 0,
                zoom_x_max: void 0,
                interaction_brighten: !0,
                interaction_enabled: !0,
                onmouseover: function () { },
                onmouseout: function () { },
                onresize: function () { },
                onresized: function () { },
                oninit: function () { },
                onrendered: function () { },
                transition_duration: 350,
                data_x: void 0,
                data_xs: {},
                data_xFormat: "%Y-%m-%d",
                data_xLocaltime: !0,
                data_xSort: !0,
                data_idConverter: function (a) {
                    return a
                },
                data_names: {},
                data_classes: {},
                data_groups: [],
                data_axes: {},
                data_type: void 0,
                data_types: {},
                data_labels: {},
                data_order: "desc",
                data_regions: {},
                data_color: void 0,
                data_colors: {},
                data_hide: !1,
                data_filter: void 0,
                data_selection_enabled: !1,
                data_selection_grouped: !1,
                data_selection_isselectable: function () {
                    return !0
                },
                data_selection_multiple: !0,
                data_selection_draggable: !1,
                data_onclick: function () { },
                data_onmouseover: function () { },
                data_onmouseout: function () { },
                data_onselected: function () { },
                data_onunselected: function () { },
                data_url: void 0,
                data_headers: void 0,
                data_json: void 0,
                data_rows: void 0,
                data_columns: void 0,
                data_mimeType: void 0,
                data_keys: void 0,
                data_empty_label_text: "",
                subchart_show: !1,
                subchart_size_height: 60,
                subchart_axis_x_show: !0,
                subchart_onbrush: function () { },
                color_pattern: [],
                color_threshold: {},
                legend_show: !0,
                legend_hide: !1,
                legend_position: "bottom",
                legend_inset_anchor: "top-left",
                legend_inset_x: 10,
                legend_inset_y: 0,
                legend_inset_step: void 0,
                legend_item_onclick: void 0,
                legend_item_onmouseover: void 0,
                legend_item_onmouseout: void 0,
                legend_equally: !1,
                legend_padding: 0,
                legend_item_tile_width: 10,
                legend_item_tile_height: 10,
                axis_rotated: !1,
                axis_x_show: !0,
                axis_x_type: "indexed",
                axis_x_localtime: !0,
                axis_x_categories: [],
                axis_x_tick_centered: !1,
                axis_x_tick_format: void 0,
                axis_x_tick_culling: {},
                axis_x_tick_culling_max: 10,
                axis_x_tick_count: void 0,
                axis_x_tick_fit: !0,
                axis_x_tick_values: null,
                axis_x_tick_rotate: 0,
                axis_x_tick_outer: !0,
                axis_x_tick_multiline: !0,
                axis_x_tick_width: null,
                axis_x_max: void 0,
                axis_x_min: void 0,
                axis_x_padding: {},
                axis_x_height: void 0,
                axis_x_extent: void 0,
                axis_x_label: {},
                axis_y_show: !0,
                axis_y_type: void 0,
                axis_y_max: void 0,
                axis_y_min: void 0,
                axis_y_inverted: !1,
                axis_y_center: void 0,
                axis_y_inner: void 0,
                axis_y_label: {},
                axis_y_tick_format: void 0,
                axis_y_tick_outer: !0,
                axis_y_tick_values: null,
                axis_y_tick_rotate: 0,
                axis_y_tick_count: void 0,
                axis_y_tick_time_value: void 0,
                axis_y_tick_time_interval: void 0,
                axis_y_padding: {},
                axis_y_default: void 0,
                axis_y2_show: !1,
                axis_y2_max: void 0,
                axis_y2_min: void 0,
                axis_y2_inverted: !1,
                axis_y2_center: void 0,
                axis_y2_inner: void 0,
                axis_y2_label: {},
                axis_y2_tick_format: void 0,
                axis_y2_tick_outer: !0,
                axis_y2_tick_values: null,
                axis_y2_tick_count: void 0,
                axis_y2_padding: {},
                axis_y2_default: void 0,
                grid_x_show: !1,
                grid_x_type: "tick",
                grid_x_lines: [],
                grid_y_show: !1,
                grid_y_lines: [],
                grid_y_ticks: 10,
                grid_focus_show: !0,
                grid_lines_front: !0,
                point_show: !0,
                point_r: 2.5,
                point_sensitivity: 10,
                point_focus_expand_enabled: !0,
                point_focus_expand_r: void 0,
                point_select_r: void 0,
                line_connectNull: !1,
                line_step_type: "step",
                bar_width: void 0,
                bar_width_ratio: .6,
                bar_width_max: void 0,
                bar_zerobased: !0,
                bar_space: 0,
                area_zerobased: !0,
                area_above: !1,
                pie_label_show: !0,
                pie_label_format: void 0,
                pie_label_threshold: .05,
                pie_label_ratio: void 0,
                pie_expand: {},
                pie_expand_duration: 50,
                gauge_fullCircle: !1,
                gauge_label_show: !0,
                gauge_label_format: void 0,
                gauge_min: 0,
                gauge_max: 100,
                gauge_startingAngle: -1 * Math.PI / 2,
                gauge_label_extents: void 0,
                gauge_units: void 0,
                gauge_width: void 0,
                gauge_expand: {},
                gauge_expand_duration: 50,
                donut_label_show: !0,
                donut_label_format: void 0,
                donut_label_threshold: .05,
                donut_label_ratio: void 0,
                donut_width: void 0,
                donut_title: "",
                donut_expand: {},
                donut_expand_duration: 50,
                spline_interpolation_type: "cardinal",
                regions: [],
                tooltip_show: !0,
                tooltip_grouped: !0,
                tooltip_order: void 0,
                tooltip_format_title: void 0,
                tooltip_format_name: void 0,
                tooltip_format_value: void 0,
                tooltip_position: void 0,
                tooltip_contents: function (a, b, c, d) {
                    return this.getTooltipContent ? this.getTooltipContent(a, b, c, d) : ""
                },
                tooltip_init_show: !1,
                tooltip_init_x: 0,
                tooltip_init_position: {
                    top: "0px",
                    left: "50px"
                },
                tooltip_onshow: function () { },
                tooltip_onhide: function () { },
                title_text: void 0,
                title_padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                title_position: "top-center"
            };
            return Object.keys(this.additionalConfig).forEach(function (b) {
                a[b] = this.additionalConfig[b]
            }, this), a
        }, B.additionalConfig = {}, B.loadConfig = function (a) {
            function b() {
                var a = d.shift();
                return a && c && "object" === (void 0 === c ? "undefined" : g(c)) && a in c ? (c = c[a], b()) : a ? void 0 : c
            }
            var c, d, e, f = this.config;
            Object.keys(f).forEach(function (g) {
                c = a, d = g.split("_"), void 0 !== (e = b()) && (f[g] = e)
            })
        }, B.convertUrlToData = function (a, b, c, d, e) {
            var f = this,
                g = b || "csv",
                h = f.d3.xhr(a);
            c && Object.keys(c).forEach(function (a) {
                h.header(a, c[a])
            }), h.get(function (a, b) {
                var c, h = b.response || b.responseText;
                if (!b) throw new Error(a.responseURL + " " + a.status + " (" + a.statusText + ")");
                c = "json" === g ? f.convertJsonToData(JSON.parse(h), d) : "tsv" === g ? f.convertTsvToData(h) : f.convertCsvToData(h), e.call(f, c)
            })
        }, B.convertXsvToData = function (a, b) {
            var c, d = b.parseRows(a);
            return 1 === d.length ? (c = [{}], d[0].forEach(function (a) {
                c[0][a] = null
            })) : c = b.parse(a), c
        }, B.convertCsvToData = function (a) {
            return this.convertXsvToData(a, this.d3.csv)
        }, B.convertTsvToData = function (a) {
            return this.convertXsvToData(a, this.d3.tsv)
        }, B.convertJsonToData = function (a, b) {
            var c, d, e = this,
                f = [];
            return b ? (b.x ? (c = b.value.concat(b.x), e.config.data_x = b.x) : c = b.value, f.push(c), a.forEach(function (a) {
                var b = [];
                c.forEach(function (c) {
                    var d = e.findValueInJson(a, c);
                    o(d) && (d = null), b.push(d)
                }), f.push(b)
            }), d = e.convertRowsToData(f)) : (Object.keys(a).forEach(function (b) {
                f.push([b].concat(a[b]))
            }), d = e.convertColumnsToData(f)), d
        }, B.findValueInJson = function (a, b) {
            for (var c = (b = (b = b.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), d = 0; d < c.length; ++d) {
                var e = c[d];
                if (!(e in a)) return;
                a = a[e]
            }
            return a
        }, B.convertRowsToData = function (a) {
            for (var b = [], c = a[0], d = 1; d < a.length; d++) {
                for (var e = {}, f = 0; f < a[d].length; f++) {
                    if (void 0 === a[d][f]) throw new Error("Source data is missing a component at (" + d + "," + f + ")!");
                    e[c[f]] = a[d][f]
                }
                b.push(e)
            }
            return b
        }, B.convertColumnsToData = function (a) {
            for (var b = [], c = 0; c < a.length; c++)
                for (var d = a[c][0], e = 1; e < a[c].length; e++) {
                    if (void 0 === b[e - 1] && (b[e - 1] = {}), void 0 === a[c][e]) throw new Error("Source data is missing a component at (" + c + "," + e + ")!");
                    b[e - 1][d] = a[c][e]
                }
            return b
        }, B.convertDataToTargets = function (a, b) {
            var c, d = this,
                e = d.config,
                f = d.d3.keys(a[0]).filter(d.isNotX, d),
                g = d.d3.keys(a[0]).filter(d.isX, d);
            return f.forEach(function (c) {
                var f = d.getXKey(c);
                d.isCustomX() || d.isTimeSeries() ? g.indexOf(f) >= 0 ? d.data.xs[c] = (b && d.data.xs[c] ? d.data.xs[c] : []).concat(a.map(function (a) {
                    return a[f]
                }).filter(k).map(function (a, b) {
                    return d.generateTargetX(a, c, b)
                })) : e.data_x ? d.data.xs[c] = d.getOtherTargetXs() : u(e.data_xs) && (d.data.xs[c] = d.getXValuesOfXKey(f, d.data.targets)) : d.data.xs[c] = a.map(function (a, b) {
                    return b
                })
            }), f.forEach(function (a) {
                if (!d.data.xs[a]) throw new Error('x is not defined for id = "' + a + '".')
            }), (c = f.map(function (b, c) {
                var f = e.data_idConverter(b);
                return {
                    id: f,
                    id_org: b,
                    values: a.map(function (a, g) {
                        var h, i = a[d.getXKey(b)],
                            j = null === a[b] || isNaN(a[b]) ? null : +a[b];
                        return d.isCustomX() && d.isCategorized() && void 0 !== i ? (0 === c && 0 === g && (e.axis_x_categories = []), -1 === (h = e.axis_x_categories.indexOf(i)) && (h = e.axis_x_categories.length, e.axis_x_categories.push(i))) : h = d.generateTargetX(i, b, g), (void 0 === a[b] || d.data.xs[b].length <= g) && (h = void 0), {
                            x: h,
                            value: j,
                            id: f
                        }
                    }).filter(function (a) {
                        return p(a.x)
                    })
                }
            })).forEach(function (a) {
                var b;
                e.data_xSort && (a.values = a.values.sort(function (a, b) {
                    return (a.x || 0 === a.x ? a.x : 1 / 0) - (b.x || 0 === b.x ? b.x : 1 / 0)
                })), b = 0, a.values.forEach(function (a) {
                    a.index = b++
                }), d.data.xs[a.id].sort(function (a, b) {
                    return a - b
                })
            }), d.hasNegativeValue = d.hasNegativeValueInTargets(c), d.hasPositiveValue = d.hasPositiveValueInTargets(c), e.data_type && d.setTargetType(d.mapToIds(c).filter(function (a) {
                return !(a in e.data_types)
            }), e.data_type), c.forEach(function (a) {
                d.addCache(a.id_org, a)
            }), c
        }, B.isX = function (a) {
            var b = this.config;
            return b.data_x && a === b.data_x || u(b.data_xs) && w(b.data_xs, a)
        }, B.isNotX = function (a) {
            return !this.isX(a)
        }, B.getXKey = function (a) {
            var b = this.config;
            return b.data_x ? b.data_x : u(b.data_xs) ? b.data_xs[a] : null
        }, B.getXValuesOfXKey = function (a, b) {
            var c, d = this;
            return (b && u(b) ? d.mapToIds(b) : []).forEach(function (b) {
                d.getXKey(b) === a && (c = d.data.xs[b])
            }), c
        }, B.getIndexByX = function (a) {
            var b = this,
                c = b.filterByX(b.data.targets, a);
            return c.length ? c[0].index : null
        }, B.getXValue = function (a, b) {
            var c = this;
            return a in c.data.xs && c.data.xs[a] && k(c.data.xs[a][b]) ? c.data.xs[a][b] : b
        }, B.getOtherTargetXs = function () {
            var a = this,
                b = Object.keys(a.data.xs);
            return b.length ? a.data.xs[b[0]] : null
        }, B.getOtherTargetX = function (a) {
            var b = this.getOtherTargetXs();
            return b && a < b.length ? b[a] : null
        }, B.addXs = function (a) {
            var b = this;
            Object.keys(a).forEach(function (c) {
                b.config.data_xs[c] = a[c]
            })
        }, B.hasMultipleX = function (a) {
            return this.d3.set(Object.keys(a).map(function (b) {
                return a[b]
            })).size() > 1
        }, B.isMultipleX = function () {
            return u(this.config.data_xs) || !this.config.data_xSort || this.hasType("scatter")
        }, B.addName = function (a) {
            var b, c = this;
            return a && (b = c.config.data_names[a.id], a.name = void 0 !== b ? b : a.id), a
        }, B.getValueOnIndex = function (a, b) {
            var c = a.filter(function (a) {
                return a.index === b
            });
            return c.length ? c[0] : null
        }, B.updateTargetX = function (a, b) {
            var c = this;
            a.forEach(function (a) {
                a.values.forEach(function (d, e) {
                    d.x = c.generateTargetX(b[e], a.id, e)
                }), c.data.xs[a.id] = b
            })
        }, B.updateTargetXs = function (a, b) {
            var c = this;
            a.forEach(function (a) {
                b[a.id] && c.updateTargetX([a], b[a.id])
            })
        }, B.generateTargetX = function (a, b, c) {
            var d = this;
            return d.isTimeSeries() ? a ? d.parseDate(a) : d.parseDate(d.getXValue(b, c)) : d.isCustomX() && !d.isCategorized() ? k(a) ? +a : d.getXValue(b, c) : c
        }, B.cloneTarget = function (a) {
            return {
                id: a.id,
                id_org: a.id_org,
                values: a.values.map(function (a) {
                    return {
                        x: a.x,
                        value: a.value,
                        id: a.id
                    }
                })
            }
        }, B.updateXs = function () {
            var a = this;
            a.data.targets.length && (a.xs = [], a.data.targets[0].values.forEach(function (b) {
                a.xs[b.index] = b.x
            }))
        }, B.getPrevX = function (a) {
            var b = this.xs[a - 1];
            return void 0 !== b ? b : null
        }, B.getNextX = function (a) {
            var b = this.xs[a + 1];
            return void 0 !== b ? b : null
        }, B.getMaxDataCount = function () {
            var a = this;
            return a.d3.max(a.data.targets, function (a) {
                return a.values.length
            })
        }, B.getMaxDataCountTarget = function (a) {
            var b, c = a.length,
                d = 0;
            return c > 1 ? a.forEach(function (a) {
                a.values.length > d && (b = a, d = a.values.length)
            }) : b = c ? a[0] : null, b
        }, B.getEdgeX = function (a) {
            var b = this;
            return a.length ? [b.d3.min(a, function (a) {
                return a.values[0].x
            }), b.d3.max(a, function (a) {
                return a.values[a.values.length - 1].x
            })] : [0, 0]
        }, B.mapToIds = function (a) {
            return a.map(function (a) {
                return a.id
            })
        }, B.mapToTargetIds = function (a) {
            var b = this;
            return a ? [].concat(a) : b.mapToIds(b.data.targets)
        }, B.hasTarget = function (a, b) {
            var c, d = this.mapToIds(a);
            for (c = 0; c < d.length; c++)
                if (d[c] === b) return !0;
            return !1
        }, B.isTargetToShow = function (a) {
            return this.hiddenTargetIds.indexOf(a) < 0
        }, B.isLegendToShow = function (a) {
            return this.hiddenLegendIds.indexOf(a) < 0
        }, B.filterTargetsToShow = function (a) {
            var b = this;
            return a.filter(function (a) {
                return b.isTargetToShow(a.id)
            })
        }, B.mapTargetsToUniqueXs = function (a) {
            var b = this,
                c = b.d3.set(b.d3.merge(a.map(function (a) {
                    return a.values.map(function (a) {
                        return +a.x
                    })
                }))).values();
            return (c = b.isTimeSeries() ? c.map(function (a) {
                return new Date(+a)
            }) : c.map(function (a) {
                return +a
            })).sort(function (a, b) {
                return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
            })
        }, B.addHiddenTargetIds = function (a) {
            a = a instanceof Array ? a : new Array(a);
            for (var b = 0; b < a.length; b++) this.hiddenTargetIds.indexOf(a[b]) < 0 && (this.hiddenTargetIds = this.hiddenTargetIds.concat(a[b]))
        }, B.removeHiddenTargetIds = function (a) {
            this.hiddenTargetIds = this.hiddenTargetIds.filter(function (b) {
                return a.indexOf(b) < 0
            })
        }, B.addHiddenLegendIds = function (a) {
            a = a instanceof Array ? a : new Array(a);
            for (var b = 0; b < a.length; b++) this.hiddenLegendIds.indexOf(a[b]) < 0 && (this.hiddenLegendIds = this.hiddenLegendIds.concat(a[b]))
        }, B.removeHiddenLegendIds = function (a) {
            this.hiddenLegendIds = this.hiddenLegendIds.filter(function (b) {
                return a.indexOf(b) < 0
            })
        }, B.getValuesAsIdKeyed = function (a) {
            var b = {};
            return a.forEach(function (a) {
                b[a.id] = [], a.values.forEach(function (c) {
                    b[a.id].push(c.value)
                })
            }), b
        }, B.checkValueInTargets = function (a, b) {
            var c, d, e, f = Object.keys(a);
            for (c = 0; c < f.length; c++)
                for (e = a[f[c]].values, d = 0; d < e.length; d++)
                    if (b(e[d].value)) return !0;
            return !1
        }, B.hasNegativeValueInTargets = function (a) {
            return this.checkValueInTargets(a, function (a) {
                return a < 0
            })
        }, B.hasPositiveValueInTargets = function (a) {
            return this.checkValueInTargets(a, function (a) {
                return a > 0
            })
        }, B.isOrderDesc = function () {
            var a = this.config;
            return "string" == typeof a.data_order && "desc" === a.data_order.toLowerCase()
        }, B.isOrderAsc = function () {
            var a = this.config;
            return "string" == typeof a.data_order && "asc" === a.data_order.toLowerCase()
        }, B.getOrderFunction = function () {
            var a = this,
                b = a.config,
                c = a.isOrderAsc(),
                d = a.isOrderDesc();
            if (c || d) return function (a, b) {
                var c = function (a, b) {
                    return a + Math.abs(b.value)
                },
                    e = a.values.reduce(c, 0),
                    f = b.values.reduce(c, 0);
                return d ? f - e : e - f
            };
            if (l(b.data_order)) return b.data_order;
            if (m(b.data_order)) {
                var e = b.data_order;
                return function (a, b) {
                    return e.indexOf(a.id) - e.indexOf(b.id)
                }
            }
        }, B.orderTargets = function (a) {
            var b = this.getOrderFunction();
            return b && (a.sort(b), (this.isOrderAsc() || this.isOrderDesc()) && a.reverse()), a
        }, B.filterByX = function (a, b) {
            return this.d3.merge(a.map(function (a) {
                return a.values
            })).filter(function (a) {
                return a.x - b == 0
            })
        }, B.filterRemoveNull = function (a) {
            return a.filter(function (a) {
                return k(a.value)
            })
        }, B.filterByXDomain = function (a, b) {
            return a.map(function (a) {
                return {
                    id: a.id,
                    id_org: a.id_org,
                    values: a.values.filter(function (a) {
                        return b[0] <= a.x && a.x <= b[1]
                    })
                }
            })
        }, B.hasDataLabel = function () {
            var a = this.config;
            return !("boolean" != typeof a.data_labels || !a.data_labels) || !("object" !== g(a.data_labels) || !u(a.data_labels))
        }, B.getDataLabelLength = function (a, b, c) {
            var d = this,
                e = [0, 0];
            return d.selectChart.select("svg").selectAll(".dummy").data([a, b]).enter().append("text").text(function (a) {
                return d.dataLabelFormat(a.id)(a)
            }).each(function (a, b) {
                e[b] = 1.3 * this.getBoundingClientRect()[c]
            }).remove(), e
        }, B.isNoneArc = function (a) {
            return this.hasTarget(this.data.targets, a.id)
        }, B.isArc = function (a) {
            return "data" in a && this.hasTarget(this.data.targets, a.data.id)
        }, B.findSameXOfValues = function (a, b) {
            var c, d = a[b].x,
                e = [];
            for (c = b - 1; c >= 0 && d === a[c].x; c--) e.push(a[c]);
            for (c = b; c < a.length && d === a[c].x; c++) e.push(a[c]);
            return e
        }, B.findClosestFromTargets = function (a, b) {
            var c, d = this;
            return c = a.map(function (a) {
                return d.findClosest(a.values, b)
            }), d.findClosest(c, b)
        }, B.findClosest = function (a, b) {
            var c, d = this,
                e = d.config.point_sensitivity;
            return a.filter(function (a) {
                return a && d.isBarType(a.id)
            }).forEach(function (a) {
                var b = d.main.select("." + f.bars + d.getTargetSelectorSuffix(a.id) + " ." + f.bar + "-" + a.index).node();
                !c && d.isWithinBar(b) && (c = a)
            }), a.filter(function (a) {
                return a && !d.isBarType(a.id)
            }).forEach(function (a) {
                var f = d.dist(a, b);
                f < e && (e = f, c = a)
            }), c
        }, B.dist = function (a, b) {
            var c = this,
                d = c.config,
                e = d.axis_rotated ? 1 : 0,
                f = d.axis_rotated ? 0 : 1,
                g = c.circleY(a, a.index),
                h = c.x(a.x);
            return Math.sqrt(Math.pow(h - b[e], 2) + Math.pow(g - b[f], 2))
        }, B.convertValuesToStep = function (a) {
            var b, c = [].concat(a);
            if (!this.isCategorized()) return a;
            for (b = a.length + 1; 0 < b; b--) c[b] = c[b - 1];
            return c[0] = {
                x: c[0].x - 1,
                value: c[0].value,
                id: c[0].id
            }, c[a.length + 1] = {
                x: c[a.length].x + 1,
                value: c[a.length].value,
                id: c[a.length].id
            }, c
        }, B.updateDataAttributes = function (a, b) {
            var c = this,
                d = c.config["data_" + a];
            return void 0 === b ? d : (Object.keys(b).forEach(function (a) {
                d[a] = b[a]
            }), c.redraw({
                withLegend: !0
            }), d)
        }, B.load = function (a, b) {
            var c = this;
            a && (b.filter && (a = a.filter(b.filter)), (b.type || b.types) && a.forEach(function (a) {
                var d = b.types && b.types[a.id] ? b.types[a.id] : b.type;
                c.setTargetType(a.id, d)
            }), c.data.targets.forEach(function (b) {
                for (var c = 0; c < a.length; c++)
                    if (b.id === a[c].id) {
                        b.values = a[c].values, a.splice(c, 1);
                        break
                    }
            }), c.data.targets = c.data.targets.concat(a)), c.updateTargets(c.data.targets), c.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            }), b.done && b.done()
        }, B.loadFromArgs = function (a) {
            var b = this;
            a.data ? b.load(b.convertDataToTargets(a.data), a) : a.url ? b.convertUrlToData(a.url, a.mimeType, a.headers, a.keys, function (c) {
                b.load(b.convertDataToTargets(c), a)
            }) : a.json ? b.load(b.convertDataToTargets(b.convertJsonToData(a.json, a.keys)), a) : a.rows ? b.load(b.convertDataToTargets(b.convertRowsToData(a.rows)), a) : a.columns ? b.load(b.convertDataToTargets(b.convertColumnsToData(a.columns)), a) : b.load(null, a)
        }, B.unload = function (a, b) {
            var c = this;
            b || (b = function () { }), (a = a.filter(function (a) {
                return c.hasTarget(c.data.targets, a)
            })) && 0 !== a.length ? (c.svg.selectAll(a.map(function (a) {
                return c.selectorTarget(a)
            })).transition().style("opacity", 0).remove().call(c.endall, b), a.forEach(function (a) {
                c.withoutFadeIn[a] = !1, c.legend && c.legend.selectAll("." + f.legendItem + c.getTargetSelectorSuffix(a)).remove(), c.data.targets = c.data.targets.filter(function (b) {
                    return b.id !== a
                })
            })) : b()
        }, B.getYDomainMin = function (a) {
            var b, c, d, e, f, g, h = this,
                i = h.config,
                j = h.mapToIds(a),
                k = h.getValuesAsIdKeyed(a);
            if (i.data_groups.length > 0)
                for (g = h.hasNegativeValueInTargets(a), b = 0; b < i.data_groups.length; b++)
                    if (0 !== (e = i.data_groups[b].filter(function (a) {
                        return j.indexOf(a) >= 0
                    })).length)
                        for (d = e[0], g && k[d] && k[d].forEach(function (a, b) {
                            k[d][b] = a < 0 ? a : 0
                        }), c = 1; c < e.length; c++) f = e[c], k[f] && k[f].forEach(function (a, b) {
                            h.axis.getId(f) !== h.axis.getId(d) || !k[d] || g && +a > 0 || (k[d][b] += +a)
                        });
            return h.d3.min(Object.keys(k).map(function (a) {
                return h.d3.min(k[a])
            }))
        }, B.getYDomainMax = function (a) {
            var b, c, d, e, f, g, h = this,
                i = h.config,
                j = h.mapToIds(a),
                k = h.getValuesAsIdKeyed(a);
            if (i.data_groups.length > 0)
                for (g = h.hasPositiveValueInTargets(a), b = 0; b < i.data_groups.length; b++)
                    if (0 !== (e = i.data_groups[b].filter(function (a) {
                        return j.indexOf(a) >= 0
                    })).length)
                        for (d = e[0], g && k[d] && k[d].forEach(function (a, b) {
                            k[d][b] = a > 0 ? a : 0
                        }), c = 1; c < e.length; c++) f = e[c], k[f] && k[f].forEach(function (a, b) {
                            h.axis.getId(f) !== h.axis.getId(d) || !k[d] || g && +a < 0 || (k[d][b] += +a)
                        });
            return h.d3.max(Object.keys(k).map(function (a) {
                return h.d3.max(k[a])
            }))
        }, B.getYDomain = function (a, b, c) {
            var d, e, f, g, h, i, j, l, m, n, o = this,
                p = o.config,
                q = a.filter(function (a) {
                    return o.axis.getId(a.id) === b
                }),
                r = c ? o.filterByXDomain(q, c) : q,
                t = "y2" === b ? p.axis_y2_min : p.axis_y_min,
                v = "y2" === b ? p.axis_y2_max : p.axis_y_max,
                w = o.getYDomainMin(r),
                x = o.getYDomainMax(r),
                y = "y2" === b ? p.axis_y2_center : p.axis_y_center,
                z = o.hasType("bar", r) && p.bar_zerobased || o.hasType("area", r) && p.area_zerobased,
                A = "y2" === b ? p.axis_y2_inverted : p.axis_y_inverted,
                B = o.hasDataLabel() && p.axis_rotated,
                C = o.hasDataLabel() && !p.axis_rotated;
            return w = k(t) ? t : k(v) ? w < v ? w : v - 10 : w, x = k(v) ? v : k(t) ? t < x ? x : t + 10 : x, 0 === r.length ? "y2" === b ? o.y2.domain() : o.y.domain() : (isNaN(w) && (w = 0), isNaN(x) && (x = w), w === x && (w < 0 ? x = 0 : w = 0), m = w >= 0 && x >= 0, n = w <= 0 && x <= 0, (k(t) && m || k(v) && n) && (z = !1), z && (m && (w = 0), n && (x = 0)), e = Math.abs(x - w), f = g = .1 * e, void 0 !== y && (x = y + (h = Math.max(Math.abs(w), Math.abs(x))), w = y - h), B ? (i = o.getDataLabelLength(w, x, "width"), j = s(o.y.range()), f += e * ((l = [i[0] / j, i[1] / j])[1] / (1 - l[0] - l[1])), g += e * (l[0] / (1 - l[0] - l[1]))) : C && (i = o.getDataLabelLength(w, x, "height"), f += o.axis.convertPixelsToAxisPadding(i[1], e), g += o.axis.convertPixelsToAxisPadding(i[0], e)), "y" === b && u(p.axis_y_padding) && (f = o.axis.getPadding(p.axis_y_padding, "top", f, e), g = o.axis.getPadding(p.axis_y_padding, "bottom", g, e)), "y2" === b && u(p.axis_y2_padding) && (f = o.axis.getPadding(p.axis_y2_padding, "top", f, e), g = o.axis.getPadding(p.axis_y2_padding, "bottom", g, e)), z && (m && (g = w), n && (f = -x)), d = [w - g, x + f], A ? d.reverse() : d)
        }, B.getXDomainMin = function (a) {
            var b = this,
                c = b.config;
            return void 0 !== c.axis_x_min ? b.isTimeSeries() ? this.parseDate(c.axis_x_min) : c.axis_x_min : b.d3.min(a, function (a) {
                return b.d3.min(a.values, function (a) {
                    return a.x
                })
            })
        }, B.getXDomainMax = function (a) {
            var b = this,
                c = b.config;
            return void 0 !== c.axis_x_max ? b.isTimeSeries() ? this.parseDate(c.axis_x_max) : c.axis_x_max : b.d3.max(a, function (a) {
                return b.d3.max(a.values, function (a) {
                    return a.x
                })
            })
        }, B.getXDomainPadding = function (a) {
            var b, c, d, e, f = this,
                h = f.config,
                i = a[1] - a[0];
            return c = f.isCategorized() ? 0 : f.hasType("bar") ? (b = f.getMaxDataCount()) > 1 ? i / (b - 1) / 2 : .5 : .01 * i, "object" === g(h.axis_x_padding) && u(h.axis_x_padding) ? (d = k(h.axis_x_padding.left) ? h.axis_x_padding.left : c, e = k(h.axis_x_padding.right) ? h.axis_x_padding.right : c) : d = e = "number" == typeof h.axis_x_padding ? h.axis_x_padding : c, {
                left: d,
                right: e
            }
        }, B.getXDomain = function (a) {
            var b = this,
                c = [b.getXDomainMin(a), b.getXDomainMax(a)],
                d = c[0],
                e = c[1],
                f = b.getXDomainPadding(c),
                g = 0,
                h = 0;
            return d - e != 0 || b.isCategorized() || (b.isTimeSeries() ? (d = new Date(.5 * d.getTime()), e = new Date(1.5 * e.getTime())) : (d = 0 === d ? 1 : .5 * d, e = 0 === e ? -1 : 1.5 * e)), (d || 0 === d) && (g = b.isTimeSeries() ? new Date(d.getTime() - f.left) : d - f.left), (e || 0 === e) && (h = b.isTimeSeries() ? new Date(e.getTime() + f.right) : e + f.right), [g, h]
        }, B.updateXDomain = function (a, b, c, d, e) {
            var f = this,
                g = f.config;
            return c && (f.x.domain(e || f.d3.extent(f.getXDomain(a))), f.orgXDomain = f.x.domain(), g.zoom_enabled && f.zoom.scale(f.x).updateScaleExtent(), f.subX.domain(f.x.domain()), f.brush && f.brush.scale(f.subX)), b && (f.x.domain(e || (!f.brush || f.brush.empty() ? f.orgXDomain : f.brush.extent())), g.zoom_enabled && f.zoom.scale(f.x).updateScaleExtent()), d && f.x.domain(f.trimXDomain(f.x.orgDomain())), f.x.domain()
        }, B.trimXDomain = function (a) {
            var b = this.getZoomDomain(),
                c = b[0],
                d = b[1];
            return a[0] <= c && (a[1] = +a[1] + (c - a[0]), a[0] = c), d <= a[1] && (a[0] = +a[0] - (a[1] - d), a[1] = d), a
        }, B.drag = function (a) {
            var b, c, d, e, g, h, i, j, k = this,
                l = k.config,
                m = k.main,
                n = k.d3;
            k.hasArcType() || l.data_selection_enabled && (l.zoom_enabled && !k.zoom.altDomain || l.data_selection_multiple && (b = k.dragStart[0], c = k.dragStart[1], d = a[0], e = a[1], g = Math.min(b, d), h = Math.max(b, d), i = l.data_selection_grouped ? k.margin.top : Math.min(c, e), j = l.data_selection_grouped ? k.height : Math.max(c, e), m.select("." + f.dragarea).attr("x", g).attr("y", i).attr("width", h - g).attr("height", j - i), m.selectAll("." + f.shapes).selectAll("." + f.shape).filter(function (a) {
                return l.data_selection_isselectable(a)
            }).each(function (a, b) {
                var c, d, e, l, m, o, p = n.select(this),
                    q = p.classed(f.SELECTED),
                    r = p.classed(f.INCLUDED),
                    s = !1;
                if (p.classed(f.circle)) c = 1 * p.attr("cx"), d = 1 * p.attr("cy"), m = k.togglePoint, s = g < c && c < h && i < d && d < j;
                else {
                    if (!p.classed(f.bar)) return;
                    c = (o = y(this)).x, d = o.y, e = o.width, l = o.height, m = k.togglePath, s = !(h < c || c + e < g || j < d || d + l < i)
                }
                s ^ r && (p.classed(f.INCLUDED, !r), p.classed(f.SELECTED, !q), m.call(k, !q, p, a, b))
            })))
        }, B.dragstart = function (a) {
            var b = this,
                c = b.config;
            b.hasArcType() || c.data_selection_enabled && (b.dragStart = a, b.main.select("." + f.chart).append("rect").attr("class", f.dragarea).style("opacity", .1), b.dragging = !0)
        }, B.dragend = function () {
            var a = this,
                b = a.config;
            a.hasArcType() || b.data_selection_enabled && (a.main.select("." + f.dragarea).transition().duration(100).style("opacity", 0).remove(), a.main.selectAll("." + f.shape).classed(f.INCLUDED, !1), a.dragging = !1)
        }, B.getYFormat = function (a) {
            var b = this,
                c = a && !b.hasType("gauge") ? b.defaultArcValueFormat : b.yFormat,
                d = a && !b.hasType("gauge") ? b.defaultArcValueFormat : b.y2Format;
            return function (a, e, f) {
                return ("y2" === b.axis.getId(f) ? d : c).call(b, a, e)
            }
        }, B.yFormat = function (a) {
            var b = this,
                c = b.config;
            return (c.axis_y_tick_format ? c.axis_y_tick_format : b.defaultValueFormat)(a)
        }, B.y2Format = function (a) {
            var b = this,
                c = b.config;
            return (c.axis_y2_tick_format ? c.axis_y2_tick_format : b.defaultValueFormat)(a)
        }, B.defaultValueFormat = function (a) {
            return k(a) ? +a : ""
        }, B.defaultArcValueFormat = function (a, b) {
            return (100 * b).toFixed(1) + "%"
        }, B.dataLabelFormat = function (a) {
            var b = this.config.data_labels,
                c = function (a) {
                    return k(a) ? +a : ""
                };
            return "function" == typeof b.format ? b.format : "object" === g(b.format) ? b.format[a] ? !0 === b.format[a] ? c : b.format[a] : function () {
                return ""
            } : c
        }, B.initGrid = function () {
            var a = this,
                b = a.config,
                c = a.d3;
            a.grid = a.main.append("g").attr("clip-path", a.clipPathForGrid).attr("class", f.grid), b.grid_x_show && a.grid.append("g").attr("class", f.xgrids), b.grid_y_show && a.grid.append("g").attr("class", f.ygrids), b.grid_focus_show && a.grid.append("g").attr("class", f.xgridFocus).append("line").attr("class", f.xgridFocus), a.xgrid = c.selectAll([]), b.grid_lines_front || a.initGridLines()
        }, B.initGridLines = function () {
            var a = this,
                b = a.d3;
            a.gridLines = a.main.append("g").attr("clip-path", a.clipPathForGrid).attr("class", f.grid + " " + f.gridLines), a.gridLines.append("g").attr("class", f.xgridLines), a.gridLines.append("g").attr("class", f.ygridLines), a.xgridLines = b.selectAll([])
        }, B.updateXGrid = function (a) {
            var b = this,
                c = b.config,
                d = b.d3,
                e = b.generateGridData(c.grid_x_type, b.x),
                g = b.isCategorized() ? b.xAxis.tickOffset() : 0;
            b.xgridAttr = c.axis_rotated ? {
                x1: 0,
                x2: b.width,
                y1: function (a) {
                    return b.x(a) - g
                },
                y2: function (a) {
                    return b.x(a) - g
                }
            } : {
                x1: function (a) {
                    return b.x(a) + g
                },
                x2: function (a) {
                    return b.x(a) + g
                },
                y1: 0,
                y2: b.height
            }, b.xgrid = b.main.select("." + f.xgrids).selectAll("." + f.xgrid).data(e), b.xgrid.enter().append("line").attr("class", f.xgrid), a || b.xgrid.attr(b.xgridAttr).style("opacity", function () {
                return +d.select(this).attr(c.axis_rotated ? "y1" : "x1") === (c.axis_rotated ? b.height : 0) ? 0 : 1
            }), b.xgrid.exit().remove()
        }, B.updateYGrid = function () {
            var a = this,
                b = a.config,
                c = a.yAxis.tickValues() || a.y.ticks(b.grid_y_ticks);
            a.ygrid = a.main.select("." + f.ygrids).selectAll("." + f.ygrid).data(c), a.ygrid.enter().append("line").attr("class", f.ygrid), a.ygrid.attr("x1", b.axis_rotated ? a.y : 0).attr("x2", b.axis_rotated ? a.y : a.width).attr("y1", b.axis_rotated ? 0 : a.y).attr("y2", b.axis_rotated ? a.height : a.y), a.ygrid.exit().remove(), a.smoothLines(a.ygrid, "grid")
        }, B.gridTextAnchor = function (a) {
            return a.position ? a.position : "end"
        }, B.gridTextDx = function (a) {
            return "start" === a.position ? 4 : "middle" === a.position ? 0 : -4
        }, B.xGridTextX = function (a) {
            return "start" === a.position ? -this.height : "middle" === a.position ? -this.height / 2 : 0
        }, B.yGridTextX = function (a) {
            return "start" === a.position ? 0 : "middle" === a.position ? this.width / 2 : this.width
        }, B.updateGrid = function (a) {
            var b, c, d, e = this,
                g = e.main,
                h = e.config;
            e.grid.style("visibility", e.hasArcType() ? "hidden" : "visible"), g.select("line." + f.xgridFocus).style("visibility", "hidden"), h.grid_x_show && e.updateXGrid(), e.xgridLines = g.select("." + f.xgridLines).selectAll("." + f.xgridLine).data(h.grid_x_lines), (b = e.xgridLines.enter().append("g").attr("class", function (a) {
                return f.xgridLine + (a.class ? " " + a.class : "")
            })).append("line").style("opacity", 0), b.append("text").attr("text-anchor", e.gridTextAnchor).attr("transform", h.axis_rotated ? "" : "rotate(-90)").attr("dx", e.gridTextDx).attr("dy", -5).style("opacity", 0), e.xgridLines.exit().transition().duration(a).style("opacity", 0).remove(), h.grid_y_show && e.updateYGrid(), e.ygridLines = g.select("." + f.ygridLines).selectAll("." + f.ygridLine).data(h.grid_y_lines), (c = e.ygridLines.enter().append("g").attr("class", function (a) {
                return f.ygridLine + (a.class ? " " + a.class : "")
            })).append("line").style("opacity", 0), c.append("text").attr("text-anchor", e.gridTextAnchor).attr("transform", h.axis_rotated ? "rotate(-90)" : "").attr("dx", e.gridTextDx).attr("dy", -5).style("opacity", 0), d = e.yv.bind(e), e.ygridLines.select("line").transition().duration(a).attr("x1", h.axis_rotated ? d : 0).attr("x2", h.axis_rotated ? d : e.width).attr("y1", h.axis_rotated ? 0 : d).attr("y2", h.axis_rotated ? e.height : d).style("opacity", 1), e.ygridLines.select("text").transition().duration(a).attr("x", h.axis_rotated ? e.xGridTextX.bind(e) : e.yGridTextX.bind(e)).attr("y", d).text(function (a) {
                return a.text
            }).style("opacity", 1), e.ygridLines.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawGrid = function (a) {
            var b = this,
                c = b.config,
                d = b.xv.bind(b),
                e = b.xgridLines.select("line"),
                f = b.xgridLines.select("text");
            return [(a ? e.transition() : e).attr("x1", c.axis_rotated ? 0 : d).attr("x2", c.axis_rotated ? b.width : d).attr("y1", c.axis_rotated ? d : 0).attr("y2", c.axis_rotated ? d : b.height).style("opacity", 1), (a ? f.transition() : f).attr("x", c.axis_rotated ? b.yGridTextX.bind(b) : b.xGridTextX.bind(b)).attr("y", d).text(function (a) {
                return a.text
            }).style("opacity", 1)]
        }, B.showXGridFocus = function (a) {
            var b = this,
                c = b.config,
                d = a.filter(function (a) {
                    return a && k(a.value)
                }),
                e = b.main.selectAll("line." + f.xgridFocus),
                g = b.xx.bind(b);
            c.tooltip_show && (b.hasType("scatter") || b.hasArcType() || (e.style("visibility", "visible").data([d[0]]).attr(c.axis_rotated ? "y1" : "x1", g).attr(c.axis_rotated ? "y2" : "x2", g), b.smoothLines(e, "grid")))
        }, B.hideXGridFocus = function () {
            this.main.select("line." + f.xgridFocus).style("visibility", "hidden")
        }, B.updateXgridFocus = function () {
            var a = this,
                b = a.config;
            a.main.select("line." + f.xgridFocus).attr("x1", b.axis_rotated ? 0 : -10).attr("x2", b.axis_rotated ? a.width : -10).attr("y1", b.axis_rotated ? -10 : 0).attr("y2", b.axis_rotated ? -10 : a.height)
        }, B.generateGridData = function (a, b) {
            var c, d, e, g, h = this,
                i = [],
                j = h.main.select("." + f.axisX).selectAll(".tick").size();
            if ("year" === a)
                for (d = (c = h.getXDomain())[0].getFullYear(), e = c[1].getFullYear(), g = d; g <= e; g++) i.push(new Date(g + "-01-01 00:00:00"));
            else (i = b.ticks(10)).length > j && (i = i.filter(function (a) {
                return ("" + a).indexOf(".") < 0
            }));
            return i
        }, B.getGridFilterToRemove = function (a) {
            return a ? function (b) {
                var c = !1;
                return [].concat(a).forEach(function (a) {
                    ("value" in a && b.value === a.value || "class" in a && b.class === a.class) && (c = !0)
                }), c
            } : function () {
                return !0
            }
        }, B.removeGridLines = function (a, b) {
            var c = this,
                d = c.config,
                e = c.getGridFilterToRemove(a),
                g = function (a) {
                    return !e(a)
                },
                h = b ? f.xgridLines : f.ygridLines,
                i = b ? f.xgridLine : f.ygridLine;
            c.main.select("." + h).selectAll("." + i).filter(e).transition().duration(d.transition_duration).style("opacity", 0).remove(), b ? d.grid_x_lines = d.grid_x_lines.filter(g) : d.grid_y_lines = d.grid_y_lines.filter(g)
        }, B.initEventRect = function () {
            this.main.select("." + f.chart).append("g").attr("class", f.eventRects).style("fill-opacity", 0)
        }, B.redrawEventRect = function () {
            var a, b, c = this,
                d = c.config,
                e = c.isMultipleX(),
                g = c.main.select("." + f.eventRects).style("cursor", d.zoom_enabled ? d.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(f.eventRectsMultiple, e).classed(f.eventRectsSingle, !e);
            g.selectAll("." + f.eventRect).remove(), c.eventRect = g.selectAll("." + f.eventRect), e ? (a = c.eventRect.data([0]), c.generateEventRectsForMultipleXs(a.enter()), c.updateEventRect(a)) : (b = c.getMaxDataCountTarget(c.data.targets), g.datum(b ? b.values : []), c.eventRect = g.selectAll("." + f.eventRect), a = c.eventRect.data(function (a) {
                return a
            }), c.generateEventRectsForSingleX(a.enter()), c.updateEventRect(a), a.exit().remove())
        }, B.updateEventRect = function (a) {
            var b, c, d, e, f, g, h = this,
                i = h.config;
            a = a || h.eventRect.data(function (a) {
                return a
            }), h.isMultipleX() ? (b = 0, c = 0, d = h.width, e = h.height) : (!h.isCustomX() && !h.isTimeSeries() || h.isCategorized() ? (f = h.getEventRectWidth(), g = function (a) {
                return h.x(a.x) - f / 2
            }) : (h.updateXs(), f = function (a) {
                var b = h.getPrevX(a.index),
                    c = h.getNextX(a.index);
                return null === b && null === c ? i.axis_rotated ? h.height : h.width : (null === b && (b = h.x.domain()[0]), null === c && (c = h.x.domain()[1]), Math.max(0, (h.x(c) - h.x(b)) / 2))
            }, g = function (a) {
                var b = h.getPrevX(a.index),
                    c = h.getNextX(a.index),
                    d = h.data.xs[a.id][a.index];
                return null === b && null === c ? 0 : (null === b && (b = h.x.domain()[0]), (h.x(d) + h.x(b)) / 2)
            }), b = i.axis_rotated ? 0 : g, c = i.axis_rotated ? g : 0, d = i.axis_rotated ? h.width : f, e = i.axis_rotated ? f : h.height), a.attr("class", h.classEvent.bind(h)).attr("x", b).attr("y", c).attr("width", d).attr("height", e)
        }, B.generateEventRectsForSingleX = function (a) {
            var b = this,
                c = b.d3,
                d = b.config;
            a.append("rect").attr("class", b.classEvent.bind(b)).style("cursor", d.data_selection_enabled && d.data_selection_grouped ? "pointer" : null).on("mouseover", function (a) {
                var c = a.index;
                b.dragging || b.flowing || b.hasArcType() || (d.point_focus_expand_enabled && b.expandCircles(c, null, !0), b.expandBars(c, null, !0), b.main.selectAll("." + f.shape + "-" + c).each(function (a) {
                    d.data_onmouseover.call(b.api, a)
                }))
            }).on("mouseout", function (a) {
                var c = a.index;
                b.config && (b.hasArcType() || (b.hideXGridFocus(), b.hideTooltip(), b.unexpandCircles(), b.unexpandBars(), b.main.selectAll("." + f.shape + "-" + c).each(function (a) {
                    d.data_onmouseout.call(b.api, a)
                })))
            }).on("mousemove", function (a) {
                var e, g = a.index,
                    h = b.svg.select("." + f.eventRect + "-" + g);
                b.dragging || b.flowing || b.hasArcType() || (b.isStepType(a) && "step-after" === b.config.line_step_type && c.mouse(this)[0] < b.x(b.getXValue(a.id, g)) && (g -= 1), e = b.filterTargetsToShow(b.data.targets).map(function (a) {
                    return b.addName(b.getValueOnIndex(a.values, g))
                }), d.tooltip_grouped && (b.showTooltip(e, this), b.showXGridFocus(e)), (!d.tooltip_grouped || d.data_selection_enabled && !d.data_selection_grouped) && b.main.selectAll("." + f.shape + "-" + g).each(function () {
                    c.select(this).classed(f.EXPANDED, !0), d.data_selection_enabled && h.style("cursor", d.data_selection_grouped ? "pointer" : null), d.tooltip_grouped || (b.hideXGridFocus(), b.hideTooltip(), d.data_selection_grouped || (b.unexpandCircles(g), b.unexpandBars(g)))
                }).filter(function (a) {
                    return b.isWithinShape(this, a)
                }).each(function (a) {
                    d.data_selection_enabled && (d.data_selection_grouped || d.data_selection_isselectable(a)) && h.style("cursor", "pointer"), d.tooltip_grouped || (b.showTooltip([a], this), b.showXGridFocus([a]), d.point_focus_expand_enabled && b.expandCircles(g, a.id, !0), b.expandBars(g, a.id, !0))
                }))
            }).on("click", function (a) {
                var e = a.index;
                !b.hasArcType() && b.toggleShape && (b.cancelClick ? b.cancelClick = !1 : (b.isStepType(a) && "step-after" === d.line_step_type && c.mouse(this)[0] < b.x(b.getXValue(a.id, e)) && (e -= 1), b.main.selectAll("." + f.shape + "-" + e).each(function (a) {
                    (d.data_selection_grouped || b.isWithinShape(this, a)) && (b.toggleShape(this, a, e), b.config.data_onclick.call(b.api, a, this))
                })))
            }).call(d.data_selection_draggable && b.drag ? c.behavior.drag().origin(Object).on("drag", function () {
                b.drag(c.mouse(this))
            }).on("dragstart", function () {
                b.dragstart(c.mouse(this))
            }).on("dragend", function () {
                b.dragend()
            }) : function () { })
        }, B.generateEventRectsForMultipleXs = function (a) {
            function b() {
                c.svg.select("." + f.eventRect).style("cursor", null), c.hideXGridFocus(), c.hideTooltip(), c.unexpandCircles(), c.unexpandBars()
            }
            var c = this,
                d = c.d3,
                e = c.config;
            a.append("rect").attr("x", 0).attr("y", 0).attr("width", c.width).attr("height", c.height).attr("class", f.eventRect).on("mouseout", function () {
                c.config && (c.hasArcType() || b())
            }).on("mousemove", function () {
                var a, g, h, i = c.filterTargetsToShow(c.data.targets);
                c.dragging || c.hasArcType(i) || (a = d.mouse(this), g = c.findClosestFromTargets(i, a), !c.mouseover || g && g.id === c.mouseover.id || (e.data_onmouseout.call(c.api, c.mouseover), c.mouseover = void 0), g ? (h = (c.isScatterType(g) || !e.tooltip_grouped ? [g] : c.filterByX(i, g.x)).map(function (a) {
                    return c.addName(a)
                }), c.showTooltip(h, this), e.point_focus_expand_enabled && c.expandCircles(g.index, g.id, !0), c.expandBars(g.index, g.id, !0), c.showXGridFocus(h), (c.isBarType(g.id) || c.dist(g, a) < e.point_sensitivity) && (c.svg.select("." + f.eventRect).style("cursor", "pointer"), c.mouseover || (e.data_onmouseover.call(c.api, g), c.mouseover = g))) : b())
            }).on("click", function () {
                var a, b, g = c.filterTargetsToShow(c.data.targets);
                c.hasArcType(g) || (a = d.mouse(this), (b = c.findClosestFromTargets(g, a)) && (c.isBarType(b.id) || c.dist(b, a) < e.point_sensitivity) && c.main.selectAll("." + f.shapes + c.getTargetSelectorSuffix(b.id)).selectAll("." + f.shape + "-" + b.index).each(function () {
                    (e.data_selection_grouped || c.isWithinShape(this, b)) && (c.toggleShape(this, b, b.index), c.config.data_onclick.call(c.api, b, this))
                }))
            }).call(e.data_selection_draggable && c.drag ? d.behavior.drag().origin(Object).on("drag", function () {
                c.drag(d.mouse(this))
            }).on("dragstart", function () {
                c.dragstart(d.mouse(this))
            }).on("dragend", function () {
                c.dragend()
            }) : function () { })
        }, B.dispatchEvent = function (a, b, c) {
            var d = this,
                e = "." + f.eventRect + (d.isMultipleX() ? "" : "-" + b),
                g = d.main.select(e).node(),
                h = g.getBoundingClientRect(),
                i = h.left + (c ? c[0] : 0),
                j = h.top + (c ? c[1] : 0),
                k = document.createEvent("MouseEvents");
            k.initMouseEvent(a, !0, !0, window, 0, i, j, i, j, !1, !1, !1, !1, 0, null), g.dispatchEvent(k)
        }, B.initLegend = function () {
            var a = this;
            if (a.legendItemTextBox = {}, a.legendHasRendered = !1, a.legend = a.svg.append("g").attr("transform", a.getTranslate("legend")), !a.config.legend_show) return a.legend.style("visibility", "hidden"), void (a.hiddenLegendIds = a.mapToIds(a.data.targets));
            a.updateLegendWithDefaults()
        }, B.updateLegendWithDefaults = function () {
            var a = this;
            a.updateLegend(a.mapToIds(a.data.targets), {
                withTransform: !1,
                withTransitionForTransform: !1,
                withTransition: !1
            })
        }, B.updateSizeForLegend = function (a, b) {
            var c = this,
                d = c.config,
                e = {
                    top: c.isLegendTop ? c.getCurrentPaddingTop() + d.legend_inset_y + 5.5 : c.currentHeight - a - c.getCurrentPaddingBottom() - d.legend_inset_y,
                    left: c.isLegendLeft ? c.getCurrentPaddingLeft() + d.legend_inset_x + .5 : c.currentWidth - b - c.getCurrentPaddingRight() - d.legend_inset_x + .5
                };
            c.margin3 = {
                top: c.isLegendRight ? 0 : c.isLegendInset ? e.top : c.currentHeight - a,
                right: NaN,
                bottom: 0,
                left: c.isLegendRight ? c.currentWidth - b : c.isLegendInset ? e.left : 0
            }
        }, B.transformLegend = function (a) {
            var b = this;
            (a ? b.legend.transition() : b.legend).attr("transform", b.getTranslate("legend"))
        }, B.updateLegendStep = function (a) {
            this.legendStep = a
        }, B.updateLegendItemWidth = function (a) {
            this.legendItemWidth = a
        }, B.updateLegendItemHeight = function (a) {
            this.legendItemHeight = a
        }, B.getLegendWidth = function () {
            var a = this;
            return a.config.legend_show ? a.isLegendRight || a.isLegendInset ? a.legendItemWidth * (a.legendStep + 1) : a.currentWidth : 0
        }, B.getLegendHeight = function () {
            var a = this,
                b = 0;
            return a.config.legend_show && (b = a.isLegendRight ? a.currentHeight : Math.max(20, a.legendItemHeight) * (a.legendStep + 1)), b
        }, B.opacityForLegend = function (a) {
            return a.classed(f.legendItemHidden) ? null : 1
        }, B.opacityForUnfocusedLegend = function (a) {
            return a.classed(f.legendItemHidden) ? null : .3
        }, B.toggleFocusLegend = function (a, b) {
            var c = this;
            a = c.mapToTargetIds(a), c.legend.selectAll("." + f.legendItem).filter(function (b) {
                return a.indexOf(b) >= 0
            }).classed(f.legendItemFocused, b).transition().duration(100).style("opacity", function () {
                return (b ? c.opacityForLegend : c.opacityForUnfocusedLegend).call(c, c.d3.select(this))
            })
        }, B.revertLegend = function () {
            var a = this,
                b = a.d3;
            a.legend.selectAll("." + f.legendItem).classed(f.legendItemFocused, !1).transition().duration(100).style("opacity", function () {
                return a.opacityForLegend(b.select(this))
            })
        }, B.showLegend = function (a) {
            var b = this,
                c = b.config;
            c.legend_show || (c.legend_show = !0, b.legend.style("visibility", "visible"), b.legendHasRendered || b.updateLegendWithDefaults()), b.removeHiddenLegendIds(a), b.legend.selectAll(b.selectorLegends(a)).style("visibility", "visible").transition().style("opacity", function () {
                return b.opacityForLegend(b.d3.select(this))
            })
        }, B.hideLegend = function (a) {
            var b = this,
                c = b.config;
            c.legend_show && t(a) && (c.legend_show = !1, b.legend.style("visibility", "hidden")), b.addHiddenLegendIds(a), b.legend.selectAll(b.selectorLegends(a)).style("opacity", 0).style("visibility", "hidden")
        }, B.clearLegendItemTextBoxCache = function () {
            this.legendItemTextBox = {}
        }, B.updateLegend = function (a, b, c) {
            function d(a, b) {
                return x.legendItemTextBox[b] || (x.legendItemTextBox[b] = x.getTextRect(a.textContent, f.legendItem, a)), x.legendItemTextBox[b]
            }

            function e(b, c, e) {
                function f(a, b) {
                    b || (g = (o - F - n) / 2) < D && (g = (o - n) / 2, F = 0, L++), K[a] = L, J[L] = x.isLegendInset ? 10 : g, G[a] = F, F += n
                }
                var g, h, i = 0 === e,
                    j = e === a.length - 1,
                    k = d(b, c),
                    l = k.width + E + (!j || x.isLegendRight || x.isLegendInset ? A : 0) + y.legend_padding,
                    m = k.height + z,
                    n = x.isLegendRight || x.isLegendInset ? m : l,
                    o = x.isLegendRight || x.isLegendInset ? x.getLegendHeight() : x.getLegendWidth();
                i && (F = 0, L = 0, B = 0, C = 0), !y.legend_show || x.isLegendToShow(c) ? (H[c] = l, I[c] = m, (!B || l >= B) && (B = l), (!C || m >= C) && (C = m), h = x.isLegendRight || x.isLegendInset ? C : B, y.legend_equally ? (Object.keys(H).forEach(function (a) {
                    H[a] = B
                }), Object.keys(I).forEach(function (a) {
                    I[a] = C
                }), (g = (o - h * a.length) / 2) < D ? (F = 0, L = 0, a.forEach(function (a) {
                    f(a)
                })) : f(c, !0)) : f(c)) : H[c] = I[c] = K[c] = G[c] = 0
            }
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, w, x = this,
                y = x.config,
                z = 4,
                A = 10,
                B = 0,
                C = 0,
                D = 10,
                E = y.legend_item_tile_width + 5,
                F = 0,
                G = {},
                H = {},
                I = {},
                J = [0],
                K = {},
                L = 0;
            a = a.filter(function (a) {
                return !(void 0 !== y.data_names[a]) || null !== y.data_names[a]
            }), q = v(b = b || {}, "withTransition", !0), r = v(b, "withTransitionForTransform", !0), x.isLegendInset && (L = y.legend_inset_step ? y.legend_inset_step : a.length, x.updateLegendStep(L)), x.isLegendRight ? (g = function (a) {
                return B * K[a]
            }, j = function (a) {
                return J[K[a]] + G[a]
            }) : x.isLegendInset ? (g = function (a) {
                return B * K[a] + 10
            }, j = function (a) {
                return J[K[a]] + G[a]
            }) : (g = function (a) {
                return J[K[a]] + G[a]
            }, j = function (a) {
                return C * K[a]
            }), h = function (a, b) {
                return g(a, b) + 4 + y.legend_item_tile_width
            }, k = function (a, b) {
                return j(a, b) + 9
            }, i = function (a, b) {
                return g(a, b)
            }, l = function (a, b) {
                return j(a, b) - 5
            }, m = function (a, b) {
                return g(a, b) - 2
            }, n = function (a, b) {
                return g(a, b) - 2 + y.legend_item_tile_width
            }, o = function (a, b) {
                return j(a, b) + 4
            }, (p = x.legend.selectAll("." + f.legendItem).data(a).enter().append("g").attr("class", function (a) {
                return x.generateClass(f.legendItem, a)
            }).style("visibility", function (a) {
                return x.isLegendToShow(a) ? "visible" : "hidden"
            }).style("cursor", "pointer").on("click", function (a) {
                y.legend_item_onclick ? y.legend_item_onclick.call(x, a) : x.d3.event.altKey ? (x.api.hide(), x.api.show(a)) : (x.api.toggle(a), x.isTargetToShow(a) ? x.api.focus(a) : x.api.revert())
            }).on("mouseover", function (a) {
                y.legend_item_onmouseover ? y.legend_item_onmouseover.call(x, a) : (x.d3.select(this).classed(f.legendItemFocused, !0), !x.transiting && x.isTargetToShow(a) && x.api.focus(a))
            }).on("mouseout", function (a) {
                y.legend_item_onmouseout ? y.legend_item_onmouseout.call(x, a) : (x.d3.select(this).classed(f.legendItemFocused, !1), x.api.revert())
            })).append("text").text(function (a) {
                return void 0 !== y.data_names[a] ? y.data_names[a] : a
            }).each(function (a, b) {
                e(this, a, b)
            }).style("pointer-events", "none").attr("x", x.isLegendRight || x.isLegendInset ? h : -200).attr("y", x.isLegendRight || x.isLegendInset ? -200 : k), p.append("rect").attr("class", f.legendItemEvent).style("fill-opacity", 0).attr("x", x.isLegendRight || x.isLegendInset ? i : -200).attr("y", x.isLegendRight || x.isLegendInset ? -200 : l), p.append("line").attr("class", f.legendItemTile).style("stroke", x.color).style("pointer-events", "none").attr("x1", x.isLegendRight || x.isLegendInset ? m : -200).attr("y1", x.isLegendRight || x.isLegendInset ? -200 : o).attr("x2", x.isLegendRight || x.isLegendInset ? n : -200).attr("y2", x.isLegendRight || x.isLegendInset ? -200 : o).attr("stroke-width", y.legend_item_tile_height), w = x.legend.select("." + f.legendBackground + " rect"), x.isLegendInset && B > 0 && 0 === w.size() && (w = x.legend.insert("g", "." + f.legendItem).attr("class", f.legendBackground).append("rect")), s = x.legend.selectAll("text").data(a).text(function (a) {
                return void 0 !== y.data_names[a] ? y.data_names[a] : a
            }).each(function (a, b) {
                e(this, a, b)
            }), (q ? s.transition() : s).attr("x", h).attr("y", k), t = x.legend.selectAll("rect." + f.legendItemEvent).data(a), (q ? t.transition() : t).attr("width", function (a) {
                return H[a]
            }).attr("height", function (a) {
                return I[a]
            }).attr("x", i).attr("y", l), u = x.legend.selectAll("line." + f.legendItemTile).data(a), (q ? u.transition() : u).style("stroke", x.color).attr("x1", m).attr("y1", o).attr("x2", n).attr("y2", o), w && (q ? w.transition() : w).attr("height", x.getLegendHeight() - 12).attr("width", B * (L + 1) + 10), x.legend.selectAll("." + f.legendItem).classed(f.legendItemHidden, function (a) {
                return !x.isTargetToShow(a)
            }), x.updateLegendItemWidth(B), x.updateLegendItemHeight(C), x.updateLegendStep(L), x.updateSizes(), x.updateScales(), x.updateSvgSize(), x.transformAll(r, c), x.legendHasRendered = !0
        }, B.initRegion = function () {
            var a = this;
            a.region = a.main.append("g").attr("clip-path", a.clipPath).attr("class", f.regions)
        }, B.updateRegion = function (a) {
            var b = this,
                c = b.config;
            b.region.style("visibility", b.hasArcType() ? "hidden" : "visible"), b.mainRegion = b.main.select("." + f.regions).selectAll("." + f.region).data(c.regions), b.mainRegion.enter().append("g").append("rect").style("fill-opacity", 0), b.mainRegion.attr("class", b.classRegion.bind(b)), b.mainRegion.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawRegion = function (a) {
            var b = this,
                c = b.mainRegion.selectAll("rect").each(function () {
                    var a = b.d3.select(this.parentNode).datum();
                    b.d3.select(this).datum(a)
                }),
                d = b.regionX.bind(b),
                e = b.regionY.bind(b),
                f = b.regionWidth.bind(b),
                g = b.regionHeight.bind(b);
            return [(a ? c.transition() : c).attr("x", d).attr("y", e).attr("width", f).attr("height", g).style("fill-opacity", function (a) {
                return k(a.opacity) ? a.opacity : .1
            })]
        }, B.regionX = function (a) {
            var b = this,
                c = b.config,
                d = "y" === a.axis ? b.y : b.y2;
            return "y" === a.axis || "y2" === a.axis ? c.axis_rotated && "start" in a ? d(a.start) : 0 : c.axis_rotated ? 0 : "start" in a ? b.x(b.isTimeSeries() ? b.parseDate(a.start) : a.start) : 0
        }, B.regionY = function (a) {
            var b = this,
                c = b.config,
                d = "y" === a.axis ? b.y : b.y2;
            return "y" === a.axis || "y2" === a.axis ? c.axis_rotated ? 0 : "end" in a ? d(a.end) : 0 : c.axis_rotated && "start" in a ? b.x(b.isTimeSeries() ? b.parseDate(a.start) : a.start) : 0
        }, B.regionWidth = function (a) {
            var b, c = this,
                d = c.config,
                e = c.regionX(a),
                f = "y" === a.axis ? c.y : c.y2;
            return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated && "end" in a ? f(a.end) : c.width : d.axis_rotated ? c.width : "end" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.end) : a.end) : c.width, b < e ? 0 : b - e
        }, B.regionHeight = function (a) {
            var b, c = this,
                d = c.config,
                e = this.regionY(a),
                f = "y" === a.axis ? c.y : c.y2;
            return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated ? c.height : "start" in a ? f(a.start) : c.height : d.axis_rotated && "end" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.end) : a.end) : c.height, b < e ? 0 : b - e
        }, B.isRegionOnX = function (a) {
            return !a.axis || "x" === a.axis
        }, B.getScale = function (a, b, c) {
            return (c ? this.d3.time.scale() : this.d3.scale.linear()).range([a, b])
        }, B.getX = function (a, b, c, d) {
            var e, f = this,
                g = f.getScale(a, b, f.isTimeSeries()),
                h = c ? g.domain(c) : g;
            f.isCategorized() ? (d = d || function () {
                return 0
            }, g = function (a, b) {
                var c = h(a) + d(a);
                return b ? c : Math.ceil(c)
            }) : g = function (a, b) {
                var c = h(a);
                return b ? c : Math.ceil(c)
            };
            for (e in h) g[e] = h[e];
            return g.orgDomain = function () {
                return h.domain()
            }, f.isCategorized() && (g.domain = function (a) {
                return arguments.length ? (h.domain(a), g) : (a = this.orgDomain(), [a[0], a[1] + 1])
            }), g
        }, B.getY = function (a, b, c) {
            var d = this.getScale(a, b, this.isTimeSeriesY());
            return c && d.domain(c), d
        }, B.getYScale = function (a) {
            return "y2" === this.axis.getId(a) ? this.y2 : this.y
        }, B.getSubYScale = function (a) {
            return "y2" === this.axis.getId(a) ? this.subY2 : this.subY
        }, B.updateScales = function () {
            var a = this,
                b = a.config,
                c = !a.x;
            a.xMin = b.axis_rotated ? 1 : 0, a.xMax = b.axis_rotated ? a.height : a.width, a.yMin = b.axis_rotated ? 0 : a.height, a.yMax = b.axis_rotated ? a.width : 1, a.subXMin = a.xMin, a.subXMax = a.xMax, a.subYMin = b.axis_rotated ? 0 : a.height2, a.subYMax = b.axis_rotated ? a.width2 : 1, a.x = a.getX(a.xMin, a.xMax, c ? void 0 : a.x.orgDomain(), function () {
                return a.xAxis.tickOffset()
            }), a.y = a.getY(a.yMin, a.yMax, c ? b.axis_y_default : a.y.domain()), a.y2 = a.getY(a.yMin, a.yMax, c ? b.axis_y2_default : a.y2.domain()), a.subX = a.getX(a.xMin, a.xMax, a.orgXDomain, function (b) {
                return b % 1 ? 0 : a.subXAxis.tickOffset()
            }), a.subY = a.getY(a.subYMin, a.subYMax, c ? b.axis_y_default : a.subY.domain()), a.subY2 = a.getY(a.subYMin, a.subYMax, c ? b.axis_y2_default : a.subY2.domain()), a.xAxisTickFormat = a.axis.getXAxisTickFormat(), a.xAxisTickValues = a.axis.getXAxisTickValues(), a.yAxisTickValues = a.axis.getYAxisTickValues(), a.y2AxisTickValues = a.axis.getY2AxisTickValues(), a.xAxis = a.axis.getXAxis(a.x, a.xOrient, a.xAxisTickFormat, a.xAxisTickValues, b.axis_x_tick_outer), a.subXAxis = a.axis.getXAxis(a.subX, a.subXOrient, a.xAxisTickFormat, a.xAxisTickValues, b.axis_x_tick_outer), a.yAxis = a.axis.getYAxis(a.y, a.yOrient, b.axis_y_tick_format, a.yAxisTickValues, b.axis_y_tick_outer), a.y2Axis = a.axis.getYAxis(a.y2, a.y2Orient, b.axis_y2_tick_format, a.y2AxisTickValues, b.axis_y2_tick_outer), c || (a.brush && a.brush.scale(a.subX), b.zoom_enabled && a.zoom.scale(a.x)), a.updateArc && a.updateArc()
        }, B.selectPoint = function (a, b, c) {
            var d = this,
                e = d.config,
                g = (e.axis_rotated ? d.circleY : d.circleX).bind(d),
                h = (e.axis_rotated ? d.circleX : d.circleY).bind(d),
                i = d.pointSelectR.bind(d);
            e.data_onselected.call(d.api, b, a.node()), d.main.select("." + f.selectedCircles + d.getTargetSelectorSuffix(b.id)).selectAll("." + f.selectedCircle + "-" + c).data([b]).enter().append("circle").attr("class", function () {
                return d.generateClass(f.selectedCircle, c)
            }).attr("cx", g).attr("cy", h).attr("stroke", function () {
                return d.color(b)
            }).attr("r", function (a) {
                return 1.4 * d.pointSelectR(a)
            }).transition().duration(100).attr("r", i)
        }, B.unselectPoint = function (a, b, c) {
            var d = this;
            d.config.data_onunselected.call(d.api, b, a.node()), d.main.select("." + f.selectedCircles + d.getTargetSelectorSuffix(b.id)).selectAll("." + f.selectedCircle + "-" + c).transition().duration(100).attr("r", 0).remove()
        }, B.togglePoint = function (a, b, c, d) {
            a ? this.selectPoint(b, c, d) : this.unselectPoint(b, c, d)
        }, B.selectPath = function (a, b) {
            var c = this;
            c.config.data_onselected.call(c, b, a.node()), c.config.interaction_brighten && a.transition().duration(100).style("fill", function () {
                return c.d3.rgb(c.color(b)).brighter(.75)
            })
        }, B.unselectPath = function (a, b) {
            var c = this;
            c.config.data_onunselected.call(c, b, a.node()), c.config.interaction_brighten && a.transition().duration(100).style("fill", function () {
                return c.color(b)
            })
        }, B.togglePath = function (a, b, c, d) {
            a ? this.selectPath(b, c, d) : this.unselectPath(b, c, d)
        }, B.getToggle = function (a, b) {
            var c, d = this;
            return "circle" === a.nodeName ? c = d.isStepType(b) ? function () { } : d.togglePoint : "path" === a.nodeName && (c = d.togglePath), c
        }, B.toggleShape = function (a, b, c) {
            var d = this,
                e = d.d3,
                g = d.config,
                h = e.select(a),
                i = h.classed(f.SELECTED),
                j = d.getToggle(a, b).bind(d);
            g.data_selection_enabled && g.data_selection_isselectable(b) && (g.data_selection_multiple || d.main.selectAll("." + f.shapes + (g.data_selection_grouped ? d.getTargetSelectorSuffix(b.id) : "")).selectAll("." + f.shape).each(function (a, b) {
                var c = e.select(this);
                c.classed(f.SELECTED) && j(!1, c.classed(f.SELECTED, !1), a, b)
            }), h.classed(f.SELECTED, !i), j(!i, h, b, c))
        }, B.initBar = function () {
            this.main.select("." + f.chart).append("g").attr("class", f.chartBars)
        }, B.updateTargetsForBar = function (a) {
            var b = this,
                c = b.config,
                d = b.classChartBar.bind(b),
                e = b.classBars.bind(b),
                g = b.classFocus.bind(b);
            b.main.select("." + f.chartBars).selectAll("." + f.chartBar).data(a).attr("class", function (a) {
                return d(a) + g(a)
            }).enter().append("g").attr("class", d).style("pointer-events", "none").append("g").attr("class", e).style("cursor", function (a) {
                return c.data_selection_isselectable(a) ? "pointer" : null
            })
        }, B.updateBar = function (a) {
            var b = this,
                c = b.barData.bind(b),
                d = b.classBar.bind(b),
                e = b.initialOpacity.bind(b),
                g = function (a) {
                    return b.color(a.id)
                };
            b.mainBar = b.main.selectAll("." + f.bars).selectAll("." + f.bar).data(c), b.mainBar.enter().append("path").attr("class", d).style("stroke", g).style("fill", g), b.mainBar.style("opacity", e), b.mainBar.exit().transition().duration(a).remove()
        }, B.redrawBar = function (a, b) {
            return [(b ? this.mainBar.transition(Math.random().toString()) : this.mainBar).attr("d", a).style("stroke", this.color).style("fill", this.color).style("opacity", 1)]
        }, B.getBarW = function (a, b) {
            var c = this.config,
                d = "number" == typeof c.bar_width ? c.bar_width : b ? a.tickInterval() * c.bar_width_ratio / b : 0;
            return c.bar_width_max && d > c.bar_width_max ? c.bar_width_max : d
        }, B.getBars = function (a, b) {
            var c = this;
            return (b ? c.main.selectAll("." + f.bars + c.getTargetSelectorSuffix(b)) : c.main).selectAll("." + f.bar + (k(a) ? "-" + a : ""))
        }, B.expandBars = function (a, b, c) {
            var d = this;
            c && d.unexpandBars(), d.getBars(a, b).classed(f.EXPANDED, !0)
        }, B.unexpandBars = function (a) {
            this.getBars(a).classed(f.EXPANDED, !1)
        }, B.generateDrawBar = function (a, b) {
            var c = this,
                d = c.config,
                e = c.generateGetBarPoints(a, b);
            return function (a, b) {
                var c = e(a, b),
                    f = d.axis_rotated ? 1 : 0,
                    g = d.axis_rotated ? 0 : 1;
                return "M " + c[0][f] + "," + c[0][g] + " L" + c[1][f] + "," + c[1][g] + " L" + c[2][f] + "," + c[2][g] + " L" + c[3][f] + "," + c[3][g] + " z"
            }
        }, B.generateGetBarPoints = function (a, b) {
            var c = this,
                d = b ? c.subXAxis : c.xAxis,
                e = a.__max__ + 1,
                f = c.getBarW(d, e),
                g = c.getShapeX(f, e, a, !!b),
                h = c.getShapeY(!!b),
                i = c.getShapeOffset(c.isBarType, a, !!b),
                j = f * (c.config.bar_space / 2),
                k = b ? c.getSubYScale : c.getYScale;
            return function (a, b) {
                var d = k.call(c, a.id)(0),
                    e = i(a, b) || d,
                    l = g(a),
                    m = h(a);
                return c.config.axis_rotated && (0 < a.value && m < d || a.value < 0 && d < m) && (m = d), [
                    [l + j, e],
                    [l + j, m - (d - e)],
                    [l + f - j, m - (d - e)],
                    [l + f - j, e]
                ]
            }
        }, B.isWithinBar = function (a) {
            var b = this.d3.mouse(a),
                c = a.getBoundingClientRect(),
                d = a.pathSegList.getItem(0),
                e = a.pathSegList.getItem(1),
                f = Math.min(d.x, e.x),
                g = Math.min(d.y, e.y),
                h = f + c.width + 2,
                i = g + c.height + 2,
                j = g - 2;
            return f - 2 < b[0] && b[0] < h && j < b[1] && b[1] < i
        }, B.getShapeIndices = function (a) {
            var b, c, d = this,
                e = d.config,
                f = {},
                g = 0;
            return d.filterTargetsToShow(d.data.targets.filter(a, d)).forEach(function (a) {
                for (b = 0; b < e.data_groups.length; b++)
                    if (!(e.data_groups[b].indexOf(a.id) < 0))
                        for (c = 0; c < e.data_groups[b].length; c++)
                            if (e.data_groups[b][c] in f) {
                                f[a.id] = f[e.data_groups[b][c]];
                                break
                            } void 0 === f[a.id] && (f[a.id] = g++)
            }), f.__max__ = g - 1, f
        }, B.getShapeX = function (a, b, c, d) {
            var e = this,
                f = d ? e.subX : e.x;
            return function (d) {
                var e = d.id in c ? c[d.id] : 0;
                return d.x || 0 === d.x ? f(d.x) - a * (b / 2 - e) : 0
            }
        }, B.getShapeY = function (a) {
            var b = this;
            return function (c) {
                return (a ? b.getSubYScale(c.id) : b.getYScale(c.id))(c.value)
            }
        }, B.getShapeOffset = function (a, b, c) {
            var d = this,
                e = d.orderTargets(d.filterTargetsToShow(d.data.targets.filter(a, d))),
                f = e.map(function (a) {
                    return a.id
                });
            return function (a, g) {
                var h = c ? d.getSubYScale(a.id) : d.getYScale(a.id),
                    i = h(0),
                    j = i;
                return e.forEach(function (c) {
                    var e = d.isStepType(a) ? d.convertValuesToStep(c.values) : c.values;
                    c.id !== a.id && b[c.id] === b[a.id] && f.indexOf(c.id) < f.indexOf(a.id) && (void 0 !== e[g] && +e[g].x == +a.x || (g = -1, e.forEach(function (b, c) {
                        b.x === a.x && (g = c)
                    })), g in e && e[g].value * a.value >= 0 && (j += h(e[g].value) - i))
                }), j
            }
        }, B.isWithinShape = function (a, b) {
            var c, d = this,
                e = d.d3.select(a);
            return d.isTargetToShow(b.id) ? "circle" === a.nodeName ? c = d.isStepType(b) ? d.isWithinStep(a, d.getYScale(b.id)(b.value)) : d.isWithinCircle(a, 1.5 * d.pointSelectR(b)) : "path" === a.nodeName && (c = !e.classed(f.bar) || d.isWithinBar(a)) : c = !1, c
        }, B.getInterpolate = function (a) {
            var b = this,
                c = b.isInterpolationType(b.config.spline_interpolation_type) ? b.config.spline_interpolation_type : "cardinal";
            return b.isSplineType(a) ? c : b.isStepType(a) ? b.config.line_step_type : "linear"
        }, B.initLine = function () {
            this.main.select("." + f.chart).append("g").attr("class", f.chartLines)
        }, B.updateTargetsForLine = function (a) {
            var b, c = this,
                d = c.config,
                e = c.classChartLine.bind(c),
                g = c.classLines.bind(c),
                h = c.classAreas.bind(c),
                i = c.classCircles.bind(c),
                j = c.classFocus.bind(c);
            (b = c.main.select("." + f.chartLines).selectAll("." + f.chartLine).data(a).attr("class", function (a) {
                return e(a) + j(a)
            }).enter().append("g").attr("class", e).style("opacity", 0).style("pointer-events", "none")).append("g").attr("class", g), b.append("g").attr("class", h), b.append("g").attr("class", function (a) {
                return c.generateClass(f.selectedCircles, a.id)
            }), b.append("g").attr("class", i).style("cursor", function (a) {
                return d.data_selection_isselectable(a) ? "pointer" : null
            }), a.forEach(function (a) {
                c.main.selectAll("." + f.selectedCircles + c.getTargetSelectorSuffix(a.id)).selectAll("." + f.selectedCircle).each(function (b) {
                    b.value = a.values[b.index].value
                })
            })
        }, B.updateLine = function (a) {
            var b = this;
            b.mainLine = b.main.selectAll("." + f.lines).selectAll("." + f.line).data(b.lineData.bind(b)), b.mainLine.enter().append("path").attr("class", b.classLine.bind(b)).style("stroke", b.color), b.mainLine.style("opacity", b.initialOpacity.bind(b)).style("shape-rendering", function (a) {
                return b.isStepType(a) ? "crispEdges" : ""
            }).attr("transform", null), b.mainLine.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawLine = function (a, b) {
            return [(b ? this.mainLine.transition(Math.random().toString()) : this.mainLine).attr("d", a).style("stroke", this.color).style("opacity", 1)]
        }, B.generateDrawLine = function (a, b) {
            var c = this,
                d = c.config,
                e = c.d3.svg.line(),
                f = c.generateGetLinePoints(a, b),
                g = b ? c.getSubYScale : c.getYScale,
                h = function (a) {
                    return (b ? c.subxx : c.xx).call(c, a)
                },
                i = function (a, b) {
                    return d.data_groups.length > 0 ? f(a, b)[0][1] : g.call(c, a.id)(a.value)
                };
            return e = d.axis_rotated ? e.x(i).y(h) : e.x(h).y(i), d.line_connectNull || (e = e.defined(function (a) {
                return null != a.value
            })),
                function (a) {
                    var f, h = d.line_connectNull ? c.filterRemoveNull(a.values) : a.values,
                        i = b ? c.x : c.subX,
                        j = g.call(c, a.id),
                        k = 0,
                        l = 0;
                    return c.isLineType(a) ? d.data_regions[a.id] ? f = c.lineWithRegions(h, i, j, d.data_regions[a.id]) : (c.isStepType(a) && (h = c.convertValuesToStep(h)), f = e.interpolate(c.getInterpolate(a))(h)) : (h[0] && (k = i(h[0].x), l = j(h[0].value)), f = d.axis_rotated ? "M " + l + " " + k : "M " + k + " " + l), f || "M 0 0"
                }
        }, B.generateGetLinePoints = function (a, b) {
            var c = this,
                d = c.config,
                e = a.__max__ + 1,
                f = c.getShapeX(0, e, a, !!b),
                g = c.getShapeY(!!b),
                h = c.getShapeOffset(c.isLineType, a, !!b),
                i = b ? c.getSubYScale : c.getYScale;
            return function (a, b) {
                var e = i.call(c, a.id)(0),
                    j = h(a, b) || e,
                    k = f(a),
                    l = g(a);
                return d.axis_rotated && (0 < a.value && l < e || a.value < 0 && e < l) && (l = e), [
                    [k, l - (e - j)],
                    [k, l - (e - j)],
                    [k, l - (e - j)],
                    [k, l - (e - j)]
                ]
            }
        }, B.lineWithRegions = function (a, b, c, d) {
            function e(a) {
                return "M" + a[0][0] + " " + a[0][1] + " " + a[1][0] + " " + a[1][1]
            }
            var f, g, h, i, j, k, l, m, n, o, p, q = this,
                r = q.config,
                s = "M",
                t = q.isCategorized() ? .5 : 0,
                u = [];
            if (void 0 !== d)
                for (f = 0; f < d.length; f++) u[f] = {}, void 0 === d[f].start ? u[f].start = a[0].x : u[f].start = q.isTimeSeries() ? q.parseDate(d[f].start) : d[f].start, void 0 === d[f].end ? u[f].end = a[a.length - 1].x : u[f].end = q.isTimeSeries() ? q.parseDate(d[f].end) : d[f].end;
            for (o = r.axis_rotated ? function (a) {
                return c(a.value)
            } : function (a) {
                return b(a.x)
            }, p = r.axis_rotated ? function (a) {
                return b(a.x)
            } : function (a) {
                return c(a.value)
            }, h = q.isTimeSeries() ? function (a, d, f, g) {
                var h, i = a.x.getTime(),
                    k = d.x - a.x,
                    l = new Date(i + k * f),
                    m = new Date(i + k * (f + g));
                return h = r.axis_rotated ? [
                    [c(j(f)), b(l)],
                    [c(j(f + g)), b(m)]
                ] : [
                    [b(l), c(j(f))],
                    [b(m), c(j(f + g))]
                ], e(h)
            } : function (a, d, f, g) {
                var h;
                return h = r.axis_rotated ? [
                    [c(j(f), !0), b(i(f))],
                    [c(j(f + g), !0), b(i(f + g))]
                ] : [
                    [b(i(f), !0), c(j(f))],
                    [b(i(f + g), !0), c(j(f + g))]
                ], e(h)
            }, f = 0; f < a.length; f++) {
                if (void 0 !== u && function (a, b) {
                    var c;
                    for (c = 0; c < b.length; c++)
                        if (b[c].start < a && a <= b[c].end) return !0;
                    return !1
                }(a[f].x, u))
                    for (i = q.getScale(a[f - 1].x + t, a[f].x + t, q.isTimeSeries()), j = q.getScale(a[f - 1].value, a[f].value), k = b(a[f].x) - b(a[f - 1].x), l = c(a[f].value) - c(a[f - 1].value), n = 2 * (m = 2 / Math.sqrt(Math.pow(k, 2) + Math.pow(l, 2))), g = m; g <= 1; g += n) s += h(a[f - 1], a[f], g, m);
                else s += " " + o(a[f]) + " " + p(a[f]);
                a[f].x
            }
            return s
        }, B.updateArea = function (a) {
            var b = this,
                c = b.d3;
            b.mainArea = b.main.selectAll("." + f.areas).selectAll("." + f.area).data(b.lineData.bind(b)), b.mainArea.enter().append("path").attr("class", b.classArea.bind(b)).style("fill", b.color).style("opacity", function () {
                return b.orgAreaOpacity = +c.select(this).style("opacity"), 0
            }), b.mainArea.style("opacity", b.orgAreaOpacity), b.mainArea.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawArea = function (a, b) {
            return [(b ? this.mainArea.transition(Math.random().toString()) : this.mainArea).attr("d", a).style("fill", this.color).style("opacity", this.orgAreaOpacity)]
        }, B.generateDrawArea = function (a, b) {
            var c = this,
                d = c.config,
                e = c.d3.svg.area(),
                f = c.generateGetAreaPoints(a, b),
                g = b ? c.getSubYScale : c.getYScale,
                h = function (a) {
                    return (b ? c.subxx : c.xx).call(c, a)
                },
                i = function (a, b) {
                    return d.data_groups.length > 0 ? f(a, b)[0][1] : g.call(c, a.id)(c.getAreaBaseValue(a.id))
                },
                j = function (a, b) {
                    return d.data_groups.length > 0 ? f(a, b)[1][1] : g.call(c, a.id)(a.value)
                };
            return e = d.axis_rotated ? e.x0(i).x1(j).y(h) : e.x(h).y0(d.area_above ? 0 : i).y1(j), d.line_connectNull || (e = e.defined(function (a) {
                return null !== a.value
            })),
                function (a) {
                    var b, f = d.line_connectNull ? c.filterRemoveNull(a.values) : a.values,
                        g = 0,
                        h = 0;
                    return c.isAreaType(a) ? (c.isStepType(a) && (f = c.convertValuesToStep(f)), b = e.interpolate(c.getInterpolate(a))(f)) : (f[0] && (g = c.x(f[0].x), h = c.getYScale(a.id)(f[0].value)), b = d.axis_rotated ? "M " + h + " " + g : "M " + g + " " + h), b || "M 0 0"
                }
        }, B.getAreaBaseValue = function () {
            return 0
        }, B.generateGetAreaPoints = function (a, b) {
            var c = this,
                d = c.config,
                e = a.__max__ + 1,
                f = c.getShapeX(0, e, a, !!b),
                g = c.getShapeY(!!b),
                h = c.getShapeOffset(c.isAreaType, a, !!b),
                i = b ? c.getSubYScale : c.getYScale;
            return function (a, b) {
                var e = i.call(c, a.id)(0),
                    j = h(a, b) || e,
                    k = f(a),
                    l = g(a);
                return d.axis_rotated && (0 < a.value && l < e || a.value < 0 && e < l) && (l = e), [
                    [k, j],
                    [k, l - (e - j)],
                    [k, l - (e - j)],
                    [k, j]
                ]
            }
        }, B.updateCircle = function () {
            var a = this;
            a.mainCircle = a.main.selectAll("." + f.circles).selectAll("." + f.circle).data(a.lineOrScatterData.bind(a)), a.mainCircle.enter().append("circle").attr("class", a.classCircle.bind(a)).attr("r", a.pointR.bind(a)).style("fill", a.color), a.mainCircle.style("opacity", a.initialOpacityForCircle.bind(a)), a.mainCircle.exit().remove()
        }, B.redrawCircle = function (a, b, c) {
            var d = this.main.selectAll("." + f.selectedCircle);
            return [(c ? this.mainCircle.transition(Math.random().toString()) : this.mainCircle).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", a).attr("cy", b), (c ? d.transition(Math.random().toString()) : d).attr("cx", a).attr("cy", b)]
        }, B.circleX = function (a) {
            return a.x || 0 === a.x ? this.x(a.x) : null
        }, B.updateCircleY = function () {
            var a, b, c = this;
            c.config.data_groups.length > 0 ? (a = c.getShapeIndices(c.isLineType), b = c.generateGetLinePoints(a), c.circleY = function (a, c) {
                return b(a, c)[0][1]
            }) : c.circleY = function (a) {
                return c.getYScale(a.id)(a.value)
            }
        }, B.getCircles = function (a, b) {
            var c = this;
            return (b ? c.main.selectAll("." + f.circles + c.getTargetSelectorSuffix(b)) : c.main).selectAll("." + f.circle + (k(a) ? "-" + a : ""))
        }, B.expandCircles = function (a, b, c) {
            var d = this,
                e = d.pointExpandedR.bind(d);
            c && d.unexpandCircles(), d.getCircles(a, b).classed(f.EXPANDED, !0).attr("r", e)
        }, B.unexpandCircles = function (a) {
            var b = this,
                c = b.pointR.bind(b);
            b.getCircles(a).filter(function () {
                return b.d3.select(this).classed(f.EXPANDED)
            }).classed(f.EXPANDED, !1).attr("r", c)
        }, B.pointR = function (a) {
            var b = this,
                c = b.config;
            return b.isStepType(a) ? 0 : l(c.point_r) ? c.point_r(a) : c.point_r
        }, B.pointExpandedR = function (a) {
            var b = this,
                c = b.config;
            return c.point_focus_expand_enabled ? l(c.point_focus_expand_r) ? c.point_focus_expand_r(a) : c.point_focus_expand_r ? c.point_focus_expand_r : 1.75 * b.pointR(a) : b.pointR(a)
        }, B.pointSelectR = function (a) {
            var b = this,
                c = b.config;
            return l(c.point_select_r) ? c.point_select_r(a) : c.point_select_r ? c.point_select_r : 4 * b.pointR(a)
        }, B.isWithinCircle = function (a, b) {
            var c = this.d3,
                d = c.mouse(a),
                e = c.select(a),
                f = +e.attr("cx"),
                g = +e.attr("cy");
            return Math.sqrt(Math.pow(f - d[0], 2) + Math.pow(g - d[1], 2)) < b
        }, B.isWithinStep = function (a, b) {
            return Math.abs(b - this.d3.mouse(a)[1]) < 30
        }, B.getCurrentWidth = function () {
            var a = this,
                b = a.config;
            return b.size_width ? b.size_width : a.getParentWidth()
        }, B.getCurrentHeight = function () {
            var a = this,
                b = a.config,
                c = b.size_height ? b.size_height : a.getParentHeight();
            return c > 0 ? c : 320 / (a.hasType("gauge") && !b.gauge_fullCircle ? 2 : 1)
        }, B.getCurrentPaddingTop = function () {
            var a = this,
                b = a.config,
                c = k(b.padding_top) ? b.padding_top : 0;
            return a.title && a.title.node() && (c += a.getTitlePadding()), c
        }, B.getCurrentPaddingBottom = function () {
            var a = this.config;
            return k(a.padding_bottom) ? a.padding_bottom : 0
        }, B.getCurrentPaddingLeft = function (a) {
            var b = this,
                c = b.config;
            return k(c.padding_left) ? c.padding_left : c.axis_rotated ? c.axis_x_show ? Math.max(q(b.getAxisWidthByAxisId("x", a)), 40) : 1 : !c.axis_y_show || c.axis_y_inner ? b.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : q(b.getAxisWidthByAxisId("y", a))
        }, B.getCurrentPaddingRight = function () {
            var a = this,
                b = a.config,
                c = a.isLegendRight ? a.getLegendWidth() + 20 : 0;
            return k(b.padding_right) ? b.padding_right + 1 : b.axis_rotated ? 10 + c : !b.axis_y2_show || b.axis_y2_inner ? 2 + c + (a.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : q(a.getAxisWidthByAxisId("y2")) + c
        }, B.getParentRectValue = function (a) {
            for (var b, c = this.selectChart.node(); c && "BODY" !== c.tagName;) {
                try {
                    b = c.getBoundingClientRect()[a]
                } catch (d) {
                    "width" === a && (b = c.offsetWidth)
                }
                if (b) break;
                c = c.parentNode
            }
            return b
        }, B.getParentWidth = function () {
            return this.getParentRectValue("width")
        }, B.getParentHeight = function () {
            var a = this.selectChart.style("height");
            return a.indexOf("px") > 0 ? +a.replace("px", "") : 0
        }, B.getSvgLeft = function (a) {
            var b = this,
                c = b.config,
                d = c.axis_rotated || !c.axis_rotated && !c.axis_y_inner,
                e = c.axis_rotated ? f.axisX : f.axisY,
                g = b.main.select("." + e).node(),
                h = g && d ? g.getBoundingClientRect() : {
                    right: 0
                },
                i = b.selectChart.node().getBoundingClientRect(),
                j = b.hasArcType(),
                k = h.right - i.left - (j ? 0 : b.getCurrentPaddingLeft(a));
            return k > 0 ? k : 0
        }, B.getAxisWidthByAxisId = function (a, b) {
            var c = this,
                d = c.axis.getLabelPositionById(a);
            return c.axis.getMaxTickWidth(a, b) + (d.isInner ? 20 : 40)
        }, B.getHorizontalAxisHeight = function (a) {
            var b = this,
                c = b.config,
                d = 30;
            return "x" !== a || c.axis_x_show ? "x" === a && c.axis_x_height ? c.axis_x_height : "y" !== a || c.axis_y_show ? "y2" !== a || c.axis_y2_show ? ("x" === a && !c.axis_rotated && c.axis_x_tick_rotate && (d = 30 + b.axis.getMaxTickWidth(a) * Math.cos(Math.PI * (90 - c.axis_x_tick_rotate) / 180)), "y" === a && c.axis_rotated && c.axis_y_tick_rotate && (d = 30 + b.axis.getMaxTickWidth(a) * Math.cos(Math.PI * (90 - c.axis_y_tick_rotate) / 180)), d + (b.axis.getLabelPositionById(a).isInner ? 0 : 10) + ("y2" === a ? -10 : 0)) : b.rotated_padding_top : !c.legend_show || b.isLegendRight || b.isLegendInset ? 1 : 10 : 8
        }, B.getEventRectWidth = function () {
            return Math.max(0, this.xAxis.tickInterval())
        }, B.initBrush = function () {
            var a = this,
                b = a.d3;
            a.brush = b.svg.brush().on("brush", function () {
                a.redrawForBrush()
            }), a.brush.update = function () {
                return a.context && a.context.select("." + f.brush).call(this), this
            }, a.brush.scale = function (b) {
                return a.config.axis_rotated ? this.y(b) : this.x(b)
            }
        }, B.initSubchart = function () {
            var a = this,
                b = a.config,
                c = a.context = a.svg.append("g").attr("transform", a.getTranslate("context")),
                d = b.subchart_show ? "visible" : "hidden";
            c.style("visibility", d), c.append("g").attr("clip-path", a.clipPathForSubchart).attr("class", f.chart), c.select("." + f.chart).append("g").attr("class", f.chartBars), c.select("." + f.chart).append("g").attr("class", f.chartLines), c.append("g").attr("clip-path", a.clipPath).attr("class", f.brush).call(a.brush), a.axes.subx = c.append("g").attr("class", f.axisX).attr("transform", a.getTranslate("subx")).attr("clip-path", b.axis_rotated ? "" : a.clipPathForXAxis).style("visibility", b.subchart_axis_x_show ? d : "hidden")
        }, B.updateTargetsForSubchart = function (a) {
            var b, c = this,
                d = c.context,
                e = c.config,
                g = c.classChartBar.bind(c),
                h = c.classBars.bind(c),
                i = c.classChartLine.bind(c),
                j = c.classLines.bind(c),
                k = c.classAreas.bind(c);
            e.subchart_show && (d.select("." + f.chartBars).selectAll("." + f.chartBar).data(a).attr("class", g).enter().append("g").style("opacity", 0).attr("class", g).append("g").attr("class", h), (b = d.select("." + f.chartLines).selectAll("." + f.chartLine).data(a).attr("class", i).enter().append("g").style("opacity", 0).attr("class", i)).append("g").attr("class", j), b.append("g").attr("class", k), d.selectAll("." + f.brush + " rect").attr(e.axis_rotated ? "width" : "height", e.axis_rotated ? c.width2 : c.height2))
        }, B.updateBarForSubchart = function (a) {
            var b = this;
            b.contextBar = b.context.selectAll("." + f.bars).selectAll("." + f.bar).data(b.barData.bind(b)), b.contextBar.enter().append("path").attr("class", b.classBar.bind(b)).style("stroke", "none").style("fill", b.color), b.contextBar.style("opacity", b.initialOpacity.bind(b)), b.contextBar.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawBarForSubchart = function (a, b, c) {
            (b ? this.contextBar.transition(Math.random().toString()).duration(c) : this.contextBar).attr("d", a).style("opacity", 1)
        }, B.updateLineForSubchart = function (a) {
            var b = this;
            b.contextLine = b.context.selectAll("." + f.lines).selectAll("." + f.line).data(b.lineData.bind(b)), b.contextLine.enter().append("path").attr("class", b.classLine.bind(b)).style("stroke", b.color), b.contextLine.style("opacity", b.initialOpacity.bind(b)), b.contextLine.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawLineForSubchart = function (a, b, c) {
            (b ? this.contextLine.transition(Math.random().toString()).duration(c) : this.contextLine).attr("d", a).style("opacity", 1)
        }, B.updateAreaForSubchart = function (a) {
            var b = this,
                c = b.d3;
            b.contextArea = b.context.selectAll("." + f.areas).selectAll("." + f.area).data(b.lineData.bind(b)), b.contextArea.enter().append("path").attr("class", b.classArea.bind(b)).style("fill", b.color).style("opacity", function () {
                return b.orgAreaOpacity = +c.select(this).style("opacity"), 0
            }), b.contextArea.style("opacity", 0), b.contextArea.exit().transition().duration(a).style("opacity", 0).remove()
        }, B.redrawAreaForSubchart = function (a, b, c) {
            (b ? this.contextArea.transition(Math.random().toString()).duration(c) : this.contextArea).attr("d", a).style("fill", this.color).style("opacity", this.orgAreaOpacity)
        }, B.redrawSubchart = function (a, b, c, d, e, f, g) {
            var h, i, j, k = this,
                l = k.d3,
                m = k.config;
            k.context.style("visibility", m.subchart_show ? "visible" : "hidden"), m.subchart_show && (l.event && "zoom" === l.event.type && k.brush.extent(k.x.orgDomain()).update(), a && (k.brush.empty() || k.brush.extent(k.x.orgDomain()).update(), h = k.generateDrawArea(e, !0), i = k.generateDrawBar(f, !0), j = k.generateDrawLine(g, !0), k.updateBarForSubchart(c), k.updateLineForSubchart(c), k.updateAreaForSubchart(c), k.redrawBarForSubchart(i, c, c), k.redrawLineForSubchart(j, c, c), k.redrawAreaForSubchart(h, c, c)))
        }, B.redrawForBrush = function () {
            var a = this,
                b = a.x;
            a.redraw({
                withTransition: !1,
                withY: a.config.zoom_rescale,
                withSubchart: !1,
                withUpdateXDomain: !0,
                withDimension: !1
            }), a.config.subchart_onbrush.call(a.api, b.orgDomain())
        }, B.transformContext = function (a, b) {
            var c, d = this;
            b && b.axisSubX ? c = b.axisSubX : (c = d.context.select("." + f.axisX), a && (c = c.transition())), d.context.attr("transform", d.getTranslate("context")), c.attr("transform", d.getTranslate("subx"))
        }, B.getDefaultExtent = function () {
            var a = this,
                b = a.config,
                c = l(b.axis_x_extent) ? b.axis_x_extent(a.getXDomain(a.data.targets)) : b.axis_x_extent;
            return a.isTimeSeries() && (c = [a.parseDate(c[0]), a.parseDate(c[1])]), c
        }, B.initText = function () {
            var a = this;
            a.main.select("." + f.chart).append("g").attr("class", f.chartTexts), a.mainText = a.d3.selectAll([])
        }, B.updateTargetsForText = function (a) {
            var b = this,
                c = b.classChartText.bind(b),
                d = b.classTexts.bind(b),
                e = b.classFocus.bind(b);
            b.main.select("." + f.chartTexts).selectAll("." + f.chartText).data(a).attr("class", function (a) {
                return c(a) + e(a)
            }).enter().append("g").attr("class", c).style("opacity", 0).style("pointer-events", "none").append("g").attr("class", d)
        }, B.updateText = function (a) {
            var b = this,
                c = b.config,
                d = b.barOrLineData.bind(b),
                e = b.classText.bind(b);
            b.mainText = b.main.selectAll("." + f.texts).selectAll("." + f.text).data(d), b.mainText.enter().append("text").attr("class", e).attr("text-anchor", function (a) {
                return c.axis_rotated ? a.value < 0 ? "end" : "start" : "middle"
            }).style("stroke", "none").style("fill", function (a) {
                return b.color(a)
            }).style("fill-opacity", 0), b.mainText.text(function (a, c, d) {
                return b.dataLabelFormat(a.id)(a.value, a.id, c, d)
            }), b.mainText.exit().transition().duration(a).style("fill-opacity", 0).remove()
        }, B.redrawText = function (a, b, c, d) {
            return [(d ? this.mainText.transition() : this.mainText).attr("x", a).attr("y", b).style("fill", this.color).style("fill-opacity", c ? 0 : this.opacityForText.bind(this))]
        }, B.getTextRect = function (a, b, c) {
            var d, e = this.d3.select("body").append("div").classed("c3", !0),
                f = e.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0),
                g = this.d3.select(c).style("font");
            return f.selectAll(".dummy").data([a]).enter().append("text").classed(b || "", !0).style("font", g).text(a).each(function () {
                d = this.getBoundingClientRect()
            }), e.remove(), d
        }, B.generateXYForText = function (a, b, c, d) {
            var e = this,
                f = e.generateGetAreaPoints(a, !1),
                g = e.generateGetBarPoints(b, !1),
                h = e.generateGetLinePoints(c, !1),
                i = d ? e.getXForText : e.getYForText;
            return function (a, b) {
                var c = e.isAreaType(a) ? f : e.isBarType(a) ? g : h;
                return i.call(e, c(a, b), a, this)
            }
        }, B.getXForText = function (a, b, c) {
            var d, e, f = this,
                g = c.getBoundingClientRect();
            return f.config.axis_rotated ? (e = f.isBarType(b) ? 4 : 6, d = a[2][1] + e * (b.value < 0 ? -1 : 1)) : d = f.hasType("bar") ? (a[2][0] + a[0][0]) / 2 : a[0][0], null === b.value && (d > f.width ? d = f.width - g.width : d < 0 && (d = 4)), d
        }, B.getYForText = function (a, b, c) {
            var d, e = this,
                f = c.getBoundingClientRect();
            return e.config.axis_rotated ? d = (a[0][0] + a[2][0] + .6 * f.height) / 2 : (d = a[2][1], b.value < 0 || 0 === b.value && !e.hasPositiveValue ? (d += f.height, e.isBarType(b) && e.isSafari() ? d -= 3 : !e.isBarType(b) && e.isChrome() && (d += 3)) : d += e.isBarType(b) ? -3 : -6), null !== b.value || e.config.axis_rotated || (d < f.height ? d = f.height : d > this.height && (d = this.height - 4)), d
        }, B.initTitle = function () {
            var a = this;
            a.title = a.svg.append("text").text(a.config.title_text).attr("class", a.CLASS.title)
        }, B.redrawTitle = function () {
            var a = this;
            a.title.attr("x", a.xForTitle.bind(a)).attr("y", a.yForTitle.bind(a))
        }, B.xForTitle = function () {
            var a = this,
                b = a.config,
                c = b.title_position || "left";
            return c.indexOf("right") >= 0 ? a.currentWidth - a.getTextRect(a.title.node().textContent, a.CLASS.title, a.title.node()).width - b.title_padding.right : c.indexOf("center") >= 0 ? (a.currentWidth - a.getTextRect(a.title.node().textContent, a.CLASS.title, a.title.node()).width) / 2 : b.title_padding.left
        }, B.yForTitle = function () {
            var a = this;
            return a.config.title_padding.top + a.getTextRect(a.title.node().textContent, a.CLASS.title, a.title.node()).height
        }, B.getTitlePadding = function () {
            var a = this;
            return a.yForTitle() + a.config.title_padding.bottom
        }, B.initTooltip = function () {
            var a, b = this,
                c = b.config;
            if (b.tooltip = b.selectChart.style("position", "relative").append("div").attr("class", f.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), c.tooltip_init_show) {
                if (b.isTimeSeries() && n(c.tooltip_init_x)) {
                    for (c.tooltip_init_x = b.parseDate(c.tooltip_init_x), a = 0; a < b.data.targets[0].values.length && b.data.targets[0].values[a].x - c.tooltip_init_x != 0; a++);
                    c.tooltip_init_x = a
                }
                b.tooltip.html(c.tooltip_contents.call(b, b.data.targets.map(function (a) {
                    return b.addName(a.values[c.tooltip_init_x])
                }), b.axis.getXAxisTickFormat(), b.getYFormat(b.hasArcType()), b.color)), b.tooltip.style("top", c.tooltip_init_position.top).style("left", c.tooltip_init_position.left).style("display", "block")
            }
        }, B.getTooltipSortFunction = function () {
            var a = this,
                b = a.config;
            if (0 !== b.data_groups.length && void 0 === b.tooltip_order) {
                var c = a.orderTargets(a.data.targets).map(function (a) {
                    return a.id
                });
                return (a.isOrderAsc() || a.isOrderDesc()) && (c = c.reverse()),
                    function (a, b) {
                        return c.indexOf(a.id) - c.indexOf(b.id)
                    }
            }
            var d = b.tooltip_order;
            void 0 === d && (d = b.data_order);
            var e = function (a) {
                return a ? a.value : null
            };
            if (n(d) && "asc" === d.toLowerCase()) return function (a, b) {
                return e(a) - e(b)
            };
            if (n(d) && "desc" === d.toLowerCase()) return function (a, b) {
                return e(b) - e(a)
            };
            if (l(d)) {
                var f = d;
                return void 0 === b.tooltip_order && (f = function (a, b) {
                    return d(a ? {
                        id: a.id,
                        values: [a]
                    } : null, b ? {
                        id: b.id,
                        values: [b]
                    } : null)
                }), f
            }
            return m(d) ? function (a, b) {
                return d.indexOf(a.id) - d.indexOf(b.id)
            } : void 0
        }, B.getTooltipContent = function (a, b, c, d) {
            var e, f, g, h, i, j, k = this,
                l = k.config,
                m = l.tooltip_format_title || b,
                n = l.tooltip_format_name || function (a) {
                    return a
                },
                o = l.tooltip_format_value || c,
                p = this.getTooltipSortFunction();
            for (p && a.sort(p), f = 0; f < a.length; f++)
                if (a[f] && (a[f].value || 0 === a[f].value) && (e || (g = x(m ? m(a[f].x) : a[f].x), e = "<table class='" + k.CLASS.tooltip + "'>" + (g || 0 === g ? "<tr><th colspan='2'>" + g + "</th></tr>" : "")), void 0 !== (h = x(o(a[f].value, a[f].ratio, a[f].id, a[f].index, a))))) {
                    if (null === a[f].name) continue;
                    i = x(n(a[f].name, a[f].ratio, a[f].id, a[f].index)), j = k.levelColor ? k.levelColor(a[f].value) : d(a[f].id), e += "<tr class='" + k.CLASS.tooltipName + "-" + k.getTargetSelectorSuffix(a[f].id) + "'>", e += "<td class='name'><span style='background-color:" + j + "'></span>" + i + "</td>", e += "<td class='value'>" + h + "</td>", e += "</tr>"
                } return e + "</table>"
        }, B.tooltipPosition = function (a, b, c, d) {
            var e, f, g, h, i, j = this,
                k = j.config,
                l = j.d3,
                m = j.hasArcType(),
                n = l.mouse(d);
            return m ? (f = (j.width - (j.isLegendRight ? j.getLegendWidth() : 0)) / 2 + n[0], h = j.height / 2 + n[1] + 20) : (e = j.getSvgLeft(!0), k.axis_rotated ? (g = (f = e + n[0] + 100) + b, i = j.currentWidth - j.getCurrentPaddingRight(), h = j.x(a[0].x) + 20) : (g = (f = e + j.getCurrentPaddingLeft(!0) + j.x(a[0].x) + 20) + b, i = e + j.currentWidth - j.getCurrentPaddingRight(), h = n[1] + 15), g > i && (f -= g - i + 20), h + c > j.currentHeight && (h -= c + 30)), h < 0 && (h = 0), {
                top: h,
                left: f
            }
        }, B.showTooltip = function (a, b) {
            var c, d, e, f = this,
                g = f.config,
                h = f.hasArcType(),
                i = a.filter(function (a) {
                    return a && k(a.value)
                }),
                j = g.tooltip_position || B.tooltipPosition;
            0 !== i.length && g.tooltip_show && (f.tooltip.html(g.tooltip_contents.call(f, a, f.axis.getXAxisTickFormat(), f.getYFormat(h), f.color)).style("display", "block"), c = f.tooltip.property("offsetWidth"), d = f.tooltip.property("offsetHeight"), e = j.call(this, i, c, d, b), f.tooltip.style("top", e.top + "px").style("left", e.left + "px"))
        }, B.hideTooltip = function () {
            this.tooltip.style("display", "none")
        }, B.setTargetType = function (a, b) {
            var c = this,
                d = c.config;
            c.mapToTargetIds(a).forEach(function (a) {
                c.withoutFadeIn[a] = b === d.data_types[a], d.data_types[a] = b
            }), a || (d.data_type = b)
        }, B.hasType = function (a, b) {
            var c = this,
                d = c.config.data_types,
                e = !1;
            return b = b || c.data.targets, b && b.length ? b.forEach(function (b) {
                var c = d[b.id];
                (c && c.indexOf(a) >= 0 || !c && "line" === a) && (e = !0)
            }) : Object.keys(d).length ? Object.keys(d).forEach(function (b) {
                d[b] === a && (e = !0)
            }) : e = c.config.data_type === a, e
        }, B.hasArcType = function (a) {
            return this.hasType("pie", a) || this.hasType("donut", a) || this.hasType("gauge", a)
        }, B.isLineType = function (a) {
            var b = this.config,
                c = n(a) ? a : a.id;
            return !b.data_types[c] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(b.data_types[c]) >= 0
        }, B.isStepType = function (a) {
            var b = n(a) ? a : a.id;
            return ["step", "area-step"].indexOf(this.config.data_types[b]) >= 0
        }, B.isSplineType = function (a) {
            var b = n(a) ? a : a.id;
            return ["spline", "area-spline"].indexOf(this.config.data_types[b]) >= 0
        }, B.isAreaType = function (a) {
            var b = n(a) ? a : a.id;
            return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[b]) >= 0
        }, B.isBarType = function (a) {
            var b = n(a) ? a : a.id;
            return "bar" === this.config.data_types[b]
        }, B.isScatterType = function (a) {
            var b = n(a) ? a : a.id;
            return "scatter" === this.config.data_types[b]
        }, B.isPieType = function (a) {
            var b = n(a) ? a : a.id;
            return "pie" === this.config.data_types[b]
        }, B.isGaugeType = function (a) {
            var b = n(a) ? a : a.id;
            return "gauge" === this.config.data_types[b]
        }, B.isDonutType = function (a) {
            var b = n(a) ? a : a.id;
            return "donut" === this.config.data_types[b]
        }, B.isArcType = function (a) {
            return this.isPieType(a) || this.isDonutType(a) || this.isGaugeType(a)
        }, B.lineData = function (a) {
            return this.isLineType(a) ? [a] : []
        }, B.arcData = function (a) {
            return this.isArcType(a.data) ? [a] : []
        }, B.barData = function (a) {
            return this.isBarType(a) ? a.values : []
        }, B.lineOrScatterData = function (a) {
            return this.isLineType(a) || this.isScatterType(a) ? a.values : []
        }, B.barOrLineData = function (a) {
            return this.isBarType(a) || this.isLineType(a) ? a.values : []
        }, B.isInterpolationType = function (a) {
            return ["linear", "linear-closed", "basis", "basis-open", "basis-closed", "bundle", "cardinal", "cardinal-open", "cardinal-closed", "monotone"].indexOf(a) >= 0
        }, B.isSafari = function () {
            var a = window.navigator.userAgent;
            return a.indexOf("Safari") >= 0 && a.indexOf("Chrome") < 0
        }, B.isChrome = function () {
            return window.navigator.userAgent.indexOf("Chrome") >= 0
        }, B.initZoom = function () {
            var a, b = this,
                c = b.d3,
                d = b.config;
            b.zoom = c.behavior.zoom().on("zoomstart", function () {
                a = c.event.sourceEvent, b.zoom.altDomain = c.event.sourceEvent.altKey ? b.x.orgDomain() : null, d.zoom_onzoomstart.call(b.api, c.event.sourceEvent)
            }).on("zoom", function () {
                b.redrawForZoom.call(b)
            }).on("zoomend", function () {
                var e = c.event.sourceEvent;
                e && a.clientX === e.clientX && a.clientY === e.clientY || (b.redrawEventRect(), b.updateZoom(), d.zoom_onzoomend.call(b.api, b.x.orgDomain()))
            }), b.zoom.scale = function (a) {
                return d.axis_rotated ? this.y(a) : this.x(a)
            }, b.zoom.orgScaleExtent = function () {
                var a = d.zoom_extent ? d.zoom_extent : [1, 10];
                return [a[0], Math.max(b.getMaxDataCount() / a[1], a[1])]
            }, b.zoom.updateScaleExtent = function () {
                var a = s(b.x.orgDomain()) / s(b.getZoomDomain()),
                    c = this.orgScaleExtent();
                return this.scaleExtent([c[0] * a, c[1] * a]), this
            }
        }, B.getZoomDomain = function () {
            var a = this,
                b = a.config,
                c = a.d3;
            return [c.min([a.orgXDomain[0], b.zoom_x_min]), c.max([a.orgXDomain[1], b.zoom_x_max])]
        }, B.updateZoom = function () {
            var a = this,
                b = a.config.zoom_enabled ? a.zoom : function () { };
            a.main.select("." + f.zoomRect).call(b).on("dblclick.zoom", null), a.main.selectAll("." + f.eventRect).call(b).on("dblclick.zoom", null)
        }, B.redrawForZoom = function () {
            var a = this,
                b = a.d3,
                c = a.config,
                d = a.zoom,
                e = a.x;
            if (c.zoom_enabled && 0 !== a.filterTargetsToShow(a.data.targets).length) {
                if ("mousemove" === b.event.sourceEvent.type && d.altDomain) return e.domain(d.altDomain), void d.scale(e).updateScaleExtent();
                a.isCategorized() && e.orgDomain()[0] === a.orgXDomain[0] && e.domain([a.orgXDomain[0] - 1e-10, e.orgDomain()[1]]), a.redraw({
                    withTransition: !1,
                    withY: c.zoom_rescale,
                    withSubchart: !1,
                    withEventRect: !1,
                    withDimension: !1
                }), "mousemove" === b.event.sourceEvent.type && (a.cancelClick = !0), c.zoom_onzoom.call(a.api, e.orgDomain())
            }
        }, C
}),
    function () {
        function a(a) {
            return a && (a.ownerDocument || a.document || a).documentElement
        }

        function b(a) {
            return a && (a.ownerDocument && a.ownerDocument.defaultView || a.document && a || a.defaultView)
        }

        function c(a, b) {
            return b > a ? -1 : a > b ? 1 : a >= b ? 0 : NaN
        }

        function d(a) {
            return null === a ? NaN : +a
        }

        function e(a) {
            return !isNaN(a)
        }

        function f(a) {
            return {
                left: function (b, c, d, e) {
                    for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                        var f = d + e >>> 1;
                        a(b[f], c) < 0 ? d = f + 1 : e = f
                    }
                    return d
                },
                right: function (b, c, d, e) {
                    for (arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length); e > d;) {
                        var f = d + e >>> 1;
                        a(b[f], c) > 0 ? e = f : d = f + 1
                    }
                    return d
                }
            }
        }

        function g(a) {
            return a.length
        }

        function h(a) {
            for (var b = 1; a * b % 1;) b *= 10;
            return b
        }

        function i(a, b) {
            for (var c in b) Object.defineProperty(a.prototype, c, {
                value: b[c],
                enumerable: !1
            })
        }

        function j() {
            this._ = Object.create(null)
        }

        function k(a) {
            return (a += "") === sg || a[0] === tg ? tg + a : a
        }

        function l(a) {
            return (a += "")[0] === tg ? a.slice(1) : a
        }

        function m(a) {
            return k(a) in this._
        }

        function n(a) {
            return (a = k(a)) in this._ && delete this._[a]
        }

        function o() {
            var a = [];
            for (var b in this._) a.push(l(b));
            return a
        }

        function p() {
            var a = 0;
            for (var b in this._) ++a;
            return a
        }

        function q() {
            for (var a in this._) return !1;
            return !0
        }

        function r() {
            this._ = Object.create(null)
        }

        function s(a) {
            return a
        }

        function t(a, b, c) {
            return function () {
                var d = c.apply(b, arguments);
                return d === b ? a : d
            }
        }

        function u(a, b) {
            if (b in a) return b;
            b = b.charAt(0).toUpperCase() + b.slice(1);
            for (var c = 0, d = ug.length; d > c; ++c) {
                var e = ug[c] + b;
                if (e in a) return e
            }
        }

        function v() { }

        function w() { }

        function x(a) {
            function b() {
                for (var b, d = c, e = -1, f = d.length; ++e < f;)(b = d[e].on) && b.apply(this, arguments);
                return a
            }
            var c = [],
                d = new j;
            return b.on = function (b, e) {
                var f, g = d.get(b);
                return arguments.length < 2 ? g && g.on : (g && (g.on = null, c = c.slice(0, f = c.indexOf(g)).concat(c.slice(f + 1)), d.remove(b)), e && c.push(d.set(b, {
                    on: e
                })), a)
            }, b
        }

        function y() {
            hg.event.preventDefault()
        }

        function z() {
            for (var a, b = hg.event; a = b.sourceEvent;) b = a;
            return b
        }

        function A(a) {
            for (var b = new w, c = 0, d = arguments.length; ++c < d;) b[arguments[c]] = x(b);
            return b.of = function (c, d) {
                return function (e) {
                    try {
                        var f = e.sourceEvent = hg.event;
                        e.target = a, hg.event = e, b[e.type].apply(c, d)
                    } finally {
                        hg.event = f
                    }
                }
            }, b
        }

        function B(a) {
            return wg(a, Ag), a
        }

        function C(a) {
            return "function" == typeof a ? a : function () {
                return xg(a, this)
            }
        }

        function D(a) {
            return "function" == typeof a ? a : function () {
                return yg(a, this)
            }
        }

        function E(a, b) {
            function c() {
                this.removeAttribute(a)
            }

            function d() {
                this.removeAttributeNS(a.space, a.local)
            }

            function e() {
                this.setAttribute(a, b)
            }

            function f() {
                this.setAttributeNS(a.space, a.local, b)
            }

            function g() {
                var c = b.apply(this, arguments);
                null == c ? this.removeAttribute(a) : this.setAttribute(a, c)
            }

            function h() {
                var c = b.apply(this, arguments);
                null == c ? this.removeAttributeNS(a.space, a.local) : this.setAttributeNS(a.space, a.local, c)
            }
            return a = hg.ns.qualify(a), null == b ? a.local ? d : c : "function" == typeof b ? a.local ? h : g : a.local ? f : e
        }

        function F(a) {
            return a.trim().replace(/\s+/g, " ")
        }

        function G(a) {
            return new RegExp("(?:^|\\s+)" + hg.requote(a) + "(?:\\s+|$)", "g")
        }

        function H(a) {
            return (a + "").trim().split(/^|\s+/)
        }

        function I(a, b) {
            function c() {
                for (var c = -1; ++c < e;) a[c](this, b)
            }

            function d() {
                for (var c = -1, d = b.apply(this, arguments); ++c < e;) a[c](this, d)
            }
            a = H(a).map(J);
            var e = a.length;
            return "function" == typeof b ? d : c
        }

        function J(a) {
            var b = G(a);
            return function (c, d) {
                if (e = c.classList) return d ? e.add(a) : e.remove(a);
                var e = c.getAttribute("class") || "";
                d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", F(e + " " + a))) : c.setAttribute("class", F(e.replace(b, " ")))
            }
        }

        function K(a, b, c) {
            function d() {
                this.style.removeProperty(a)
            }

            function e() {
                this.style.setProperty(a, b, c)
            }

            function f() {
                var d = b.apply(this, arguments);
                null == d ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
            }
            return null == b ? d : "function" == typeof b ? f : e
        }

        function L(a, b) {
            function c() {
                delete this[a]
            }

            function d() {
                this[a] = b
            }

            function e() {
                var c = b.apply(this, arguments);
                null == c ? delete this[a] : this[a] = c
            }
            return null == b ? c : "function" == typeof b ? e : d
        }

        function M(a) {
            function b() {
                var b = this.ownerDocument,
                    c = this.namespaceURI;
                return c === Bg && b.documentElement.namespaceURI === Bg ? b.createElement(a) : b.createElementNS(c, a)
            }

            function c() {
                return this.ownerDocument.createElementNS(a.space, a.local)
            }
            return "function" == typeof a ? a : (a = hg.ns.qualify(a)).local ? c : b
        }

        function N() {
            var a = this.parentNode;
            a && a.removeChild(this)
        }

        function O(a) {
            return {
                __data__: a
            }
        }

        function P(a) {
            return function () {
                return zg(this, a)
            }
        }

        function Q(a) {
            return arguments.length || (a = c),
                function (b, c) {
                    return b && c ? a(b.__data__, c.__data__) : !b - !c
                }
        }

        function R(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                for (var e, f = a[c], g = 0, h = f.length; h > g; g++)(e = f[g]) && b(e, g, c);
            return a
        }

        function S(a) {
            return wg(a, Dg), a
        }

        function T(a) {
            var b, c;
            return function (d, e, f) {
                var g, h = a[f].update,
                    i = h.length;
                for (f != c && (c = f, b = 0), e >= b && (b = e + 1); !(g = h[b]) && ++b < i;);
                return g
            }
        }

        function U(a, b, c) {
            function d() {
                var b = this[g];
                b && (this.removeEventListener(a, b, b.$), delete this[g])
            }

            function e() {
                var e = i(b, jg(arguments));
                d.call(this), this.addEventListener(a, this[g] = e, e.$ = c), e._ = b
            }

            function f() {
                var b, c = new RegExp("^__on([^.]+)" + hg.requote(a) + "$");
                for (var d in this)
                    if (b = d.match(c)) {
                        var e = this[d];
                        this.removeEventListener(b[1], e, e.$), delete this[d]
                    }
            }
            var g = "__on" + a,
                h = a.indexOf("."),
                i = V;
            h > 0 && (a = a.slice(0, h));
            var j = Eg.get(a);
            return j && (a = j, i = W), h ? b ? e : d : b ? v : f
        }

        function V(a, b) {
            return function (c) {
                var d = hg.event;
                hg.event = c, b[0] = this.__data__;
                try {
                    a.apply(this, b)
                } finally {
                    hg.event = d
                }
            }
        }

        function W(a, b) {
            var c = V(a, b);
            return function (a) {
                var b = this,
                    d = a.relatedTarget;
                d && (d === b || 8 & d.compareDocumentPosition(b)) || c.call(b, a)
            }
        }

        function X(c) {
            var d = ".dragsuppress-" + ++Gg,
                e = "click" + d,
                f = hg.select(b(c)).on("touchmove" + d, y).on("dragstart" + d, y).on("selectstart" + d, y);
            if (null == Fg && (Fg = !("onselectstart" in c) && u(c.style, "userSelect")), Fg) {
                var g = a(c).style,
                    h = g[Fg];
                g[Fg] = "none"
            }
            return function (a) {
                if (f.on(d, null), Fg && (g[Fg] = h), a) {
                    var b = function () {
                        f.on(e, null)
                    };
                    f.on(e, function () {
                        y(), b()
                    }, !0), setTimeout(b, 0)
                }
            }
        }

        function Y(a, c) {
            c.changedTouches && (c = c.changedTouches[0]);
            var d = a.ownerSVGElement || a;
            if (d.createSVGPoint) {
                var e = d.createSVGPoint();
                if (0 > Hg) {
                    var f = b(a);
                    if (f.scrollX || f.scrollY) {
                        d = hg.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var g = d[0][0].getScreenCTM();
                        Hg = !(g.f || g.e), d.remove()
                    }
                }
                return Hg ? (e.x = c.pageX, e.y = c.pageY) : (e.x = c.clientX, e.y = c.clientY), e = e.matrixTransform(a.getScreenCTM().inverse()), [e.x, e.y]
            }
            var h = a.getBoundingClientRect();
            return [c.clientX - h.left - a.clientLeft, c.clientY - h.top - a.clientTop]
        }

        function Z() {
            return hg.event.changedTouches[0].identifier
        }

        function $(a) {
            return a > 0 ? 1 : 0 > a ? -1 : 0
        }

        function _(a, b, c) {
            return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
        }

        function aa(a) {
            return a > 1 ? 0 : -1 > a ? Kg : Math.acos(a)
        }

        function ba(a) {
            return a > 1 ? Ng : -1 > a ? -Ng : Math.asin(a)
        }

        function ca(a) {
            return ((a = Math.exp(a)) - 1 / a) / 2
        }

        function da(a) {
            return ((a = Math.exp(a)) + 1 / a) / 2
        }

        function ea(a) {
            return ((a = Math.exp(2 * a)) - 1) / (a + 1)
        }

        function fa(a) {
            return (a = Math.sin(a / 2)) * a
        }

        function ga() { }

        function ha(a, b, c) {
            return this instanceof ha ? (this.h = +a, this.s = +b, void (this.l = +c)) : arguments.length < 2 ? a instanceof ha ? new ha(a.h, a.s, a.l) : va("" + a, wa, ha) : new ha(a, b, c)
        }

        function ia(a, b, c) {
            function d(a) {
                return a > 360 ? a -= 360 : 0 > a && (a += 360), 60 > a ? f + (g - f) * a / 60 : 180 > a ? g : 240 > a ? f + (g - f) * (240 - a) / 60 : f
            }

            function e(a) {
                return Math.round(255 * d(a))
            }
            var f, g;
            return a = isNaN(a) ? 0 : (a %= 360) < 0 ? a + 360 : a, b = isNaN(b) ? 0 : 0 > b ? 0 : b > 1 ? 1 : b, c = 0 > c ? 0 : c > 1 ? 1 : c, g = .5 >= c ? c * (1 + b) : c + b - c * b, f = 2 * c - g, new ra(e(a + 120), e(a), e(a - 120))
        }

        function ja(a, b, c) {
            return this instanceof ja ? (this.h = +a, this.c = +b, void (this.l = +c)) : arguments.length < 2 ? a instanceof ja ? new ja(a.h, a.c, a.l) : a instanceof la ? na(a.l, a.a, a.b) : na((a = xa((a = hg.rgb(a)).r, a.g, a.b)).l, a.a, a.b) : new ja(a, b, c)
        }

        function ka(a, b, c) {
            return isNaN(a) && (a = 0), isNaN(b) && (b = 0), new la(c, Math.cos(a *= Og) * b, Math.sin(a) * b)
        }

        function la(a, b, c) {
            return this instanceof la ? (this.l = +a, this.a = +b, void (this.b = +c)) : arguments.length < 2 ? a instanceof la ? new la(a.l, a.a, a.b) : a instanceof ja ? ka(a.h, a.c, a.l) : xa((a = ra(a)).r, a.g, a.b) : new la(a, b, c)
        }

        function ma(a, b, c) {
            var d = (a + 16) / 116,
                e = d + b / 500,
                f = d - c / 200;
            return e = oa(e) * Xg, d = oa(d) * Yg, f = oa(f) * Zg, new ra(qa(3.2404542 * e - 1.5371385 * d - .4985314 * f), qa(-.969266 * e + 1.8760108 * d + .041556 * f), qa(.0556434 * e - .2040259 * d + 1.0572252 * f))
        }

        function na(a, b, c) {
            return a > 0 ? new ja(Math.atan2(c, b) * Pg, Math.sqrt(b * b + c * c), a) : new ja(NaN, NaN, a)
        }

        function oa(a) {
            return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
        }

        function pa(a) {
            return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
        }

        function qa(a) {
            return Math.round(255 * (.00304 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
        }

        function ra(a, b, c) {
            return this instanceof ra ? (this.r = ~~a, this.g = ~~b, void (this.b = ~~c)) : arguments.length < 2 ? a instanceof ra ? new ra(a.r, a.g, a.b) : va("" + a, ra, ia) : new ra(a, b, c)
        }

        function sa(a) {
            return new ra(a >> 16, a >> 8 & 255, 255 & a)
        }

        function ta(a) {
            return sa(a) + ""
        }

        function ua(a) {
            return 16 > a ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
        }

        function va(a, b, c) {
            var d, e, f, g = 0,
                h = 0,
                i = 0;
            if (d = /([a-z]+)\((.*)\)/.exec(a = a.toLowerCase())) switch (e = d[2].split(","), d[1]) {
                case "hsl":
                    return c(parseFloat(e[0]), parseFloat(e[1]) / 100, parseFloat(e[2]) / 100);
                case "rgb":
                    return b(za(e[0]), za(e[1]), za(e[2]))
            }
            return (f = ah.get(a)) ? b(f.r, f.g, f.b) : (null == a || "#" !== a.charAt(0) || isNaN(f = parseInt(a.slice(1), 16)) || (4 === a.length ? (g = (3840 & f) >> 4, g |= g >> 4, h = 240 & f, h |= h >> 4, i = 15 & f, i |= i << 4) : 7 === a.length && (g = (16711680 & f) >> 16, h = (65280 & f) >> 8, i = 255 & f)), b(g, h, i))
        }

        function wa(a, b, c) {
            var d, e, f = Math.min(a /= 255, b /= 255, c /= 255),
                g = Math.max(a, b, c),
                h = g - f,
                i = (g + f) / 2;
            return h ? (e = .5 > i ? h / (g + f) : h / (2 - g - f), d = a == g ? (b - c) / h + (c > b ? 6 : 0) : b == g ? (c - a) / h + 2 : (a - b) / h + 4, d *= 60) : (d = NaN, e = i > 0 && 1 > i ? 0 : d), new ha(d, e, i)
        }

        function xa(a, b, c) {
            a = ya(a), b = ya(b), c = ya(c);
            var d = pa((.4124564 * a + .3575761 * b + .1804375 * c) / Xg),
                e = pa((.2126729 * a + .7151522 * b + .072175 * c) / Yg);
            return la(116 * e - 16, 500 * (d - e), 200 * (e - pa((.0193339 * a + .119192 * b + .9503041 * c) / Zg)))
        }

        function ya(a) {
            return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
        }

        function za(a) {
            var b = parseFloat(a);
            return "%" === a.charAt(a.length - 1) ? Math.round(2.55 * b) : b
        }

        function Aa(a) {
            return "function" == typeof a ? a : function () {
                return a
            }
        }

        function Ba(a) {
            return function (b, c, d) {
                return 2 === arguments.length && "function" == typeof c && (d = c, c = null), Ca(b, c, a, d)
            }
        }

        function Ca(a, b, c, d) {
            function e() {
                var a, b = i.status;
                if (!b && Ea(i) || b >= 200 && 300 > b || 304 === b) {
                    try {
                        a = c.call(f, i)
                    } catch (a) {
                        return void g.error.call(f, a)
                    }
                    g.load.call(f, a)
                } else g.error.call(f, i)
            }
            var f = {},
                g = hg.dispatch("beforesend", "progress", "load", "error"),
                h = {},
                i = new XMLHttpRequest,
                j = null;
            return !this.XDomainRequest || "withCredentials" in i || !/^(http(s)?:)?\/\//.test(a) || (i = new XDomainRequest), "onload" in i ? i.onload = i.onerror = e : i.onreadystatechange = function () {
                i.readyState > 3 && e()
            }, i.onprogress = function (a) {
                var b = hg.event;
                hg.event = a;
                try {
                    g.progress.call(f, i)
                } finally {
                    hg.event = b
                }
            }, f.header = function (a, b) {
                return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (null == b ? delete h[a] : h[a] = b + "", f)
            }, f.mimeType = function (a) {
                return arguments.length ? (b = null == a ? null : a + "", f) : b
            }, f.responseType = function (a) {
                return arguments.length ? (j = a, f) : j
            }, f.response = function (a) {
                return c = a, f
            }, ["get", "post"].forEach(function (a) {
                f[a] = function () {
                    return f.send.apply(f, [a].concat(jg(arguments)))
                }
            }), f.send = function (c, d, e) {
                if (2 === arguments.length && "function" == typeof d && (e = d, d = null), i.open(c, a, !0), null == b || "accept" in h || (h.accept = b + ",*/*"), i.setRequestHeader)
                    for (var k in h) i.setRequestHeader(k, h[k]);
                return null != b && i.overrideMimeType && i.overrideMimeType(b), null != j && (i.responseType = j), null != e && f.on("error", e).on("load", function (a) {
                    e(null, a)
                }), g.beforesend.call(f, i), i.send(null == d ? null : d), f
            }, f.abort = function () {
                return i.abort(), f
            }, hg.rebind(f, g, "on"), null == d ? f : f.get(Da(d))
        }

        function Da(a) {
            return 1 === a.length ? function (b, c) {
                a(null == b ? c : null)
            } : a
        }

        function Ea(a) {
            var b = a.responseType;
            return b && "text" !== b ? a.response : a.responseText
        }

        function Fa(a, b, c) {
            var d = arguments.length;
            2 > d && (b = 0), 3 > d && (c = Date.now());
            var e = c + b,
                f = {
                    c: a,
                    t: e,
                    n: null
                };
            return ch ? ch.n = f : bh = f, ch = f, dh || (eh = clearTimeout(eh), dh = 1, fh(Ga)), f
        }

        function Ga() {
            var a = Ha(),
                b = Ia() - a;
            b > 24 ? (isFinite(b) && (clearTimeout(eh), eh = setTimeout(Ga, b)), dh = 0) : (dh = 1, fh(Ga))
        }

        function Ha() {
            for (var a = Date.now(), b = bh; b;) a >= b.t && b.c(a - b.t) && (b.c = null), b = b.n;
            return a
        }

        function Ia() {
            for (var a, b = bh, c = 1 / 0; b;) b.c ? (b.t < c && (c = b.t), b = (a = b).n) : b = a ? a.n = b.n : bh = b.n;
            return ch = a, c
        }

        function Ja(a, b) {
            return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
        }

        function Ka(a, b) {
            var c = Math.pow(10, 3 * rg(8 - b));
            return {
                scale: b > 8 ? function (a) {
                    return a / c
                } : function (a) {
                    return a * c
                },
                symbol: a
            }
        }

        function La(a) {
            var b = a.decimal,
                c = a.thousands,
                d = a.grouping,
                e = a.currency,
                f = d && c ? function (a, b) {
                    for (var e = a.length, f = [], g = 0, h = d[0], i = 0; e > 0 && h > 0 && (i + h + 1 > b && (h = Math.max(1, b - i)), f.push(a.substring(e -= h, e + h)), !((i += h + 1) > b));) h = d[g = (g + 1) % d.length];
                    return f.reverse().join(c)
                } : s;
            return function (a) {
                var c = hh.exec(a),
                    d = c[1] || " ",
                    g = c[2] || ">",
                    h = c[3] || "-",
                    i = c[4] || "",
                    j = c[5],
                    k = +c[6],
                    l = c[7],
                    m = c[8],
                    n = c[9],
                    o = 1,
                    p = "",
                    q = "",
                    r = !1,
                    s = !0;
                switch (m && (m = +m.substring(1)), (j || "0" === d && "=" === g) && (j = d = "0", g = "="), n) {
                    case "n":
                        l = !0, n = "g";
                        break;
                    case "%":
                        o = 100, q = "%", n = "f";
                        break;
                    case "p":
                        o = 100, q = "%", n = "r";
                        break;
                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        "#" === i && (p = "0" + n.toLowerCase());
                    case "c":
                        s = !1;
                    case "d":
                        r = !0, m = 0;
                        break;
                    case "s":
                        o = -1, n = "r"
                }
                "$" === i && (p = e[0], q = e[1]), "r" != n || m || (n = "g"), null != m && ("g" == n ? m = Math.max(1, Math.min(21, m)) : "e" != n && "f" != n || (m = Math.max(0, Math.min(20, m)))), n = ih.get(n) || Ma;
                var t = j && l;
                return function (a) {
                    var c = q;
                    if (r && a % 1) return "";
                    var e = 0 > a || 0 === a && 0 > 1 / a ? (a = -a, "-") : "-" === h ? "" : h;
                    if (0 > o) {
                        var i = hg.formatPrefix(a, m);
                        a = i.scale(a), c = i.symbol + q
                    } else a *= o;
                    a = n(a, m);
                    var u, v, w = a.lastIndexOf(".");
                    if (0 > w) {
                        var x = s ? a.lastIndexOf("e") : -1;
                        0 > x ? (u = a, v = "") : (u = a.substring(0, x), v = a.substring(x))
                    } else u = a.substring(0, w), v = b + a.substring(w + 1);
                    !j && l && (u = f(u, 1 / 0));
                    var y = p.length + u.length + v.length + (t ? 0 : e.length),
                        z = k > y ? new Array(y = k - y + 1).join(d) : "";
                    return t && (u = f(z + u, z.length ? k - v.length : 1 / 0)), e += p, a = u + v, ("<" === g ? e + a + z : ">" === g ? z + e + a : "^" === g ? z.substring(0, y >>= 1) + e + a + z.substring(y) : e + (t ? a : z + a)) + c
                }
            }
        }

        function Ma(a) {
            return a + ""
        }

        function Na() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }

        function Oa(a, b, c) {
            function d(b) {
                var c = a(b),
                    d = f(c, 1);
                return d - b > b - c ? c : d
            }

            function e(c) {
                return b(c = a(new kh(c - 1)), 1), c
            }

            function f(a, c) {
                return b(a = new kh(+a), c), a
            }

            function g(a, d, f) {
                var g = e(a),
                    h = [];
                if (f > 1)
                    for (; d > g;) c(g) % f || h.push(new Date(+g)), b(g, 1);
                else
                    for (; d > g;) h.push(new Date(+g)), b(g, 1);
                return h
            }

            function h(a, b, c) {
                try {
                    kh = Na;
                    var d = new Na;
                    return d._ = a, g(d, b, c)
                } finally {
                    kh = Date
                }
            }
            a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
            var i = a.utc = Pa(a);
            return i.floor = i, i.round = Pa(d), i.ceil = Pa(e), i.offset = Pa(f), i.range = h, a
        }

        function Pa(a) {
            return function (b, c) {
                try {
                    kh = Na;
                    var d = new Na;
                    return d._ = b, a(d, c)._
                } finally {
                    kh = Date
                }
            }
        }

        function Qa(a) {
            function b(a) {
                function b(b) {
                    for (var c, e, f, g = [], h = -1, i = 0; ++h < d;) 37 === a.charCodeAt(h) && (g.push(a.slice(i, h)), null != (e = mh[c = a.charAt(++h)]) && (c = a.charAt(++h)), (f = C[c]) && (c = f(b, null == e ? "e" === c ? " " : "0" : e)), g.push(c), i = h + 1);
                    return g.push(a.slice(i, h)), g.join("")
                }
                var d = a.length;
                return b.parse = function (b) {
                    var d = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    };
                    if (c(d, a, b, 0) != b.length) return null;
                    "p" in d && (d.H = d.H % 12 + 12 * d.p);
                    var e = null != d.Z && kh !== Na,
                        f = new (e ? Na : kh);
                    return "j" in d ? f.setFullYear(d.y, 0, d.j) : "W" in d || "U" in d ? ("w" in d || (d.w = "W" in d ? 1 : 0), f.setFullYear(d.y, 0, 1), f.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + 7 * d.W - (f.getDay() + 5) % 7 : d.w + 7 * d.U - (f.getDay() + 6) % 7)) : f.setFullYear(d.y, d.m, d.d), f.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L), e ? f._ : f
                }, b.toString = function () {
                    return a
                }, b
            }

            function c(a, b, c, d) {
                for (var e, f, g, h = 0, i = b.length, j = c.length; i > h;) {
                    if (d >= j) return -1;
                    if (37 === (e = b.charCodeAt(h++))) {
                        if (g = b.charAt(h++), !(f = D[g in mh ? b.charAt(h++) : g]) || (d = f(a, c, d)) < 0) return -1
                    } else if (e != c.charCodeAt(d++)) return -1
                }
                return d
            }

            function d(a, b, c) {
                w.lastIndex = 0;
                var d = w.exec(b.slice(c));
                return d ? (a.w = x.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function e(a, b, c) {
                u.lastIndex = 0;
                var d = u.exec(b.slice(c));
                return d ? (a.w = v.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function f(a, b, c) {
                A.lastIndex = 0;
                var d = A.exec(b.slice(c));
                return d ? (a.m = B.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function g(a, b, c) {
                y.lastIndex = 0;
                var d = y.exec(b.slice(c));
                return d ? (a.m = z.get(d[0].toLowerCase()), c + d[0].length) : -1
            }

            function h(a, b, d) {
                return c(a, C.c.toString(), b, d)
            }

            function i(a, b, d) {
                return c(a, C.x.toString(), b, d)
            }

            function j(a, b, d) {
                return c(a, C.X.toString(), b, d)
            }

            function k(a, b, c) {
                var d = t.get(b.slice(c, c += 2).toLowerCase());
                return null == d ? -1 : (a.p = d, c)
            }
            var l = a.dateTime,
                m = a.date,
                n = a.time,
                o = a.periods,
                p = a.days,
                q = a.shortDays,
                r = a.months,
                s = a.shortMonths;
            b.utc = function (a) {
                function c(a) {
                    try {
                        kh = Na;
                        var b = new kh;
                        return b._ = a, d(b)
                    } finally {
                        kh = Date
                    }
                }
                var d = b(a);
                return c.parse = function (a) {
                    try {
                        kh = Na;
                        var b = d.parse(a);
                        return b && b._
                    } finally {
                        kh = Date
                    }
                }, c.toString = d.toString, c
            }, b.multi = b.utc.multi = ib;
            var t = hg.map(),
                u = Sa(p),
                v = Ta(p),
                w = Sa(q),
                x = Ta(q),
                y = Sa(r),
                z = Ta(r),
                A = Sa(s),
                B = Ta(s);
            o.forEach(function (a, b) {
                t.set(a.toLowerCase(), b)
            });
            var C = {
                a: function (a) {
                    return q[a.getDay()]
                },
                A: function (a) {
                    return p[a.getDay()]
                },
                b: function (a) {
                    return s[a.getMonth()]
                },
                B: function (a) {
                    return r[a.getMonth()]
                },
                c: b(l),
                d: function (a, b) {
                    return Ra(a.getDate(), b, 2)
                },
                e: function (a, b) {
                    return Ra(a.getDate(), b, 2)
                },
                H: function (a, b) {
                    return Ra(a.getHours(), b, 2)
                },
                I: function (a, b) {
                    return Ra(a.getHours() % 12 || 12, b, 2)
                },
                j: function (a, b) {
                    return Ra(1 + jh.dayOfYear(a), b, 3)
                },
                L: function (a, b) {
                    return Ra(a.getMilliseconds(), b, 3)
                },
                m: function (a, b) {
                    return Ra(a.getMonth() + 1, b, 2)
                },
                M: function (a, b) {
                    return Ra(a.getMinutes(), b, 2)
                },
                p: function (a) {
                    return o[+(a.getHours() >= 12)]
                },
                S: function (a, b) {
                    return Ra(a.getSeconds(), b, 2)
                },
                U: function (a, b) {
                    return Ra(jh.sundayOfYear(a), b, 2)
                },
                w: function (a) {
                    return a.getDay()
                },
                W: function (a, b) {
                    return Ra(jh.mondayOfYear(a), b, 2)
                },
                x: b(m),
                X: b(n),
                y: function (a, b) {
                    return Ra(a.getFullYear() % 100, b, 2)
                },
                Y: function (a, b) {
                    return Ra(a.getFullYear() % 1e4, b, 4)
                },
                Z: gb,
                "%": function () {
                    return "%"
                }
            },
                D = {
                    a: d,
                    A: e,
                    b: f,
                    B: g,
                    c: h,
                    d: ab,
                    e: ab,
                    H: cb,
                    I: cb,
                    j: bb,
                    L: fb,
                    m: _a,
                    M: db,
                    p: k,
                    S: eb,
                    U: Va,
                    w: Ua,
                    W: Wa,
                    x: i,
                    X: j,
                    y: Ya,
                    Y: Xa,
                    Z: Za,
                    "%": hb
                };
            return b
        }

        function Ra(a, b, c) {
            var d = 0 > a ? "-" : "",
                e = (d ? -a : a) + "",
                f = e.length;
            return d + (c > f ? new Array(c - f + 1).join(b) + e : e)
        }

        function Sa(a) {
            return new RegExp("^(?:" + a.map(hg.requote).join("|") + ")", "i")
        }

        function Ta(a) {
            for (var b = new j, c = -1, d = a.length; ++c < d;) b.set(a[c].toLowerCase(), c);
            return b
        }

        function Ua(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 1));
            return d ? (a.w = +d[0], c + d[0].length) : -1
        }

        function Va(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c));
            return d ? (a.U = +d[0], c + d[0].length) : -1
        }

        function Wa(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c));
            return d ? (a.W = +d[0], c + d[0].length) : -1
        }

        function Xa(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 4));
            return d ? (a.y = +d[0], c + d[0].length) : -1
        }

        function Ya(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.y = $a(+d[0]), c + d[0].length) : -1
        }

        function Za(a, b, c) {
            return /^[+-]\d{4}$/.test(b = b.slice(c, c + 5)) ? (a.Z = -b, c + 5) : -1
        }

        function $a(a) {
            return a + (a > 68 ? 1900 : 2e3)
        }

        function _a(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.m = d[0] - 1, c + d[0].length) : -1
        }

        function ab(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.d = +d[0], c + d[0].length) : -1
        }

        function bb(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 3));
            return d ? (a.j = +d[0], c + d[0].length) : -1
        }

        function cb(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.H = +d[0], c + d[0].length) : -1
        }

        function db(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.M = +d[0], c + d[0].length) : -1
        }

        function eb(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 2));
            return d ? (a.S = +d[0], c + d[0].length) : -1
        }

        function fb(a, b, c) {
            nh.lastIndex = 0;
            var d = nh.exec(b.slice(c, c + 3));
            return d ? (a.L = +d[0], c + d[0].length) : -1
        }

        function gb(a) {
            var b = a.getTimezoneOffset(),
                c = b > 0 ? "-" : "+",
                d = rg(b) / 60 | 0,
                e = rg(b) % 60;
            return c + Ra(d, "0", 2) + Ra(e, "0", 2)
        }

        function hb(a, b, c) {
            oh.lastIndex = 0;
            var d = oh.exec(b.slice(c, c + 1));
            return d ? c + d[0].length : -1
        }

        function ib(a) {
            for (var b = a.length, c = -1; ++c < b;) a[c][0] = this(a[c][0]);
            return function (b) {
                for (var c = 0, d = a[c]; !d[1](b);) d = a[++c];
                return d[0](b)
            }
        }

        function jb() { }

        function kb(a, b, c) {
            var d = c.s = a + b,
                e = d - a,
                f = d - e;
            c.t = a - f + (b - e)
        }

        function lb(a, b) {
            a && sh.hasOwnProperty(a.type) && sh[a.type](a, b)
        }

        function mb(a, b, c) {
            var d, e = -1,
                f = a.length - c;
            for (b.lineStart(); ++e < f;) d = a[e], b.point(d[0], d[1], d[2]);
            b.lineEnd()
        }

        function nb(a, b) {
            var c = -1,
                d = a.length;
            for (b.polygonStart(); ++c < d;) mb(a[c], b, 1);
            b.polygonEnd()
        }

        function ob() {
            function a(a, b) {
                a *= Og, b = b * Og / 2 + Kg / 4;
                var c = a - d,
                    g = c >= 0 ? 1 : -1,
                    h = g * c,
                    i = Math.cos(b),
                    j = Math.sin(b),
                    k = f * j,
                    l = e * i + k * Math.cos(h),
                    m = k * g * Math.sin(h);
                uh.add(Math.atan2(m, l)), d = a, e = i, f = j
            }
            var b, c, d, e, f;
            vh.point = function (g, h) {
                vh.point = a, d = (b = g) * Og, e = Math.cos(h = (c = h) * Og / 2 + Kg / 4), f = Math.sin(h)
            }, vh.lineEnd = function () {
                a(b, c)
            }
        }

        function pb(a) {
            var b = a[0],
                c = a[1],
                d = Math.cos(c);
            return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
        }

        function qb(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
        }

        function rb(a, b) {
            return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
        }

        function sb(a, b) {
            a[0] += b[0], a[1] += b[1], a[2] += b[2]
        }

        function tb(a, b) {
            return [a[0] * b, a[1] * b, a[2] * b]
        }

        function ub(a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            a[0] /= b, a[1] /= b, a[2] /= b
        }

        function vb(a) {
            return [Math.atan2(a[1], a[0]), ba(a[2])]
        }

        function wb(a, b) {
            return rg(a[0] - b[0]) < Ig && rg(a[1] - b[1]) < Ig
        }

        function xb(a, b) {
            a *= Og;
            var c = Math.cos(b *= Og);
            yb(c * Math.cos(a), c * Math.sin(a), Math.sin(b))
        }

        function yb(a, b, c) {
            ++wh, yh += (a - yh) / wh, zh += (b - zh) / wh, Ah += (c - Ah) / wh
        }

        function zb() {
            function a(a, e) {
                a *= Og;
                var f = Math.cos(e *= Og),
                    g = f * Math.cos(a),
                    h = f * Math.sin(a),
                    i = Math.sin(e),
                    j = Math.atan2(Math.sqrt((j = c * i - d * h) * j + (j = d * g - b * i) * j + (j = b * h - c * g) * j), b * g + c * h + d * i);
                xh += j, Bh += j * (b + (b = g)), Ch += j * (c + (c = h)), Dh += j * (d + (d = i)), yb(b, c, d)
            }
            var b, c, d;
            Hh.point = function (e, f) {
                e *= Og;
                var g = Math.cos(f *= Og);
                b = g * Math.cos(e), c = g * Math.sin(e), d = Math.sin(f), Hh.point = a, yb(b, c, d)
            }
        }

        function Ab() {
            Hh.point = xb
        }

        function Bb() {
            function a(a, b) {
                a *= Og;
                var c = Math.cos(b *= Og),
                    g = c * Math.cos(a),
                    h = c * Math.sin(a),
                    i = Math.sin(b),
                    j = e * i - f * h,
                    k = f * g - d * i,
                    l = d * h - e * g,
                    m = Math.sqrt(j * j + k * k + l * l),
                    n = d * g + e * h + f * i,
                    o = m && -aa(n) / m,
                    p = Math.atan2(m, n);
                Eh += o * j, Fh += o * k, Gh += o * l, xh += p, Bh += p * (d + (d = g)), Ch += p * (e + (e = h)), Dh += p * (f + (f = i)), yb(d, e, f)
            }
            var b, c, d, e, f;
            Hh.point = function (g, h) {
                b = g, c = h, Hh.point = a, g *= Og;
                var i = Math.cos(h *= Og);
                d = i * Math.cos(g), e = i * Math.sin(g), f = Math.sin(h), yb(d, e, f)
            }, Hh.lineEnd = function () {
                a(b, c), Hh.lineEnd = Ab, Hh.point = xb
            }
        }

        function Cb(a, b) {
            function c(c, d) {
                return c = a(c, d), b(c[0], c[1])
            }
            return a.invert && b.invert && (c.invert = function (c, d) {
                return (c = b.invert(c, d)) && a.invert(c[0], c[1])
            }), c
        }

        function Db() {
            return !0
        }

        function Eb(a, b, c, d, e) {
            var f = [],
                g = [];
            if (a.forEach(function (a) {
                if (!((b = a.length - 1) <= 0)) {
                    var b, c = a[0],
                        d = a[b];
                    if (wb(c, d)) {
                        e.lineStart();
                        for (var h = 0; b > h; ++h) e.point((c = a[h])[0], c[1]);
                        return void e.lineEnd()
                    }
                    var i = new Gb(c, a, null, !0),
                        j = new Gb(c, null, i, !1);
                    i.o = j, f.push(i), g.push(j), i = new Gb(d, a, null, !1), j = new Gb(d, null, i, !0), i.o = j, f.push(i), g.push(j)
                }
            }), g.sort(b), Fb(f), Fb(g), f.length) {
                for (var h = 0, i = c, j = g.length; j > h; ++h) g[h].e = i = !i;
                for (var k, l, m = f[0]; ;) {
                    for (var n = m, o = !0; n.v;)
                        if ((n = n.n) === m) return;
                    k = n.z, e.lineStart();
                    do {
                        if (n.v = n.o.v = !0, n.e) {
                            if (o)
                                for (var h = 0, j = k.length; j > h; ++h) e.point((l = k[h])[0], l[1]);
                            else d(n.x, n.n.x, 1, e);
                            n = n.n
                        } else {
                            if (o) {
                                k = n.p.z;
                                for (var h = k.length - 1; h >= 0; --h) e.point((l = k[h])[0], l[1])
                            } else d(n.x, n.p.x, -1, e);
                            n = n.p
                        }
                        n = n.o, k = n.z, o = !o
                    } while (!n.v);
                    e.lineEnd()
                }
            }
        }

        function Fb(a) {
            if (b = a.length) {
                for (var b, c, d = 0, e = a[0]; ++d < b;) e.n = c = a[d], c.p = e, e = c;
                e.n = c = a[0], c.p = e
            }
        }

        function Gb(a, b, c, d) {
            this.x = a, this.z = b, this.o = c, this.e = d, this.v = !1, this.n = this.p = null
        }

        function Hb(a, b, c, d) {
            return function (e, f) {
                function g(b, c) {
                    var d = e(b, c);
                    a(b = d[0], c = d[1]) && f.point(b, c)
                }

                function h(a, b) {
                    var c = e(a, b);
                    q.point(c[0], c[1])
                }

                function i() {
                    s.point = h, q.lineStart()
                }

                function j() {
                    s.point = g, q.lineEnd()
                }

                function k(a, b) {
                    p.push([a, b]);
                    var c = e(a, b);
                    u.point(c[0], c[1])
                }

                function l() {
                    u.lineStart(), p = []
                }

                function m() {
                    k(p[0][0], p[0][1]), u.lineEnd();
                    var a, b = u.clean(),
                        c = t.buffer(),
                        d = c.length;
                    if (p.pop(), o.push(p), p = null, d)
                        if (1 & b) {
                            a = c[0];
                            var e, d = a.length - 1,
                                g = -1;
                            if (d > 0) {
                                for (v || (f.polygonStart(), v = !0), f.lineStart(); ++g < d;) f.point((e = a[g])[0], e[1]);
                                f.lineEnd()
                            }
                        } else d > 1 && 2 & b && c.push(c.pop().concat(c.shift())), n.push(c.filter(Ib))
                }
                var n, o, p, q = b(f),
                    r = e.invert(d[0], d[1]),
                    s = {
                        point: g,
                        lineStart: i,
                        lineEnd: j,
                        polygonStart: function () {
                            s.point = k, s.lineStart = l, s.lineEnd = m, n = [], o = []
                        },
                        polygonEnd: function () {
                            s.point = g, s.lineStart = i, s.lineEnd = j, n = hg.merge(n);
                            var a = Ob(r, o);
                            n.length ? (v || (f.polygonStart(), v = !0), Eb(n, Kb, a, c, f)) : a && (v || (f.polygonStart(), v = !0), f.lineStart(), c(null, null, 1, f), f.lineEnd()), v && (f.polygonEnd(), v = !1), n = o = null
                        },
                        sphere: function () {
                            f.polygonStart(), f.lineStart(), c(null, null, 1, f), f.lineEnd(), f.polygonEnd()
                        }
                    },
                    t = Jb(),
                    u = b(t),
                    v = !1;
                return s
            }
        }

        function Ib(a) {
            return a.length > 1
        }

        function Jb() {
            var a, b = [];
            return {
                lineStart: function () {
                    b.push(a = [])
                },
                point: function (b, c) {
                    a.push([b, c])
                },
                lineEnd: v,
                buffer: function () {
                    var c = b;
                    return b = [], a = null, c
                },
                rejoin: function () {
                    b.length > 1 && b.push(b.pop().concat(b.shift()))
                }
            }
        }

        function Kb(a, b) {
            return ((a = a.x)[0] < 0 ? a[1] - Ng - Ig : Ng - a[1]) - ((b = b.x)[0] < 0 ? b[1] - Ng - Ig : Ng - b[1])
        }

        function Lb(a) {
            var b, c = NaN,
                d = NaN,
                e = NaN;
            return {
                lineStart: function () {
                    a.lineStart(), b = 1
                },
                point: function (f, g) {
                    var h = f > 0 ? Kg : -Kg,
                        i = rg(f - c);
                    rg(i - Kg) < Ig ? (a.point(c, d = (d + g) / 2 > 0 ? Ng : -Ng), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), a.point(f, d), b = 0) : e !== h && i >= Kg && (rg(c - e) < Ig && (c -= e * Ig), rg(f - h) < Ig && (f -= h * Ig), d = Mb(c, d, f, g), a.point(e, d), a.lineEnd(), a.lineStart(), a.point(h, d), b = 0), a.point(c = f, d = g), e = h
                },
                lineEnd: function () {
                    a.lineEnd(), c = d = NaN
                },
                clean: function () {
                    return 2 - b
                }
            }
        }

        function Mb(a, b, c, d) {
            var e, f, g = Math.sin(a - c);
            return rg(g) > Ig ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
        }

        function Nb(a, b, c, d) {
            var e;
            if (null == a) e = c * Ng, d.point(-Kg, e), d.point(0, e), d.point(Kg, e), d.point(Kg, 0), d.point(Kg, -e), d.point(0, -e), d.point(-Kg, -e), d.point(-Kg, 0), d.point(-Kg, e);
            else if (rg(a[0] - b[0]) > Ig) {
                var f = a[0] < b[0] ? Kg : -Kg;
                e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
            } else d.point(b[0], b[1])
        }

        function Ob(a, b) {
            var c = a[0],
                d = a[1],
                e = [Math.sin(c), -Math.cos(c), 0],
                f = 0,
                g = 0;
            uh.reset();
            for (var h = 0, i = b.length; i > h; ++h) {
                var j = b[h],
                    k = j.length;
                if (k)
                    for (var l = j[0], m = l[0], n = l[1] / 2 + Kg / 4, o = Math.sin(n), p = Math.cos(n), q = 1; ;) {
                        q === k && (q = 0), a = j[q];
                        var r = a[0],
                            s = a[1] / 2 + Kg / 4,
                            t = Math.sin(s),
                            u = Math.cos(s),
                            v = r - m,
                            w = v >= 0 ? 1 : -1,
                            x = w * v,
                            y = x > Kg,
                            z = o * t;
                        if (uh.add(Math.atan2(z * w * Math.sin(x), p * u + z * Math.cos(x))), f += y ? v + w * Lg : v, y ^ m >= c ^ r >= c) {
                            var A = rb(pb(l), pb(a));
                            ub(A);
                            var B = rb(e, A);
                            ub(B);
                            var C = (y ^ v >= 0 ? -1 : 1) * ba(B[2]);
                            (d > C || d === C && (A[0] || A[1])) && (g += y ^ v >= 0 ? 1 : -1)
                        }
                        if (!q++) break;
                        m = r, o = t, p = u, l = a
                    }
            }
            return (-Ig > f || Ig > f && -Ig > uh) ^ 1 & g
        }

        function Pb(a) {
            function b(a, b) {
                return Math.cos(a) * Math.cos(b) > f
            }

            function c(a) {
                var c, f, i, j, k;
                return {
                    lineStart: function () {
                        j = i = !1, k = 1
                    },
                    point: function (l, m) {
                        var n, o = [l, m],
                            p = b(l, m),
                            q = g ? p ? 0 : e(l, m) : p ? e(l + (0 > l ? Kg : -Kg), m) : 0;
                        if (!c && (j = i = p) && a.lineStart(), p !== i && (n = d(c, o), (wb(c, n) || wb(o, n)) && (o[0] += Ig, o[1] += Ig, p = b(o[0], o[1]))), p !== i) k = 0, p ? (a.lineStart(), n = d(o, c), a.point(n[0], n[1])) : (n = d(c, o), a.point(n[0], n[1]), a.lineEnd()), c = n;
                        else if (h && c && g ^ p) {
                            var r;
                            q & f || !(r = d(o, c, !0)) || (k = 0, g ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                        } !p || c && wb(c, o) || a.point(o[0], o[1]), c = o, i = p, f = q
                    },
                    lineEnd: function () {
                        i && a.lineEnd(), c = null
                    },
                    clean: function () {
                        return k | (j && i) << 1
                    }
                }
            }

            function d(a, b, c) {
                var d = pb(a),
                    e = pb(b),
                    g = [1, 0, 0],
                    h = rb(d, e),
                    i = qb(h, h),
                    j = h[0],
                    k = i - j * j;
                if (!k) return !c && a;
                var l = f * i / k,
                    m = -f * j / k,
                    n = rb(g, h),
                    o = tb(g, l);
                sb(o, tb(h, m));
                var p = n,
                    q = qb(o, p),
                    r = qb(p, p),
                    s = q * q - r * (qb(o, o) - 1);
                if (!(0 > s)) {
                    var t = Math.sqrt(s),
                        u = tb(p, (-q - t) / r);
                    if (sb(u, o), u = vb(u), !c) return u;
                    var v, w = a[0],
                        x = b[0],
                        y = a[1],
                        z = b[1];
                    w > x && (v = w, w = x, x = v);
                    var A = x - w,
                        B = rg(A - Kg) < Ig,
                        C = B || Ig > A;
                    if (!B && y > z && (v = y, y = z, z = v), C ? B ? y + z > 0 ^ u[1] < (rg(u[0] - w) < Ig ? y : z) : y <= u[1] && u[1] <= z : A > Kg ^ (w <= u[0] && u[0] <= x)) {
                        var D = tb(p, (-q + t) / r);
                        return sb(D, o), [u, vb(D)]
                    }
                }
            }

            function e(b, c) {
                var d = g ? a : Kg - a,
                    e = 0;
                return -d > b ? e |= 1 : b > d && (e |= 2), -d > c ? e |= 4 : c > d && (e |= 8), e
            }
            var f = Math.cos(a),
                g = f > 0,
                h = rg(f) > Ig;
            return Hb(b, c, oc(a, 6 * Og), g ? [0, -a] : [-Kg, a - Kg])
        }

        function Qb(a, b, c, d) {
            return function (e) {
                var f, g = e.a,
                    h = e.b,
                    i = g.x,
                    j = g.y,
                    k = h.x,
                    l = h.y,
                    m = 0,
                    n = 1,
                    o = k - i,
                    p = l - j;
                if (f = a - i, o || !(f > 0)) {
                    if (f /= o, 0 > o) {
                        if (m > f) return;
                        n > f && (n = f)
                    } else if (o > 0) {
                        if (f > n) return;
                        f > m && (m = f)
                    }
                    if (f = c - i, o || !(0 > f)) {
                        if (f /= o, 0 > o) {
                            if (f > n) return;
                            f > m && (m = f)
                        } else if (o > 0) {
                            if (m > f) return;
                            n > f && (n = f)
                        }
                        if (f = b - j, p || !(f > 0)) {
                            if (f /= p, 0 > p) {
                                if (m > f) return;
                                n > f && (n = f)
                            } else if (p > 0) {
                                if (f > n) return;
                                f > m && (m = f)
                            }
                            if (f = d - j, p || !(0 > f)) {
                                if (f /= p, 0 > p) {
                                    if (f > n) return;
                                    f > m && (m = f)
                                } else if (p > 0) {
                                    if (m > f) return;
                                    n > f && (n = f)
                                }
                                return m > 0 && (e.a = {
                                    x: i + m * o,
                                    y: j + m * p
                                }), 1 > n && (e.b = {
                                    x: i + n * o,
                                    y: j + n * p
                                }), e
                            }
                        }
                    }
                }
            }
        }

        function Rb(a, b, c, d) {
            function e(d, e) {
                return rg(d[0] - a) < Ig ? e > 0 ? 0 : 3 : rg(d[0] - c) < Ig ? e > 0 ? 2 : 1 : rg(d[1] - b) < Ig ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2
            }

            function f(a, b) {
                return g(a.x, b.x)
            }

            function g(a, b) {
                var c = e(a, 1),
                    d = e(b, 1);
                return c !== d ? c - d : 0 === c ? b[1] - a[1] : 1 === c ? a[0] - b[0] : 2 === c ? a[1] - b[1] : b[0] - a[0]
            }
            return function (h) {
                function i(a) {
                    for (var b = 0, c = q.length, d = a[1], e = 0; c > e; ++e)
                        for (var f, g = 1, h = q[e], i = h.length, j = h[0]; i > g; ++g) f = h[g], j[1] <= d ? f[1] > d && _(j, f, a) > 0 && ++b : f[1] <= d && _(j, f, a) < 0 && --b, j = f;
                    return 0 !== b
                }

                function j(f, h, i, j) {
                    var k = 0,
                        l = 0;
                    if (null == f || (k = e(f, i)) !== (l = e(h, i)) || g(f, h) < 0 ^ i > 0)
                        do {
                            j.point(0 === k || 3 === k ? a : c, k > 1 ? d : b)
                        } while ((k = (k + i + 4) % 4) !== l);
                    else j.point(h[0], h[1])
                }

                function k(e, f) {
                    return e >= a && c >= e && f >= b && d >= f
                }

                function l(a, b) {
                    k(a, b) && h.point(a, b)
                }

                function m() {
                    D.point = o, q && q.push(r = []), y = !0, x = !1, v = w = NaN
                }

                function n() {
                    p && (o(s, t), u && x && B.rejoin(), p.push(B.buffer())), D.point = l, x && h.lineEnd()
                }

                function o(a, b) {
                    a = Math.max(-Jh, Math.min(Jh, a)), b = Math.max(-Jh, Math.min(Jh, b));
                    var c = k(a, b);
                    if (q && r.push([a, b]), y) s = a, t = b, u = c, y = !1, c && (h.lineStart(), h.point(a, b));
                    else if (c && x) h.point(a, b);
                    else {
                        var d = {
                            a: {
                                x: v,
                                y: w
                            },
                            b: {
                                x: a,
                                y: b
                            }
                        };
                        C(d) ? (x || (h.lineStart(), h.point(d.a.x, d.a.y)), h.point(d.b.x, d.b.y), c || h.lineEnd(), z = !1) : c && (h.lineStart(), h.point(a, b), z = !1)
                    }
                    v = a, w = b, x = c
                }
                var p, q, r, s, t, u, v, w, x, y, z, A = h,
                    B = Jb(),
                    C = Qb(a, b, c, d),
                    D = {
                        point: l,
                        lineStart: m,
                        lineEnd: n,
                        polygonStart: function () {
                            h = B, p = [], q = [], z = !0
                        },
                        polygonEnd: function () {
                            h = A, p = hg.merge(p);
                            var b = i([a, d]),
                                c = z && b,
                                e = p.length;
                            (c || e) && (h.polygonStart(), c && (h.lineStart(), j(null, null, 1, h), h.lineEnd()), e && Eb(p, f, b, j, h), h.polygonEnd()), p = q = r = null
                        }
                    };
                return D
            }
        }

        function Sb(a) {
            var b = 0,
                c = Kg / 3,
                d = gc(a),
                e = d(b, c);
            return e.parallels = function (a) {
                return arguments.length ? d(b = a[0] * Kg / 180, c = a[1] * Kg / 180) : [b / Kg * 180, c / Kg * 180]
            }, e
        }

        function Tb(a, b) {
            function c(a, b) {
                var c = Math.sqrt(f - 2 * e * Math.sin(b)) / e;
                return [c * Math.sin(a *= e), g - c * Math.cos(a)]
            }
            var d = Math.sin(a),
                e = (d + Math.sin(b)) / 2,
                f = 1 + d * (2 * e - d),
                g = Math.sqrt(f) / e;
            return c.invert = function (a, b) {
                var c = g - b;
                return [Math.atan2(a, c) / e, ba((f - (a * a + c * c) * e * e) / (2 * e))]
            }, c
        }

        function Ub() {
            function a(a, b) {
                Lh += e * a - d * b, d = a, e = b
            }
            var b, c, d, e;
            Qh.point = function (f, g) {
                Qh.point = a, b = d = f, c = e = g
            }, Qh.lineEnd = function () {
                a(b, c)
            }
        }

        function Vb(a, b) {
            Mh > a && (Mh = a), a > Oh && (Oh = a), Nh > b && (Nh = b), b > Ph && (Ph = b)
        }

        function Wb() {
            function a(a, b) {
                g.push("M", a, ",", b, f)
            }

            function b(a, b) {
                g.push("M", a, ",", b), h.point = c
            }

            function c(a, b) {
                g.push("L", a, ",", b)
            }

            function d() {
                h.point = a
            }

            function e() {
                g.push("Z")
            }
            var f = Xb(4.5),
                g = [],
                h = {
                    point: a,
                    lineStart: function () {
                        h.point = b
                    },
                    lineEnd: d,
                    polygonStart: function () {
                        h.lineEnd = e
                    },
                    polygonEnd: function () {
                        h.lineEnd = d, h.point = a
                    },
                    pointRadius: function (a) {
                        return f = Xb(a), h
                    },
                    result: function () {
                        if (g.length) {
                            var a = g.join("");
                            return g = [], a
                        }
                    }
                };
            return h
        }

        function Xb(a) {
            return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
        }

        function Yb(a, b) {
            yh += a, zh += b, ++Ah
        }

        function Zb() {
            function a(a, d) {
                var e = a - b,
                    f = d - c,
                    g = Math.sqrt(e * e + f * f);
                Bh += g * (b + a) / 2, Ch += g * (c + d) / 2, Dh += g, Yb(b = a, c = d)
            }
            var b, c;
            Sh.point = function (d, e) {
                Sh.point = a, Yb(b = d, c = e)
            }
        }

        function $b() {
            Sh.point = Yb
        }

        function _b() {
            function a(a, b) {
                var c = a - d,
                    f = b - e,
                    g = Math.sqrt(c * c + f * f);
                Bh += g * (d + a) / 2, Ch += g * (e + b) / 2, Dh += g, g = e * a - d * b, Eh += g * (d + a), Fh += g * (e + b), Gh += 3 * g, Yb(d = a, e = b)
            }
            var b, c, d, e;
            Sh.point = function (f, g) {
                Sh.point = a, Yb(b = d = f, c = e = g)
            }, Sh.lineEnd = function () {
                a(b, c)
            }
        }

        function ac(a) {
            function b(b, c) {
                a.moveTo(b + g, c), a.arc(b, c, g, 0, Lg)
            }

            function c(b, c) {
                a.moveTo(b, c), h.point = d
            }

            function d(b, c) {
                a.lineTo(b, c)
            }

            function e() {
                h.point = b
            }

            function f() {
                a.closePath()
            }
            var g = 4.5,
                h = {
                    point: b,
                    lineStart: function () {
                        h.point = c
                    },
                    lineEnd: e,
                    polygonStart: function () {
                        h.lineEnd = f
                    },
                    polygonEnd: function () {
                        h.lineEnd = e, h.point = b
                    },
                    pointRadius: function (a) {
                        return g = a, h
                    },
                    result: v
                };
            return h
        }

        function bc(a) {
            function b(a) {
                return (h ? d : c)(a)
            }

            function c(b) {
                return ec(b, function (c, d) {
                    c = a(c, d), b.point(c[0], c[1])
                })
            }

            function d(b) {
                function c(c, d) {
                    c = a(c, d), b.point(c[0], c[1])
                }

                function d() {
                    t = NaN, y.point = f, b.lineStart()
                }

                function f(c, d) {
                    var f = pb([c, d]),
                        g = a(c, d);
                    e(t, u, s, v, w, x, t = g[0], u = g[1], s = c, v = f[0], w = f[1], x = f[2], h, b), b.point(t, u)
                }

                function g() {
                    y.point = c, b.lineEnd()
                }

                function i() {
                    d(), y.point = j, y.lineEnd = k
                }

                function j(a, b) {
                    f(l = a, m = b), n = t, o = u, p = v, q = w, r = x, y.point = f
                }

                function k() {
                    e(t, u, s, v, w, x, n, o, l, p, q, r, h, b), y.lineEnd = g, g()
                }
                var l, m, n, o, p, q, r, s, t, u, v, w, x, y = {
                    point: c,
                    lineStart: d,
                    lineEnd: g,
                    polygonStart: function () {
                        b.polygonStart(), y.lineStart = i
                    },
                    polygonEnd: function () {
                        b.polygonEnd(), y.lineStart = d
                    }
                };
                return y
            }

            function e(b, c, d, h, i, j, k, l, m, n, o, p, q, r) {
                var s = k - b,
                    t = l - c,
                    u = s * s + t * t;
                if (u > 4 * f && q--) {
                    var v = h + n,
                        w = i + o,
                        x = j + p,
                        y = Math.sqrt(v * v + w * w + x * x),
                        z = Math.asin(x /= y),
                        A = rg(rg(x) - 1) < Ig || rg(d - m) < Ig ? (d + m) / 2 : Math.atan2(w, v),
                        B = a(A, z),
                        C = B[0],
                        D = B[1],
                        E = C - b,
                        F = D - c,
                        G = t * E - s * F;
                    (G * G / u > f || rg((s * E + t * F) / u - .5) > .3 || g > h * n + i * o + j * p) && (e(b, c, d, h, i, j, C, D, A, v /= y, w /= y, x, q, r), r.point(C, D), e(C, D, A, v, w, x, k, l, m, n, o, p, q, r))
                }
            }
            var f = .5,
                g = Math.cos(30 * Og),
                h = 16;
            return b.precision = function (a) {
                return arguments.length ? (h = (f = a * a) > 0 && 16, b) : Math.sqrt(f)
            }, b
        }

        function cc(a) {
            var b = bc(function (b, c) {
                return a([b * Pg, c * Pg])
            });
            return function (a) {
                return hc(b(a))
            }
        }

        function dc(a) {
            this.stream = a
        }

        function ec(a, b) {
            return {
                point: b,
                sphere: function () {
                    a.sphere()
                },
                lineStart: function () {
                    a.lineStart()
                },
                lineEnd: function () {
                    a.lineEnd()
                },
                polygonStart: function () {
                    a.polygonStart()
                },
                polygonEnd: function () {
                    a.polygonEnd()
                }
            }
        }

        function fc(a) {
            return gc(function () {
                return a
            })()
        }

        function gc(a) {
            function b(a) {
                return a = h(a[0] * Og, a[1] * Og), [a[0] * m + i, j - a[1] * m]
            }

            function c(a) {
                return (a = h.invert((a[0] - i) / m, (j - a[1]) / m)) && [a[0] * Pg, a[1] * Pg]
            }

            function d() {
                h = Cb(g = kc(r, t, u), f);
                var a = f(p, q);
                return i = n - a[0] * m, j = o + a[1] * m, e()
            }

            function e() {
                return k && (k.valid = !1, k = null), b
            }
            var f, g, h, i, j, k, l = bc(function (a, b) {
                return a = f(a, b), [a[0] * m + i, j - a[1] * m]
            }),
                m = 150,
                n = 480,
                o = 250,
                p = 0,
                q = 0,
                r = 0,
                t = 0,
                u = 0,
                v = Ih,
                w = s,
                x = null,
                y = null;
            return b.stream = function (a) {
                return k && (k.valid = !1), k = hc(v(g, l(w(a)))), k.valid = !0, k
            }, b.clipAngle = function (a) {
                return arguments.length ? (v = null == a ? (x = a, Ih) : Pb((x = +a) * Og), e()) : x
            }, b.clipExtent = function (a) {
                return arguments.length ? (y = a, w = a ? Rb(a[0][0], a[0][1], a[1][0], a[1][1]) : s, e()) : y
            }, b.scale = function (a) {
                return arguments.length ? (m = +a, d()) : m
            }, b.translate = function (a) {
                return arguments.length ? (n = +a[0], o = +a[1], d()) : [n, o]
            }, b.center = function (a) {
                return arguments.length ? (p = a[0] % 360 * Og, q = a[1] % 360 * Og, d()) : [p * Pg, q * Pg]
            }, b.rotate = function (a) {
                return arguments.length ? (r = a[0] % 360 * Og, t = a[1] % 360 * Og, u = a.length > 2 ? a[2] % 360 * Og : 0, d()) : [r * Pg, t * Pg, u * Pg]
            }, hg.rebind(b, l, "precision"),
                function () {
                    return f = a.apply(this, arguments), b.invert = f.invert && c, d()
                }
        }

        function hc(a) {
            return ec(a, function (b, c) {
                a.point(b * Og, c * Og)
            })
        }

        function ic(a, b) {
            return [a, b]
        }

        function jc(a, b) {
            return [a > Kg ? a - Lg : -Kg > a ? a + Lg : a, b]
        }

        function kc(a, b, c) {
            return a ? b || c ? Cb(mc(a), nc(b, c)) : mc(a) : b || c ? nc(b, c) : jc
        }

        function lc(a) {
            return function (b, c) {
                return b += a, [b > Kg ? b - Lg : -Kg > b ? b + Lg : b, c]
            }
        }

        function mc(a) {
            var b = lc(a);
            return b.invert = lc(-a), b
        }

        function nc(a, b) {
            function c(a, b) {
                var c = Math.cos(b),
                    h = Math.cos(a) * c,
                    i = Math.sin(a) * c,
                    j = Math.sin(b),
                    k = j * d + h * e;
                return [Math.atan2(i * f - k * g, h * d - j * e), ba(k * f + i * g)]
            }
            var d = Math.cos(a),
                e = Math.sin(a),
                f = Math.cos(b),
                g = Math.sin(b);
            return c.invert = function (a, b) {
                var c = Math.cos(b),
                    h = Math.cos(a) * c,
                    i = Math.sin(a) * c,
                    j = Math.sin(b),
                    k = j * f - i * g;
                return [Math.atan2(i * f + j * g, h * d + k * e), ba(k * d - h * e)]
            }, c
        }

        function oc(a, b) {
            var c = Math.cos(a),
                d = Math.sin(a);
            return function (e, f, g, h) {
                var i = g * b;
                null != e ? (e = pc(c, e), f = pc(c, f), (g > 0 ? f > e : e > f) && (e += g * Lg)) : (e = a + g * Lg, f = a - .5 * i);
                for (var j, k = e; g > 0 ? k > f : f > k; k -= i) h.point((j = vb([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], j[1])
            }
        }

        function pc(a, b) {
            var c = pb(b);
            c[0] -= a, ub(c);
            var d = aa(-c[1]);
            return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - Ig) % (2 * Math.PI)
        }

        function qc(a, b, c) {
            var d = hg.range(a, b - Ig, c).concat(b);
            return function (a) {
                return d.map(function (b) {
                    return [a, b]
                })
            }
        }

        function rc(a, b, c) {
            var d = hg.range(a, b - Ig, c).concat(b);
            return function (a) {
                return d.map(function (b) {
                    return [b, a]
                })
            }
        }

        function sc(a) {
            return a.source
        }

        function tc(a) {
            return a.target
        }

        function uc(a, b, c, d) {
            var e = Math.cos(b),
                f = Math.sin(b),
                g = Math.cos(d),
                h = Math.sin(d),
                i = e * Math.cos(a),
                j = e * Math.sin(a),
                k = g * Math.cos(c),
                l = g * Math.sin(c),
                m = 2 * Math.asin(Math.sqrt(fa(d - b) + e * g * fa(c - a))),
                n = 1 / Math.sin(m),
                o = m ? function (a) {
                    var b = Math.sin(a *= m) * n,
                        c = Math.sin(m - a) * n,
                        d = c * i + b * k,
                        e = c * j + b * l,
                        g = c * f + b * h;
                    return [Math.atan2(e, d) * Pg, Math.atan2(g, Math.sqrt(d * d + e * e)) * Pg]
                } : function () {
                    return [a * Pg, b * Pg]
                };
            return o.distance = m, o
        }

        function vc() {
            function a(a, e) {
                var f = Math.sin(e *= Og),
                    g = Math.cos(e),
                    h = rg((a *= Og) - b),
                    i = Math.cos(h);
                Th += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = d * f - c * g * i) * h), c * f + d * g * i), b = a, c = f, d = g
            }
            var b, c, d;
            Uh.point = function (e, f) {
                b = e * Og, c = Math.sin(f *= Og), d = Math.cos(f), Uh.point = a
            }, Uh.lineEnd = function () {
                Uh.point = Uh.lineEnd = v
            }
        }

        function wc(a, b) {
            function c(b, c) {
                var d = Math.cos(b),
                    e = Math.cos(c),
                    f = a(d * e);
                return [f * e * Math.sin(b), f * Math.sin(c)]
            }
            return c.invert = function (a, c) {
                var d = Math.sqrt(a * a + c * c),
                    e = b(d),
                    f = Math.sin(e),
                    g = Math.cos(e);
                return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
            }, c
        }

        function xc(a, b) {
            function c(a, b) {
                g > 0 ? -Ng + Ig > b && (b = -Ng + Ig) : b > Ng - Ig && (b = Ng - Ig);
                var c = g / Math.pow(e(b), f);
                return [c * Math.sin(f * a), g - c * Math.cos(f * a)]
            }
            var d = Math.cos(a),
                e = function (a) {
                    return Math.tan(Kg / 4 + a / 2)
                },
                f = a === b ? Math.sin(a) : Math.log(d / Math.cos(b)) / Math.log(e(b) / e(a)),
                g = d * Math.pow(e(a), f) / f;
            return f ? (c.invert = function (a, b) {
                var c = g - b,
                    d = $(f) * Math.sqrt(a * a + c * c);
                return [Math.atan2(a, c) / f, 2 * Math.atan(Math.pow(g / d, 1 / f)) - Ng]
            }, c) : zc
        }

        function yc(a, b) {
            function c(a, b) {
                var c = f - b;
                return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
            }
            var d = Math.cos(a),
                e = a === b ? Math.sin(a) : (d - Math.cos(b)) / (b - a),
                f = d / e + a;
            return rg(e) < Ig ? ic : (c.invert = function (a, b) {
                var c = f - b;
                return [Math.atan2(a, c) / e, f - $(e) * Math.sqrt(a * a + c * c)]
            }, c)
        }

        function zc(a, b) {
            return [a, Math.log(Math.tan(Kg / 4 + b / 2))]
        }

        function Ac(a) {
            var b, c = fc(a),
                d = c.scale,
                e = c.translate,
                f = c.clipExtent;
            return c.scale = function () {
                var a = d.apply(c, arguments);
                return a === c ? b ? c.clipExtent(null) : c : a
            }, c.translate = function () {
                var a = e.apply(c, arguments);
                return a === c ? b ? c.clipExtent(null) : c : a
            }, c.clipExtent = function (a) {
                var g = f.apply(c, arguments);
                if (g === c) {
                    if (b = null == a) {
                        var h = Kg * d(),
                            i = e();
                        f([
                            [i[0] - h, i[1] - h],
                            [i[0] + h, i[1] + h]
                        ])
                    }
                } else b && (g = null);
                return g
            }, c.clipExtent(null)
        }

        function Bc(a, b) {
            return [Math.log(Math.tan(Kg / 4 + b / 2)), -a]
        }

        function Cc(a) {
            return a[0]
        }

        function Dc(a) {
            return a[1]
        }

        function Ec(a) {
            for (var b = a.length, c = [0, 1], d = 2, e = 2; b > e; e++) {
                for (; d > 1 && _(a[c[d - 2]], a[c[d - 1]], a[e]) <= 0;) --d;
                c[d++] = e
            }
            return c.slice(0, d)
        }

        function Fc(a, b) {
            return a[0] - b[0] || a[1] - b[1]
        }

        function Gc(a, b, c) {
            return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
        }

        function Hc(a, b, c, d) {
            var e = a[0],
                f = c[0],
                g = b[0] - e,
                h = d[0] - f,
                i = a[1],
                j = c[1],
                k = b[1] - i,
                l = d[1] - j,
                m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
            return [e + m * g, i + m * k]
        }

        function Ic(a) {
            var b = a[0],
                c = a[a.length - 1];
            return !(b[0] - c[0] || b[1] - c[1])
        }

        function Jc() {
            cd(this), this.edge = this.site = this.circle = null
        }

        function Kc(a) {
            var b = ei.pop() || new Jc;
            return b.site = a, b
        }

        function Lc(a) {
            Vc(a), bi.remove(a), ei.push(a), cd(a)
        }

        function Mc(a) {
            var b = a.circle,
                c = b.x,
                d = b.cy,
                e = {
                    x: c,
                    y: d
                },
                f = a.P,
                g = a.N,
                h = [a];
            Lc(a);
            for (var i = f; i.circle && rg(c - i.circle.x) < Ig && rg(d - i.circle.cy) < Ig;) f = i.P, h.unshift(i), Lc(i), i = f;
            h.unshift(i), Vc(i);
            for (var j = g; j.circle && rg(c - j.circle.x) < Ig && rg(d - j.circle.cy) < Ig;) g = j.N, h.push(j), Lc(j), j = g;
            h.push(j), Vc(j);
            var k, l = h.length;
            for (k = 1; l > k; ++k) j = h[k], i = h[k - 1], _c(j.edge, i.site, j.site, e);
            i = h[0], j = h[l - 1], j.edge = Zc(i.site, j.site, null, e), Uc(i), Uc(j)
        }

        function Nc(a) {
            for (var b, c, d, e, f = a.x, g = a.y, h = bi._; h;)
                if ((d = Oc(h, g) - f) > Ig) h = h.L;
                else {
                    if (!((e = f - Pc(h, g)) > Ig)) {
                        d > -Ig ? (b = h.P, c = h) : e > -Ig ? (b = h, c = h.N) : b = c = h;
                        break
                    }
                    if (!h.R) {
                        b = h;
                        break
                    }
                    h = h.R
                } var i = Kc(a);
            if (bi.insert(b, i), b || c) {
                if (b === c) return Vc(b), c = Kc(b.site), bi.insert(i, c), i.edge = c.edge = Zc(b.site, i.site), Uc(b), void Uc(c);
                if (!c) return void (i.edge = Zc(b.site, i.site));
                Vc(b), Vc(c);
                var j = b.site,
                    k = j.x,
                    l = j.y,
                    m = a.x - k,
                    n = a.y - l,
                    o = c.site,
                    p = o.x - k,
                    q = o.y - l,
                    r = 2 * (m * q - n * p),
                    s = m * m + n * n,
                    t = p * p + q * q,
                    u = {
                        x: (q * s - n * t) / r + k,
                        y: (m * t - p * s) / r + l
                    };
                _c(c.edge, j, o, u), i.edge = Zc(j, a, null, u), c.edge = Zc(a, o, null, u), Uc(b), Uc(c)
            }
        }

        function Oc(a, b) {
            var c = a.site,
                d = c.x,
                e = c.y,
                f = e - b;
            if (!f) return d;
            var g = a.P;
            if (!g) return -1 / 0;
            c = g.site;
            var h = c.x,
                i = c.y,
                j = i - b;
            if (!j) return h;
            var k = h - d,
                l = 1 / f - 1 / j,
                m = k / j;
            return l ? (-m + Math.sqrt(m * m - 2 * l * (k * k / (-2 * j) - i + j / 2 + e - f / 2))) / l + d : (d + h) / 2
        }

        function Pc(a, b) {
            var c = a.N;
            if (c) return Oc(c, b);
            var d = a.site;
            return d.y === b ? d.x : 1 / 0
        }

        function Qc(a) {
            this.site = a, this.edges = []
        }

        function Rc(a) {
            for (var b, c, d, e, f, g, h, i, j, k, l = a[0][0], m = a[1][0], n = a[0][1], o = a[1][1], p = ai, q = p.length; q--;)
                if ((f = p[q]) && f.prepare())
                    for (h = f.edges, i = h.length, g = 0; i > g;) k = h[g].end(), d = k.x, e = k.y, j = h[++g % i].start(), b = j.x, c = j.y, (rg(d - b) > Ig || rg(e - c) > Ig) && (h.splice(g, 0, new ad($c(f.site, k, rg(d - l) < Ig && o - e > Ig ? {
                        x: l,
                        y: rg(b - l) < Ig ? c : o
                    } : rg(e - o) < Ig && m - d > Ig ? {
                        x: rg(c - o) < Ig ? b : m,
                        y: o
                    } : rg(d - m) < Ig && e - n > Ig ? {
                        x: m,
                        y: rg(b - m) < Ig ? c : n
                    } : rg(e - n) < Ig && d - l > Ig ? {
                        x: rg(c - n) < Ig ? b : l,
                        y: n
                    } : null), f.site, null)), ++i)
        }

        function Sc(a, b) {
            return b.angle - a.angle
        }

        function Tc() {
            cd(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function Uc(a) {
            var b = a.P,
                c = a.N;
            if (b && c) {
                var d = b.site,
                    e = a.site,
                    f = c.site;
                if (d !== f) {
                    var g = e.x,
                        h = e.y,
                        i = d.x - g,
                        j = d.y - h,
                        k = f.x - g,
                        l = f.y - h,
                        m = 2 * (i * l - j * k);
                    if (!(m >= -Jg)) {
                        var n = i * i + j * j,
                            o = k * k + l * l,
                            p = (l * n - j * o) / m,
                            q = (i * o - k * n) / m,
                            l = q + h,
                            r = fi.pop() || new Tc;
                        r.arc = a, r.site = e, r.x = p + g, r.y = l + Math.sqrt(p * p + q * q), r.cy = l, a.circle = r;
                        for (var s = null, t = di._; t;)
                            if (r.y < t.y || r.y === t.y && r.x <= t.x) {
                                if (!t.L) {
                                    s = t.P;
                                    break
                                }
                                t = t.L
                            } else {
                                if (!t.R) {
                                    s = t;
                                    break
                                }
                                t = t.R
                            } di.insert(s, r), s || (ci = r)
                    }
                }
            }
        }

        function Vc(a) {
            var b = a.circle;
            b && (b.P || (ci = b.N), di.remove(b), fi.push(b), cd(b), a.circle = null)
        }

        function Wc(a) {
            for (var b, c = _h, d = Qb(a[0][0], a[0][1], a[1][0], a[1][1]), e = c.length; e--;) b = c[e], (!Xc(b, a) || !d(b) || rg(b.a.x - b.b.x) < Ig && rg(b.a.y - b.b.y) < Ig) && (b.a = b.b = null, c.splice(e, 1))
        }

        function Xc(a, b) {
            var c = a.b;
            if (c) return !0;
            var d, e, f = a.a,
                g = b[0][0],
                h = b[1][0],
                i = b[0][1],
                j = b[1][1],
                k = a.l,
                l = a.r,
                m = k.x,
                n = k.y,
                o = l.x,
                p = l.y,
                q = (m + o) / 2,
                r = (n + p) / 2;
            if (p === n) {
                if (g > q || q >= h) return;
                if (m > o) {
                    if (f) {
                        if (f.y >= j) return
                    } else f = {
                        x: q,
                        y: i
                    };
                    c = {
                        x: q,
                        y: j
                    }
                } else {
                    if (f) {
                        if (f.y < i) return
                    } else f = {
                        x: q,
                        y: j
                    };
                    c = {
                        x: q,
                        y: i
                    }
                }
            } else if (d = (m - o) / (p - n), e = r - d * q, -1 > d || d > 1)
                if (m > o) {
                    if (f) {
                        if (f.y >= j) return
                    } else f = {
                        x: (i - e) / d,
                        y: i
                    };
                    c = {
                        x: (j - e) / d,
                        y: j
                    }
                } else {
                    if (f) {
                        if (f.y < i) return
                    } else f = {
                        x: (j - e) / d,
                        y: j
                    };
                    c = {
                        x: (i - e) / d,
                        y: i
                    }
                }
            else if (p > n) {
                if (f) {
                    if (f.x >= h) return
                } else f = {
                    x: g,
                    y: d * g + e
                };
                c = {
                    x: h,
                    y: d * h + e
                }
            } else {
                if (f) {
                    if (f.x < g) return
                } else f = {
                    x: h,
                    y: d * h + e
                };
                c = {
                    x: g,
                    y: d * g + e
                }
            }
            return a.a = f, a.b = c, !0
        }

        function Yc(a, b) {
            this.l = a, this.r = b, this.a = this.b = null
        }

        function Zc(a, b, c, d) {
            var e = new Yc(a, b);
            return _h.push(e), c && _c(e, a, b, c), d && _c(e, b, a, d), ai[a.i].edges.push(new ad(e, a, b)), ai[b.i].edges.push(new ad(e, b, a)), e
        }

        function $c(a, b, c) {
            var d = new Yc(a, null);
            return d.a = b, d.b = c, _h.push(d), d
        }

        function _c(a, b, c, d) {
            a.a || a.b ? a.l === c ? a.b = d : a.a = d : (a.a = d, a.l = b, a.r = c)
        }

        function ad(a, b, c) {
            var d = a.a,
                e = a.b;
            this.edge = a, this.site = b, this.angle = c ? Math.atan2(c.y - b.y, c.x - b.x) : a.l === b ? Math.atan2(e.x - d.x, d.y - e.y) : Math.atan2(d.x - e.x, e.y - d.y)
        }

        function bd() {
            this._ = null
        }

        function cd(a) {
            a.U = a.C = a.L = a.R = a.P = a.N = null
        }

        function dd(a, b) {
            var c = b,
                d = b.R,
                e = c.U;
            e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.R = d.L, c.R && (c.R.U = c), d.L = c
        }

        function ed(a, b) {
            var c = b,
                d = b.L,
                e = c.U;
            e ? e.L === c ? e.L = d : e.R = d : a._ = d, d.U = e, c.U = d, c.L = d.R, c.L && (c.L.U = c), d.R = c
        }

        function fd(a) {
            for (; a.L;) a = a.L;
            return a
        }

        function gd(a, b) {
            var c, d, e, f = a.sort(hd).pop();
            for (_h = [], ai = new Array(a.length), bi = new bd, di = new bd; ;)
                if (e = ci, f && (!e || f.y < e.y || f.y === e.y && f.x < e.x)) f.x === c && f.y === d || (ai[f.i] = new Qc(f), Nc(f), c = f.x, d = f.y), f = a.pop();
                else {
                    if (!e) break;
                    Mc(e.arc)
                } b && (Wc(b), Rc(b));
            var g = {
                cells: ai,
                edges: _h
            };
            return bi = di = _h = ai = null, g
        }

        function hd(a, b) {
            return b.y - a.y || b.x - a.x
        }

        function id(a, b, c) {
            return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
        }

        function jd(a) {
            return a.x
        }

        function kd(a) {
            return a.y
        }

        function ld() {
            return {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null
            }
        }

        function md(a, b, c, d, e, f) {
            if (!a(b, c, d, e, f)) {
                var g = .5 * (c + e),
                    h = .5 * (d + f),
                    i = b.nodes;
                i[0] && md(a, i[0], c, d, g, h), i[1] && md(a, i[1], g, d, e, h), i[2] && md(a, i[2], c, h, g, f), i[3] && md(a, i[3], g, h, e, f)
            }
        }

        function nd(a, b, c, d, e, f, g) {
            var h, i = 1 / 0;
            return function a(j, k, l, m, n) {
                if (!(k > f || l > g || d > m || e > n)) {
                    if (o = j.point) {
                        var o, p = b - j.x,
                            q = c - j.y,
                            r = p * p + q * q;
                        if (i > r) {
                            var s = Math.sqrt(i = r);
                            d = b - s, e = c - s, f = b + s, g = c + s, h = o
                        }
                    }
                    for (var t = j.nodes, u = .5 * (k + m), v = .5 * (l + n), w = b >= u, x = c >= v, y = x << 1 | w, z = y + 4; z > y; ++y)
                        if (j = t[3 & y]) switch (3 & y) {
                            case 0:
                                a(j, k, l, u, v);
                                break;
                            case 1:
                                a(j, u, l, m, v);
                                break;
                            case 2:
                                a(j, k, v, u, n);
                                break;
                            case 3:
                                a(j, u, v, m, n)
                        }
                }
            }(a, d, e, f, g), h
        }

        function od(a, b) {
            a = hg.rgb(a), b = hg.rgb(b);
            var c = a.r,
                d = a.g,
                e = a.b,
                f = b.r - c,
                g = b.g - d,
                h = b.b - e;
            return function (a) {
                return "#" + ua(Math.round(c + f * a)) + ua(Math.round(d + g * a)) + ua(Math.round(e + h * a))
            }
        }

        function pd(a, b) {
            var c, d = {},
                e = {};
            for (c in a) c in b ? d[c] = sd(a[c], b[c]) : e[c] = a[c];
            for (c in b) c in a || (e[c] = b[c]);
            return function (a) {
                for (c in d) e[c] = d[c](a);
                return e
            }
        }

        function qd(a, b) {
            return a = +a, b = +b,
                function (c) {
                    return a * (1 - c) + b * c
                }
        }

        function rd(a, b) {
            var c, d, e, f = hi.lastIndex = ii.lastIndex = 0,
                g = -1,
                h = [],
                i = [];
            for (a += "", b += "";
                (c = hi.exec(a)) && (d = ii.exec(b));)(e = d.index) > f && (e = b.slice(f, e), h[g] ? h[g] += e : h[++g] = e), (c = c[0]) === (d = d[0]) ? h[g] ? h[g] += d : h[++g] = d : (h[++g] = null, i.push({
                    i: g,
                    x: qd(c, d)
                })), f = ii.lastIndex;
            return f < b.length && (e = b.slice(f), h[g] ? h[g] += e : h[++g] = e), h.length < 2 ? i[0] ? (b = i[0].x, function (a) {
                return b(a) + ""
            }) : function () {
                return b
            } : (b = i.length, function (a) {
                for (var c, d = 0; b > d; ++d) h[(c = i[d]).i] = c.x(a);
                return h.join("")
            })
        }

        function sd(a, b) {
            for (var c, d = hg.interpolators.length; --d >= 0 && !(c = hg.interpolators[d](a, b)););
            return c
        }

        function td(a, b) {
            var c, d = [],
                e = [],
                f = a.length,
                g = b.length,
                h = Math.min(a.length, b.length);
            for (c = 0; h > c; ++c) d.push(sd(a[c], b[c]));
            for (; f > c; ++c) e[c] = a[c];
            for (; g > c; ++c) e[c] = b[c];
            return function (a) {
                for (c = 0; h > c; ++c) e[c] = d[c](a);
                return e
            }
        }

        function ud(a) {
            return function (b) {
                return 0 >= b ? 0 : b >= 1 ? 1 : a(b)
            }
        }

        function vd(a) {
            return function (b) {
                return 1 - a(1 - b)
            }
        }

        function wd(a) {
            return function (b) {
                return .5 * (.5 > b ? a(2 * b) : 2 - a(2 - 2 * b))
            }
        }

        function xd(a) {
            return a * a
        }

        function yd(a) {
            return a * a * a
        }

        function zd(a) {
            if (0 >= a) return 0;
            if (a >= 1) return 1;
            var b = a * a,
                c = b * a;
            return 4 * (.5 > a ? c : 3 * (a - b) + c - .75)
        }

        function Ad(a) {
            return function (b) {
                return Math.pow(b, a)
            }
        }

        function Bd(a) {
            return 1 - Math.cos(a * Ng)
        }

        function Cd(a) {
            return Math.pow(2, 10 * (a - 1))
        }

        function Dd(a) {
            return 1 - Math.sqrt(1 - a * a)
        }

        function Ed(a, b) {
            var c;
            return arguments.length < 2 && (b = .45), arguments.length ? c = b / Lg * Math.asin(1 / a) : (a = 1, c = b / 4),
                function (d) {
                    return 1 + a * Math.pow(2, -10 * d) * Math.sin((d - c) * Lg / b)
                }
        }

        function Fd(a) {
            return a || (a = 1.70158),
                function (b) {
                    return b * b * ((a + 1) * b - a)
                }
        }

        function Gd(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }

        function Hd(a, b) {
            a = hg.hcl(a), b = hg.hcl(b);
            var c = a.h,
                d = a.c,
                e = a.l,
                f = b.h - c,
                g = b.c - d,
                h = b.l - e;
            return isNaN(g) && (g = 0, d = isNaN(d) ? b.c : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
                function (a) {
                    return ka(c + f * a, d + g * a, e + h * a) + ""
                }
        }

        function Id(a, b) {
            a = hg.hsl(a), b = hg.hsl(b);
            var c = a.h,
                d = a.s,
                e = a.l,
                f = b.h - c,
                g = b.s - d,
                h = b.l - e;
            return isNaN(g) && (g = 0, d = isNaN(d) ? b.s : d), isNaN(f) ? (f = 0, c = isNaN(c) ? b.h : c) : f > 180 ? f -= 360 : -180 > f && (f += 360),
                function (a) {
                    return ia(c + f * a, d + g * a, e + h * a) + ""
                }
        }

        function Jd(a, b) {
            a = hg.lab(a), b = hg.lab(b);
            var c = a.l,
                d = a.a,
                e = a.b,
                f = b.l - c,
                g = b.a - d,
                h = b.b - e;
            return function (a) {
                return ma(c + f * a, d + g * a, e + h * a) + ""
            }
        }

        function Kd(a, b) {
            return b -= a,
                function (c) {
                    return Math.round(a + b * c)
                }
        }

        function Ld(a) {
            var b = [a.a, a.b],
                c = [a.c, a.d],
                d = Nd(b),
                e = Md(b, c),
                f = Nd(Od(c, b, -e)) || 0;
            b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * Pg, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * Pg : 0
        }

        function Md(a, b) {
            return a[0] * b[0] + a[1] * b[1]
        }

        function Nd(a) {
            var b = Math.sqrt(Md(a, a));
            return b && (a[0] /= b, a[1] /= b), b
        }

        function Od(a, b, c) {
            return a[0] += c * b[0], a[1] += c * b[1], a
        }

        function Pd(a) {
            return a.length ? a.pop() + "," : ""
        }

        function Qd(a, b, c, d) {
            if (a[0] !== b[0] || a[1] !== b[1]) {
                var e = c.push("translate(", null, ",", null, ")");
                d.push({
                    i: e - 4,
                    x: qd(a[0], b[0])
                }, {
                    i: e - 2,
                    x: qd(a[1], b[1])
                })
            } else (b[0] || b[1]) && c.push("translate(" + b + ")")
        }

        function Rd(a, b, c, d) {
            a !== b ? (a - b > 180 ? b += 360 : b - a > 180 && (a += 360), d.push({
                i: c.push(Pd(c) + "rotate(", null, ")") - 2,
                x: qd(a, b)
            })) : b && c.push(Pd(c) + "rotate(" + b + ")")
        }

        function Sd(a, b, c, d) {
            a !== b ? d.push({
                i: c.push(Pd(c) + "skewX(", null, ")") - 2,
                x: qd(a, b)
            }) : b && c.push(Pd(c) + "skewX(" + b + ")")
        }

        function Td(a, b, c, d) {
            if (a[0] !== b[0] || a[1] !== b[1]) {
                var e = c.push(Pd(c) + "scale(", null, ",", null, ")");
                d.push({
                    i: e - 4,
                    x: qd(a[0], b[0])
                }, {
                    i: e - 2,
                    x: qd(a[1], b[1])
                })
            } else 1 === b[0] && 1 === b[1] || c.push(Pd(c) + "scale(" + b + ")")
        }

        function Ud(a, b) {
            var c = [],
                d = [];
            return a = hg.transform(a), b = hg.transform(b), Qd(a.translate, b.translate, c, d), Rd(a.rotate, b.rotate, c, d), Sd(a.skew, b.skew, c, d), Td(a.scale, b.scale, c, d), a = b = null,
                function (a) {
                    for (var b, e = -1, f = d.length; ++e < f;) c[(b = d[e]).i] = b.x(a);
                    return c.join("")
                }
        }

        function Vd(a, b) {
            return b = (b -= a = +a) || 1 / b,
                function (c) {
                    return (c - a) / b
                }
        }

        function Wd(a, b) {
            return b = (b -= a = +a) || 1 / b,
                function (c) {
                    return Math.max(0, Math.min(1, (c - a) / b))
                }
        }

        function Xd(a) {
            for (var b = a.source, c = a.target, d = Zd(b, c), e = [b]; b !== d;) b = b.parent, e.push(b);
            for (var f = e.length; c !== d;) e.splice(f, 0, c), c = c.parent;
            return e
        }

        function Yd(a) {
            for (var b = [], c = a.parent; null != c;) b.push(a), a = c, c = c.parent;
            return b.push(a), b
        }

        function Zd(a, b) {
            if (a === b) return a;
            for (var c = Yd(a), d = Yd(b), e = c.pop(), f = d.pop(), g = null; e === f;) g = e, e = c.pop(), f = d.pop();
            return g
        }

        function $d(a) {
            a.fixed |= 2
        }

        function _d(a) {
            a.fixed &= -7
        }

        function ae(a) {
            a.fixed |= 4, a.px = a.x, a.py = a.y
        }

        function be(a) {
            a.fixed &= -5
        }

        function ce(a, b, c) {
            var d = 0,
                e = 0;
            if (a.charge = 0, !a.leaf)
                for (var f, g = a.nodes, h = g.length, i = -1; ++i < h;) null != (f = g[i]) && (ce(f, b, c), a.charge += f.charge, d += f.charge * f.cx, e += f.charge * f.cy);
            if (a.point) {
                a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
                var j = b * c[a.point.index];
                a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
            }
            a.cx = d / a.charge, a.cy = e / a.charge
        }

        function de(a, b) {
            return hg.rebind(a, b, "sort", "children", "value"), a.nodes = a, a.links = je, a
        }

        function ee(a, b) {
            for (var c = [a]; null != (a = c.pop());)
                if (b(a), (e = a.children) && (d = e.length))
                    for (var d, e; --d >= 0;) c.push(e[d])
        }

        function fe(a, b) {
            for (var c = [a], d = []; null != (a = c.pop());)
                if (d.push(a), (f = a.children) && (e = f.length))
                    for (var e, f, g = -1; ++g < e;) c.push(f[g]);
            for (; null != (a = d.pop());) b(a)
        }

        function ge(a) {
            return a.children
        }

        function he(a) {
            return a.value
        }

        function ie(a, b) {
            return b.value - a.value
        }

        function je(a) {
            return hg.merge(a.map(function (a) {
                return (a.children || []).map(function (b) {
                    return {
                        source: a,
                        target: b
                    }
                })
            }))
        }

        function ke(a) {
            return a.x
        }

        function le(a) {
            return a.y
        }

        function me(a, b, c) {
            a.y0 = b, a.y = c
        }

        function ne(a) {
            return hg.range(a.length)
        }

        function oe(a) {
            for (var b = -1, c = a[0].length, d = []; ++b < c;) d[b] = 0;
            return d
        }

        function pe(a) {
            for (var b, c = 1, d = 0, e = a[0][1], f = a.length; f > c; ++c)(b = a[c][1]) > e && (d = c, e = b);
            return d
        }

        function qe(a) {
            return a.reduce(re, 0)
        }

        function re(a, b) {
            return a + b[1]
        }

        function se(a, b) {
            return te(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
        }

        function te(a, b) {
            for (var c = -1, d = +a[0], e = (a[1] - d) / b, f = []; ++c <= b;) f[c] = e * c + d;
            return f
        }

        function ue(a) {
            return [hg.min(a), hg.max(a)]
        }

        function ve(a, b) {
            return a.value - b.value
        }

        function we(a, b) {
            var c = a._pack_next;
            a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
        }

        function xe(a, b) {
            a._pack_next = b, b._pack_prev = a
        }

        function ye(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = a.r + b.r;
            return .999 * e * e > c * c + d * d
        }

        function ze(a) {
            function b(a) {
                k = Math.min(a.x - a.r, k), l = Math.max(a.x + a.r, l), m = Math.min(a.y - a.r, m), n = Math.max(a.y + a.r, n)
            }
            if ((c = a.children) && (j = c.length)) {
                var c, d, e, f, g, h, i, j, k = 1 / 0,
                    l = -1 / 0,
                    m = 1 / 0,
                    n = -1 / 0;
                if (c.forEach(Ae), d = c[0], d.x = -d.r, d.y = 0, b(d), j > 1 && (e = c[1], e.x = e.r, e.y = 0, b(e), j > 2))
                    for (f = c[2], De(d, e, f), b(f), we(d, f), d._pack_prev = f, we(f, e), e = d._pack_next, g = 3; j > g; g++) {
                        De(d, e, f = c[g]);
                        var o = 0,
                            p = 1,
                            q = 1;
                        for (h = e._pack_next; h !== e; h = h._pack_next, p++)
                            if (ye(h, f)) {
                                o = 1;
                                break
                            } if (1 == o)
                            for (i = d._pack_prev; i !== h._pack_prev && !ye(i, f); i = i._pack_prev, q++);
                        o ? (q > p || p == q && e.r < d.r ? xe(d, e = h) : xe(d = i, e), g--) : (we(d, f), e = f, b(f))
                    }
                var r = (k + l) / 2,
                    s = (m + n) / 2,
                    t = 0;
                for (g = 0; j > g; g++) f = c[g], f.x -= r, f.y -= s, t = Math.max(t, f.r + Math.sqrt(f.x * f.x + f.y * f.y));
                a.r = t, c.forEach(Be)
            }
        }

        function Ae(a) {
            a._pack_next = a._pack_prev = a
        }

        function Be(a) {
            delete a._pack_next, delete a._pack_prev
        }

        function Ce(a, b, c, d) {
            var e = a.children;
            if (a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d, e)
                for (var f = -1, g = e.length; ++f < g;) Ce(e[f], b, c, d)
        }

        function De(a, b, c) {
            var d = a.r + c.r,
                e = b.x - a.x,
                f = b.y - a.y;
            if (d && (e || f)) {
                var g = b.r + c.r,
                    h = e * e + f * f;
                g *= g, d *= d;
                var i = .5 + (d - g) / (2 * h),
                    j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
                c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
            } else c.x = a.x + d, c.y = a.y
        }

        function Ee(a, b) {
            return a.parent == b.parent ? 1 : 2
        }

        function Fe(a) {
            var b = a.children;
            return b.length ? b[0] : a.t
        }

        function Ge(a) {
            var b, c = a.children;
            return (b = c.length) ? c[b - 1] : a.t
        }

        function He(a, b, c) {
            var d = c / (b.i - a.i);
            b.c -= d, b.s += c, a.c += d, b.z += c, b.m += c
        }

        function Ie(a) {
            for (var b, c = 0, d = 0, e = a.children, f = e.length; --f >= 0;) b = e[f], b.z += c, b.m += c, c += b.s + (d += b.c)
        }

        function Je(a, b, c) {
            return a.a.parent === b.parent ? a.a : c
        }

        function Ke(a) {
            return 1 + hg.max(a, function (a) {
                return a.y
            })
        }

        function Le(a) {
            return a.reduce(function (a, b) {
                return a + b.x
            }, 0) / a.length
        }

        function Me(a) {
            var b = a.children;
            return b && b.length ? Me(b[0]) : a
        }

        function Ne(a) {
            var b, c = a.children;
            return c && (b = c.length) ? Ne(c[b - 1]) : a
        }

        function Oe(a) {
            return {
                x: a.x,
                y: a.y,
                dx: a.dx,
                dy: a.dy
            }
        }

        function Pe(a, b) {
            var c = a.x + b[3],
                d = a.y + b[0],
                e = a.dx - b[1] - b[3],
                f = a.dy - b[0] - b[2];
            return 0 > e && (c += e / 2, e = 0), 0 > f && (d += f / 2, f = 0), {
                x: c,
                y: d,
                dx: e,
                dy: f
            }
        }

        function Qe(a) {
            var b = a[0],
                c = a[a.length - 1];
            return c > b ? [b, c] : [c, b]
        }

        function Re(a) {
            return a.rangeExtent ? a.rangeExtent() : Qe(a.range())
        }

        function Se(a, b, c, d) {
            var e = c(a[0], a[1]),
                f = d(b[0], b[1]);
            return function (a) {
                return f(e(a))
            }
        }

        function Te(a, b) {
            var c, d = 0,
                e = a.length - 1,
                f = a[d],
                g = a[e];
            return f > g && (c = d, d = e, e = c, c = f, f = g, g = c), a[d] = b.floor(f), a[e] = b.ceil(g), a
        }

        function Ue(a) {
            return a ? {
                floor: function (b) {
                    return Math.floor(b / a) * a
                },
                ceil: function (b) {
                    return Math.ceil(b / a) * a
                }
            } : ti
        }

        function Ve(a, b, c, d) {
            var e = [],
                f = [],
                g = 0,
                h = Math.min(a.length, b.length) - 1;
            for (a[h] < a[0] && (a = a.slice().reverse(), b = b.slice().reverse()); ++g <= h;) e.push(c(a[g - 1], a[g])), f.push(d(b[g - 1], b[g]));
            return function (b) {
                var c = hg.bisect(a, b, 1, h) - 1;
                return f[c](e[c](b))
            }
        }

        function We(a, b, c, d) {
            function e() {
                var e = Math.min(a.length, b.length) > 2 ? Ve : Se,
                    i = d ? Wd : Vd;
                return g = e(a, b, i, c), h = e(b, a, i, sd), f
            }

            function f(a) {
                return g(a)
            }
            var g, h;
            return f.invert = function (a) {
                return h(a)
            }, f.domain = function (b) {
                return arguments.length ? (a = b.map(Number), e()) : a
            }, f.range = function (a) {
                return arguments.length ? (b = a, e()) : b
            }, f.rangeRound = function (a) {
                return f.range(a).interpolate(Kd)
            }, f.clamp = function (a) {
                return arguments.length ? (d = a, e()) : d
            }, f.interpolate = function (a) {
                return arguments.length ? (c = a, e()) : c
            }, f.ticks = function (b) {
                return $e(a, b)
            }, f.tickFormat = function (b, c) {
                return _e(a, b, c)
            }, f.nice = function (b) {
                return Ye(a, b), e()
            }, f.copy = function () {
                return We(a, b, c, d)
            }, e()
        }

        function Xe(a, b) {
            return hg.rebind(a, b, "range", "rangeRound", "interpolate", "clamp")
        }

        function Ye(a, b) {
            return Te(a, Ue(Ze(a, b)[2])), Te(a, Ue(Ze(a, b)[2])), a
        }

        function Ze(a, b) {
            null == b && (b = 10);
            var c = Qe(a),
                d = c[1] - c[0],
                e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)),
                f = b / d * e;
            return .15 >= f ? e *= 10 : .35 >= f ? e *= 5 : .75 >= f && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + .5 * e, c[2] = e, c
        }

        function $e(a, b) {
            return hg.range.apply(hg, Ze(a, b))
        }

        function _e(a, b, c) {
            var d = Ze(a, b);
            if (c) {
                var e = hh.exec(c);
                if (e.shift(), "s" === e[8]) {
                    var f = hg.formatPrefix(Math.max(rg(d[0]), rg(d[1])));
                    return e[7] || (e[7] = "." + af(f.scale(d[2]))), e[8] = "f", c = hg.format(e.join("")),
                        function (a) {
                            return c(f.scale(a)) + f.symbol
                        }
                }
                e[7] || (e[7] = "." + bf(e[8], d)), c = e.join("")
            } else c = ",." + af(d[2]) + "f";
            return hg.format(c)
        }

        function af(a) {
            return -Math.floor(Math.log(a) / Math.LN10 + .01)
        }

        function bf(a, b) {
            var c = af(b[2]);
            return a in ui ? Math.abs(c - af(Math.max(rg(b[0]), rg(b[1])))) + +("e" !== a) : c - 2 * ("%" === a)
        }

        function cf(a, b, c, d) {
            function e(a) {
                return (c ? Math.log(0 > a ? 0 : a) : -Math.log(a > 0 ? 0 : -a)) / Math.log(b)
            }

            function f(a) {
                return c ? Math.pow(b, a) : -Math.pow(b, -a)
            }

            function g(b) {
                return a(e(b))
            }
            return g.invert = function (b) {
                return f(a.invert(b))
            }, g.domain = function (b) {
                return arguments.length ? (c = b[0] >= 0, a.domain((d = b.map(Number)).map(e)), g) : d
            }, g.base = function (c) {
                return arguments.length ? (b = +c, a.domain(d.map(e)), g) : b
            }, g.nice = function () {
                var b = Te(d.map(e), c ? Math : wi);
                return a.domain(b), d = b.map(f), g
            }, g.ticks = function () {
                var a = Qe(d),
                    g = [],
                    h = a[0],
                    i = a[1],
                    j = Math.floor(e(h)),
                    k = Math.ceil(e(i)),
                    l = b % 1 ? 2 : b;
                if (isFinite(k - j)) {
                    if (c) {
                        for (; k > j; j++)
                            for (var m = 1; l > m; m++) g.push(f(j) * m);
                        g.push(f(j))
                    } else
                        for (g.push(f(j)); j++ < k;)
                            for (var m = l - 1; m > 0; m--) g.push(f(j) * m);
                    for (j = 0; g[j] < h; j++);
                    for (k = g.length; g[k - 1] > i; k--);
                    g = g.slice(j, k)
                }
                return g
            }, g.tickFormat = function (a, c) {
                if (!arguments.length) return vi;
                arguments.length < 2 ? c = vi : "function" != typeof c && (c = hg.format(c));
                var d = Math.max(1, b * a / g.ticks().length);
                return function (a) {
                    var g = a / f(Math.round(e(a)));
                    return b - .5 > g * b && (g *= b), d >= g ? c(a) : ""
                }
            }, g.copy = function () {
                return cf(a.copy(), b, c, d)
            }, Xe(g, a)
        }

        function df(a, b, c) {
            function d(b) {
                return a(e(b))
            }
            var e = ef(b),
                f = ef(1 / b);
            return d.invert = function (b) {
                return f(a.invert(b))
            }, d.domain = function (b) {
                return arguments.length ? (a.domain((c = b.map(Number)).map(e)), d) : c
            }, d.ticks = function (a) {
                return $e(c, a)
            }, d.tickFormat = function (a, b) {
                return _e(c, a, b)
            }, d.nice = function (a) {
                return d.domain(Ye(c, a))
            }, d.exponent = function (g) {
                return arguments.length ? (e = ef(b = g), f = ef(1 / b), a.domain(c.map(e)), d) : b
            }, d.copy = function () {
                return df(a.copy(), b, c)
            }, Xe(d, a)
        }

        function ef(a) {
            return function (b) {
                return 0 > b ? -Math.pow(-b, a) : Math.pow(b, a)
            }
        }

        function ff(a, b) {
            function c(c) {
                return f[((e.get(c) || ("range" === b.t ? e.set(c, a.push(c)) : NaN)) - 1) % f.length]
            }

            function d(b, c) {
                return hg.range(a.length).map(function (a) {
                    return b + c * a
                })
            }
            var e, f, g;
            return c.domain = function (d) {
                if (!arguments.length) return a;
                a = [], e = new j;
                for (var f, g = -1, h = d.length; ++g < h;) e.has(f = d[g]) || e.set(f, a.push(f));
                return c[b.t].apply(c, b.a)
            }, c.range = function (a) {
                return arguments.length ? (f = a, g = 0, b = {
                    t: "range",
                    a: arguments
                }, c) : f
            }, c.rangePoints = function (e, h) {
                arguments.length < 2 && (h = 0);
                var i = e[0],
                    j = e[1],
                    k = a.length < 2 ? (i = (i + j) / 2, 0) : (j - i) / (a.length - 1 + h);
                return f = d(i + k * h / 2, k), g = 0, b = {
                    t: "rangePoints",
                    a: arguments
                }, c
            }, c.rangeRoundPoints = function (e, h) {
                arguments.length < 2 && (h = 0);
                var i = e[0],
                    j = e[1],
                    k = a.length < 2 ? (i = j = Math.round((i + j) / 2), 0) : (j - i) / (a.length - 1 + h) | 0;
                return f = d(i + Math.round(k * h / 2 + (j - i - (a.length - 1 + h) * k) / 2), k), g = 0, b = {
                    t: "rangeRoundPoints",
                    a: arguments
                }, c
            }, c.rangeBands = function (e, h, i) {
                arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                var j = e[1] < e[0],
                    k = e[j - 0],
                    l = e[1 - j],
                    m = (l - k) / (a.length - h + 2 * i);
                return f = d(k + m * i, m), j && f.reverse(), g = m * (1 - h), b = {
                    t: "rangeBands",
                    a: arguments
                }, c
            }, c.rangeRoundBands = function (e, h, i) {
                arguments.length < 2 && (h = 0), arguments.length < 3 && (i = h);
                var j = e[1] < e[0],
                    k = e[j - 0],
                    l = e[1 - j],
                    m = Math.floor((l - k) / (a.length - h + 2 * i));
                return f = d(k + Math.round((l - k - (a.length - h) * m) / 2), m), j && f.reverse(), g = Math.round(m * (1 - h)), b = {
                    t: "rangeRoundBands",
                    a: arguments
                }, c
            }, c.rangeBand = function () {
                return g
            }, c.rangeExtent = function () {
                return Qe(b.a[0])
            }, c.copy = function () {
                return ff(a, b)
            }, c.domain(a)
        }

        function gf(a, b) {
            function f() {
                var c = 0,
                    d = b.length;
                for (h = []; ++c < d;) h[c - 1] = hg.quantile(a, c / d);
                return g
            }

            function g(a) {
                return isNaN(a = +a) ? void 0 : b[hg.bisect(h, a)]
            }
            var h;
            return g.domain = function (b) {
                return arguments.length ? (a = b.map(d).filter(e).sort(c), f()) : a
            }, g.range = function (a) {
                return arguments.length ? (b = a, f()) : b
            }, g.quantiles = function () {
                return h
            }, g.invertExtent = function (c) {
                return c = b.indexOf(c), 0 > c ? [NaN, NaN] : [c > 0 ? h[c - 1] : a[0], c < h.length ? h[c] : a[a.length - 1]]
            }, g.copy = function () {
                return gf(a, b)
            }, f()
        }

        function hf(a, b, c) {
            function d(b) {
                return c[Math.max(0, Math.min(g, Math.floor(f * (b - a))))]
            }

            function e() {
                return f = c.length / (b - a), g = c.length - 1, d
            }
            var f, g;
            return d.domain = function (c) {
                return arguments.length ? (a = +c[0], b = +c[c.length - 1], e()) : [a, b]
            }, d.range = function (a) {
                return arguments.length ? (c = a, e()) : c
            }, d.invertExtent = function (b) {
                return b = c.indexOf(b), b = 0 > b ? NaN : b / f + a, [b, b + 1 / f]
            }, d.copy = function () {
                return hf(a, b, c)
            }, e()
        }

        function jf(a, b) {
            function c(c) {
                return c >= c ? b[hg.bisect(a, c)] : void 0
            }
            return c.domain = function (b) {
                return arguments.length ? (a = b, c) : a
            }, c.range = function (a) {
                return arguments.length ? (b = a, c) : b
            }, c.invertExtent = function (c) {
                return c = b.indexOf(c), [a[c - 1], a[c]]
            }, c.copy = function () {
                return jf(a, b)
            }, c
        }

        function kf(a) {
            function b(a) {
                return +a
            }
            return b.invert = b, b.domain = b.range = function (c) {
                return arguments.length ? (a = c.map(b), b) : a
            }, b.ticks = function (b) {
                return $e(a, b)
            }, b.tickFormat = function (b, c) {
                return _e(a, b, c)
            }, b.copy = function () {
                return kf(a)
            }, b
        }

        function lf() {
            return 0
        }

        function mf(a) {
            return a.innerRadius
        }

        function nf(a) {
            return a.outerRadius
        }

        function of(a) {
            return a.startAngle
        }

        function pf(a) {
            return a.endAngle
        }

        function qf(a) {
            return a && a.padAngle
        }

        function rf(a, b, c, d) {
            return (a - c) * b - (b - d) * a > 0 ? 0 : 1
        }

        function sf(a, b, c, d, e) {
            var f = a[0] - b[0],
                g = a[1] - b[1],
                h = (e ? d : -d) / Math.sqrt(f * f + g * g),
                i = h * g,
                j = -h * f,
                k = a[0] + i,
                l = a[1] + j,
                m = b[0] + i,
                n = b[1] + j,
                o = (k + m) / 2,
                p = (l + n) / 2,
                q = m - k,
                r = n - l,
                s = q * q + r * r,
                t = c - d,
                u = k * n - m * l,
                v = (0 > r ? -1 : 1) * Math.sqrt(Math.max(0, t * t * s - u * u)),
                w = (u * r - q * v) / s,
                x = (-u * q - r * v) / s,
                y = (u * r + q * v) / s,
                z = (-u * q + r * v) / s,
                A = w - o,
                B = x - p,
                C = y - o,
                D = z - p;
            return A * A + B * B > C * C + D * D && (w = y, x = z), [
                [w - i, x - j],
                [w * c / t, x * c / t]
            ]
        }

        function tf(a) {
            function b(b) {
                function g() {
                    j.push("M", f(a(k), h))
                }
                for (var i, j = [], k = [], l = -1, m = b.length, n = Aa(c), o = Aa(d); ++l < m;) e.call(this, i = b[l], l) ? k.push([+n.call(this, i, l), +o.call(this, i, l)]) : k.length && (g(), k = []);
                return k.length && g(), j.length ? j.join("") : null
            }
            var c = Cc,
                d = Dc,
                e = Db,
                f = uf,
                g = f.key,
                h = .7;
            return b.x = function (a) {
                return arguments.length ? (c = a, b) : c
            }, b.y = function (a) {
                return arguments.length ? (d = a, b) : d
            }, b.defined = function (a) {
                return arguments.length ? (e = a, b) : e
            }, b.interpolate = function (a) {
                return arguments.length ? (g = "function" == typeof a ? f = a : (f = Ci.get(a) || uf).key, b) : g
            }, b.tension = function (a) {
                return arguments.length ? (h = a, b) : h
            }, b
        }

        function uf(a) {
            return a.length > 1 ? a.join("L") : a + "Z"
        }

        function vf(a) {
            return a.join("L") + "Z"
        }

        function wf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d[0] + (d = a[b])[0]) / 2, "V", d[1]);
            return c > 1 && e.push("H", d[0]), e.join("")
        }

        function xf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("V", (d = a[b])[1], "H", d[0]);
            return e.join("")
        }

        function yf(a) {
            for (var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]]; ++b < c;) e.push("H", (d = a[b])[0], "V", d[1]);
            return e.join("")
        }

        function zf(a, b) {
            return a.length < 4 ? uf(a) : a[1] + Cf(a.slice(1, -1), Df(a, b))
        }

        function Af(a, b) {
            return a.length < 3 ? vf(a) : a[0] + Cf((a.push(a[0]), a), Df([a[a.length - 2]].concat(a, [a[1]]), b))
        }

        function Bf(a, b) {
            return a.length < 3 ? uf(a) : a[0] + Cf(a, Df(a, b))
        }

        function Cf(a, b) {
            if (b.length < 1 || a.length != b.length && a.length != b.length + 2) return uf(a);
            var c = a.length != b.length,
                d = "",
                e = a[0],
                f = a[1],
                g = b[0],
                h = g,
                i = 1;
            if (c && (d += "Q" + (f[0] - 2 * g[0] / 3) + "," + (f[1] - 2 * g[1] / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2), b.length > 1) {
                h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
                for (var j = 2; j < b.length; j++, i++) f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
            }
            if (c) {
                var k = a[i];
                d += "Q" + (f[0] + 2 * h[0] / 3) + "," + (f[1] + 2 * h[1] / 3) + "," + k[0] + "," + k[1]
            }
            return d
        }

        function Df(a, b) {
            for (var c, d = [], e = (1 - b) / 2, f = a[0], g = a[1], h = 1, i = a.length; ++h < i;) c = f, f = g, g = a[h], d.push([e * (g[0] - c[0]), e * (g[1] - c[1])]);
            return d
        }

        function Ef(a) {
            if (a.length < 3) return uf(a);
            var b = 1,
                c = a.length,
                d = a[0],
                e = d[0],
                f = d[1],
                g = [e, e, e, (d = a[1])[0]],
                h = [f, f, f, d[1]],
                i = [e, ",", f, "L", If(Fi, g), ",", If(Fi, h)];
            for (a.push(a[c - 1]); ++b <= c;) d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), Jf(i, g, h);
            return a.pop(), i.push("L", d), i.join("")
        }

        function Ff(a) {
            if (a.length < 4) return uf(a);
            for (var b, c = [], d = -1, e = a.length, f = [0], g = [0]; ++d < 3;) b = a[d], f.push(b[0]), g.push(b[1]);
            for (c.push(If(Fi, f) + "," + If(Fi, g)), --d; ++d < e;) b = a[d], f.shift(), f.push(b[0]), g.shift(), g.push(b[1]), Jf(c, f, g);
            return c.join("")
        }

        function Gf(a) {
            for (var b, c, d = -1, e = a.length, f = e + 4, g = [], h = []; ++d < 4;) c = a[d % e], g.push(c[0]), h.push(c[1]);
            for (b = [If(Fi, g), ",", If(Fi, h)], --d; ++d < f;) c = a[d % e], g.shift(), g.push(c[0]), h.shift(), h.push(c[1]), Jf(b, g, h);
            return b.join("")
        }

        function Hf(a, b) {
            var c = a.length - 1;
            if (c)
                for (var d, e, f = a[0][0], g = a[0][1], h = a[c][0] - f, i = a[c][1] - g, j = -1; ++j <= c;) d = a[j], e = j / c, d[0] = b * d[0] + (1 - b) * (f + e * h), d[1] = b * d[1] + (1 - b) * (g + e * i);
            return Ef(a)
        }

        function If(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
        }

        function Jf(a, b, c) {
            a.push("C", If(Di, b), ",", If(Di, c), ",", If(Ei, b), ",", If(Ei, c), ",", If(Fi, b), ",", If(Fi, c))
        }

        function Kf(a, b) {
            return (b[1] - a[1]) / (b[0] - a[0])
        }

        function Lf(a) {
            for (var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = Kf(e, f); ++b < c;) d[b] = (g + (g = Kf(e = f, f = a[b + 1]))) / 2;
            return d[b] = g, d
        }

        function Mf(a) {
            for (var b, c, d, e, f = [], g = Lf(a), h = -1, i = a.length - 1; ++h < i;) b = Kf(a[h], a[h + 1]), rg(b) < Ig ? g[h] = g[h + 1] = 0 : (c = g[h] / b, d = g[h + 1] / b, (e = c * c + d * d) > 9 && (e = 3 * b / Math.sqrt(e), g[h] = e * c, g[h + 1] = e * d));
            for (h = -1; ++h <= i;) e = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), f.push([e || 0, g[h] * e || 0]);
            return f
        }

        function Nf(a) {
            return a.length < 3 ? uf(a) : a[0] + Cf(a, Mf(a))
        }

        function Of(a) {
            for (var b, c, d, e = -1, f = a.length; ++e < f;) b = a[e], c = b[0], d = b[1] - Ng, b[0] = c * Math.cos(d), b[1] = c * Math.sin(d);
            return a
        }

        function Pf(a) {
            function b(b) {
                function i() {
                    p.push("M", h(a(r), l), k, j(a(q.reverse()), l), "Z")
                }
                for (var m, n, o, p = [], q = [], r = [], s = -1, t = b.length, u = Aa(c), v = Aa(e), w = c === d ? function () {
                    return n
                } : Aa(d), x = e === f ? function () {
                    return o
                } : Aa(f); ++s < t;) g.call(this, m = b[s], s) ? (q.push([n = +u.call(this, m, s), o = +v.call(this, m, s)]), r.push([+w.call(this, m, s), +x.call(this, m, s)])) : q.length && (i(), q = [], r = []);
                return q.length && i(), p.length ? p.join("") : null
            }
            var c = Cc,
                d = Cc,
                e = 0,
                f = Dc,
                g = Db,
                h = uf,
                i = h.key,
                j = h,
                k = "L",
                l = .7;
            return b.x = function (a) {
                return arguments.length ? (c = d = a, b) : d
            }, b.x0 = function (a) {
                return arguments.length ? (c = a, b) : c
            }, b.x1 = function (a) {
                return arguments.length ? (d = a, b) : d
            }, b.y = function (a) {
                return arguments.length ? (e = f = a, b) : f
            }, b.y0 = function (a) {
                return arguments.length ? (e = a, b) : e
            }, b.y1 = function (a) {
                return arguments.length ? (f = a, b) : f
            }, b.defined = function (a) {
                return arguments.length ? (g = a, b) : g
            }, b.interpolate = function (a) {
                return arguments.length ? (i = "function" == typeof a ? h = a : (h = Ci.get(a) || uf).key, j = h.reverse || h, k = h.closed ? "M" : "L", b) : i
            }, b.tension = function (a) {
                return arguments.length ? (l = a, b) : l
            }, b
        }

        function Qf(a) {
            return a.radius
        }

        function Rf(a) {
            return [a.x, a.y]
        }

        function Sf(a) {
            return function () {
                var b = a.apply(this, arguments),
                    c = b[0],
                    d = b[1] - Ng;
                return [c * Math.cos(d), c * Math.sin(d)]
            }
        }

        function Tf() {
            return 64
        }

        function Uf() {
            return "circle"
        }

        function Vf(a) {
            var b = Math.sqrt(a / Kg);
            return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
        }

        function Wf(a) {
            return function () {
                var b, c, d;
                (b = this[a]) && (d = b[c = b.active]) && (d.timer.c = null, d.timer.t = NaN, --b.count ? delete b[c] : delete this[a], b.active += .5, d.event && d.event.interrupt.call(this, this.__data__, d.index))
            }
        }

        function Xf(a, b, c) {
            return wg(a, Mi), a.namespace = b, a.id = c, a
        }

        function Yf(a, b, c, d) {
            var e = a.id,
                f = a.namespace;
            return R(a, "function" == typeof c ? function (a, g, h) {
                a[f][e].tween.set(b, d(c.call(a, a.__data__, g, h)))
            } : (c = d(c), function (a) {
                a[f][e].tween.set(b, c)
            }))
        }

        function Zf(a) {
            return null == a && (a = ""),
                function () {
                    this.textContent = a
                }
        }

        function $f(a) {
            return null == a ? "__transition__" : "__transition_" + a + "__"
        }

        function _f(a, b, c, d, e) {
            function f(a) {
                var b = p.delay;
                return k.t = b + i, a >= b ? g(a - b) : void (k.c = g)
            }

            function g(c) {
                var e = o.active,
                    f = o[e];
                f && (f.timer.c = null, f.timer.t = NaN, --o.count, delete o[e], f.event && f.event.interrupt.call(a, a.__data__, f.index));
                for (var g in o)
                    if (d > +g) {
                        var j = o[g];
                        j.timer.c = null, j.timer.t = NaN, --o.count, delete o[g]
                    } k.c = h, Fa(function () {
                        return k.c && h(c || 1) && (k.c = null, k.t = NaN), 1
                    }, 0, i), o.active = d, p.event && p.event.start.call(a, a.__data__, b), n = [], p.tween.forEach(function (c, d) {
                        (d = d.call(a, a.__data__, b)) && n.push(d)
                    }), m = p.ease, l = p.duration
            }

            function h(e) {
                for (var f = e / l, g = m(f), h = n.length; h > 0;) n[--h].call(a, g);
                return f >= 1 ? (p.event && p.event.end.call(a, a.__data__, b), --o.count ? delete o[d] : delete a[c], 1) : void 0
            }
            var i, k, l, m, n, o = a[c] || (a[c] = {
                active: 0,
                count: 0
            }),
                p = o[d];
            p || (i = e.time, k = Fa(f, 0, i), p = o[d] = {
                tween: new j,
                time: i,
                timer: k,
                delay: e.delay,
                duration: e.duration,
                ease: e.ease,
                index: b
            }, e = null, ++o.count)
        }

        function ag(a, b, c) {
            a.attr("transform", function (a) {
                var d = b(a);
                return "translate(" + (isFinite(d) ? d : c(a)) + ",0)"
            })
        }

        function bg(a, b, c) {
            a.attr("transform", function (a) {
                var d = b(a);
                return "translate(0," + (isFinite(d) ? d : c(a)) + ")"
            })
        }

        function cg(a) {
            return a.toISOString()
        }

        function dg(a, b, c) {
            function d(b) {
                return a(b)
            }

            function e(a, c) {
                var d = a[1] - a[0],
                    e = d / c,
                    f = hg.bisect(Vi, e);
                return f == Vi.length ? [b.year, Ze(a.map(function (a) {
                    return a / 31536e6
                }), c)[2]] : f ? b[e / Vi[f - 1] < Vi[f] / e ? f - 1 : f] : [Yi, Ze(a, c)[2]]
            }
            return d.invert = function (b) {
                return eg(a.invert(b))
            }, d.domain = function (b) {
                return arguments.length ? (a.domain(b), d) : a.domain().map(eg)
            }, d.nice = function (a, b) {
                function c(c) {
                    return !isNaN(c) && !a.range(c, eg(+c + 1), b).length
                }
                var f = d.domain(),
                    g = Qe(f),
                    h = null == a ? e(g, 10) : "number" == typeof a && e(g, a);
                return h && (a = h[0], b = h[1]), d.domain(Te(f, b > 1 ? {
                    floor: function (b) {
                        for (; c(b = a.floor(b));) b = eg(b - 1);
                        return b
                    },
                    ceil: function (b) {
                        for (; c(b = a.ceil(b));) b = eg(+b + 1);
                        return b
                    }
                } : a))
            }, d.ticks = function (a, b) {
                var c = Qe(d.domain()),
                    f = null == a ? e(c, 10) : "number" == typeof a ? e(c, a) : !a.range && [{
                        range: a
                    }, b];
                return f && (a = f[0], b = f[1]), a.range(c[0], eg(+c[1] + 1), 1 > b ? 1 : b)
            }, d.tickFormat = function () {
                return c
            }, d.copy = function () {
                return dg(a.copy(), b, c)
            }, Xe(d, a)
        }

        function eg(a) {
            return new Date(a)
        }

        function fg(a) {
            return JSON.parse(a.responseText)
        }

        function gg(a) {
            var b = kg.createRange();
            return b.selectNode(kg.body), b.createContextualFragment(a.responseText)
        }
        var hg = {
            version: "3.5.17"
        },
            ig = [].slice,
            jg = function (a) {
                return ig.call(a)
            },
            kg = this.document;
        if (kg) try {
            jg(kg.documentElement.childNodes)[0].nodeType
        } catch (a) {
            jg = function (a) {
                for (var b = a.length, c = new Array(b); b--;) c[b] = a[b];
                return c
            }
        }
        if (Date.now || (Date.now = function () {
            return +new Date
        }), kg) try {
            kg.createElement("DIV").style.setProperty("opacity", 0, "")
        } catch (a) {
            var lg = this.Element.prototype,
                mg = lg.setAttribute,
                ng = lg.setAttributeNS,
                og = this.CSSStyleDeclaration.prototype,
                pg = og.setProperty;
            lg.setAttribute = function (a, b) {
                mg.call(this, a, b + "")
            }, lg.setAttributeNS = function (a, b, c) {
                ng.call(this, a, b, c + "")
            }, og.setProperty = function (a, b, c) {
                pg.call(this, a, b + "", c)
            }
        }
        hg.ascending = c, hg.descending = function (a, b) {
            return a > b ? -1 : b > a ? 1 : b >= a ? 0 : NaN
        }, hg.min = function (a, b) {
            var c, d, e = -1,
                f = a.length;
            if (1 === arguments.length) {
                for (; ++e < f;)
                    if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    } for (; ++e < f;) null != (d = a[e]) && c > d && (c = d)
            } else {
                for (; ++e < f;)
                    if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    } for (; ++e < f;) null != (d = b.call(a, a[e], e)) && c > d && (c = d)
            }
            return c
        }, hg.max = function (a, b) {
            var c, d, e = -1,
                f = a.length;
            if (1 === arguments.length) {
                for (; ++e < f;)
                    if (null != (d = a[e]) && d >= d) {
                        c = d;
                        break
                    } for (; ++e < f;) null != (d = a[e]) && d > c && (c = d)
            } else {
                for (; ++e < f;)
                    if (null != (d = b.call(a, a[e], e)) && d >= d) {
                        c = d;
                        break
                    } for (; ++e < f;) null != (d = b.call(a, a[e], e)) && d > c && (c = d)
            }
            return c
        }, hg.extent = function (a, b) {
            var c, d, e, f = -1,
                g = a.length;
            if (1 === arguments.length) {
                for (; ++f < g;)
                    if (null != (d = a[f]) && d >= d) {
                        c = e = d;
                        break
                    } for (; ++f < g;) null != (d = a[f]) && (c > d && (c = d), d > e && (e = d))
            } else {
                for (; ++f < g;)
                    if (null != (d = b.call(a, a[f], f)) && d >= d) {
                        c = e = d;
                        break
                    } for (; ++f < g;) null != (d = b.call(a, a[f], f)) && (c > d && (c = d), d > e && (e = d))
            }
            return [c, e]
        }, hg.sum = function (a, b) {
            var c, d = 0,
                f = a.length,
                g = -1;
            if (1 === arguments.length)
                for (; ++g < f;) e(c = +a[g]) && (d += c);
            else
                for (; ++g < f;) e(c = +b.call(a, a[g], g)) && (d += c);
            return d
        }, hg.mean = function (a, b) {
            var c, f = 0,
                g = a.length,
                h = -1,
                i = g;
            if (1 === arguments.length)
                for (; ++h < g;) e(c = d(a[h])) ? f += c : --i;
            else
                for (; ++h < g;) e(c = d(b.call(a, a[h], h))) ? f += c : --i;
            return i ? f / i : void 0
        }, hg.quantile = function (a, b) {
            var c = (a.length - 1) * b + 1,
                d = Math.floor(c),
                e = +a[d - 1],
                f = c - d;
            return f ? e + f * (a[d] - e) : e
        }, hg.median = function (a, b) {
            var f, g = [],
                h = a.length,
                i = -1;
            if (1 === arguments.length)
                for (; ++i < h;) e(f = d(a[i])) && g.push(f);
            else
                for (; ++i < h;) e(f = d(b.call(a, a[i], i))) && g.push(f);
            return g.length ? hg.quantile(g.sort(c), .5) : void 0
        }, hg.variance = function (a, b) {
            var c, f, g = a.length,
                h = 0,
                i = 0,
                j = -1,
                k = 0;
            if (1 === arguments.length)
                for (; ++j < g;) e(c = d(a[j])) && (f = c - h, h += f / ++k, i += f * (c - h));
            else
                for (; ++j < g;) e(c = d(b.call(a, a[j], j))) && (f = c - h, h += f / ++k, i += f * (c - h));
            return k > 1 ? i / (k - 1) : void 0
        }, hg.deviation = function () {
            var a = hg.variance.apply(this, arguments);
            return a ? Math.sqrt(a) : a
        };
        var qg = f(c);
        hg.bisectLeft = qg.left, hg.bisect = hg.bisectRight = qg.right, hg.bisector = function (a) {
            return f(1 === a.length ? function (b, d) {
                return c(a(b), d)
            } : a)
        }, hg.shuffle = function (a, b, c) {
            (f = arguments.length) < 3 && (c = a.length, 2 > f && (b = 0));
            for (var d, e, f = c - b; f;) e = Math.random() * f-- | 0, d = a[f + b], a[f + b] = a[e + b], a[e + b] = d;
            return a
        }, hg.permute = function (a, b) {
            for (var c = b.length, d = new Array(c); c--;) d[c] = a[b[c]];
            return d
        }, hg.pairs = function (a) {
            for (var b = 0, c = a.length - 1, d = a[0], e = new Array(0 > c ? 0 : c); c > b;) e[b] = [d, d = a[++b]];
            return e
        }, hg.transpose = function (a) {
            if (!(e = a.length)) return [];
            for (var b = -1, c = hg.min(a, g), d = new Array(c); ++b < c;)
                for (var e, f = -1, h = d[b] = new Array(e); ++f < e;) h[f] = a[f][b];
            return d
        }, hg.zip = function () {
            return hg.transpose(arguments)
        }, hg.keys = function (a) {
            var b = [];
            for (var c in a) b.push(c);
            return b
        }, hg.values = function (a) {
            var b = [];
            for (var c in a) b.push(a[c]);
            return b
        }, hg.entries = function (a) {
            var b = [];
            for (var c in a) b.push({
                key: c,
                value: a[c]
            });
            return b
        }, hg.merge = function (a) {
            for (var b, c, d, e = a.length, f = -1, g = 0; ++f < e;) g += a[f].length;
            for (c = new Array(g); --e >= 0;)
                for (d = a[e], b = d.length; --b >= 0;) c[--g] = d[b];
            return c
        };
        var rg = Math.abs;
        hg.range = function (a, b, c) {
            if (arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0)), (b - a) / c == 1 / 0) throw new Error("infinite range");
            var d, e = [],
                f = h(rg(c)),
                g = -1;
            if (a *= f, b *= f, 0 > (c *= f))
                for (;
                    (d = a + c * ++g) > b;) e.push(d / f);
            else
                for (;
                    (d = a + c * ++g) < b;) e.push(d / f);
            return e
        }, hg.map = function (a, b) {
            var c = new j;
            if (a instanceof j) a.forEach(function (a, b) {
                c.set(a, b)
            });
            else if (Array.isArray(a)) {
                var d, e = -1,
                    f = a.length;
                if (1 === arguments.length)
                    for (; ++e < f;) c.set(e, a[e]);
                else
                    for (; ++e < f;) c.set(b.call(a, d = a[e], e), d)
            } else
                for (var g in a) c.set(g, a[g]);
            return c
        };
        var sg = "__proto__",
            tg = "\0";
        i(j, {
            has: m,
            get: function (a) {
                return this._[k(a)]
            },
            set: function (a, b) {
                return this._[k(a)] = b
            },
            remove: n,
            keys: o,
            values: function () {
                var a = [];
                for (var b in this._) a.push(this._[b]);
                return a
            },
            entries: function () {
                var a = [];
                for (var b in this._) a.push({
                    key: l(b),
                    value: this._[b]
                });
                return a
            },
            size: p,
            empty: q,
            forEach: function (a) {
                for (var b in this._) a.call(this, l(b), this._[b])
            }
        }), hg.nest = function () {
            function a(b, g, h) {
                if (h >= f.length) return d ? d.call(e, g) : c ? g.sort(c) : g;
                for (var i, k, l, m, n = -1, o = g.length, p = f[h++], q = new j; ++n < o;)(m = q.get(i = p(k = g[n]))) ? m.push(k) : q.set(i, [k]);
                return b ? (k = b(), l = function (c, d) {
                    k.set(c, a(b, d, h))
                }) : (k = {}, l = function (c, d) {
                    k[c] = a(b, d, h)
                }), q.forEach(l), k
            }

            function b(a, c) {
                if (c >= f.length) return a;
                var d = [],
                    e = g[c++];
                return a.forEach(function (a, e) {
                    d.push({
                        key: a,
                        values: b(e, c)
                    })
                }), e ? d.sort(function (a, b) {
                    return e(a.key, b.key)
                }) : d
            }
            var c, d, e = {},
                f = [],
                g = [];
            return e.map = function (b, c) {
                return a(c, b, 0)
            }, e.entries = function (c) {
                return b(a(hg.map, c, 0), 0)
            }, e.key = function (a) {
                return f.push(a), e
            }, e.sortKeys = function (a) {
                return g[f.length - 1] = a, e
            }, e.sortValues = function (a) {
                return c = a, e
            }, e.rollup = function (a) {
                return d = a, e
            }, e
        }, hg.set = function (a) {
            var b = new r;
            if (a)
                for (var c = 0, d = a.length; d > c; ++c) b.add(a[c]);
            return b
        }, i(r, {
            has: m,
            add: function (a) {
                return this._[k(a += "")] = !0, a
            },
            remove: n,
            values: o,
            size: p,
            empty: q,
            forEach: function (a) {
                for (var b in this._) a.call(this, l(b))
            }
        }), hg.behavior = {}, hg.rebind = function (a, b) {
            for (var c, d = 1, e = arguments.length; ++d < e;) a[c = arguments[d]] = t(a, b, b[c]);
            return a
        };
        var ug = ["webkit", "ms", "moz", "Moz", "o", "O"];
        hg.dispatch = function () {
            for (var a = new w, b = -1, c = arguments.length; ++b < c;) a[arguments[b]] = x(a);
            return a
        }, w.prototype.on = function (a, b) {
            var c = a.indexOf("."),
                d = "";
            if (c >= 0 && (d = a.slice(c + 1), a = a.slice(0, c)), a) return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
            if (2 === arguments.length) {
                if (null == b)
                    for (a in this) this.hasOwnProperty(a) && this[a].on(d, null);
                return this
            }
        }, hg.event = null, hg.requote = function (a) {
            return a.replace(vg, "\\$&")
        };
        var vg = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
            wg = {}.__proto__ ? function (a, b) {
                a.__proto__ = b
            } : function (a, b) {
                for (var c in b) a[c] = b[c]
            },
            xg = function (a, b) {
                return b.querySelector(a)
            },
            yg = function (a, b) {
                return b.querySelectorAll(a)
            },
            zg = function (a, b) {
                var c = a.matches || a[u(a, "matchesSelector")];
                return (zg = function (a, b) {
                    return c.call(a, b)
                })(a, b)
            };
        "function" == typeof Sizzle && (xg = function (a, b) {
            return Sizzle(a, b)[0] || null
        }, yg = Sizzle, zg = Sizzle.matchesSelector), hg.selection = function () {
            return hg.select(kg.documentElement)
        };
        var Ag = hg.selection.prototype = [];
        Ag.select = function (a) {
            var b, c, d, e, f = [];
            a = C(a);
            for (var g = -1, h = this.length; ++g < h;) {
                f.push(b = []), b.parentNode = (d = this[g]).parentNode;
                for (var i = -1, j = d.length; ++i < j;)(e = d[i]) ? (b.push(c = a.call(e, e.__data__, i, g)), c && "__data__" in e && (c.__data__ = e.__data__)) : b.push(null)
            }
            return B(f)
        }, Ag.selectAll = function (a) {
            var b, c, d = [];
            a = D(a);
            for (var e = -1, f = this.length; ++e < f;)
                for (var g = this[e], h = -1, i = g.length; ++h < i;)(c = g[h]) && (d.push(b = jg(a.call(c, c.__data__, h, e))), b.parentNode = c);
            return B(d)
        };
        var Bg = "http://www.w3.org/1999/xhtml",
            Cg = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: Bg,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
        hg.ns = {
            prefix: Cg,
            qualify: function (a) {
                var b = a.indexOf(":"),
                    c = a;
                return b >= 0 && "xmlns" !== (c = a.slice(0, b)) && (a = a.slice(b + 1)), Cg.hasOwnProperty(c) ? {
                    space: Cg[c],
                    local: a
                } : a
            }
        }, Ag.attr = function (a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) {
                    var c = this.node();
                    return a = hg.ns.qualify(a), a.local ? c.getAttributeNS(a.space, a.local) : c.getAttribute(a)
                }
                for (b in a) this.each(E(b, a[b]));
                return this
            }
            return this.each(E(a, b))
        }, Ag.classed = function (a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) {
                    var c = this.node(),
                        d = (a = H(a)).length,
                        e = -1;
                    if (b = c.classList) {
                        for (; ++e < d;)
                            if (!b.contains(a[e])) return !1
                    } else
                        for (b = c.getAttribute("class"); ++e < d;)
                            if (!G(a[e]).test(b)) return !1;
                    return !0
                }
                for (b in a) this.each(I(b, a[b]));
                return this
            }
            return this.each(I(a, b))
        }, Ag.style = function (a, c, d) {
            var e = arguments.length;
            if (3 > e) {
                if ("string" != typeof a) {
                    2 > e && (c = "");
                    for (d in a) this.each(K(d, a[d], c));
                    return this
                }
                if (2 > e) {
                    var f = this.node();
                    return b(f).getComputedStyle(f, null).getPropertyValue(a)
                }
                d = ""
            }
            return this.each(K(a, c, d))
        }, Ag.property = function (a, b) {
            if (arguments.length < 2) {
                if ("string" == typeof a) return this.node()[a];
                for (b in a) this.each(L(b, a[b]));
                return this
            }
            return this.each(L(a, b))
        }, Ag.text = function (a) {
            return arguments.length ? this.each("function" == typeof a ? function () {
                var b = a.apply(this, arguments);
                this.textContent = null == b ? "" : b
            } : null == a ? function () {
                this.textContent = ""
            } : function () {
                this.textContent = a
            }) : this.node().textContent
        }, Ag.html = function (a) {
            return arguments.length ? this.each("function" == typeof a ? function () {
                var b = a.apply(this, arguments);
                this.innerHTML = null == b ? "" : b
            } : null == a ? function () {
                this.innerHTML = ""
            } : function () {
                this.innerHTML = a
            }) : this.node().innerHTML
        }, Ag.append = function (a) {
            return a = M(a), this.select(function () {
                return this.appendChild(a.apply(this, arguments))
            })
        }, Ag.insert = function (a, b) {
            return a = M(a), b = C(b), this.select(function () {
                return this.insertBefore(a.apply(this, arguments), b.apply(this, arguments) || null)
            })
        }, Ag.remove = function () {
            return this.each(N)
        }, Ag.data = function (a, b) {
            function c(a, c) {
                var d, e, f, g = a.length,
                    l = c.length,
                    m = Math.min(g, l),
                    n = new Array(l),
                    o = new Array(l),
                    p = new Array(g);
                if (b) {
                    var q, r = new j,
                        s = new Array(g);
                    for (d = -1; ++d < g;)(e = a[d]) && (r.has(q = b.call(e, e.__data__, d)) ? p[d] = e : r.set(q, e), s[d] = q);
                    for (d = -1; ++d < l;)(e = r.get(q = b.call(c, f = c[d], d))) ? !0 !== e && (n[d] = e, e.__data__ = f) : o[d] = O(f), r.set(q, !0);
                    for (d = -1; ++d < g;) d in s && !0 !== r.get(s[d]) && (p[d] = a[d])
                } else {
                    for (d = -1; ++d < m;) e = a[d], f = c[d], e ? (e.__data__ = f, n[d] = e) : o[d] = O(f);
                    for (; l > d; ++d) o[d] = O(c[d]);
                    for (; g > d; ++d) p[d] = a[d]
                }
                o.update = n, o.parentNode = n.parentNode = p.parentNode = a.parentNode, h.push(o), i.push(n), k.push(p)
            }
            var d, e, f = -1,
                g = this.length;
            if (!arguments.length) {
                for (a = new Array(g = (d = this[0]).length); ++f < g;)(e = d[f]) && (a[f] = e.__data__);
                return a
            }
            var h = S([]),
                i = B([]),
                k = B([]);
            if ("function" == typeof a)
                for (; ++f < g;) c(d = this[f], a.call(d, d.parentNode.__data__, f));
            else
                for (; ++f < g;) c(d = this[f], a);
            return i.enter = function () {
                return h
            }, i.exit = function () {
                return k
            }, i
        }, Ag.datum = function (a) {
            return arguments.length ? this.property("__data__", a) : this.property("__data__")
        }, Ag.filter = function (a) {
            var b, c, d, e = [];
            "function" != typeof a && (a = P(a));
            for (var f = 0, g = this.length; g > f; f++) {
                e.push(b = []), b.parentNode = (c = this[f]).parentNode;
                for (var h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
            }
            return B(e)
        }, Ag.order = function () {
            for (var a = -1, b = this.length; ++a < b;)
                for (var c, d = this[a], e = d.length - 1, f = d[e]; --e >= 0;)(c = d[e]) && (f && f !== c.nextSibling && f.parentNode.insertBefore(c, f), f = c);
            return this
        }, Ag.sort = function (a) {
            a = Q.apply(this, arguments);
            for (var b = -1, c = this.length; ++b < c;) this[b].sort(a);
            return this.order()
        }, Ag.each = function (a) {
            return R(this, function (b, c, d) {
                a.call(b, b.__data__, c, d)
            })
        }, Ag.call = function (a) {
            var b = jg(arguments);
            return a.apply(b[0] = this, b), this
        }, Ag.empty = function () {
            return !this.node()
        }, Ag.node = function () {
            for (var a = 0, b = this.length; b > a; a++)
                for (var c = this[a], d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    if (f) return f
                }
            return null
        }, Ag.size = function () {
            var a = 0;
            return R(this, function () {
                ++a
            }), a
        };
        var Dg = [];
        hg.selection.enter = S, hg.selection.enter.prototype = Dg, Dg.append = Ag.append, Dg.empty = Ag.empty, Dg.node = Ag.node, Dg.call = Ag.call, Dg.size = Ag.size, Dg.select = function (a) {
            for (var b, c, d, e, f, g = [], h = -1, i = this.length; ++h < i;) {
                d = (e = this[h]).update, g.push(b = []), b.parentNode = e.parentNode;
                for (var j = -1, k = e.length; ++j < k;)(f = e[j]) ? (b.push(d[j] = c = a.call(e.parentNode, f.__data__, j, h)), c.__data__ = f.__data__) : b.push(null)
            }
            return B(g)
        }, Dg.insert = function (a, b) {
            return arguments.length < 2 && (b = T(this)), Ag.insert.call(this, a, b)
        }, hg.select = function (b) {
            var c;
            return "string" == typeof b ? (c = [xg(b, kg)], c.parentNode = kg.documentElement) : (c = [b], c.parentNode = a(b)), B([c])
        }, hg.selectAll = function (a) {
            var b;
            return "string" == typeof a ? (b = jg(yg(a, kg)), b.parentNode = kg.documentElement) : (b = jg(a), b.parentNode = null), B([b])
        }, Ag.on = function (a, b, c) {
            var d = arguments.length;
            if (3 > d) {
                if ("string" != typeof a) {
                    2 > d && (b = !1);
                    for (c in a) this.each(U(c, a[c], b));
                    return this
                }
                if (2 > d) return (d = this.node()["__on" + a]) && d._;
                c = !1
            }
            return this.each(U(a, b, c))
        };
        var Eg = hg.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });
        kg && Eg.forEach(function (a) {
            "on" + a in kg && Eg.remove(a)
        });
        var Fg, Gg = 0;
        hg.mouse = function (a) {
            return Y(a, z())
        };
        var Hg = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        hg.touch = function (a, b, c) {
            if (arguments.length < 3 && (c = b, b = z().changedTouches), b)
                for (var d, e = 0, f = b.length; f > e; ++e)
                    if ((d = b[e]).identifier === c) return Y(a, d)
        }, hg.behavior.drag = function () {
            function a() {
                this.on("mousedown.drag", f).on("touchstart.drag", g)
            }

            function c(a, b, c, f, g) {
                return function () {
                    function h() {
                        var a, c, d = b(m, p);
                        d && (a = d[0] - t[0], c = d[1] - t[1], o |= a | c, t = d, n({
                            type: "drag",
                            x: d[0] + j[0],
                            y: d[1] + j[1],
                            dx: a,
                            dy: c
                        }))
                    }

                    function i() {
                        b(m, p) && (r.on(f + q, null).on(g + q, null), s(o), n({
                            type: "dragend"
                        }))
                    }
                    var j, k = this,
                        l = hg.event.target.correspondingElement || hg.event.target,
                        m = k.parentNode,
                        n = d.of(k, arguments),
                        o = 0,
                        p = a(),
                        q = ".drag" + (null == p ? "" : "-" + p),
                        r = hg.select(c(l)).on(f + q, h).on(g + q, i),
                        s = X(l),
                        t = b(m, p);
                    e ? (j = e.apply(k, arguments), j = [j.x - t[0], j.y - t[1]]) : j = [0, 0], n({
                        type: "dragstart"
                    })
                }
            }
            var d = A(a, "drag", "dragstart", "dragend"),
                e = null,
                f = c(v, hg.mouse, b, "mousemove", "mouseup"),
                g = c(Z, hg.touch, s, "touchmove", "touchend");
            return a.origin = function (b) {
                return arguments.length ? (e = b, a) : e
            }, hg.rebind(a, d, "on")
        }, hg.touches = function (a, b) {
            return arguments.length < 2 && (b = z().touches), b ? jg(b).map(function (b) {
                var c = Y(a, b);
                return c.identifier = b.identifier, c
            }) : []
        };
        var Ig = 1e-6,
            Jg = Ig * Ig,
            Kg = Math.PI,
            Lg = 2 * Kg,
            Mg = Lg - Ig,
            Ng = Kg / 2,
            Og = Kg / 180,
            Pg = 180 / Kg,
            Qg = Math.SQRT2;
        hg.interpolateZoom = function (a, b) {
            var c, d, e = a[0],
                f = a[1],
                g = a[2],
                h = b[0],
                i = b[1],
                j = b[2],
                k = h - e,
                l = i - f,
                m = k * k + l * l;
            if (Jg > m) d = Math.log(j / g) / Qg, c = function (a) {
                return [e + a * k, f + a * l, g * Math.exp(Qg * a * d)]
            };
            else {
                var n = Math.sqrt(m),
                    o = (j * j - g * g + 4 * m) / (2 * g * 2 * n),
                    p = (j * j - g * g - 4 * m) / (2 * j * 2 * n),
                    q = Math.log(Math.sqrt(o * o + 1) - o),
                    r = Math.log(Math.sqrt(p * p + 1) - p);
                d = (r - q) / Qg, c = function (a) {
                    var b = a * d,
                        c = da(q),
                        h = g / (2 * n) * (c * ea(Qg * b + q) - ca(q));
                    return [e + h * k, f + h * l, g * c / da(Qg * b + q)]
                }
            }
            return c.duration = 1e3 * d, c
        }, hg.behavior.zoom = function () {
            function a(a) {
                a.on(F, l).on(Sg + ".zoom", n).on("dblclick.zoom", o).on(I, m)
            }

            function c(a) {
                return [(a[0] - z.x) / z.k, (a[1] - z.y) / z.k]
            }

            function d(a) {
                return [a[0] * z.k + z.x, a[1] * z.k + z.y]
            }

            function e(a) {
                z.k = Math.max(C[0], Math.min(C[1], a))
            }

            function f(a, b) {
                b = d(b), z.x += a[0] - b[0], z.y += a[1] - b[1]
            }

            function g(b, c, d, g) {
                b.__chart__ = {
                    x: z.x,
                    y: z.y,
                    k: z.k
                }, e(Math.pow(2, g)), f(q = c, d), b = hg.select(b), D > 0 && (b = b.transition().duration(D)), b.call(a.event)
            }

            function h() {
                v && v.domain(u.range().map(function (a) {
                    return (a - z.x) / z.k
                }).map(u.invert)), x && x.domain(w.range().map(function (a) {
                    return (a - z.y) / z.k
                }).map(w.invert))
            }

            function i(a) {
                E++ || a({
                    type: "zoomstart"
                })
            }

            function j(a) {
                h(), a({
                    type: "zoom",
                    scale: z.k,
                    translate: [z.x, z.y]
                })
            }

            function k(a) {
                --E || (a({
                    type: "zoomend"
                }), q = null)
            }

            function l() {
                function a() {
                    h = 1, f(hg.mouse(e), m), j(g)
                }

                function d() {
                    l.on(G, null).on(H, null), n(h), k(g)
                }
                var e = this,
                    g = J.of(e, arguments),
                    h = 0,
                    l = hg.select(b(e)).on(G, a).on(H, d),
                    m = c(hg.mouse(e)),
                    n = X(e);
                Li.call(e), i(g)
            }

            function m() {
                function a() {
                    var a = hg.touches(o);
                    return n = z.k, a.forEach(function (a) {
                        a.identifier in q && (q[a.identifier] = c(a))
                    }), a
                }

                function b() {
                    var b = hg.event.target;
                    hg.select(b).on(u, d).on(v, h), w.push(b);
                    for (var c = hg.event.changedTouches, e = 0, f = c.length; f > e; ++e) q[c[e].identifier] = null;
                    var i = a(),
                        j = Date.now();
                    if (1 === i.length) {
                        if (500 > j - t) {
                            var k = i[0];
                            g(o, k, q[k.identifier], Math.floor(Math.log(z.k) / Math.LN2) + 1), y()
                        }
                        t = j
                    } else if (i.length > 1) {
                        var k = i[0],
                            l = i[1],
                            m = k[0] - l[0],
                            n = k[1] - l[1];
                        r = m * m + n * n
                    }
                }

                function d() {
                    var a, b, c, d, g = hg.touches(o);
                    Li.call(o);
                    for (var h = 0, i = g.length; i > h; ++h, d = null)
                        if (c = g[h], d = q[c.identifier]) {
                            if (b) break;
                            a = c, b = d
                        } if (d) {
                            var k = (k = c[0] - a[0]) * k + (k = c[1] - a[1]) * k,
                                l = r && Math.sqrt(k / r);
                            a = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2], b = [(b[0] + d[0]) / 2, (b[1] + d[1]) / 2], e(l * n)
                        }
                    t = null, f(a, b), j(p)
                }

                function h() {
                    if (hg.event.touches.length) {
                        for (var b = hg.event.changedTouches, c = 0, d = b.length; d > c; ++c) delete q[b[c].identifier];
                        for (var e in q) return void a()
                    }
                    hg.selectAll(w).on(s, null), x.on(F, l).on(I, m), A(), k(p)
                }
                var n, o = this,
                    p = J.of(o, arguments),
                    q = {},
                    r = 0,
                    s = ".zoom-" + hg.event.changedTouches[0].identifier,
                    u = "touchmove" + s,
                    v = "touchend" + s,
                    w = [],
                    x = hg.select(o),
                    A = X(o);
                b(), i(p), x.on(F, null).on(I, b)
            }

            function n() {
                var a = J.of(this, arguments);
                s ? clearTimeout(s) : (Li.call(this), p = c(q = r || hg.mouse(this)), i(a)), s = setTimeout(function () {
                    s = null, k(a)
                }, 50), y(), e(Math.pow(2, .002 * Rg()) * z.k), f(q, p), j(a)
            }

            function o() {
                var a = hg.mouse(this),
                    b = Math.log(z.k) / Math.LN2;
                g(this, a, c(a), hg.event.shiftKey ? Math.ceil(b) - 1 : Math.floor(b) + 1)
            }
            var p, q, r, s, t, u, v, w, x, z = {
                x: 0,
                y: 0,
                k: 1
            },
                B = [960, 500],
                C = Tg,
                D = 250,
                E = 0,
                F = "mousedown.zoom",
                G = "mousemove.zoom",
                H = "mouseup.zoom",
                I = "touchstart.zoom",
                J = A(a, "zoomstart", "zoom", "zoomend");
            return Sg || (Sg = "onwheel" in kg ? (Rg = function () {
                return -hg.event.deltaY * (hg.event.deltaMode ? 120 : 1)
            }, "wheel") : "onmousewheel" in kg ? (Rg = function () {
                return hg.event.wheelDelta
            }, "mousewheel") : (Rg = function () {
                return -hg.event.detail
            }, "MozMousePixelScroll")), a.event = function (a) {
                a.each(function () {
                    var a = J.of(this, arguments),
                        b = z;
                    Ji ? hg.select(this).transition().each("start.zoom", function () {
                        z = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        }, i(a)
                    }).tween("zoom:zoom", function () {
                        var c = B[0],
                            d = B[1],
                            e = q ? q[0] : c / 2,
                            f = q ? q[1] : d / 2,
                            g = hg.interpolateZoom([(e - z.x) / z.k, (f - z.y) / z.k, c / z.k], [(e - b.x) / b.k, (f - b.y) / b.k, c / b.k]);
                        return function (b) {
                            var d = g(b),
                                h = c / d[2];
                            this.__chart__ = z = {
                                x: e - d[0] * h,
                                y: f - d[1] * h,
                                k: h
                            }, j(a)
                        }
                    }).each("interrupt.zoom", function () {
                        k(a)
                    }).each("end.zoom", function () {
                        k(a)
                    }) : (this.__chart__ = z, i(a), j(a), k(a))
                })
            }, a.translate = function (b) {
                return arguments.length ? (z = {
                    x: +b[0],
                    y: +b[1],
                    k: z.k
                }, h(), a) : [z.x, z.y]
            }, a.scale = function (b) {
                return arguments.length ? (z = {
                    x: z.x,
                    y: z.y,
                    k: null
                }, e(+b), h(), a) : z.k
            }, a.scaleExtent = function (b) {
                return arguments.length ? (C = null == b ? Tg : [+b[0], +b[1]], a) : C
            }, a.center = function (b) {
                return arguments.length ? (r = b && [+b[0], +b[1]], a) : r
            }, a.size = function (b) {
                return arguments.length ? (B = b && [+b[0], +b[1]], a) : B
            }, a.duration = function (b) {
                return arguments.length ? (D = +b, a) : D
            }, a.x = function (b) {
                return arguments.length ? (v = b, u = b.copy(), z = {
                    x: 0,
                    y: 0,
                    k: 1
                }, a) : v
            }, a.y = function (b) {
                return arguments.length ? (x = b, w = b.copy(), z = {
                    x: 0,
                    y: 0,
                    k: 1
                }, a) : x
            }, hg.rebind(a, J, "on")
        };
        var Rg, Sg, Tg = [0, 1 / 0];
        hg.color = ga, ga.prototype.toString = function () {
            return this.rgb() + ""
        }, hg.hsl = ha;
        var Ug = ha.prototype = new ga;
        Ug.brighter = function (a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, this.l / a)
        }, Ug.darker = function (a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ha(this.h, this.s, a * this.l)
        }, Ug.rgb = function () {
            return ia(this.h, this.s, this.l)
        }, hg.hcl = ja;
        var Vg = ja.prototype = new ga;
        Vg.brighter = function (a) {
            return new ja(this.h, this.c, Math.min(100, this.l + Wg * (arguments.length ? a : 1)))
        }, Vg.darker = function (a) {
            return new ja(this.h, this.c, Math.max(0, this.l - Wg * (arguments.length ? a : 1)))
        }, Vg.rgb = function () {
            return ka(this.h, this.c, this.l).rgb()
        }, hg.lab = la;
        var Wg = 18,
            Xg = .95047,
            Yg = 1,
            Zg = 1.08883,
            $g = la.prototype = new ga;
        $g.brighter = function (a) {
            return new la(Math.min(100, this.l + Wg * (arguments.length ? a : 1)), this.a, this.b)
        }, $g.darker = function (a) {
            return new la(Math.max(0, this.l - Wg * (arguments.length ? a : 1)), this.a, this.b)
        }, $g.rgb = function () {
            return ma(this.l, this.a, this.b)
        }, hg.rgb = ra;
        var _g = ra.prototype = new ga;
        _g.brighter = function (a) {
            a = Math.pow(.7, arguments.length ? a : 1);
            var b = this.r,
                c = this.g,
                d = this.b,
                e = 30;
            return b || c || d ? (b && e > b && (b = e), c && e > c && (c = e), d && e > d && (d = e), new ra(Math.min(255, b / a), Math.min(255, c / a), Math.min(255, d / a))) : new ra(e, e, e)
        }, _g.darker = function (a) {
            return a = Math.pow(.7, arguments.length ? a : 1), new ra(a * this.r, a * this.g, a * this.b)
        }, _g.hsl = function () {
            return wa(this.r, this.g, this.b)
        }, _g.toString = function () {
            return "#" + ua(this.r) + ua(this.g) + ua(this.b)
        };
        var ah = hg.map({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        });
        ah.forEach(function (a, b) {
            ah.set(a, sa(b))
        }), hg.functor = Aa, hg.xhr = Ba(s), hg.dsv = function (a, b) {
            function c(a, c, f) {
                arguments.length < 3 && (f = c, c = null);
                var g = Ca(a, b, null == c ? d : e(c), f);
                return g.row = function (a) {
                    return arguments.length ? g.response(null == (c = a) ? d : e(a)) : c
                }, g
            }

            function d(a) {
                return c.parse(a.responseText)
            }

            function e(a) {
                return function (b) {
                    return c.parse(b.responseText, a)
                }
            }

            function f(b) {
                return b.map(g).join(a)
            }

            function g(a) {
                return h.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
            }
            var h = new RegExp('["' + a + "\n]"),
                i = a.charCodeAt(0);
            return c.parse = function (a, b) {
                var d;
                return c.parseRows(a, function (a, c) {
                    if (d) return d(a, c - 1);
                    var e = new Function("d", "return {" + a.map(function (a, b) {
                        return JSON.stringify(a) + ": d[" + b + "]"
                    }).join(",") + "}");
                    d = b ? function (a, c) {
                        return b(e(a), c)
                    } : e
                })
            }, c.parseRows = function (a, b) {
                function c() {
                    if (k >= j) return g;
                    if (e) return e = !1, f;
                    var b = k;
                    if (34 === a.charCodeAt(b)) {
                        for (var c = b; c++ < j;)
                            if (34 === a.charCodeAt(c)) {
                                if (34 !== a.charCodeAt(c + 1)) break;
                                ++c
                            } k = c + 2;
                        var d = a.charCodeAt(c + 1);
                        return 13 === d ? (e = !0, 10 === a.charCodeAt(c + 2) && ++k) : 10 === d && (e = !0), a.slice(b + 1, c).replace(/""/g, '"')
                    }
                    for (; j > k;) {
                        var d = a.charCodeAt(k++),
                            h = 1;
                        if (10 === d) e = !0;
                        else if (13 === d) e = !0, 10 === a.charCodeAt(k) && (++k, ++h);
                        else if (d !== i) continue;
                        return a.slice(b, k - h)
                    }
                    return a.slice(b)
                }
                for (var d, e, f = {}, g = {}, h = [], j = a.length, k = 0, l = 0;
                    (d = c()) !== g;) {
                    for (var m = []; d !== f && d !== g;) m.push(d), d = c();
                    b && null == (m = b(m, l++)) || h.push(m)
                }
                return h
            }, c.format = function (b) {
                if (Array.isArray(b[0])) return c.formatRows(b);
                var d = new r,
                    e = [];
                return b.forEach(function (a) {
                    for (var b in a) d.has(b) || e.push(d.add(b))
                }), [e.map(g).join(a)].concat(b.map(function (b) {
                    return e.map(function (a) {
                        return g(b[a])
                    }).join(a)
                })).join("\n")
            }, c.formatRows = function (a) {
                return a.map(f).join("\n")
            }, c
        }, hg.csv = hg.dsv(",", "text/csv"), hg.tsv = hg.dsv("\t", "text/tab-separated-values");
        var bh, ch, dh, eh, fh = this[u(this, "requestAnimationFrame")] || function (a) {
            setTimeout(a, 17)
        };
        hg.timer = function () {
            Fa.apply(this, arguments)
        }, hg.timer.flush = function () {
            Ha(), Ia()
        }, hg.round = function (a, b) {
            return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
        };
        var gh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ka);
        hg.formatPrefix = function (a, b) {
            var c = 0;
            return (a = +a) && (0 > a && (a *= -1), b && (a = hg.round(a, Ja(a, b))), c = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), c = Math.max(-24, Math.min(24, 3 * Math.floor((c - 1) / 3)))), gh[8 + c / 3]
        };
        var hh = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            ih = hg.map({
                b: function (a) {
                    return a.toString(2)
                },
                c: function (a) {
                    return String.fromCharCode(a)
                },
                o: function (a) {
                    return a.toString(8)
                },
                x: function (a) {
                    return a.toString(16)
                },
                X: function (a) {
                    return a.toString(16).toUpperCase()
                },
                g: function (a, b) {
                    return a.toPrecision(b)
                },
                e: function (a, b) {
                    return a.toExponential(b)
                },
                f: function (a, b) {
                    return a.toFixed(b)
                },
                r: function (a, b) {
                    return (a = hg.round(a, Ja(a, b))).toFixed(Math.max(0, Math.min(20, Ja(a * (1 + 1e-15), b))))
                }
            }),
            jh = hg.time = {},
            kh = Date;
        Na.prototype = {
            getDate: function () {
                return this._.getUTCDate()
            },
            getDay: function () {
                return this._.getUTCDay()
            },
            getFullYear: function () {
                return this._.getUTCFullYear()
            },
            getHours: function () {
                return this._.getUTCHours()
            },
            getMilliseconds: function () {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function () {
                return this._.getUTCMinutes()
            },
            getMonth: function () {
                return this._.getUTCMonth()
            },
            getSeconds: function () {
                return this._.getUTCSeconds()
            },
            getTime: function () {
                return this._.getTime()
            },
            getTimezoneOffset: function () {
                return 0
            },
            valueOf: function () {
                return this._.valueOf()
            },
            setDate: function () {
                lh.setUTCDate.apply(this._, arguments)
            },
            setDay: function () {
                lh.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function () {
                lh.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function () {
                lh.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function () {
                lh.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function () {
                lh.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function () {
                lh.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function () {
                lh.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function () {
                lh.setTime.apply(this._, arguments)
            }
        };
        var lh = Date.prototype;
        jh.year = Oa(function (a) {
            return a = jh.day(a), a.setMonth(0, 1), a
        }, function (a, b) {
            a.setFullYear(a.getFullYear() + b)
        }, function (a) {
            return a.getFullYear()
        }), jh.years = jh.year.range, jh.years.utc = jh.year.utc.range, jh.day = Oa(function (a) {
            var b = new kh(2e3, 0);
            return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
        }, function (a, b) {
            a.setDate(a.getDate() + b)
        }, function (a) {
            return a.getDate() - 1
        }), jh.days = jh.day.range, jh.days.utc = jh.day.utc.range, jh.dayOfYear = function (a) {
            var b = jh.year(a);
            return Math.floor((a - b - 6e4 * (a.getTimezoneOffset() - b.getTimezoneOffset())) / 864e5)
        }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (a, b) {
            b = 7 - b;
            var c = jh[a] = Oa(function (a) {
                return (a = jh.day(a)).setDate(a.getDate() - (a.getDay() + b) % 7), a
            }, function (a, b) {
                a.setDate(a.getDate() + 7 * Math.floor(b))
            }, function (a) {
                var c = jh.year(a).getDay();
                return Math.floor((jh.dayOfYear(a) + (c + b) % 7) / 7) - (c !== b)
            });
            jh[a + "s"] = c.range, jh[a + "s"].utc = c.utc.range, jh[a + "OfYear"] = function (a) {
                var c = jh.year(a).getDay();
                return Math.floor((jh.dayOfYear(a) + (c + b) % 7) / 7)
            }
        }), jh.week = jh.sunday, jh.weeks = jh.sunday.range, jh.weeks.utc = jh.sunday.utc.range, jh.weekOfYear = jh.sundayOfYear;
        var mh = {
            "-": "",
            _: " ",
            0: "0"
        },
            nh = /^\s*\d+/,
            oh = /^%/;
        hg.locale = function (a) {
            return {
                numberFormat: La(a),
                timeFormat: Qa(a)
            }
        };
        var ph = hg.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        hg.format = ph.numberFormat, hg.geo = {}, jb.prototype = {
            s: 0,
            t: 0,
            add: function (a) {
                kb(a, this.t, qh), kb(qh.s, this.s, this), this.s ? this.t += qh.t : this.s = qh.t
            },
            reset: function () {
                this.s = this.t = 0
            },
            valueOf: function () {
                return this.s
            }
        };
        var qh = new jb;
        hg.geo.stream = function (a, b) {
            a && rh.hasOwnProperty(a.type) ? rh[a.type](a, b) : lb(a, b)
        };
        var rh = {
            Feature: function (a, b) {
                lb(a.geometry, b)
            },
            FeatureCollection: function (a, b) {
                for (var c = a.features, d = -1, e = c.length; ++d < e;) lb(c[d].geometry, b)
            }
        },
            sh = {
                Sphere: function (a, b) {
                    b.sphere()
                },
                Point: function (a, b) {
                    a = a.coordinates, b.point(a[0], a[1], a[2])
                },
                MultiPoint: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) a = c[d], b.point(a[0], a[1], a[2])
                },
                LineString: function (a, b) {
                    mb(a.coordinates, b, 0)
                },
                MultiLineString: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) mb(c[d], b, 0)
                },
                Polygon: function (a, b) {
                    nb(a.coordinates, b)
                },
                MultiPolygon: function (a, b) {
                    for (var c = a.coordinates, d = -1, e = c.length; ++d < e;) nb(c[d], b)
                },
                GeometryCollection: function (a, b) {
                    for (var c = a.geometries, d = -1, e = c.length; ++d < e;) lb(c[d], b)
                }
            };
        hg.geo.area = function (a) {
            return th = 0, hg.geo.stream(a, vh), th
        };
        var th, uh = new jb,
            vh = {
                sphere: function () {
                    th += 4 * Kg
                },
                point: v,
                lineStart: v,
                lineEnd: v,
                polygonStart: function () {
                    uh.reset(), vh.lineStart = ob
                },
                polygonEnd: function () {
                    var a = 2 * uh;
                    th += 0 > a ? 4 * Kg + a : a, vh.lineStart = vh.lineEnd = vh.point = v
                }
            };
        hg.geo.bounds = function () {
            function a(a, b) {
                t.push(u = [k = a, m = a]), l > b && (l = b), b > n && (n = b)
            }

            function b(b, c) {
                var d = pb([b * Og, c * Og]);
                if (r) {
                    var e = rb(r, d),
                        f = [e[1], -e[0], 0],
                        g = rb(f, e);
                    ub(g), g = vb(g);
                    var i = b - o,
                        j = i > 0 ? 1 : -1,
                        p = g[0] * Pg * j,
                        q = rg(i) > 180;
                    if (q ^ (p > j * o && j * b > p)) {
                        var s = g[1] * Pg;
                        s > n && (n = s)
                    } else if (p = (p + 360) % 360 - 180, q ^ (p > j * o && j * b > p)) {
                        var s = -g[1] * Pg;
                        l > s && (l = s)
                    } else l > c && (l = c), c > n && (n = c);
                    q ? o > b ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b) : m >= k ? (k > b && (k = b), b > m && (m = b)) : b > o ? h(k, b) > h(k, m) && (m = b) : h(b, m) > h(k, m) && (k = b)
                } else a(b, c);
                r = d, o = b
            }

            function c() {
                v.point = b
            }

            function d() {
                u[0] = k, u[1] = m, v.point = a, r = null
            }

            function e(a, c) {
                if (r) {
                    var d = a - o;
                    s += rg(d) > 180 ? d + (d > 0 ? 360 : -360) : d
                } else p = a, q = c;
                vh.point(a, c), b(a, c)
            }

            function f() {
                vh.lineStart()
            }

            function g() {
                e(p, q), vh.lineEnd(), rg(s) > Ig && (k = -(m = 180)), u[0] = k, u[1] = m, r = null
            }

            function h(a, b) {
                return (b -= a) < 0 ? b + 360 : b
            }

            function i(a, b) {
                return a[0] - b[0]
            }

            function j(a, b) {
                return b[0] <= b[1] ? b[0] <= a && a <= b[1] : a < b[0] || b[1] < a
            }
            var k, l, m, n, o, p, q, r, s, t, u, v = {
                point: a,
                lineStart: c,
                lineEnd: d,
                polygonStart: function () {
                    v.point = e, v.lineStart = f, v.lineEnd = g, s = 0, vh.polygonStart()
                },
                polygonEnd: function () {
                    vh.polygonEnd(), v.point = a, v.lineStart = c, v.lineEnd = d, 0 > uh ? (k = -(m = 180), l = -(n = 90)) : s > Ig ? n = 90 : -Ig > s && (l = -90), u[0] = k, u[1] = m
                }
            };
            return function (a) {
                n = m = -(k = l = 1 / 0), t = [], hg.geo.stream(a, v);
                var b = t.length;
                if (b) {
                    t.sort(i);
                    for (var c, d = 1, e = t[0], f = [e]; b > d; ++d) c = t[d], j(c[0], e) || j(c[1], e) ? (h(e[0], c[1]) > h(e[0], e[1]) && (e[1] = c[1]), h(c[0], e[1]) > h(e[0], e[1]) && (e[0] = c[0])) : f.push(e = c);
                    for (var g, c, o = -1 / 0, b = f.length - 1, d = 0, e = f[b]; b >= d; e = c, ++d) c = f[d], (g = h(e[1], c[0])) > o && (o = g, k = c[0], m = e[1])
                }
                return t = u = null, k === 1 / 0 || l === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [k, l],
                    [m, n]
                ]
            }
        }(), hg.geo.centroid = function (a) {
            wh = xh = yh = zh = Ah = Bh = Ch = Dh = Eh = Fh = Gh = 0, hg.geo.stream(a, Hh);
            var b = Eh,
                c = Fh,
                d = Gh,
                e = b * b + c * c + d * d;
            return Jg > e && (b = Bh, c = Ch, d = Dh, Ig > xh && (b = yh, c = zh, d = Ah), e = b * b + c * c + d * d, Jg > e) ? [NaN, NaN] : [Math.atan2(c, b) * Pg, ba(d / Math.sqrt(e)) * Pg]
        };
        var wh, xh, yh, zh, Ah, Bh, Ch, Dh, Eh, Fh, Gh, Hh = {
            sphere: v,
            point: xb,
            lineStart: zb,
            lineEnd: Ab,
            polygonStart: function () {
                Hh.lineStart = Bb
            },
            polygonEnd: function () {
                Hh.lineStart = zb
            }
        },
            Ih = Hb(Db, Lb, Nb, [-Kg, -Kg / 2]),
            Jh = 1e9;
        hg.geo.clipExtent = function () {
            var a, b, c, d, e, f, g = {
                stream: function (a) {
                    return e && (e.valid = !1), e = f(a), e.valid = !0, e
                },
                extent: function (h) {
                    return arguments.length ? (f = Rb(a = +h[0][0], b = +h[0][1], c = +h[1][0], d = +h[1][1]), e && (e.valid = !1, e = null), g) : [
                        [a, b],
                        [c, d]
                    ]
                }
            };
            return g.extent([
                [0, 0],
                [960, 500]
            ])
        }, (hg.geo.conicEqualArea = function () {
            return Sb(Tb)
        }).raw = Tb, hg.geo.albers = function () {
            return hg.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }, hg.geo.albersUsa = function () {
            function a(a) {
                var f = a[0],
                    g = a[1];
                return b = null, c(f, g), b || (d(f, g), b) || e(f, g), b
            }
            var b, c, d, e, f = hg.geo.albers(),
                g = hg.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                h = hg.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                i = {
                    point: function (a, c) {
                        b = [a, c]
                    }
                };
            return a.invert = function (a) {
                var b = f.scale(),
                    c = f.translate(),
                    d = (a[0] - c[0]) / b,
                    e = (a[1] - c[1]) / b;
                return (e >= .12 && .234 > e && d >= -.425 && -.214 > d ? g : e >= .166 && .234 > e && d >= -.214 && -.115 > d ? h : f).invert(a)
            }, a.stream = function (a) {
                var b = f.stream(a),
                    c = g.stream(a),
                    d = h.stream(a);
                return {
                    point: function (a, e) {
                        b.point(a, e), c.point(a, e), d.point(a, e)
                    },
                    sphere: function () {
                        b.sphere(), c.sphere(), d.sphere()
                    },
                    lineStart: function () {
                        b.lineStart(), c.lineStart(), d.lineStart()
                    },
                    lineEnd: function () {
                        b.lineEnd(), c.lineEnd(), d.lineEnd()
                    },
                    polygonStart: function () {
                        b.polygonStart(), c.polygonStart(), d.polygonStart()
                    },
                    polygonEnd: function () {
                        b.polygonEnd(), c.polygonEnd(), d.polygonEnd()
                    }
                }
            }, a.precision = function (b) {
                return arguments.length ? (f.precision(b), g.precision(b), h.precision(b), a) : f.precision()
            }, a.scale = function (b) {
                return arguments.length ? (f.scale(b), g.scale(.35 * b), h.scale(b), a.translate(f.translate())) : f.scale()
            }, a.translate = function (b) {
                if (!arguments.length) return f.translate();
                var j = f.scale(),
                    k = +b[0],
                    l = +b[1];
                return c = f.translate(b).clipExtent([
                    [k - .455 * j, l - .238 * j],
                    [k + .455 * j, l + .238 * j]
                ]).stream(i).point, d = g.translate([k - .307 * j, l + .201 * j]).clipExtent([
                    [k - .425 * j + Ig, l + .12 * j + Ig],
                    [k - .214 * j - Ig, l + .234 * j - Ig]
                ]).stream(i).point, e = h.translate([k - .205 * j, l + .212 * j]).clipExtent([
                    [k - .214 * j + Ig, l + .166 * j + Ig],
                    [k - .115 * j - Ig, l + .234 * j - Ig]
                ]).stream(i).point, a
            }, a.scale(1070)
        };
        var Kh, Lh, Mh, Nh, Oh, Ph, Qh = {
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function () {
                Lh = 0, Qh.lineStart = Ub
            },
            polygonEnd: function () {
                Qh.lineStart = Qh.lineEnd = Qh.point = v, Kh += rg(Lh / 2)
            }
        },
            Rh = {
                point: Vb,
                lineStart: v,
                lineEnd: v,
                polygonStart: v,
                polygonEnd: v
            },
            Sh = {
                point: Yb,
                lineStart: Zb,
                lineEnd: $b,
                polygonStart: function () {
                    Sh.lineStart = _b
                },
                polygonEnd: function () {
                    Sh.point = Yb, Sh.lineStart = Zb, Sh.lineEnd = $b
                }
            };
        hg.geo.path = function () {
            function a(a) {
                return a && ("function" == typeof h && f.pointRadius(+h.apply(this, arguments)), g && g.valid || (g = e(f)), hg.geo.stream(a, g)), f.result()
            }

            function b() {
                return g = null, a
            }
            var c, d, e, f, g, h = 4.5;
            return a.area = function (a) {
                return Kh = 0, hg.geo.stream(a, e(Qh)), Kh
            }, a.centroid = function (a) {
                return yh = zh = Ah = Bh = Ch = Dh = Eh = Fh = Gh = 0, hg.geo.stream(a, e(Sh)), Gh ? [Eh / Gh, Fh / Gh] : Dh ? [Bh / Dh, Ch / Dh] : Ah ? [yh / Ah, zh / Ah] : [NaN, NaN]
            }, a.bounds = function (a) {
                return Oh = Ph = -(Mh = Nh = 1 / 0), hg.geo.stream(a, e(Rh)), [
                    [Mh, Nh],
                    [Oh, Ph]
                ]
            }, a.projection = function (a) {
                return arguments.length ? (e = (c = a) ? a.stream || cc(a) : s, b()) : c
            }, a.context = function (a) {
                return arguments.length ? (f = null == (d = a) ? new Wb : new ac(a), "function" != typeof h && f.pointRadius(h), b()) : d
            }, a.pointRadius = function (b) {
                return arguments.length ? (h = "function" == typeof b ? b : (f.pointRadius(+b), +b), a) : h
            }, a.projection(hg.geo.albersUsa()).context(null)
        }, hg.geo.transform = function (a) {
            return {
                stream: function (b) {
                    var c = new dc(b);
                    for (var d in a) c[d] = a[d];
                    return c
                }
            }
        }, dc.prototype = {
            point: function (a, b) {
                this.stream.point(a, b)
            },
            sphere: function () {
                this.stream.sphere()
            },
            lineStart: function () {
                this.stream.lineStart()
            },
            lineEnd: function () {
                this.stream.lineEnd()
            },
            polygonStart: function () {
                this.stream.polygonStart()
            },
            polygonEnd: function () {
                this.stream.polygonEnd()
            }
        }, hg.geo.projection = fc, hg.geo.projectionMutator = gc, (hg.geo.equirectangular = function () {
            return fc(ic)
        }).raw = ic.invert = ic, hg.geo.rotation = function (a) {
            function b(b) {
                return b = a(b[0] * Og, b[1] * Og), b[0] *= Pg, b[1] *= Pg, b
            }
            return a = kc(a[0] % 360 * Og, a[1] * Og, a.length > 2 ? a[2] * Og : 0), b.invert = function (b) {
                return b = a.invert(b[0] * Og, b[1] * Og), b[0] *= Pg, b[1] *= Pg, b
            }, b
        }, jc.invert = ic, hg.geo.circle = function () {
            function a() {
                var a = "function" == typeof d ? d.apply(this, arguments) : d,
                    b = kc(-a[0] * Og, -a[1] * Og, 0).invert,
                    e = [];
                return c(null, null, 1, {
                    point: function (a, c) {
                        e.push(a = b(a, c)), a[0] *= Pg, a[1] *= Pg
                    }
                }), {
                    type: "Polygon",
                    coordinates: [e]
                }
            }
            var b, c, d = [0, 0],
                e = 6;
            return a.origin = function (b) {
                return arguments.length ? (d = b, a) : d
            }, a.angle = function (d) {
                return arguments.length ? (c = oc((b = +d) * Og, e * Og), a) : b
            }, a.precision = function (d) {
                return arguments.length ? (c = oc(b * Og, (e = +d) * Og), a) : e
            }, a.angle(90)
        }, hg.geo.distance = function (a, b) {
            var c, d = (b[0] - a[0]) * Og,
                e = a[1] * Og,
                f = b[1] * Og,
                g = Math.sin(d),
                h = Math.cos(d),
                i = Math.sin(e),
                j = Math.cos(e),
                k = Math.sin(f),
                l = Math.cos(f);
            return Math.atan2(Math.sqrt((c = l * g) * c + (c = j * k - i * l * h) * c), i * k + j * l * h)
        }, hg.geo.graticule = function () {
            function a() {
                return {
                    type: "MultiLineString",
                    coordinates: b()
                }
            }

            function b() {
                return hg.range(Math.ceil(f / q) * q, e, q).map(m).concat(hg.range(Math.ceil(j / r) * r, i, r).map(n)).concat(hg.range(Math.ceil(d / o) * o, c, o).filter(function (a) {
                    return rg(a % q) > Ig
                }).map(k)).concat(hg.range(Math.ceil(h / p) * p, g, p).filter(function (a) {
                    return rg(a % r) > Ig
                }).map(l))
            }
            var c, d, e, f, g, h, i, j, k, l, m, n, o = 10,
                p = o,
                q = 90,
                r = 360,
                s = 2.5;
            return a.lines = function () {
                return b().map(function (a) {
                    return {
                        type: "LineString",
                        coordinates: a
                    }
                })
            }, a.outline = function () {
                return {
                    type: "Polygon",
                    coordinates: [m(f).concat(n(i).slice(1), m(e).reverse().slice(1), n(j).reverse().slice(1))]
                }
            }, a.extent = function (b) {
                return arguments.length ? a.majorExtent(b).minorExtent(b) : a.minorExtent()
            }, a.majorExtent = function (b) {
                return arguments.length ? (f = +b[0][0], e = +b[1][0], j = +b[0][1], i = +b[1][1], f > e && (b = f, f = e, e = b), j > i && (b = j, j = i, i = b), a.precision(s)) : [
                    [f, j],
                    [e, i]
                ]
            }, a.minorExtent = function (b) {
                return arguments.length ? (d = +b[0][0], c = +b[1][0], h = +b[0][1], g = +b[1][1], d > c && (b = d, d = c, c = b), h > g && (b = h, h = g, g = b), a.precision(s)) : [
                    [d, h],
                    [c, g]
                ]
            }, a.step = function (b) {
                return arguments.length ? a.majorStep(b).minorStep(b) : a.minorStep()
            }, a.majorStep = function (b) {
                return arguments.length ? (q = +b[0], r = +b[1], a) : [q, r]
            }, a.minorStep = function (b) {
                return arguments.length ? (o = +b[0], p = +b[1], a) : [o, p]
            }, a.precision = function (b) {
                return arguments.length ? (s = +b, k = qc(h, g, 90), l = rc(d, c, s), m = qc(j, i, 90), n = rc(f, e, s), a) : s
            }, a.majorExtent([
                [-180, -90 + Ig],
                [180, 90 - Ig]
            ]).minorExtent([
                [-180, -80 - Ig],
                [180, 80 + Ig]
            ])
        }, hg.geo.greatArc = function () {
            function a() {
                return {
                    type: "LineString",
                    coordinates: [b || d.apply(this, arguments), c || e.apply(this, arguments)]
                }
            }
            var b, c, d = sc,
                e = tc;
            return a.distance = function () {
                return hg.geo.distance(b || d.apply(this, arguments), c || e.apply(this, arguments))
            }, a.source = function (c) {
                return arguments.length ? (d = c, b = "function" == typeof c ? null : c, a) : d
            }, a.target = function (b) {
                return arguments.length ? (e = b, c = "function" == typeof b ? null : b, a) : e
            }, a.precision = function () {
                return arguments.length ? a : 0
            }, a
        }, hg.geo.interpolate = function (a, b) {
            return uc(a[0] * Og, a[1] * Og, b[0] * Og, b[1] * Og)
        }, hg.geo.length = function (a) {
            return Th = 0, hg.geo.stream(a, Uh), Th
        };
        var Th, Uh = {
            sphere: v,
            point: v,
            lineStart: vc,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        },
            Vh = wc(function (a) {
                return Math.sqrt(2 / (1 + a))
            }, function (a) {
                return 2 * Math.asin(a / 2)
            });
        (hg.geo.azimuthalEqualArea = function () {
            return fc(Vh)
        }).raw = Vh;
        var Wh = wc(function (a) {
            var b = Math.acos(a);
            return b && b / Math.sin(b)
        }, s);
        (hg.geo.azimuthalEquidistant = function () {
            return fc(Wh)
        }).raw = Wh, (hg.geo.conicConformal = function () {
            return Sb(xc)
        }).raw = xc, (hg.geo.conicEquidistant = function () {
            return Sb(yc)
        }).raw = yc;
        var Xh = wc(function (a) {
            return 1 / a
        }, Math.atan);
        (hg.geo.gnomonic = function () {
            return fc(Xh)
        }).raw = Xh, zc.invert = function (a, b) {
            return [a, 2 * Math.atan(Math.exp(b)) - Ng]
        }, (hg.geo.mercator = function () {
            return Ac(zc)
        }).raw = zc;
        var Yh = wc(function () {
            return 1
        }, Math.asin);
        (hg.geo.orthographic = function () {
            return fc(Yh)
        }).raw = Yh;
        var Zh = wc(function (a) {
            return 1 / (1 + a)
        }, function (a) {
            return 2 * Math.atan(a)
        });
        (hg.geo.stereographic = function () {
            return fc(Zh)
        }).raw = Zh, Bc.invert = function (a, b) {
            return [-b, 2 * Math.atan(Math.exp(a)) - Ng]
        }, (hg.geo.transverseMercator = function () {
            var a = Ac(Bc),
                b = a.center,
                c = a.rotate;
            return a.center = function (a) {
                return a ? b([-a[1], a[0]]) : (a = b(), [a[1], -a[0]])
            }, a.rotate = function (a) {
                return a ? c([a[0], a[1], a.length > 2 ? a[2] + 90 : 90]) : (a = c(), [a[0], a[1], a[2] - 90])
            }, c([0, 0, 90])
        }).raw = Bc, hg.geom = {}, hg.geom.hull = function (a) {
            function b(a) {
                if (a.length < 3) return [];
                var b, e = Aa(c),
                    f = Aa(d),
                    g = a.length,
                    h = [],
                    i = [];
                for (b = 0; g > b; b++) h.push([+e.call(this, a[b], b), +f.call(this, a[b], b), b]);
                for (h.sort(Fc), b = 0; g > b; b++) i.push([h[b][0], -h[b][1]]);
                var j = Ec(h),
                    k = Ec(i),
                    l = k[0] === j[0],
                    m = k[k.length - 1] === j[j.length - 1],
                    n = [];
                for (b = j.length - 1; b >= 0; --b) n.push(a[h[j[b]][2]]);
                for (b = +l; b < k.length - m; ++b) n.push(a[h[k[b]][2]]);
                return n
            }
            var c = Cc,
                d = Dc;
            return arguments.length ? b(a) : (b.x = function (a) {
                return arguments.length ? (c = a, b) : c
            }, b.y = function (a) {
                return arguments.length ? (d = a, b) : d
            }, b)
        }, hg.geom.polygon = function (a) {
            return wg(a, $h), a
        };
        var $h = hg.geom.polygon.prototype = [];
        $h.area = function () {
            for (var a, b = -1, c = this.length, d = this[c - 1], e = 0; ++b < c;) a = d, d = this[b], e += a[1] * d[0] - a[0] * d[1];
            return .5 * e
        }, $h.centroid = function (a) {
            var b, c, d = -1,
                e = this.length,
                f = 0,
                g = 0,
                h = this[e - 1];
            for (arguments.length || (a = -1 / (6 * this.area())); ++d < e;) b = h, h = this[d], c = b[0] * h[1] - h[0] * b[1], f += (b[0] + h[0]) * c, g += (b[1] + h[1]) * c;
            return [f * a, g * a]
        }, $h.clip = function (a) {
            for (var b, c, d, e, f, g, h = Ic(a), i = -1, j = this.length - Ic(this), k = this[j - 1]; ++i < j;) {
                for (b = a.slice(), a.length = 0, e = this[i], f = b[(d = b.length - h) - 1], c = -1; ++c < d;) g = b[c], Gc(g, k, e) ? (Gc(f, k, e) || a.push(Hc(f, g, k, e)), a.push(g)) : Gc(f, k, e) && a.push(Hc(f, g, k, e)), f = g;
                h && a.push(a[0]), k = e
            }
            return a
        };
        var _h, ai, bi, ci, di, ei = [],
            fi = [];
        Qc.prototype.prepare = function () {
            for (var a, b = this.edges, c = b.length; c--;) a = b[c].edge, a.b && a.a || b.splice(c, 1);
            return b.sort(Sc), b.length
        }, ad.prototype = {
            start: function () {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function () {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        }, bd.prototype = {
            insert: function (a, b) {
                var c, d, e;
                if (a) {
                    if (b.P = a, b.N = a.N, a.N && (a.N.P = b), a.N = b, a.R) {
                        for (a = a.R; a.L;) a = a.L;
                        a.L = b
                    } else a.R = b;
                    c = a
                } else this._ ? (a = fd(this._), b.P = null, b.N = a, a.P = a.L = b, c = a) : (b.P = b.N = null, this._ = b, c = null);
                for (b.L = b.R = null, b.U = c, b.C = !0, a = b; c && c.C;) d = c.U, c === d.L ? (e = d.R, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.R && (dd(this, c), a = c, c = a.U), c.C = !1, d.C = !0, ed(this, d))) : (e = d.L, e && e.C ? (c.C = e.C = !1, d.C = !0, a = d) : (a === c.L && (ed(this, c), a = c, c = a.U), c.C = !1, d.C = !0, dd(this, d))), c = a.U;
                this._.C = !1
            },
            remove: function (a) {
                a.N && (a.N.P = a.P), a.P && (a.P.N = a.N), a.N = a.P = null;
                var b, c, d, e = a.U,
                    f = a.L,
                    g = a.R;
                if (c = f ? g ? fd(g) : f : g, e ? e.L === a ? e.L = c : e.R = c : this._ = c, f && g ? (d = c.C, c.C = a.C, c.L = f, f.U = c, c !== g ? (e = c.U, c.U = a.U, a = c.R, e.L = a, c.R = g, g.U = c) : (c.U = e, e = c, a = c.R)) : (d = a.C, a = c), a && (a.U = e), !d) {
                    if (a && a.C) return void (a.C = !1);
                    do {
                        if (a === this._) break;
                        if (a === e.L) {
                            if (b = e.R, b.C && (b.C = !1, e.C = !0, dd(this, e), b = e.R), b.L && b.L.C || b.R && b.R.C) {
                                b.R && b.R.C || (b.L.C = !1, b.C = !0, ed(this, b), b = e.R), b.C = e.C, e.C = b.R.C = !1, dd(this, e), a = this._;
                                break
                            }
                        } else if (b = e.L, b.C && (b.C = !1, e.C = !0, ed(this, e), b = e.L), b.L && b.L.C || b.R && b.R.C) {
                            b.L && b.L.C || (b.R.C = !1, b.C = !0, dd(this, b), b = e.L), b.C = e.C, e.C = b.L.C = !1, ed(this, e), a = this._;
                            break
                        }
                        b.C = !0, a = e, e = e.U
                    } while (!a.C);
                    a && (a.C = !1)
                }
            }
        }, hg.geom.voronoi = function (a) {
            function b(a) {
                var b = new Array(a.length),
                    d = h[0][0],
                    e = h[0][1],
                    f = h[1][0],
                    g = h[1][1];
                return gd(c(a), h).cells.forEach(function (c, h) {
                    var i = c.edges,
                        j = c.site;
                    (b[h] = i.length ? i.map(function (a) {
                        var b = a.start();
                        return [b.x, b.y]
                    }) : j.x >= d && j.x <= f && j.y >= e && j.y <= g ? [
                        [d, g],
                        [f, g],
                        [f, e],
                        [d, e]
                    ] : []).point = a[h]
                }), b
            }

            function c(a) {
                return a.map(function (a, b) {
                    return {
                        x: Math.round(f(a, b) / Ig) * Ig,
                        y: Math.round(g(a, b) / Ig) * Ig,
                        i: b
                    }
                })
            }
            var d = Cc,
                e = Dc,
                f = d,
                g = e,
                h = gi;
            return a ? b(a) : (b.links = function (a) {
                return gd(c(a)).edges.filter(function (a) {
                    return a.l && a.r
                }).map(function (b) {
                    return {
                        source: a[b.l.i],
                        target: a[b.r.i]
                    }
                })
            }, b.triangles = function (a) {
                var b = [];
                return gd(c(a)).cells.forEach(function (c, d) {
                    for (var e, f = c.site, g = c.edges.sort(Sc), h = -1, i = g.length, j = g[i - 1].edge, k = j.l === f ? j.r : j.l; ++h < i;) j, e = k, j = g[h].edge, k = j.l === f ? j.r : j.l, d < e.i && d < k.i && id(f, e, k) < 0 && b.push([a[d], a[e.i], a[k.i]])
                }), b
            }, b.x = function (a) {
                return arguments.length ? (f = Aa(d = a), b) : d
            }, b.y = function (a) {
                return arguments.length ? (g = Aa(e = a), b) : e
            }, b.clipExtent = function (a) {
                return arguments.length ? (h = null == a ? gi : a, b) : h === gi ? null : h
            }, b.size = function (a) {
                return arguments.length ? b.clipExtent(a && [
                    [0, 0], a
                ]) : h === gi ? null : h && h[1]
            }, b)
        };
        var gi = [
            [-1e6, -1e6],
            [1e6, 1e6]
        ];
        hg.geom.delaunay = function (a) {
            return hg.geom.voronoi().triangles(a)
        }, hg.geom.quadtree = function (a, b, c, d, e) {
            function f(a) {
                function f(a, b, c, d, e, f, g, h) {
                    if (!isNaN(c) && !isNaN(d))
                        if (a.leaf) {
                            var i = a.x,
                                k = a.y;
                            if (null != i)
                                if (rg(i - c) + rg(k - d) < .01) j(a, b, c, d, e, f, g, h);
                                else {
                                    var l = a.point;
                                    a.x = a.y = a.point = null, j(a, l, i, k, e, f, g, h), j(a, b, c, d, e, f, g, h)
                                }
                            else a.x = c, a.y = d, a.point = b
                        } else j(a, b, c, d, e, f, g, h)
                }

                function j(a, b, c, d, e, g, h, i) {
                    var j = .5 * (e + h),
                        k = .5 * (g + i),
                        l = c >= j,
                        m = d >= k,
                        n = m << 1 | l;
                    a.leaf = !1, a = a.nodes[n] || (a.nodes[n] = ld()), l ? e = j : h = j, m ? g = k : i = k, f(a, b, c, d, e, g, h, i)
                }
                var k, l, m, n, o, p, q, r, s, t = Aa(h),
                    u = Aa(i);
                if (null != b) p = b, q = c, r = d, s = e;
                else if (r = s = -(p = q = 1 / 0), l = [], m = [], o = a.length, g)
                    for (n = 0; o > n; ++n) k = a[n], k.x < p && (p = k.x), k.y < q && (q = k.y), k.x > r && (r = k.x), k.y > s && (s = k.y), l.push(k.x), m.push(k.y);
                else
                    for (n = 0; o > n; ++n) {
                        var v = +t(k = a[n], n),
                            w = +u(k, n);
                        p > v && (p = v), q > w && (q = w), v > r && (r = v), w > s && (s = w), l.push(v), m.push(w)
                    }
                var x = r - p,
                    y = s - q;
                x > y ? s = q + x : r = p + y;
                var z = ld();
                if (z.add = function (a) {
                    f(z, a, +t(a, ++n), +u(a, n), p, q, r, s)
                }, z.visit = function (a) {
                    md(a, z, p, q, r, s)
                }, z.find = function (a) {
                    return nd(z, a[0], a[1], p, q, r, s)
                }, n = -1, null == b) {
                    for (; ++n < o;) f(z, a[n], l[n], m[n], p, q, r, s);
                    --n
                } else a.forEach(z.add);
                return l = m = a = k = null, z
            }
            var g, h = Cc,
                i = Dc;
            return (g = arguments.length) ? (h = jd, i = kd, 3 === g && (e = c, d = b, c = b = 0), f(a)) : (f.x = function (a) {
                return arguments.length ? (h = a, f) : h
            }, f.y = function (a) {
                return arguments.length ? (i = a, f) : i
            }, f.extent = function (a) {
                return arguments.length ? (null == a ? b = c = d = e = null : (b = +a[0][0], c = +a[0][1], d = +a[1][0], e = +a[1][1]), f) : null == b ? null : [
                    [b, c],
                    [d, e]
                ]
            }, f.size = function (a) {
                return arguments.length ? (null == a ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), f) : null == b ? null : [d - b, e - c]
            }, f)
        }, hg.interpolateRgb = od, hg.interpolateObject = pd, hg.interpolateNumber = qd, hg.interpolateString = rd;
        var hi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            ii = new RegExp(hi.source, "g");
        hg.interpolate = sd, hg.interpolators = [function (a, b) {
            var c = typeof b;
            return ("string" === c ? ah.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? od : rd : b instanceof ga ? od : Array.isArray(b) ? td : "object" === c && isNaN(b) ? pd : qd)(a, b)
        }], hg.interpolateArray = td;
        var ji = function () {
            return s
        },
            ki = hg.map({
                linear: ji,
                poly: Ad,
                quad: function () {
                    return xd
                },
                cubic: function () {
                    return yd
                },
                sin: function () {
                    return Bd
                },
                exp: function () {
                    return Cd
                },
                circle: function () {
                    return Dd
                },
                elastic: Ed,
                back: Fd,
                bounce: function () {
                    return Gd
                }
            }),
            li = hg.map({
                in: s,
                out: vd,
                "in-out": wd,
                "out-in": function (a) {
                    return wd(vd(a))
                }
            });
        hg.ease = function (a) {
            var b = a.indexOf("-"),
                c = b >= 0 ? a.slice(0, b) : a,
                d = b >= 0 ? a.slice(b + 1) : "in";
            return c = ki.get(c) || ji, d = li.get(d) || s, ud(d(c.apply(null, ig.call(arguments, 1))))
        }, hg.interpolateHcl = Hd, hg.interpolateHsl = Id, hg.interpolateLab = Jd, hg.interpolateRound = Kd, hg.transform = function (a) {
            var b = kg.createElementNS(hg.ns.prefix.svg, "g");
            return (hg.transform = function (a) {
                if (null != a) {
                    b.setAttribute("transform", a);
                    var c = b.transform.baseVal.consolidate()
                }
                return new Ld(c ? c.matrix : mi)
            })(a)
        }, Ld.prototype.toString = function () {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        };
        var mi = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        hg.interpolateTransform = Ud, hg.layout = {}, hg.layout.bundle = function () {
            return function (a) {
                for (var b = [], c = -1, d = a.length; ++c < d;) b.push(Xd(a[c]));
                return b
            }
        }, hg.layout.chord = function () {
            function a() {
                var a, j, l, m, n, o = {},
                    p = [],
                    q = hg.range(f),
                    r = [];
                for (c = [], d = [], a = 0, m = -1; ++m < f;) {
                    for (j = 0, n = -1; ++n < f;) j += e[m][n];
                    p.push(j), r.push(hg.range(f)), a += j
                }
                for (g && q.sort(function (a, b) {
                    return g(p[a], p[b])
                }), h && r.forEach(function (a, b) {
                    a.sort(function (a, c) {
                        return h(e[b][a], e[b][c])
                    })
                }), a = (Lg - k * f) / a, j = 0, m = -1; ++m < f;) {
                    for (l = j, n = -1; ++n < f;) {
                        var s = q[m],
                            t = r[s][n],
                            u = e[s][t],
                            v = j,
                            w = j += u * a;
                        o[s + "-" + t] = {
                            index: s,
                            subindex: t,
                            startAngle: v,
                            endAngle: w,
                            value: u
                        }
                    }
                    d[s] = {
                        index: s,
                        startAngle: l,
                        endAngle: j,
                        value: p[s]
                    }, j += k
                }
                for (m = -1; ++m < f;)
                    for (n = m - 1; ++n < f;) {
                        var x = o[m + "-" + n],
                            y = o[n + "-" + m];
                        (x.value || y.value) && c.push(x.value < y.value ? {
                            source: y,
                            target: x
                        } : {
                            source: x,
                            target: y
                        })
                    }
                i && b()
            }

            function b() {
                c.sort(function (a, b) {
                    return i((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
                })
            }
            var c, d, e, f, g, h, i, j = {},
                k = 0;
            return j.matrix = function (a) {
                return arguments.length ? (f = (e = a) && e.length, c = d = null, j) : e
            }, j.padding = function (a) {
                return arguments.length ? (k = a, c = d = null, j) : k
            }, j.sortGroups = function (a) {
                return arguments.length ? (g = a, c = d = null, j) : g
            }, j.sortSubgroups = function (a) {
                return arguments.length ? (h = a, c = null, j) : h
            }, j.sortChords = function (a) {
                return arguments.length ? (i = a, c && b(), j) : i
            }, j.chords = function () {
                return c || a(), c
            }, j.groups = function () {
                return d || a(), d
            }, j
        }, hg.layout.force = function () {
            function a(a) {
                return function (b, c, d, e) {
                    if (b.point !== a) {
                        var f = b.cx - a.x,
                            g = b.cy - a.y,
                            h = e - c,
                            i = f * f + g * g;
                        if (i > h * h / r) {
                            if (p > i) {
                                var j = b.charge / i;
                                a.px -= f * j, a.py -= g * j
                            }
                            return !0
                        }
                        if (b.point && i && p > i) {
                            var j = b.pointCharge / i;
                            a.px -= f * j, a.py -= g * j
                        }
                    }
                    return !b.charge
                }
            }

            function b(a) {
                a.px = hg.event.x, a.py = hg.event.y, i.resume()
            }
            var c, d, e, f, g, h, i = {},
                j = hg.dispatch("start", "tick", "end"),
                k = [1, 1],
                l = .9,
                m = ni,
                n = oi,
                o = -30,
                p = pi,
                q = .1,
                r = .64,
                t = [],
                u = [];
            return i.tick = function () {
                if ((e *= .99) < .005) return c = null, j.end({
                    type: "end",
                    alpha: e = 0
                }), !0;
                var b, d, i, m, n, p, r, s, v, w = t.length,
                    x = u.length;
                for (d = 0; x > d; ++d) i = u[d], m = i.source, n = i.target, s = n.x - m.x, v = n.y - m.y, (p = s * s + v * v) && (p = e * g[d] * ((p = Math.sqrt(p)) - f[d]) / p, s *= p, v *= p, n.x -= s * (r = m.weight + n.weight ? m.weight / (m.weight + n.weight) : .5), n.y -= v * r, m.x += s * (r = 1 - r), m.y += v * r);
                if ((r = e * q) && (s = k[0] / 2, v = k[1] / 2, d = -1, r))
                    for (; ++d < w;) i = t[d], i.x += (s - i.x) * r, i.y += (v - i.y) * r;
                if (o)
                    for (ce(b = hg.geom.quadtree(t), e, h), d = -1; ++d < w;)(i = t[d]).fixed || b.visit(a(i));
                for (d = -1; ++d < w;) i = t[d], i.fixed ? (i.x = i.px, i.y = i.py) : (i.x -= (i.px - (i.px = i.x)) * l, i.y -= (i.py - (i.py = i.y)) * l);
                j.tick({
                    type: "tick",
                    alpha: e
                })
            }, i.nodes = function (a) {
                return arguments.length ? (t = a, i) : t
            }, i.links = function (a) {
                return arguments.length ? (u = a, i) : u
            }, i.size = function (a) {
                return arguments.length ? (k = a, i) : k
            }, i.linkDistance = function (a) {
                return arguments.length ? (m = "function" == typeof a ? a : +a, i) : m
            }, i.distance = i.linkDistance, i.linkStrength = function (a) {
                return arguments.length ? (n = "function" == typeof a ? a : +a, i) : n
            }, i.friction = function (a) {
                return arguments.length ? (l = +a, i) : l
            }, i.charge = function (a) {
                return arguments.length ? (o = "function" == typeof a ? a : +a, i) : o
            }, i.chargeDistance = function (a) {
                return arguments.length ? (p = a * a, i) : Math.sqrt(p)
            }, i.gravity = function (a) {
                return arguments.length ? (q = +a, i) : q
            }, i.theta = function (a) {
                return arguments.length ? (r = a * a, i) : Math.sqrt(r)
            }, i.alpha = function (a) {
                return arguments.length ? (a = +a, e ? a > 0 ? e = a : (c.c = null, c.t = NaN, c = null, j.end({
                    type: "end",
                    alpha: e = 0
                })) : a > 0 && (j.start({
                    type: "start",
                    alpha: e = a
                }), c = Fa(i.tick)), i) : e
            }, i.start = function () {
                function a(a, d) {
                    if (!c) {
                        for (c = new Array(e), i = 0; e > i; ++i) c[i] = [];
                        for (i = 0; j > i; ++i) {
                            var f = u[i];
                            c[f.source.index].push(f.target), c[f.target.index].push(f.source)
                        }
                    }
                    for (var g, h = c[b], i = -1, k = h.length; ++i < k;)
                        if (!isNaN(g = h[i][a])) return g;
                    return Math.random() * d
                }
                var b, c, d, e = t.length,
                    j = u.length,
                    l = k[0],
                    p = k[1];
                for (b = 0; e > b; ++b)(d = t[b]).index = b, d.weight = 0;
                for (b = 0; j > b; ++b) d = u[b], "number" == typeof d.source && (d.source = t[d.source]), "number" == typeof d.target && (d.target = t[d.target]), ++d.source.weight, ++d.target.weight;
                for (b = 0; e > b; ++b) d = t[b], isNaN(d.x) && (d.x = a("x", l)), isNaN(d.y) && (d.y = a("y", p)), isNaN(d.px) && (d.px = d.x), isNaN(d.py) && (d.py = d.y);
                if (f = [], "function" == typeof m)
                    for (b = 0; j > b; ++b) f[b] = +m.call(this, u[b], b);
                else
                    for (b = 0; j > b; ++b) f[b] = m;
                if (g = [], "function" == typeof n)
                    for (b = 0; j > b; ++b) g[b] = +n.call(this, u[b], b);
                else
                    for (b = 0; j > b; ++b) g[b] = n;
                if (h = [], "function" == typeof o)
                    for (b = 0; e > b; ++b) h[b] = +o.call(this, t[b], b);
                else
                    for (b = 0; e > b; ++b) h[b] = o;
                return i.resume()
            }, i.resume = function () {
                return i.alpha(.1)
            }, i.stop = function () {
                return i.alpha(0)
            }, i.drag = function () {
                return d || (d = hg.behavior.drag().origin(s).on("dragstart.force", $d).on("drag.force", b).on("dragend.force", _d)), arguments.length ? void this.on("mouseover.force", ae).on("mouseout.force", be).call(d) : d
            }, hg.rebind(i, j, "on")
        };
        var ni = 20,
            oi = 1,
            pi = 1 / 0;
        hg.layout.hierarchy = function () {
            function a(e) {
                var f, g = [e],
                    h = [];
                for (e.depth = 0; null != (f = g.pop());)
                    if (h.push(f), (j = c.call(a, f, f.depth)) && (i = j.length)) {
                        for (var i, j, k; --i >= 0;) g.push(k = j[i]), k.parent = f, k.depth = f.depth + 1;
                        d && (f.value = 0), f.children = j
                    } else d && (f.value = +d.call(a, f, f.depth) || 0), delete f.children;
                return fe(e, function (a) {
                    var c, e;
                    b && (c = a.children) && c.sort(b), d && (e = a.parent) && (e.value += a.value)
                }), h
            }
            var b = ie,
                c = ge,
                d = he;
            return a.sort = function (c) {
                return arguments.length ? (b = c, a) : b
            }, a.children = function (b) {
                return arguments.length ? (c = b, a) : c
            }, a.value = function (b) {
                return arguments.length ? (d = b, a) : d
            }, a.revalue = function (b) {
                return d && (ee(b, function (a) {
                    a.children && (a.value = 0)
                }), fe(b, function (b) {
                    var c;
                    b.children || (b.value = +d.call(a, b, b.depth) || 0), (c = b.parent) && (c.value += b.value)
                })), b
            }, a
        }, hg.layout.partition = function () {
            function a(b, c, d, e) {
                var f = b.children;
                if (b.x = c, b.y = b.depth * e, b.dx = d, b.dy = e, f && (g = f.length)) {
                    var g, h, i, j = -1;
                    for (d = b.value ? d / b.value : 0; ++j < g;) a(h = f[j], c, i = h.value * d, e), c += i
                }
            }

            function b(a) {
                var c = a.children,
                    d = 0;
                if (c && (e = c.length))
                    for (var e, f = -1; ++f < e;) d = Math.max(d, b(c[f]));
                return 1 + d
            }

            function c(c, f) {
                var g = d.call(this, c, f);
                return a(g[0], 0, e[0], e[1] / b(g[0])), g
            }
            var d = hg.layout.hierarchy(),
                e = [1, 1];
            return c.size = function (a) {
                return arguments.length ? (e = a, c) : e
            }, de(c, d)
        }, hg.layout.pie = function () {
            function a(g) {
                var h, i = g.length,
                    j = g.map(function (c, d) {
                        return +b.call(a, c, d)
                    }),
                    k = +("function" == typeof d ? d.apply(this, arguments) : d),
                    l = ("function" == typeof e ? e.apply(this, arguments) : e) - k,
                    m = Math.min(Math.abs(l) / i, +("function" == typeof f ? f.apply(this, arguments) : f)),
                    n = m * (0 > l ? -1 : 1),
                    o = hg.sum(j),
                    p = o ? (l - i * n) / o : 0,
                    q = hg.range(i),
                    r = [];
                return null != c && q.sort(c === qi ? function (a, b) {
                    return j[b] - j[a]
                } : function (a, b) {
                    return c(g[a], g[b])
                }), q.forEach(function (a) {
                    r[a] = {
                        data: g[a],
                        value: h = j[a],
                        startAngle: k,
                        endAngle: k += h * p + n,
                        padAngle: m
                    }
                }), r
            }
            var b = Number,
                c = qi,
                d = 0,
                e = Lg,
                f = 0;
            return a.value = function (c) {
                return arguments.length ? (b = c, a) : b
            }, a.sort = function (b) {
                return arguments.length ? (c = b, a) : c
            }, a.startAngle = function (b) {
                return arguments.length ? (d = b, a) : d
            }, a.endAngle = function (b) {
                return arguments.length ? (e = b, a) : e
            }, a.padAngle = function (b) {
                return arguments.length ? (f = b, a) : f
            }, a
        };
        var qi = {};
        hg.layout.stack = function () {
            function a(h, i) {
                if (!(m = h.length)) return h;
                var j = h.map(function (c, d) {
                    return b.call(a, c, d)
                }),
                    k = j.map(function (b) {
                        return b.map(function (b, c) {
                            return [f.call(a, b, c), g.call(a, b, c)]
                        })
                    }),
                    l = c.call(a, k, i);
                j = hg.permute(j, l), k = hg.permute(k, l);
                var m, n, o, p, q = d.call(a, k, i),
                    r = j[0].length;
                for (o = 0; r > o; ++o)
                    for (e.call(a, j[0][o], p = q[o], k[0][o][1]), n = 1; m > n; ++n) e.call(a, j[n][o], p += k[n - 1][o][1], k[n][o][1]);
                return h
            }
            var b = s,
                c = ne,
                d = oe,
                e = me,
                f = ke,
                g = le;
            return a.values = function (c) {
                return arguments.length ? (b = c, a) : b
            }, a.order = function (b) {
                return arguments.length ? (c = "function" == typeof b ? b : ri.get(b) || ne, a) : c
            }, a.offset = function (b) {
                return arguments.length ? (d = "function" == typeof b ? b : si.get(b) || oe, a) : d
            }, a.x = function (b) {
                return arguments.length ? (f = b, a) : f
            }, a.y = function (b) {
                return arguments.length ? (g = b, a) : g
            }, a.out = function (b) {
                return arguments.length ? (e = b, a) : e
            }, a
        };
        var ri = hg.map({
            "inside-out": function (a) {
                var b, c, d = a.length,
                    e = a.map(pe),
                    f = a.map(qe),
                    g = hg.range(d).sort(function (a, b) {
                        return e[a] - e[b]
                    }),
                    h = 0,
                    i = 0,
                    j = [],
                    k = [];
                for (b = 0; d > b; ++b) c = g[b], i > h ? (h += f[c], j.push(c)) : (i += f[c], k.push(c));
                return k.reverse().concat(j)
            },
            reverse: function (a) {
                return hg.range(a.length).reverse()
            },
            default: ne
        }),
            si = hg.map({
                silhouette: function (a) {
                    var b, c, d, e = a.length,
                        f = a[0].length,
                        g = [],
                        h = 0,
                        i = [];
                    for (c = 0; f > c; ++c) {
                        for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                        d > h && (h = d), g.push(d)
                    }
                    for (c = 0; f > c; ++c) i[c] = (h - g[c]) / 2;
                    return i
                },
                wiggle: function (a) {
                    var b, c, d, e, f, g, h, i, j, k = a.length,
                        l = a[0],
                        m = l.length,
                        n = [];
                    for (n[0] = i = j = 0, c = 1; m > c; ++c) {
                        for (b = 0, e = 0; k > b; ++b) e += a[b][c][1];
                        for (b = 0, f = 0, h = l[c][0] - l[c - 1][0]; k > b; ++b) {
                            for (d = 0, g = (a[b][c][1] - a[b][c - 1][1]) / (2 * h); b > d; ++d) g += (a[d][c][1] - a[d][c - 1][1]) / h;
                            f += g * a[b][c][1]
                        }
                        n[c] = i -= e ? f / e * h : 0, j > i && (j = i)
                    }
                    for (c = 0; m > c; ++c) n[c] -= j;
                    return n
                },
                expand: function (a) {
                    var b, c, d, e = a.length,
                        f = a[0].length,
                        g = 1 / e,
                        h = [];
                    for (c = 0; f > c; ++c) {
                        for (b = 0, d = 0; e > b; b++) d += a[b][c][1];
                        if (d)
                            for (b = 0; e > b; b++) a[b][c][1] /= d;
                        else
                            for (b = 0; e > b; b++) a[b][c][1] = g
                    }
                    for (c = 0; f > c; ++c) h[c] = 0;
                    return h
                },
                zero: oe
            });
        hg.layout.histogram = function () {
            function a(a, f) {
                for (var g, h, i = [], j = a.map(c, this), k = d.call(this, j, f), l = e.call(this, k, j, f), f = -1, m = j.length, n = l.length - 1, o = b ? 1 : 1 / m; ++f < n;) g = i[f] = [], g.dx = l[f + 1] - (g.x = l[f]), g.y = 0;
                if (n > 0)
                    for (f = -1; ++f < m;)(h = j[f]) >= k[0] && h <= k[1] && (g = i[hg.bisect(l, h, 1, n) - 1], g.y += o, g.push(a[f]));
                return i
            }
            var b = !0,
                c = Number,
                d = ue,
                e = se;
            return a.value = function (b) {
                return arguments.length ? (c = b, a) : c
            }, a.range = function (b) {
                return arguments.length ? (d = Aa(b), a) : d
            }, a.bins = function (b) {
                return arguments.length ? (e = "number" == typeof b ? function (a) {
                    return te(a, b)
                } : Aa(b), a) : e
            }, a.frequency = function (c) {
                return arguments.length ? (b = !!c, a) : b
            }, a
        }, hg.layout.pack = function () {
            function a(a, f) {
                var g = c.call(this, a, f),
                    h = g[0],
                    i = e[0],
                    j = e[1],
                    k = null == b ? Math.sqrt : "function" == typeof b ? b : function () {
                        return b
                    };
                if (h.x = h.y = 0, fe(h, function (a) {
                    a.r = +k(a.value)
                }), fe(h, ze), d) {
                    var l = d * (b ? 1 : Math.max(2 * h.r / i, 2 * h.r / j)) / 2;
                    fe(h, function (a) {
                        a.r += l
                    }), fe(h, ze), fe(h, function (a) {
                        a.r -= l
                    })
                }
                return Ce(h, i / 2, j / 2, b ? 1 : 1 / Math.max(2 * h.r / i, 2 * h.r / j)), g
            }
            var b, c = hg.layout.hierarchy().sort(ve),
                d = 0,
                e = [1, 1];
            return a.size = function (b) {
                return arguments.length ? (e = b, a) : e
            }, a.radius = function (c) {
                return arguments.length ? (b = null == c || "function" == typeof c ? c : +c, a) : b
            }, a.padding = function (b) {
                return arguments.length ? (d = +b, a) : d
            }, de(a, c)
        }, hg.layout.tree = function () {
            function a(a, e) {
                var k = g.call(this, a, e),
                    l = k[0],
                    m = b(l);
                if (fe(m, c), m.parent.m = -m.z, ee(m, d), j) ee(l, f);
                else {
                    var n = l,
                        o = l,
                        p = l;
                    ee(l, function (a) {
                        a.x < n.x && (n = a), a.x > o.x && (o = a), a.depth > p.depth && (p = a)
                    });
                    var q = h(n, o) / 2 - n.x,
                        r = i[0] / (o.x + h(o, n) / 2 + q),
                        s = i[1] / (p.depth || 1);
                    ee(l, function (a) {
                        a.x = (a.x + q) * r, a.y = a.depth * s
                    })
                }
                return k
            }

            function b(a) {
                for (var b, c = {
                    A: null,
                    children: [a]
                }, d = [c]; null != (b = d.pop());)
                    for (var e, f = b.children, g = 0, h = f.length; h > g; ++g) d.push((f[g] = e = {
                        _: f[g],
                        parent: b,
                        children: (e = f[g].children) && e.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: g
                    }).a = e);
                return c.children[0]
            }

            function c(a) {
                var b = a.children,
                    c = a.parent.children,
                    d = a.i ? c[a.i - 1] : null;
                if (b.length) {
                    Ie(a);
                    var f = (b[0].z + b[b.length - 1].z) / 2;
                    d ? (a.z = d.z + h(a._, d._), a.m = a.z - f) : a.z = f
                } else d && (a.z = d.z + h(a._, d._));
                a.parent.A = e(a, d, a.parent.A || c[0])
            }

            function d(a) {
                a._.x = a.z + a.parent.m, a.m += a.parent.m
            }

            function e(a, b, c) {
                if (b) {
                    for (var d, e = a, f = a, g = b, i = e.parent.children[0], j = e.m, k = f.m, l = g.m, m = i.m; g = Ge(g), e = Fe(e), g && e;) i = Fe(i), f = Ge(f), f.a = a, d = g.z + l - e.z - j + h(g._, e._), d > 0 && (He(Je(g, a, c), a, d), j += d, k += d), l += g.m, j += e.m, m += i.m, k += f.m;
                    g && !Ge(f) && (f.t = g, f.m += l - k), e && !Fe(i) && (i.t = e, i.m += j - m, c = a)
                }
                return c
            }

            function f(a) {
                a.x *= i[0], a.y = a.depth * i[1]
            }
            var g = hg.layout.hierarchy().sort(null).value(null),
                h = Ee,
                i = [1, 1],
                j = null;
            return a.separation = function (b) {
                return arguments.length ? (h = b, a) : h
            }, a.size = function (b) {
                return arguments.length ? (j = null == (i = b) ? f : null, a) : j ? null : i
            }, a.nodeSize = function (b) {
                return arguments.length ? (j = null == (i = b) ? null : f, a) : j ? i : null
            }, de(a, g)
        }, hg.layout.cluster = function () {
            function a(a, f) {
                var g, h = b.call(this, a, f),
                    i = h[0],
                    j = 0;
                fe(i, function (a) {
                    var b = a.children;
                    b && b.length ? (a.x = Le(b), a.y = Ke(b)) : (a.x = g ? j += c(a, g) : 0, a.y = 0, g = a)
                });
                var k = Me(i),
                    l = Ne(i),
                    m = k.x - c(k, l) / 2,
                    n = l.x + c(l, k) / 2;
                return fe(i, e ? function (a) {
                    a.x = (a.x - i.x) * d[0], a.y = (i.y - a.y) * d[1]
                } : function (a) {
                    a.x = (a.x - m) / (n - m) * d[0], a.y = (1 - (i.y ? a.y / i.y : 1)) * d[1]
                }), h
            }
            var b = hg.layout.hierarchy().sort(null).value(null),
                c = Ee,
                d = [1, 1],
                e = !1;
            return a.separation = function (b) {
                return arguments.length ? (c = b, a) : c
            }, a.size = function (b) {
                return arguments.length ? (e = null == (d = b), a) : e ? null : d
            }, a.nodeSize = function (b) {
                return arguments.length ? (e = null != (d = b), a) : e ? d : null
            }, de(a, b)
        }, hg.layout.treemap = function () {
            function a(a, b) {
                for (var c, d, e = -1, f = a.length; ++e < f;) d = (c = a[e]).value * (0 > b ? 0 : b), c.area = isNaN(d) || 0 >= d ? 0 : d
            }

            function b(c) {
                var f = c.children;
                if (f && f.length) {
                    var g, h, i, j = l(c),
                        k = [],
                        m = f.slice(),
                        o = 1 / 0,
                        p = "slice" === n ? j.dx : "dice" === n ? j.dy : "slice-dice" === n ? 1 & c.depth ? j.dy : j.dx : Math.min(j.dx, j.dy);
                    for (a(m, j.dx * j.dy / c.value), k.area = 0;
                        (i = m.length) > 0;) k.push(g = m[i - 1]), k.area += g.area, "squarify" !== n || (h = d(k, p)) <= o ? (m.pop(), o = h) : (k.area -= k.pop().area, e(k, p, j, !1), p = Math.min(j.dx, j.dy), k.length = k.area = 0, o = 1 / 0);
                    k.length && (e(k, p, j, !0), k.length = k.area = 0), f.forEach(b)
                }
            }

            function c(b) {
                var d = b.children;
                if (d && d.length) {
                    var f, g = l(b),
                        h = d.slice(),
                        i = [];
                    for (a(h, g.dx * g.dy / b.value), i.area = 0; f = h.pop();) i.push(f), i.area += f.area, null != f.z && (e(i, f.z ? g.dx : g.dy, g, !h.length), i.length = i.area = 0);
                    d.forEach(c)
                }
            }

            function d(a, b) {
                for (var c, d = a.area, e = 0, f = 1 / 0, g = -1, h = a.length; ++g < h;)(c = a[g].area) && (f > c && (f = c), c > e && (e = c));
                return d *= d, b *= b, d ? Math.max(b * e * o / d, d / (b * f * o)) : 1 / 0
            }

            function e(a, b, c, d) {
                var e, f = -1,
                    g = a.length,
                    h = c.x,
                    j = c.y,
                    k = b ? i(a.area / b) : 0;
                if (b == c.dx) {
                    for ((d || k > c.dy) && (k = c.dy); ++f < g;) e = a[f], e.x = h, e.y = j, e.dy = k, h += e.dx = Math.min(c.x + c.dx - h, k ? i(e.area / k) : 0);
                    e.z = !0, e.dx += c.x + c.dx - h, c.y += k, c.dy -= k
                } else {
                    for ((d || k > c.dx) && (k = c.dx); ++f < g;) e = a[f], e.x = h, e.y = j, e.dx = k, j += e.dy = Math.min(c.y + c.dy - j, k ? i(e.area / k) : 0);
                    e.z = !1, e.dy += c.y + c.dy - j, c.x += k, c.dx -= k
                }
            }

            function f(d) {
                var e = g || h(d),
                    f = e[0];
                return f.x = f.y = 0, f.value ? (f.dx = j[0], f.dy = j[1]) : f.dx = f.dy = 0, g && h.revalue(f), a([f], f.dx * f.dy / f.value), (g ? c : b)(f), m && (g = e), e
            }
            var g, h = hg.layout.hierarchy(),
                i = Math.round,
                j = [1, 1],
                k = null,
                l = Oe,
                m = !1,
                n = "squarify",
                o = .5 * (1 + Math.sqrt(5));
            return f.size = function (a) {
                return arguments.length ? (j = a, f) : j
            }, f.padding = function (a) {
                function b(b) {
                    var c = a.call(f, b, b.depth);
                    return null == c ? Oe(b) : Pe(b, "number" == typeof c ? [c, c, c, c] : c)
                }

                function c(b) {
                    return Pe(b, a)
                }
                if (!arguments.length) return k;
                var d;
                return l = null == (k = a) ? Oe : "function" == (d = typeof a) ? b : "number" === d ? (a = [a, a, a, a], c) : c, f
            }, f.round = function (a) {
                return arguments.length ? (i = a ? Math.round : Number, f) : i != Number
            }, f.sticky = function (a) {
                return arguments.length ? (m = a, g = null, f) : m
            }, f.ratio = function (a) {
                return arguments.length ? (o = a, f) : o
            }, f.mode = function (a) {
                return arguments.length ? (n = a + "", f) : n
            }, de(f, h)
        }, hg.random = {
            normal: function (a, b) {
                var c = arguments.length;
                return 2 > c && (b = 1), 1 > c && (a = 0),
                    function () {
                        var c, d, e;
                        do {
                            c = 2 * Math.random() - 1, d = 2 * Math.random() - 1, e = c * c + d * d
                        } while (!e || e > 1);
                        return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
                    }
            },
            logNormal: function () {
                var a = hg.random.normal.apply(hg, arguments);
                return function () {
                    return Math.exp(a())
                }
            },
            bates: function (a) {
                var b = hg.random.irwinHall(a);
                return function () {
                    return b() / a
                }
            },
            irwinHall: function (a) {
                return function () {
                    for (var b = 0, c = 0; a > c; c++) b += Math.random();
                    return b
                }
            }
        }, hg.scale = {};
        var ti = {
            floor: s,
            ceil: s
        };
        hg.scale.linear = function () {
            return We([0, 1], [0, 1], sd, !1)
        };
        var ui = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };
        hg.scale.log = function () {
            return cf(hg.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        };
        var vi = hg.format(".0e"),
            wi = {
                floor: function (a) {
                    return -Math.ceil(-a)
                },
                ceil: function (a) {
                    return -Math.floor(-a)
                }
            };
        hg.scale.pow = function () {
            return df(hg.scale.linear(), 1, [0, 1])
        }, hg.scale.sqrt = function () {
            return hg.scale.pow().exponent(.5)
        }, hg.scale.ordinal = function () {
            return ff([], {
                t: "range",
                a: [
                    []
                ]
            })
        }, hg.scale.category10 = function () {
            return hg.scale.ordinal().range(xi)
        }, hg.scale.category20 = function () {
            return hg.scale.ordinal().range(yi)
        }, hg.scale.category20b = function () {
            return hg.scale.ordinal().range(zi)
        }, hg.scale.category20c = function () {
            return hg.scale.ordinal().range(Ai)
        };
        var xi = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ta),
            yi = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ta),
            zi = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ta),
            Ai = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ta);
        hg.scale.quantile = function () {
            return gf([], [])
        }, hg.scale.quantize = function () {
            return hf(0, 1, [0, 1])
        }, hg.scale.threshold = function () {
            return jf([.5], [0, 1])
        }, hg.scale.identity = function () {
            return kf([0, 1])
        }, hg.svg = {}, hg.svg.arc = function () {
            function a() {
                var a = Math.max(0, +c.apply(this, arguments)),
                    j = Math.max(0, +d.apply(this, arguments)),
                    k = g.apply(this, arguments) - Ng,
                    l = h.apply(this, arguments) - Ng,
                    m = Math.abs(l - k),
                    n = k > l ? 0 : 1;
                if (a > j && (o = j, j = a, a = o), m >= Mg) return b(j, n) + (a ? b(a, 1 - n) : "") + "Z";
                var o, p, q, r, s, t, u, v, w, x, y, z, A = 0,
                    B = 0,
                    C = [];
                if ((r = (+i.apply(this, arguments) || 0) / 2) && (q = f === Bi ? Math.sqrt(a * a + j * j) : +f.apply(this, arguments), n || (B *= -1), j && (B = ba(q / j * Math.sin(r))), a && (A = ba(q / a * Math.sin(r)))), j) {
                    s = j * Math.cos(k + B), t = j * Math.sin(k + B), u = j * Math.cos(l - B), v = j * Math.sin(l - B);
                    var D = Math.abs(l - k - 2 * B) <= Kg ? 0 : 1;
                    if (B && rf(s, t, u, v) === n ^ D) {
                        var E = (k + l) / 2;
                        s = j * Math.cos(E), t = j * Math.sin(E), u = v = null
                    }
                } else s = t = 0;
                if (a) {
                    w = a * Math.cos(l - A), x = a * Math.sin(l - A), y = a * Math.cos(k + A), z = a * Math.sin(k + A);
                    var F = Math.abs(k - l + 2 * A) <= Kg ? 0 : 1;
                    if (A && rf(w, x, y, z) === 1 - n ^ F) {
                        var G = (k + l) / 2;
                        w = a * Math.cos(G), x = a * Math.sin(G), y = z = null
                    }
                } else w = x = 0;
                if (m > Ig && (o = Math.min(Math.abs(j - a) / 2, +e.apply(this, arguments))) > .001) {
                    p = j > a ^ n ? 0 : 1;
                    var H = o,
                        I = o;
                    if (Kg > m) {
                        var J = null == y ? [w, x] : null == u ? [s, t] : Hc([s, t], [y, z], [u, v], [w, x]),
                            K = s - J[0],
                            L = t - J[1],
                            M = u - J[0],
                            N = v - J[1],
                            O = 1 / Math.sin(Math.acos((K * M + L * N) / (Math.sqrt(K * K + L * L) * Math.sqrt(M * M + N * N))) / 2),
                            P = Math.sqrt(J[0] * J[0] + J[1] * J[1]);
                        I = Math.min(o, (a - P) / (O - 1)), H = Math.min(o, (j - P) / (O + 1))
                    }
                    if (null != u) {
                        var Q = sf(null == y ? [w, x] : [y, z], [s, t], j, H, n),
                            R = sf([u, v], [w, x], j, H, n);
                        o === H ? C.push("M", Q[0], "A", H, ",", H, " 0 0,", p, " ", Q[1], "A", j, ",", j, " 0 ", 1 - n ^ rf(Q[1][0], Q[1][1], R[1][0], R[1][1]), ",", n, " ", R[1], "A", H, ",", H, " 0 0,", p, " ", R[0]) : C.push("M", Q[0], "A", H, ",", H, " 0 1,", p, " ", R[0])
                    } else C.push("M", s, ",", t);
                    if (null != y) {
                        var S = sf([s, t], [y, z], a, -I, n),
                            T = sf([w, x], null == u ? [s, t] : [u, v], a, -I, n);
                        o === I ? C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", T[1], "A", a, ",", a, " 0 ", n ^ rf(T[1][0], T[1][1], S[1][0], S[1][1]), ",", 1 - n, " ", S[1], "A", I, ",", I, " 0 0,", p, " ", S[0]) : C.push("L", T[0], "A", I, ",", I, " 0 0,", p, " ", S[0])
                    } else C.push("L", w, ",", x)
                } else C.push("M", s, ",", t), null != u && C.push("A", j, ",", j, " 0 ", D, ",", n, " ", u, ",", v), C.push("L", w, ",", x), null != y && C.push("A", a, ",", a, " 0 ", F, ",", 1 - n, " ", y, ",", z);
                return C.push("Z"), C.join("")
            }

            function b(a, b) {
                return "M0," + a + "A" + a + "," + a + " 0 1," + b + " 0," + -a + "A" + a + "," + a + " 0 1," + b + " 0," + a
            }
            var c = mf,
                d = nf,
                e = lf,
                f = Bi,
                g = of,
                h = pf,
                i = qf;
            return a.innerRadius = function (b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a.outerRadius = function (b) {
                return arguments.length ? (d = Aa(b), a) : d
            }, a.cornerRadius = function (b) {
                return arguments.length ? (e = Aa(b), a) : e
            }, a.padRadius = function (b) {
                return arguments.length ? (f = b == Bi ? Bi : Aa(b), a) : f
            }, a.startAngle = function (b) {
                return arguments.length ? (g = Aa(b), a) : g
            }, a.endAngle = function (b) {
                return arguments.length ? (h = Aa(b), a) : h
            }, a.padAngle = function (b) {
                return arguments.length ? (i = Aa(b), a) : i
            }, a.centroid = function () {
                var a = (+c.apply(this, arguments) + +d.apply(this, arguments)) / 2,
                    b = (+g.apply(this, arguments) + +h.apply(this, arguments)) / 2 - Ng;
                return [Math.cos(b) * a, Math.sin(b) * a]
            }, a
        };
        var Bi = "auto";
        hg.svg.line = function () {
            return tf(s)
        };
        var Ci = hg.map({
            linear: uf,
            "linear-closed": vf,
            step: wf,
            "step-before": xf,
            "step-after": yf,
            basis: Ef,
            "basis-open": Ff,
            "basis-closed": Gf,
            bundle: Hf,
            cardinal: Bf,
            "cardinal-open": zf,
            "cardinal-closed": Af,
            monotone: Nf
        });
        Ci.forEach(function (a, b) {
            b.key = a, b.closed = /-closed$/.test(a)
        });
        var Di = [0, 2 / 3, 1 / 3, 0],
            Ei = [0, 1 / 3, 2 / 3, 0],
            Fi = [0, 1 / 6, 2 / 3, 1 / 6];
        hg.svg.line.radial = function () {
            var a = tf(Of);
            return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
        }, xf.reverse = yf, yf.reverse = xf, hg.svg.area = function () {
            return Pf(s)
        }, hg.svg.area.radial = function () {
            var a = Pf(Of);
            return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
        }, hg.svg.chord = function () {
            function a(a, h) {
                var i = b(this, f, a, h),
                    j = b(this, g, a, h);
                return "M" + i.p0 + d(i.r, i.p1, i.a1 - i.a0) + (c(i, j) ? e(i.r, i.p1, i.r, i.p0) : e(i.r, i.p1, j.r, j.p0) + d(j.r, j.p1, j.a1 - j.a0) + e(j.r, j.p1, i.r, i.p0)) + "Z"
            }

            function b(a, b, c, d) {
                var e = b.call(a, c, d),
                    f = h.call(a, e, d),
                    g = i.call(a, e, d) - Ng,
                    k = j.call(a, e, d) - Ng;
                return {
                    r: f,
                    a0: g,
                    a1: k,
                    p0: [f * Math.cos(g), f * Math.sin(g)],
                    p1: [f * Math.cos(k), f * Math.sin(k)]
                }
            }

            function c(a, b) {
                return a.a0 == b.a0 && a.a1 == b.a1
            }

            function d(a, b, c) {
                return "A" + a + "," + a + " 0 " + +(c > Kg) + ",1 " + b
            }

            function e(a, b, c, d) {
                return "Q 0,0 " + d
            }
            var f = sc,
                g = tc,
                h = Qf,
                i = of,
                j = pf;
            return a.radius = function (b) {
                return arguments.length ? (h = Aa(b), a) : h
            }, a.source = function (b) {
                return arguments.length ? (f = Aa(b), a) : f
            }, a.target = function (b) {
                return arguments.length ? (g = Aa(b), a) : g
            }, a.startAngle = function (b) {
                return arguments.length ? (i = Aa(b), a) : i
            }, a.endAngle = function (b) {
                return arguments.length ? (j = Aa(b), a) : j
            }, a
        }, hg.svg.diagonal = function () {
            function a(a, e) {
                var f = b.call(this, a, e),
                    g = c.call(this, a, e),
                    h = (f.y + g.y) / 2,
                    i = [f, {
                        x: f.x,
                        y: h
                    }, {
                            x: g.x,
                            y: h
                        }, g];
                return i = i.map(d), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
            }
            var b = sc,
                c = tc,
                d = Rf;
            return a.source = function (c) {
                return arguments.length ? (b = Aa(c), a) : b
            }, a.target = function (b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a.projection = function (b) {
                return arguments.length ? (d = b, a) : d
            }, a
        }, hg.svg.diagonal.radial = function () {
            var a = hg.svg.diagonal(),
                b = Rf,
                c = a.projection;
            return a.projection = function (a) {
                return arguments.length ? c(Sf(b = a)) : b
            }, a
        }, hg.svg.symbol = function () {
            function a(a, d) {
                return (Gi.get(b.call(this, a, d)) || Vf)(c.call(this, a, d))
            }
            var b = Uf,
                c = Tf;
            return a.type = function (c) {
                return arguments.length ? (b = Aa(c), a) : b
            }, a.size = function (b) {
                return arguments.length ? (c = Aa(b), a) : c
            }, a
        };
        var Gi = hg.map({
            circle: Vf,
            cross: function (a) {
                var b = Math.sqrt(a / 5) / 2;
                return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
            },
            diamond: function (a) {
                var b = Math.sqrt(a / (2 * Ii)),
                    c = b * Ii;
                return "M0," + -b + "L" + c + ",0 0," + b + " " + -c + ",0Z"
            },
            square: function (a) {
                var b = Math.sqrt(a) / 2;
                return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
            },
            "triangle-down": function (a) {
                var b = Math.sqrt(a / Hi),
                    c = b * Hi / 2;
                return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
            },
            "triangle-up": function (a) {
                var b = Math.sqrt(a / Hi),
                    c = b * Hi / 2;
                return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
            }
        });
        hg.svg.symbolTypes = Gi.keys();
        var Hi = Math.sqrt(3),
            Ii = Math.tan(30 * Og);
        Ag.transition = function (a) {
            for (var b, c, d = Ji || ++Ni, e = $f(a), f = [], g = Ki || {
                time: Date.now(),
                ease: zd,
                delay: 0,
                duration: 250
            }, h = -1, i = this.length; ++h < i;) {
                f.push(b = []);
                for (var j = this[h], k = -1, l = j.length; ++k < l;)(c = j[k]) && _f(c, k, e, d, g), b.push(c)
            }
            return Xf(f, e, d)
        }, Ag.interrupt = function (a) {
            return this.each(null == a ? Li : Wf($f(a)))
        };
        var Ji, Ki, Li = Wf($f()),
            Mi = [],
            Ni = 0;
        Mi.call = Ag.call, Mi.empty = Ag.empty, Mi.node = Ag.node, Mi.size = Ag.size, hg.transition = function (a, b) {
            return a && a.transition ? Ji ? a.transition(b) : a : hg.selection().transition(a)
        }, hg.transition.prototype = Mi, Mi.select = function (a) {
            var b, c, d, e = this.id,
                f = this.namespace,
                g = [];
            a = C(a);
            for (var h = -1, i = this.length; ++h < i;) {
                g.push(b = []);
                for (var j = this[h], k = -1, l = j.length; ++k < l;)(d = j[k]) && (c = a.call(d, d.__data__, k, h)) ? ("__data__" in d && (c.__data__ = d.__data__), _f(c, k, f, e, d[f][e]), b.push(c)) : b.push(null)
            }
            return Xf(g, f, e)
        }, Mi.selectAll = function (a) {
            var b, c, d, e, f, g = this.id,
                h = this.namespace,
                i = [];
            a = D(a);
            for (var j = -1, k = this.length; ++j < k;)
                for (var l = this[j], m = -1, n = l.length; ++m < n;)
                    if (d = l[m]) {
                        f = d[h][g], c = a.call(d, d.__data__, m, j), i.push(b = []);
                        for (var o = -1, p = c.length; ++o < p;)(e = c[o]) && _f(e, o, h, g, f), b.push(e)
                    } return Xf(i, h, g)
        }, Mi.filter = function (a) {
            var b, c, d, e = [];
            "function" != typeof a && (a = P(a));
            for (var f = 0, g = this.length; g > f; f++) {
                e.push(b = []);
                for (var c = this[f], h = 0, i = c.length; i > h; h++)(d = c[h]) && a.call(d, d.__data__, h, f) && b.push(d)
            }
            return Xf(e, this.namespace, this.id)
        }, Mi.tween = function (a, b) {
            var c = this.id,
                d = this.namespace;
            return arguments.length < 2 ? this.node()[d][c].tween.get(a) : R(this, null == b ? function (b) {
                b[d][c].tween.remove(a)
            } : function (e) {
                e[d][c].tween.set(a, b)
            })
        }, Mi.attr = function (a, b) {
            function c() {
                this.removeAttribute(h)
            }

            function d() {
                this.removeAttributeNS(h.space, h.local)
            }

            function e(a) {
                return null == a ? c : (a += "", function () {
                    var b, c = this.getAttribute(h);
                    return c !== a && (b = g(c, a), function (a) {
                        this.setAttribute(h, b(a))
                    })
                })
            }

            function f(a) {
                return null == a ? d : (a += "", function () {
                    var b, c = this.getAttributeNS(h.space, h.local);
                    return c !== a && (b = g(c, a), function (a) {
                        this.setAttributeNS(h.space, h.local, b(a))
                    })
                })
            }
            if (arguments.length < 2) {
                for (b in a) this.attr(b, a[b]);
                return this
            }
            var g = "transform" == a ? Ud : sd,
                h = hg.ns.qualify(a);
            return Yf(this, "attr." + a, b, h.local ? f : e)
        }, Mi.attrTween = function (a, b) {
            function c(a, c) {
                var d = b.call(this, a, c, this.getAttribute(e));
                return d && function (a) {
                    this.setAttribute(e, d(a))
                }
            }

            function d(a, c) {
                var d = b.call(this, a, c, this.getAttributeNS(e.space, e.local));
                return d && function (a) {
                    this.setAttributeNS(e.space, e.local, d(a))
                }
            }
            var e = hg.ns.qualify(a);
            return this.tween("attr." + a, e.local ? d : c)
        }, Mi.style = function (a, c, d) {
            function e() {
                this.style.removeProperty(a)
            }

            function f(c) {
                return null == c ? e : (c += "", function () {
                    var e, f = b(this).getComputedStyle(this, null).getPropertyValue(a);
                    return f !== c && (e = sd(f, c), function (b) {
                        this.style.setProperty(a, e(b), d)
                    })
                })
            }
            var g = arguments.length;
            if (3 > g) {
                if ("string" != typeof a) {
                    2 > g && (c = "");
                    for (d in a) this.style(d, a[d], c);
                    return this
                }
                d = ""
            }
            return Yf(this, "style." + a, c, f)
        }, Mi.styleTween = function (a, c, d) {
            function e(e, f) {
                var g = c.call(this, e, f, b(this).getComputedStyle(this, null).getPropertyValue(a));
                return g && function (b) {
                    this.style.setProperty(a, g(b), d)
                }
            }
            return arguments.length < 3 && (d = ""), this.tween("style." + a, e)
        }, Mi.text = function (a) {
            return Yf(this, "text", a, Zf)
        }, Mi.remove = function () {
            var a = this.namespace;
            return this.each("end.transition", function () {
                var b;
                this[a].count < 2 && (b = this.parentNode) && b.removeChild(this)
            })
        }, Mi.ease = function (a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].ease : ("function" != typeof a && (a = hg.ease.apply(hg, arguments)), R(this, function (d) {
                d[c][b].ease = a
            }))
        }, Mi.delay = function (a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].delay : R(this, "function" == typeof a ? function (d, e, f) {
                d[c][b].delay = +a.call(d, d.__data__, e, f)
            } : (a = +a, function (d) {
                d[c][b].delay = a
            }))
        }, Mi.duration = function (a) {
            var b = this.id,
                c = this.namespace;
            return arguments.length < 1 ? this.node()[c][b].duration : R(this, "function" == typeof a ? function (d, e, f) {
                d[c][b].duration = Math.max(1, a.call(d, d.__data__, e, f))
            } : (a = Math.max(1, a), function (d) {
                d[c][b].duration = a
            }))
        }, Mi.each = function (a, b) {
            var c = this.id,
                d = this.namespace;
            if (arguments.length < 2) {
                var e = Ki,
                    f = Ji;
                try {
                    Ji = c, R(this, function (b, e, f) {
                        Ki = b[d][c], a.call(b, b.__data__, e, f)
                    })
                } finally {
                    Ki = e, Ji = f
                }
            } else R(this, function (e) {
                var f = e[d][c];
                (f.event || (f.event = hg.dispatch("start", "end", "interrupt"))).on(a, b)
            });
            return this
        }, Mi.transition = function () {
            for (var a, b, c, d, e = this.id, f = ++Ni, g = this.namespace, h = [], i = 0, j = this.length; j > i; i++) {
                h.push(a = []);
                for (var b = this[i], k = 0, l = b.length; l > k; k++)(c = b[k]) && (d = c[g][e], _f(c, k, g, f, {
                    time: d.time,
                    ease: d.ease,
                    delay: d.delay + d.duration,
                    duration: d.duration
                })), a.push(c)
            }
            return Xf(h, g, f)
        }, hg.svg.axis = function () {
            function a(a) {
                a.each(function () {
                    var a, j = hg.select(this),
                        k = this.__chart__ || c,
                        l = this.__chart__ = c.copy(),
                        m = null == i ? l.ticks ? l.ticks.apply(l, h) : l.domain() : i,
                        n = null == b ? l.tickFormat ? l.tickFormat.apply(l, h) : s : b,
                        o = j.selectAll(".tick").data(m, l),
                        p = o.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ig),
                        q = hg.transition(o.exit()).style("opacity", Ig).remove(),
                        r = hg.transition(o.order()).style("opacity", 1),
                        t = Math.max(e, 0) + g,
                        u = Re(l),
                        v = j.selectAll(".domain").data([0]),
                        w = (v.enter().append("path").attr("class", "domain"), hg.transition(v));
                    p.append("line"), p.append("text");
                    var x, y, z, A, B = p.select("line"),
                        C = r.select("line"),
                        D = o.select("text").text(n),
                        E = p.select("text"),
                        F = r.select("text"),
                        G = "top" === d || "left" === d ? -1 : 1;
                    if ("bottom" === d || "top" === d ? (a = ag, x = "x", z = "y", y = "x2", A = "y2", D.attr("dy", 0 > G ? "0em" : ".71em").style("text-anchor", "middle"), w.attr("d", "M" + u[0] + "," + G * f + "V0H" + u[1] + "V" + G * f)) : (a = bg, x = "y", z = "x", y = "y2", A = "x2", D.attr("dy", ".32em").style("text-anchor", 0 > G ? "end" : "start"), w.attr("d", "M" + G * f + "," + u[0] + "H0V" + u[1] + "H" + G * f)), B.attr(A, G * e), E.attr(z, G * t), C.attr(y, 0).attr(A, G * e), F.attr(x, 0).attr(z, G * t), l.rangeBand) {
                        var H = l,
                            I = H.rangeBand() / 2;
                        k = l = function (a) {
                            return H(a) + I
                        }
                    } else k.rangeBand ? k = l : q.call(a, l, k);
                    p.call(a, k, l), r.call(a, l, l)
                })
            }
            var b, c = hg.scale.linear(),
                d = Oi,
                e = 6,
                f = 6,
                g = 3,
                h = [10],
                i = null;
            return a.scale = function (b) {
                return arguments.length ? (c = b, a) : c
            }, a.orient = function (b) {
                return arguments.length ? (d = b in Pi ? b + "" : Oi, a) : d
            }, a.ticks = function () {
                return arguments.length ? (h = jg(arguments), a) : h
            }, a.tickValues = function (b) {
                return arguments.length ? (i = b, a) : i
            }, a.tickFormat = function (c) {
                return arguments.length ? (b = c, a) : b
            }, a.tickSize = function (b) {
                var c = arguments.length;
                return c ? (e = +b, f = +arguments[c - 1], a) : e
            }, a.innerTickSize = function (b) {
                return arguments.length ? (e = +b, a) : e
            }, a.outerTickSize = function (b) {
                return arguments.length ? (f = +b, a) : f
            }, a.tickPadding = function (b) {
                return arguments.length ? (g = +b, a) : g
            }, a.tickSubdivide = function () {
                return arguments.length && a
            }, a
        };
        var Oi = "bottom",
            Pi = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
        hg.svg.brush = function () {
            function a(b) {
                b.each(function () {
                    var b = hg.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", f).on("touchstart.brush", f),
                        g = b.selectAll(".background").data([0]);
                    g.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), b.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var h = b.selectAll(".resize").data(p, s);
                    h.exit().remove(), h.enter().append("g").attr("class", function (a) {
                        return "resize " + a
                    }).style("cursor", function (a) {
                        return Qi[a]
                    }).append("rect").attr("x", function (a) {
                        return /[ew]$/.test(a) ? -3 : null
                    }).attr("y", function (a) {
                        return /^[ns]/.test(a) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", a.empty() ? "none" : null);
                    var i, l = hg.transition(b),
                        m = hg.transition(g);
                    j && (i = Re(j), m.attr("x", i[0]).attr("width", i[1] - i[0]), d(l)), k && (i = Re(k), m.attr("y", i[0]).attr("height", i[1] - i[0]), e(l)), c(l)
                })
            }

            function c(a) {
                a.selectAll(".resize").attr("transform", function (a) {
                    return "translate(" + l[+/e$/.test(a)] + "," + m[+/^s/.test(a)] + ")"
                })
            }

            function d(a) {
                a.select(".extent").attr("x", l[0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
            }

            function e(a) {
                a.select(".extent").attr("y", m[0]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", m[1] - m[0])
            }

            function f() {
                function f() {
                    32 == hg.event.keyCode && (D || (t = null, F[0] -= l[1], F[1] -= m[1], D = 2), y())
                }

                function p() {
                    32 == hg.event.keyCode && 2 == D && (F[0] += l[1], F[1] += m[1], D = 0, y())
                }

                function q() {
                    var a = hg.mouse(v),
                        b = !1;
                    u && (a[0] += u[0], a[1] += u[1]), D || (hg.event.altKey ? (t || (t = [(l[0] + l[1]) / 2, (m[0] + m[1]) / 2]), F[0] = l[+(a[0] < t[0])], F[1] = m[+(a[1] < t[1])]) : t = null), B && r(a, j, 0) && (d(z), b = !0), C && r(a, k, 1) && (e(z), b = !0), b && (c(z), x({
                        type: "brush",
                        mode: D ? "move" : "resize"
                    }))
                }

                function r(a, b, c) {
                    var d, e, f = Re(b),
                        i = f[0],
                        j = f[1],
                        k = F[c],
                        p = c ? m : l,
                        q = p[1] - p[0];
                    return D && (i -= k, j -= q + k), d = (c ? o : n) ? Math.max(i, Math.min(j, a[c])) : a[c], D ? e = (d += k) + q : (t && (k = Math.max(i, Math.min(j, 2 * t[c] - d))), d > k ? (e = d, d = k) : e = k), p[0] != d || p[1] != e ? (c ? h = null : g = null, p[0] = d, p[1] = e, !0) : void 0
                }

                function s() {
                    q(), z.style("pointer-events", "all").selectAll(".resize").style("display", a.empty() ? "none" : null), hg.select("body").style("cursor", null), G.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), E(), x({
                        type: "brushend"
                    })
                }
                var t, u, v = this,
                    w = hg.select(hg.event.target),
                    x = i.of(v, arguments),
                    z = hg.select(v),
                    A = w.datum(),
                    B = !/^(n|s)$/.test(A) && j,
                    C = !/^(e|w)$/.test(A) && k,
                    D = w.classed("extent"),
                    E = X(v),
                    F = hg.mouse(v),
                    G = hg.select(b(v)).on("keydown.brush", f).on("keyup.brush", p);
                if (hg.event.changedTouches ? G.on("touchmove.brush", q).on("touchend.brush", s) : G.on("mousemove.brush", q).on("mouseup.brush", s), z.interrupt().selectAll("*").interrupt(), D) F[0] = l[0] - F[0], F[1] = m[0] - F[1];
                else if (A) {
                    var H = +/w$/.test(A),
                        I = +/^n/.test(A);
                    u = [l[1 - H] - F[0], m[1 - I] - F[1]], F[0] = l[H], F[1] = m[I]
                } else hg.event.altKey && (t = F.slice());
                z.style("pointer-events", "none").selectAll(".resize").style("display", null), hg.select("body").style("cursor", w.style("cursor")), x({
                    type: "brushstart"
                }), q()
            }
            var g, h, i = A(a, "brushstart", "brush", "brushend"),
                j = null,
                k = null,
                l = [0, 0],
                m = [0, 0],
                n = !0,
                o = !0,
                p = Ri[0];
            return a.event = function (a) {
                a.each(function () {
                    var a = i.of(this, arguments),
                        b = {
                            x: l,
                            y: m,
                            i: g,
                            j: h
                        },
                        c = this.__chart__ || b;
                    this.__chart__ = b, Ji ? hg.select(this).transition().each("start.brush", function () {
                        g = c.i, h = c.j, l = c.x, m = c.y, a({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function () {
                        var c = td(l, b.x),
                            d = td(m, b.y);
                        return g = h = null,
                            function (e) {
                                l = b.x = c(e), m = b.y = d(e), a({
                                    type: "brush",
                                    mode: "resize"
                                })
                            }
                    }).each("end.brush", function () {
                        g = b.i, h = b.j, a({
                            type: "brush",
                            mode: "resize"
                        }), a({
                            type: "brushend"
                        })
                    }) : (a({
                        type: "brushstart"
                    }), a({
                        type: "brush",
                        mode: "resize"
                    }), a({
                        type: "brushend"
                    }))
                })
            }, a.x = function (b) {
                return arguments.length ? (j = b, p = Ri[!j << 1 | !k], a) : j
            }, a.y = function (b) {
                return arguments.length ? (k = b, p = Ri[!j << 1 | !k], a) : k
            }, a.clamp = function (b) {
                return arguments.length ? (j && k ? (n = !!b[0], o = !!b[1]) : j ? n = !!b : k && (o = !!b), a) : j && k ? [n, o] : j ? n : k ? o : null
            }, a.extent = function (b) {
                var c, d, e, f, i;
                return arguments.length ? (j && (c = b[0], d = b[1], k && (c = c[0], d = d[0]), g = [c, d], j.invert && (c = j(c), d = j(d)), c > d && (i = c, c = d, d = i), c == l[0] && d == l[1] || (l = [c, d])), k && (e = b[0], f = b[1], j && (e = e[1], f = f[1]), h = [e, f], k.invert && (e = k(e), f = k(f)), e > f && (i = e, e = f, f = i), e == m[0] && f == m[1] || (m = [e, f])), a) : (j && (g ? (c = g[0], d = g[1]) : (c = l[0], d = l[1], j.invert && (c = j.invert(c), d = j.invert(d)), c > d && (i = c, c = d, d = i))), k && (h ? (e = h[0], f = h[1]) : (e = m[0], f = m[1], k.invert && (e = k.invert(e), f = k.invert(f)), e > f && (i = e, e = f, f = i))), j && k ? [
                    [c, e],
                    [d, f]
                ] : j ? [c, d] : k && [e, f])
            }, a.clear = function () {
                return a.empty() || (l = [0, 0], m = [0, 0], g = h = null), a
            }, a.empty = function () {
                return !!j && l[0] == l[1] || !!k && m[0] == m[1]
            }, hg.rebind(a, i, "on")
        };
        var Qi = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
            Ri = [
                ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                ["e", "w"],
                ["n", "s"],
                []
            ],
            Si = jh.format = ph.timeFormat,
            Ti = Si.utc,
            Ui = Ti("%Y-%m-%dT%H:%M:%S.%LZ");
        Si.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? cg : Ui, cg.parse = function (a) {
            var b = new Date(a);
            return isNaN(b) ? null : b
        }, cg.toString = Ui.toString, jh.second = Oa(function (a) {
            return new kh(1e3 * Math.floor(a / 1e3))
        }, function (a, b) {
            a.setTime(a.getTime() + 1e3 * Math.floor(b))
        }, function (a) {
            return a.getSeconds()
        }), jh.seconds = jh.second.range, jh.seconds.utc = jh.second.utc.range, jh.minute = Oa(function (a) {
            return new kh(6e4 * Math.floor(a / 6e4))
        }, function (a, b) {
            a.setTime(a.getTime() + 6e4 * Math.floor(b))
        }, function (a) {
            return a.getMinutes()
        }), jh.minutes = jh.minute.range, jh.minutes.utc = jh.minute.utc.range, jh.hour = Oa(function (a) {
            var b = a.getTimezoneOffset() / 60;
            return new kh(36e5 * (Math.floor(a / 36e5 - b) + b))
        }, function (a, b) {
            a.setTime(a.getTime() + 36e5 * Math.floor(b))
        }, function (a) {
            return a.getHours()
        }), jh.hours = jh.hour.range, jh.hours.utc = jh.hour.utc.range, jh.month = Oa(function (a) {
            return a = jh.day(a), a.setDate(1), a
        }, function (a, b) {
            a.setMonth(a.getMonth() + b)
        }, function (a) {
            return a.getMonth()
        }), jh.months = jh.month.range, jh.months.utc = jh.month.utc.range;
        var Vi = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
            Wi = [
                [jh.second, 1],
                [jh.second, 5],
                [jh.second, 15],
                [jh.second, 30],
                [jh.minute, 1],
                [jh.minute, 5],
                [jh.minute, 15],
                [jh.minute, 30],
                [jh.hour, 1],
                [jh.hour, 3],
                [jh.hour, 6],
                [jh.hour, 12],
                [jh.day, 1],
                [jh.day, 2],
                [jh.week, 1],
                [jh.month, 1],
                [jh.month, 3],
                [jh.year, 1]
            ],
            Xi = Si.multi([
                [".%L", function (a) {
                    return a.getMilliseconds()
                }],
                [":%S", function (a) {
                    return a.getSeconds()
                }],
                ["%I:%M", function (a) {
                    return a.getMinutes()
                }],
                ["%I %p", function (a) {
                    return a.getHours()
                }],
                ["%a %d", function (a) {
                    return a.getDay() && 1 != a.getDate()
                }],
                ["%b %d", function (a) {
                    return 1 != a.getDate()
                }],
                ["%B", function (a) {
                    return a.getMonth()
                }],
                ["%Y", Db]
            ]),
            Yi = {
                range: function (a, b, c) {
                    return hg.range(Math.ceil(a / c) * c, +b, c).map(eg)
                },
                floor: s,
                ceil: s
            };
        Wi.year = jh.year, jh.scale = function () {
            return dg(hg.scale.linear(), Wi, Xi)
        };
        var Zi = Wi.map(function (a) {
            return [a[0].utc, a[1]]
        }),
            $i = Ti.multi([
                [".%L", function (a) {
                    return a.getUTCMilliseconds()
                }],
                [":%S", function (a) {
                    return a.getUTCSeconds()
                }],
                ["%I:%M", function (a) {
                    return a.getUTCMinutes()
                }],
                ["%I %p", function (a) {
                    return a.getUTCHours()
                }],
                ["%a %d", function (a) {
                    return a.getUTCDay() && 1 != a.getUTCDate()
                }],
                ["%b %d", function (a) {
                    return 1 != a.getUTCDate()
                }],
                ["%B", function (a) {
                    return a.getUTCMonth()
                }],
                ["%Y", Db]
            ]);
        Zi.year = jh.year.utc, jh.scale.utc = function () {
            return dg(hg.scale.linear(), Zi, $i)
        }, hg.text = Ba(function (a) {
            return a.responseText
        }), hg.json = function (a, b) {
            return Ca(a, "application/json", fg, b)
        }, hg.html = function (a, b) {
            return Ca(a, "text/html", gg, b)
        }, hg.xml = Ba(function (a) {
            return a.responseXML
        }), "function" == typeof define && define.amd ? (this.d3 = hg, define(hg)) : "object" == typeof module && module.exports ? module.exports = hg : this.d3 = hg
    }();