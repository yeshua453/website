---
title: IconButton
sidebar_label: IconButton
slug: iconbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink).

Icon buttons are commonly used in the toolbars [link TBD], but they can be used in many other places as well.

## Examples

### Icon buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import IconButton, Page, Row, icons


def main(page: Page):
    page.title = "Icon buttons"
    page.add(
        Row(
            [
                IconButton(
                    icon=icons.PAUSE_CIRCLE_FILLED_ROUNDED,
                    icon_color="blue400",
                    icon_size=20,
                    tooltip="Pause record",
                ),
                IconButton(
                    icon=icons.DELETE_FOREVER_ROUNDED,
                    icon_color="pink600",
                    icon_size=40,
                    tooltip="Delete record",
                ),
            ]
        ),
    )


flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-buttons.gif" width="50%" />

### Icon button with `click` event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import IconButton, Page, Text, icons


def main(page: Page):
    page.title = "Icon button with 'click' event"

    def button_clicked(e):
        b.data += 1
        t.value = f"Button clicked {b.data} time(s)"
        page.update()

    b = IconButton(
        icon=icons.PLAY_CIRCLE_FILL_OUTLINED, on_click=button_clicked, data=0
    )
    t = Text()

    page.add(b, t)

flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/icon-button/icon-button-with-click-event.gif" width="50%" />

## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `icon`         | string |         | Icon shown in the button. |
| `iconColor`    | string |         | Icon color. |
| `iconSize`     | float  |         | Icon size in virtual pixels. |
| `tooltip`      | string |         | The text displayed when hovering the mouse over the button |
| `content`      | Control|         | a Control representing custom button content. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |
| `focus`   | Fires when the control has received focus. |
| `blur`    | Fires when the control has lost focus. |
