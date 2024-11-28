---
layout: page
color: '#0c6a99'
logo: Blog
urlprefix: .
---
<style>
.peach { background: #FBE5D6; }
.blue { background: #B4C7E7; }
</style>


<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{post.date|date: "%m/%d/%y"}} {{ post.title }}</a>
      <!--<p>{{ post.excerpt }}</p>-->
    </li>
  {% endfor %}
</ul>

Older posts can be found on the [lab's Medium page](https://medium.com/thewulab), which was maintained until 2023.

