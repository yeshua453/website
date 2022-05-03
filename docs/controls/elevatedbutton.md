---
title: ElevatedButton
sidebar_label: ElevatedButton
slug: elevatedbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use elevated buttons to add dimension to otherwise mostly flat layouts, e.g. in long busy lists of content, or in wide spaces. Avoid using elevated buttons on already-elevated content such as dialogs or cards.

## Examples

### Basic elevated buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Page

def main(page: Page):
    page.title = "Basic elevated buttons"
    page.add(
        ElevatedButton(text="Elevated button"),
        ElevatedButton("Disabled button", disabled=True),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/basic-elevated-buttons.png" width="40%" />

### Elevated buttons with icons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Icon, Page, Row


def main(page: Page):
    page.title = "Elevated buttons with icons"
    page.add(
        ElevatedButton("Button with icon", icon="chair_outlined"),
        ElevatedButton(
            "Button with colorful icon",
            icon="park_rounded",
            icon_color="green400",
        ),
    )

flet.app(target=main)
```
  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-icons.png" width="50%" />

### Elevated button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import ElevatedButton, Page, Text

def main(page: Page):
    page.title = "Elevated button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = ElevatedButton("Button with 'click' event", on_click=button_clicked, data=0)
    t = Text()

    page.add(b, t)

flet.app(target=main)
```

  </TabItem>

</Tabs>

<img src="/img/docs/controls/elevated-button/elevated-button-with-click-event.gif" width="50%" />

### Elevated button with custom content 

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import (
    Column,
    Container,
    ElevatedButton,
    Icon,
    Page,
    Row,
    Text,
    icons,
    padding,
)


def main(page: Page):
    page.title = "Elevated buttons with custom content"
    page.add(
        ElevatedButton(
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
        ElevatedButton(
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

<img src="/img/docs/controls/elevated-button/elevated-buttons-with-custom-content.png" width="40%" />




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
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |