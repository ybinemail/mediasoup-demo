!function(e) 
{
	if (typeof exports=='object'&&typeof module!='undefined')module.exports=e(); else if (typeof define=='function'&&define.amd)define([], e); else 
	{
		let n;

		n=typeof window!='undefined'?window:typeof global!='undefined'?global:typeof self!='undefined'?self:this, n.antiglobal=e();
	} 
}(function() 
{
	return function e(n, o, t) 
	{
		function r(i, u) 
		{
			if (!o[i]) 
			{
				if (!n[i]) 
				{
					const l=typeof require=='function'&&require;

					if (!u&&l) return l(i, !0); if (f) return f(i, !0); const a=new Error(`Cannot find module '${i}'`);

					throw a.code='MODULE_NOT_FOUND', a; 
				} const d=o[i]={ exports: {} };

				n[i][0].call(d.exports, function(e) 
				{
					const o=n[i][1][e];

					return r(o?o:e); 
				}, d, d.exports, e, n, o, t); 
			}

			return o[i].exports; 
		} for (var f=typeof require=='function'&&require, i=0; i<t.length; i++)r(t[i]); 

		return r; 
	}({ 1 : [ function(e, n, o) 
	{
		(function(e) 
		{
			function o() 
			{
				let e, n, o, u=t(), l=Array.prototype.slice.call(arguments), a=[], d=[], c=!1; 

				for (e=0, n=u.length; e<n; e++)o=u[e], r.indexOf(o)===-1&&l.indexOf(o)===-1&&(a.push(o), c=!0); for (e=0, n=r.length; e<n; e++)o=r[e], u.indexOf(o)===-1&&(d.push(o), c=!0); if (r=u.concat(l), c) 
				{
					let s='antiglobal() | globals do not match:'; 

					for (e=0, n=a.length; e<n; e++)o=a[e], s=`${s}\n+ ${o}`; for (e=0, n=d.length; e<n; e++)o=d[e], s=`${s}\n- ${o}`; if (f&&console.error(s), i) throw new Error(s); 
				} 

				return !c; 
			} function t() 
			{
				const n=[]; 

				for (const o in e)e.hasOwnProperty(o)&&o!=='antiglobal'&&n.push(o); 

				return n; 
			} var r=t(), f=!0, i=!1;

			o.reset=function() { r=t(); }, Object.defineProperties(o, { log: { get: function() { return f; }, set: function(e) { f=Boolean(e); } }, throw: { get: function() { return i; }, set: function(e) { i=Boolean(e); } } }), n.exports=o; 
		}).call(this, typeof global!='undefined'?global:typeof self!='undefined'?self:typeof window!='undefined'?window:{}); 
	}, {} ] }, {}, [ 1 ])(1); 
});
