(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const d=document.getElementById("random-dog"),l=document.getElementById("random-cat"),a=document.getElementById("surprise"),s=document.getElementById("random-pet");d.addEventListener("click",()=>{fetch("https://dog.ceo/api/breeds/image/random").then(t=>t.json()).then(t=>s.src=t.message)});l.addEventListener("click",()=>{fetch("https://aws.random.cat/meow").then(t=>t.json()).then(t=>s.src=t.file)});a.addEventListener("click",()=>{Promise.any([fetch("https://dog.ceo/api/breeds/image/random"),fetch("https://aws.random.cat/meow")]).then(t=>t.json()).then(t=>{const o=t.message||t.file;s.src=o})});