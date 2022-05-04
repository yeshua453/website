---
title: TextButton
sidebar_label: TextButton
slug: textbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use text buttons on toolbars [link TBD], in dialogs [link TBD], or inline with other content.

## Examples

### Basic text buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, TextButton


def main(page: Page):
    page.title = "Basic text buttons"
    page.add(
        TextButton(text="Text button"),
        TextButton("Disabled button", disabled=True),
    )


flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/basic-text-buttons.png" width="40%" />

### Text buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, TextButton


def main(page: Page):
    page.title = "Text buttons with icons"
    page.add(
        TextButton("Button with icon", icon="chair_outlined"),
        TextButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/text-buttons-with-icons.png" width="40%" />

### Text button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Page, Text, TextButton


def main(page: Page):
    page.title = "Text button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = TextButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = Text()

    page.add(b, t)

flet.app(target=main)

```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/text-button/text-button-with-click-event.gif" width="50%" />

### Text button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Column, Container, Icon, Page, Row, Text, TextButton, icons, padding


def main(page: Page):
    page.title = "Text buttons with custom content"
    page.add(
        TextButton(
            width=150,
            content=Row(
                [
                    Icon(name=icons.FAVORITE, color="pink"),
                    Icon(name=icons.AUDIOTRACK, color="green"),
                    Icon(name=icons.BEACH_ACCESS, color="blue"),
                ],
                alignment="spaceAround",
            ),
        ),
        TextButton(
            content=Container(
                content=Column(
                    [
                        Text(value="Compound button", size=20),
                        Text(value="This is secondary text"),
                    ],
                    alignment="center",
                    spacing=5,
                ),
                padding=padding.all(10),
            ),
        ),
    )


flet.app(target=main)

```

  </TabItem>
  
</Tabs>

<img src="/img/docs/controls/text-button/text-buttons-with-custom-content.png" width="40%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `text`         | string |         | The text displayed on a button. |
| `icon`         | string |         | Icon shown in the button. |
| `iconColor`    | string |         | Icon color. |
| `tooltip`      | string |         | The text displayed when hovering the mouse over the button |
| `content`      | Control|         | a Control representing custom button content. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |