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

## Properties

| Name          | Type    | Default | Description |
| ------------- | ------- | ------- | ----------- |
| `property1`   | string  |         | Description. |

## Events

| Name      | Description |
| --------- | ----------- |
| `event_name` | Fires when ... |

## Child controls

* Something
