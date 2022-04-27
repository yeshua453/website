---
id: introduction
title: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What is Flet

Flet is a framework that allows building interactive multi-user web, desktop and mobile applications in your favorite language without prior experience in frontend development.

You build a UI for your program with Flet [controls](/docs/controls) which are based on [Flutter](https://flutter.dev) by Google. Flet does not just "wrap" Flutter widgets, but adds its own "opinion" by combining smaller widgets, hiding complexities, implementing UI best-practices, applying reasonable defaults - all to ensure your apps look cool and professional without much efforts.

## Flet app example

At the moment you can write Flet apps in Python and other languages will be added soon.

Here is a sample "Counter" app written in Python:

```python title="counter.py"
import flet
from flet import IconButton, Page, Row, TextField, icons

def main(page: Page):
    page.title = "Flet counter example"
    page.vertical_alignment = "center"

    txt_number = TextField(value="0", text_align="right", width=100)

    def minus_click(e):
        txt_number.value = int(txt_number.value) - 1
        page.update()

    def plus_click(e):
        txt_number.value = int(txt_number.value) + 1
        page.update()

    page.add(
        Row(
            [
                IconButton(icons.REMOVE, on_click=minus_click),
                txt_number,
                IconButton(icons.ADD, on_click=plus_click),
            ],
            alignment="center",
        )
    )

flet.app(target=main)
```

To run the app install `flet` module:

```bash
pip install flet
```

and run the program:

```bash
python counter.py
```

## Tutorials

Want to learn how to build a real app? Jump to a getting started guide for your language:

* [Python](/docs/getting-started/python)