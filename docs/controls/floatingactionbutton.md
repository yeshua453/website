---
title: FloatingActionButton
sidebar_label: FloatingActionButton
slug: floatingactionbutton
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A material design floating action button. A floating action button is a circular icon button that hovers over content to promote a primary action in the application.
Floating action button is usually set to `page.floating_action_button`, but can also be added as a regular control at any place on a page.

## Examples

### Basic FAB

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import FloatingActionButton, Page

def main(page: Page):
    # TBD
    pass

flet.app(target=main)
```
  </TabItem>

</Tabs>


## Properties

| Name           | Type   | Default | Description |
| -------------- | ------ | ------- | ----------- |
| `text`         | string |         | The text displayed on a button. |
| `icon`         | string |         | Icon shown in the button. |
| `bgColor`      | string |         | Button background color. |
| `tooltip`      | string |         | The text displayed when hovering the mouse over the button. |
| `autofocus`    | bool   | False   | True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus. |
| `content`      | Control|         | a Control representing custom button content. |

## Events

| Name      | Description |
| --------- | ----------- |
| `click`   | Fires when a user clicks the button.  |