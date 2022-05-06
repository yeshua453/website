---
title: ProgressBar
sidebar_label: ProgressBar
slug: progressbar
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A material design linear progress indicator, also known as a progress bar. A control that shows progress along a line.

There are two kinds of linear progress indicators:

* *Determinate*. Determinate progress indicators have a specific value at each point in time, and the value should increase monotonically from `0.0` to `1.0`, at which time the indicator is complete. To create a determinate progress indicator, use a non-null value between `0.0` and `1.0`.
* *Indeterminate*. Indeterminate progress indicators do not have a specific value at each point in time and instead indicate that progress is being made without indicating how much progress remains. To create an indeterminate progress indicator, use a null value.

### Basic progress

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import time

import flet
from flet import Progress, Text

with flet.page("basic-progress") as page:

    prog1 = Progress("Copying file1.txt to file2.txt", value=0, width="50%")
    page.add(Text("Default Progress", size="xLarge"), prog1)

    for i in range(0, 101):
        prog1.value = i
        prog1.update()
        time.sleep(0.005)

    prog2 = Progress("Provisioning your account", value=0, width="50%")
    page.add(prog2)

    prog2.description = "Preparing environment..."
    prog2.value = 0
    prog2.update()
    time.sleep(2)

    prog2.description = "Collecting information..."
    prog2.value = 20
    prog2.update()
    time.sleep(2)

    prog2.description = "Creatring database entities..."
    prog2.value = 40
    prog2.update()
    time.sleep(2)

    prog2.description = "Verifying the data..."
    prog2.value = 60
    prog2.update()
    time.sleep(2)

    prog2.description = "Finishing the process, almost done..."
    prog2.value = 80
    prog2.update()
    time.sleep(2)

    prog2.description = "Your account has been created!"
    prog2.value = 100
    prog2.update()
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/progress/basic-progress.gif" width="75%" />

### Indeterminate progress

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Progress, Text

with flet.page("basic-progress") as page:

    page.add(
        Text("Indeterminate Progress", size='xLarge'),
        Progress("Operation progress", description="Doing something indefinite...", width='50%')
    )
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/progress/indeterminate-progress.gif" width="75%" />

## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | number  |         | The value of this progress indicator. A value of 0.0 means no progress and 1.0 means that progress is complete. The value will be clamped to be in the range 0.0-1.0. If null, this progress indicator is indeterminate, which means the indicator displays a predetermined animation that does not indicate how much actual progress is being made. |
| `bar_height`   | number  | 4       | The minimum height of the line used to draw the linear indicator. |
| `color`        | string  |         | The progress indicator's color. |
| `bgcolor`      | string  |         | Color of the track being filled by the linear indicator. |
| `tooltip`      | string  |         | The text displayed when hovering the mouse over the control. |
