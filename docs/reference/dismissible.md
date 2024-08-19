---
sidebar_label: dismissible
title: dismissible
---

## Dismissible Objects

```python
class Dismissible(ConstrainedControl, AdaptiveControl)
```

A control that can be dismissed by dragging in the indicated `dismiss_direction`. When dragged or flung in the
specified `dismiss_direction`, it&#x27;s content smoothly slides out of view.

After completing the sliding animation, if a `resize_duration` is provided, this control further animates its
height (or width, depending on what is perpendicular to the `dismiss_direction`), gradually reducing it to zero
over the specified `resize_duration`.

-------

Online Docs: https://flet.dev/docs/controls/dismissible

