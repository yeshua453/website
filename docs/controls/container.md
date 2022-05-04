---
title: Container
sidebar_label: Container
slug: container
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Container allows to decorate a control with background color and border and position it with padding, margin and alignment. 

## Examples

### Containers with background color

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, ElevatedButton, OutlinedButton, Page, colors


def main(page: Page):
    page.title = "Containers with background color"

    c1 = Container(
        content=ElevatedButton("Elevated Button in Container"),
        bgcolor=colors.YELLOW,
        padding=5,
    )

    c2 = Container(
        content=ElevatedButton(
            "Elevated Button with opacity=0.5 in Container", opacity=0.5
        ),
        bgcolor=colors.YELLOW,
        padding=5,
    )

    c3 = Container(
        content=OutlinedButton("Outlined Button in Container"),
        bgcolor=colors.YELLOW,
        padding=5,
    )
    page.add(c1, c2, c3)


flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/container/containers-background-color.png" width="40%" />

### Containers with different alignments

Control can be aligned within a container according to the diagram below:

<img src="/img/docs/controls/container/container-alignments-diagram.png" width="40%" />

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Container, ElevatedButton, Page, Row, alignment, colors


def main(page: Page):
    page.title = "Containers with different alignments"

    c1 = Container(
        content=ElevatedButton("Center"),
        bgcolor=colors.AMBER,
        padding=15,
        alignment=alignment.center,
        width=150,
        height=150,
    )

    c2 = Container(
        content=ElevatedButton("Top left"),
        bgcolor=colors.AMBER,
        padding=15,
        alignment=alignment.top_left,
        width=150,
        height=150,
    )

    c3 = Container(
        content=ElevatedButton("-0.5, -0.5"),
        bgcolor=colors.AMBER,
        padding=15,
        alignment=alignment.Alignment(-0.5, -0.5),
        width=150,
        height=150,
    )

    r = Row([c1, c2, c3])
    page.add(r)


flet.app(target=main)
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/container/containers-alignments.png" width="60%" />

## Properties


