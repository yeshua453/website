---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is Flet

Flet is a rich user interface (UI) framework for scripts and programs written in any language and a service for securely sharing your application UI. [Python](/docs/tutorials/python) is already supported and other languages are going to be added soon.

Flet renders web UI, so you can easily build web apps with your favorite language. Knowledge of HTML/CSS/JavaScript is not required as you build UI with [controls](/docs/controls). Flet controls are built with [Fluent UI React](https://developer.microsoft.com/en-us/fluentui#/controls/web) to ensure your programs look cool and professional.

## Hello, world!

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

Install `flet` module:

```bash
pip install flet
```

Create `hello.py` with the following contents:

```python title="hello.py"
import flet
from flet import Text

p = flet.page()
p.add(Text("Hello, world!"))
```

Run `hello.py` with Python 3 and in a new browser window you'll get:

<div style={{textAlign: 'center'}}><img src="/img/docs/quickstart-hello-world.png" /></div>

  </TabItem>
</Tabs>

## Tutorials

Want to learn how to build the real app? Jump to a tutorial for your language:

* [Python](/docs/tutorials/python)