---
sidebar_label: deprecated
title: utils.deprecated
---

#### deprecated

```python
def deprecated(reason: str, version: str, delete_version: str, is_method=True)
```

A decorator function that marks a function/method/property/event as deprecated.

**Arguments**:

- `reason`: The reason for deprecation.
- `version`: The version from which the function was deprecated.
- `delete_version`: The version in which the function will be removed from the API.
- `is_method`: if the deprecated item is a method (True) or property/function/event (False)

