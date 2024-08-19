---
sidebar_label: autofill_group
title: autofill_group
---

## AutofillGroup Objects

```python
class AutofillGroup(Control)
```

This control is used to group autofill controls together.

-----

Online docs: https://flet.dev/docs/controls/autofillgroup

#### content

```python
@property
def content() -> Control
```

The content control of this group.

Value is of type `Control`.

#### dispose\_action

```python
@property
def dispose_action() -> Optional[AutofillGroupDisposeAction]
```

The action to be run when this `AutofillGroup` is the topmost `AutofillGroup` and it&#x27;s being disposed, in order to clean
up the current autofill context.

Value is of type [`AutofillGroupDisposeAction`](/docs/reference/types/autofillgroupdisposeaction) and defaults
to `AutofillGroupDisposeAction.COMMIT`.

