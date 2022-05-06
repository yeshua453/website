---
title: ProgressRing
sidebar_label: ProgressRing
slug: progressring
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A material design circular progress indicator, which spins to indicate that the application is busy. A control that shows progress along a circle.

There are two kinds of circular progress indicators:

* *Determinate*. Determinate progress indicators have a specific value at each point in time, and the value should increase monotonically from `0.0` to `1.0`, at which time the indicator is complete. To create a determinate progress indicator, use a non-null value between `0.0` and `1.0`.
* *Indeterminate*. Indeterminate progress indicators do not have a specific value at each point in time and instead indicate that progress is being made without indicating how much progress remains. To create an indeterminate progress indicator, use a null value.

## Examples

### Spinner sizes

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import flet
from flet import Spinner, Text

with flet.page("spinner-size") as page:

    page.add(
        Text("Spinner sizes", size="xLarge"),
        Spinner("Extra small spinner", size="xSmall", label_position="left"),
        Spinner("Small spinner", size="small", label_position="left"),
        Spinner("Medium spinner", size="medium", label_position="left"),
        Spinner("Large spinner", size="large", label_position="left"),
    )
```
  </TabItem>
</Tabs>

<img src="/img/docs/controls/spinner/spinner-size.gif" width="25%" />


## Properties

| Name           | Type    | Default | Description |
| -------------- | ------- | ------- | ----------- |
| `value`        | number  |         | The value of this progress indicator. A value of 0.0 means no progress and 1.0 means that progress is complete. The value will be clamped to be in the range 0.0-1.0. If null, this progress indicator is indeterminate, which means the indicator displays a predetermined animation that does not indicate how much actual progress is being made. |
| `stroke_width` | number  | `medium`| The width of the line used to draw the circle. |
| `color`        | string  |         | The progress indicator's color. |
| `bgcolor`      | string  |         | Color of the circular track being filled by the circular indicator. |
| `tooltip`      | string  |         | The text displayed when hovering the mouse over the control. |