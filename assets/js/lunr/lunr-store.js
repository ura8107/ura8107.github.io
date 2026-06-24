---
layout: none
---

{%- assign pages = site.pages | where_exp: "doc", "doc.search != false" | where_exp: "doc", "doc.title != null" -%}
var store = [
{%- for doc in pages %}
  {
    "title": {{ doc.title | jsonify }},
    "excerpt": {{ doc.content | markdownify | newline_to_br |
      replace: "<br />", " " |
      replace: "</p>", " " |
      replace: "</h1>", " " |
      replace: "</h2>", " " |
      replace: "</h3>", " " |
      replace: "</h4>", " " |
      replace: "</h5>", " " |
      replace: "</h6>", " " |
      strip_html | strip_newlines | jsonify }},
    "url": {{ doc.url | absolute_url | jsonify }}
  }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor %}
]
