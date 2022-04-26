---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is Flet

Flet is a framework that allows building interactive multi-user cross-platform applications in your favorite language without prior experience with frontend development. [Python](/docs/tutorials/python) is already supported and other languages are going to be added soon.

You build a UI for your program with Flet [controls](/docs/controls) which are based on [Flutter](https://flutter.dev) by Google. Flet does not just "wrap" Flutter widgets, but adds its own "opinion" by combining smaller widgets, hiding complexities, implementing UI best-practices, applying reasonable defaults - all to ensure your apps look cool and professional without much efforts.

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