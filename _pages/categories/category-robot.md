---
title: "robot_title"
layout: archive
permalink: categories/robot/
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.Robot %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}